// src/features/donations/components/DonationForm.tsx
//
// Formulario reutilizado por AcademyDonationPanel y GeneralDonationPanel.
// NO maneja datos de tarjeta — delega a la pasarela (MercadoPago / PayPal) via redirect.
//
// Flujo de pago:
//   MercadoPago → window.location.href = mp link  (tarjetas AR + Pix BR + LATAM)
//   PayPal      → window.location.href = paypal link  (internacional)
//   Banco       → scroll suave a BankTransferInfo

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AmountSelector } from './AmountSelector';
import { FrequencySelector, type DonationFrequency } from './FrequencySelector';
import { PaymentMethodSelector, type PaymentMethod } from './PaymentMethodSelector';

// Comisiones aproximadas por método — usadas solo para el checkbox "cubrir comisión"
const FEE_RATES: Record<Exclude<PaymentMethod, 'bank'>, number> = {
  mercadopago: 0.063,  // 6.3% tarjeta de crédito AR (peor caso)
  paypal: 0.042,       // 3.9% + fee fijo, aprox. 4.2% para montos medianos
};

interface Props {
  category: 'academy' | 'solidarity';
  accentColor?: 'yellow' | 'amber';
  paymentLinks: {
    mp: string;
    paypal_once: string;
    paypal_monthly: string;
  };
}

export const DonationForm = ({
  category,
  accentColor = 'yellow',
  paymentLinks,
}: Props) => {
  const { t } = useTranslation('donations');

  const [amount, setAmount]               = useState<number | null>(null);
  const [frequency, setFrequency]         = useState<DonationFrequency>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mercadopago');
  const [coverFee, setCoverFee]           = useState(false);
  const [message, setMessage]             = useState('');
  const [submitting, setSubmitting]       = useState(false);

  // Tasa del método actual (solo relevante para métodos con comisión)
  const feeRate =
    paymentMethod !== 'bank' ? FEE_RATES[paymentMethod] : 0;

  const totalAmount = amount
    ? coverFee
      ? Math.round(amount * (1 + feeRate))
      : amount
    : null;

  const feeAmount = amount ? Math.round(amount * feeRate) : 0;

  const formatARS = (n: number) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(n);

  const handleSubmit = () => {
    if (!amount || !paymentMethod) return;
    setSubmitting(true);

    if (paymentMethod === 'mercadopago') {
      window.location.href = paymentLinks.mp;
    } else if (paymentMethod === 'paypal') {
      // PayPal: mensual y única vez tienen links distintos
      const link =
        frequency === 'monthly'
          ? paymentLinks.paypal_monthly
          : paymentLinks.paypal_once;
      window.location.href = link;
    } else if (paymentMethod === 'bank') {
      const el = document.getElementById('bank-transfer-info');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSubmitting(false);
    }
  };

  const isValid  = amount !== null && amount > 0;
  const btnBase  =
    accentColor === 'yellow'
      ? 'bg-brand-accent hover:bg-brand-amber text-dark'
      : 'bg-brand-amber hover:bg-brand-accent text-dark';

  // Etiqueta del botón principal
  const btnLabel = () => {
    if (submitting) return null;
    if (paymentMethod === 'bank') return t('form.seeBankInfo', 'Ver instrucciones de transferencia ↓');
    if (paymentMethod === 'paypal') return `🅿️ ${t('form.donatePaypal', 'Donar con PayPal')}${totalAmount ? ` — ${formatARS(totalAmount)}` : ''}`;
    return `💛 ${t('form.donate', 'Donar ahora')}${totalAmount ? ` — ${formatARS(totalAmount)}` : ''}`;
  };

  return (
    <div className="space-y-6">

      {/* Monto */}
      <AmountSelector value={amount} onChange={setAmount} />

      {/* Frecuencia
          Nota: MercadoPago no soporta suscripciones sin backend.
          Si el usuario elige Mensual + MP, se le informa que
          deberá renovar manualmente cada mes. */}
      <FrequencySelector value={frequency} onChange={setFrequency} />

      {/* Aviso: MP no soporta mensual automático sin backend */}
      {frequency === 'monthly' && paymentMethod === 'mercadopago' && (
        <div className="rounded-xl border border-brand-amber/30 bg-brand-amber/5 px-4 py-3">
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            ℹ️{' '}
            {t(
              'form.mpMonthlyNote',
              'MercadoPago procesará tu donación como pago único. Para hacerla mensual, podés repetirla cada mes o elegir PayPal, que sí soporta donaciones recurrentes automáticas.',
            )}
          </p>
        </div>
      )}

      {/* Método de pago */}
      <PaymentMethodSelector value={paymentMethod} onChange={setPaymentMethod} />

      {/* Cobertura de comisión — solo si hay monto y no es transferencia bancaria */}
      {isValid && paymentMethod !== 'bank' && (
        <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-dark/40">
          <input
            type="checkbox"
            checked={coverFee}
            onChange={(e) => setCoverFee(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-accent"
            aria-describedby="fee-desc"
          />
          <div>
            <p className="text-sm font-semibold text-dark dark:text-white">
              {t('form.coverFee', 'Cubrir el costo de procesamiento')}
            </p>
            <p
              id="fee-desc"
              className="mt-0.5 text-xs leading-5 text-dark-soft dark:text-gray-mid"
            >
              {t('form.coverFeeHint', {
                fee: formatARS(feeAmount),
                original: formatARS(amount!),
                defaultValue: `Al activar esta opción, tu donación aumenta ~{{fee}} para cubrir la comisión de la plataforma, y el 100% de {{original}} llega a Valores Sinaí.`,
              })}
            </p>
          </div>
        </label>
      )}

      {/* Mensaje opcional */}
      <div>
        <label
          htmlFor={`message-${category}`}
          className="mb-1.5 block text-sm font-semibold text-dark dark:text-white"
        >
          {t('form.messageLabel', 'Mensaje o dedicatoria (opcional)')}
        </label>
        <textarea
          id={`message-${category}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          maxLength={300}
          placeholder={t('form.messagePlaceholder', 'Contanos por qué decidiste donar...')}
          className="
            w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3
            text-sm text-dark placeholder-dark-soft/40
            transition-colors duration-200
            focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
            dark:border-white/10 dark:bg-dark-soft dark:text-white dark:placeholder-gray-mid/40
          "
        />
        <p className="mt-1 text-right text-xs text-dark-soft dark:text-gray-mid">
          {message.length}/300
        </p>
      </div>

      {/* Resumen + CTA */}
      <div className="rounded-2xl bg-surface-cream p-5 dark:bg-dark">

        {/* Resumen de monto */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-dark dark:text-white">
            {t('form.summary', 'Resumen')}
          </p>
          {totalAmount && (
            <p className="text-lg font-bold text-brand-accent">
              {formatARS(totalAmount)}
              {frequency === 'monthly' && paymentMethod !== 'mercadopago' && (
                <span className="ml-1 text-xs font-normal text-dark-soft dark:text-gray-mid">
                  /mes
                </span>
              )}
            </p>
          )}
        </div>

        {!isValid && (
          <p className="mb-3 text-xs text-dark-soft dark:text-gray-mid">
            {t('form.selectAmount', 'Seleccioná un monto para continuar.')}
          </p>
        )}

        {/* Botón principal */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid || submitting}
          className={`
            inline-flex w-full items-center justify-center gap-2
            rounded-xl px-6 py-3.5 text-sm font-bold
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            disabled:cursor-not-allowed disabled:opacity-50
            ${btnBase}
          `}
        >
          {submitting ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              {t('form.processing', 'Procesando...')}
            </>
          ) : (
            btnLabel()
          )}
        </button>

        {/* Nota de seguridad */}
        <p className="mt-3 text-center text-xs text-dark-soft dark:text-gray-mid">
          🔒{' '}
          {t(
            'form.securityNote',
            'Serás redirigido a la plataforma de pago segura. Valores Sinaí no almacena datos de tu tarjeta.',
          )}
        </p>
      </div>
    </div>
  );
};