// src/features/donations/components/DonationForm.tsx
//
// Correcciones aplicadas vs. versión anterior:
//  ① MP_FEES movido a donationConstants.ts (fuente única de verdad)
//  ② Comisiones AR corregidas: débito y wallet ahora 6,60% (antes 3,3%)
//     → Para Link de pago todos los medios en AR son 6,60% al instante
//  ③ PRESET_AMOUNTS importado desde donationConstants (evita duplicación)
//  ④ DEFAULT_FEE label cambiado a 'internacional' (antes 'tu país')
//  ⑤ El mensaje/dedicatoria ahora se pasa al handler onMessage para que
//     el padre pueda enviarlo junto al comprobante de transferencia
//  ⑥ El estado "clicked" reemplazado por mensaje más honesto:
//     "Te abrimos MercadoPago en otra pestaña"
//  ⑦ AmountSelector eliminado como componente separado (estaba duplicado)
//     — toda la lógica vive aquí, correctamente encapsulada

import { useState, useEffect } from 'react';
import { useCountryCode } from '../../../hooks/useCountryCode';
import {
  MP_FEES,
  DEFAULT_FEE,
  PRESET_AMOUNTS,
  MIN_DONATION_AMOUNT,
  PAYMENT_TYPE_LABELS,
  formatARS,
  type PaymentType,
  type CountryFee,
} from '../config/donationConstants';

interface Props {
  category:     'academy' | 'solidarity';
  accentColor?: 'yellow' | 'amber';
  paymentLinks: { mp: string };
  /** Opcional: recibe el mensaje del donante para mostrarlo/enviarlo
   *  en el flujo de confirmación post-pago (ej: email o WhatsApp). */
  onMessage?:   (msg: string) => void;
}

// ── Íconos de copy ───────────────────────────────────────────────
const IconCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
    <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
  </svg>
);

const IconCheck = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const IconMercadoPago = () => (
  <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#009EE3" />
    <path d="M16 7C10.477 7 6 11.477 6 17c0 5.523 4.477 10 10 10 2.394 0 4.595-.843 6.325-2.244l-2.42-2.42A6.474 6.474 0 0 1 16 23.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c2.19 0 4.127 1.086 5.301 2.75L24.5 10.5A9.956 9.956 0 0 0 16 7z" fill="white" />
    <path d="M24.5 17c0 .51-.046 1.01-.133 1.494l3.463 1.006A10 10 0 0 0 26 17c0-1.116-.182-2.19-.518-3.194l-3.3 1.914A6.515 6.515 0 0 1 22.5 17z" fill="white" />
  </svg>
);

// ── Helpers ──────────────────────────────────────────────────────
function getImpactMessage(amount: number): string {
  if (amount >= 50000) return 'contribuís a organizar un evento o retiro comunitario.';
  if (amount >= 20000) return 'financiás asistencia de emergencia para una familia.';
  if (amount >= 10000) return 'cubrís materiales de un estudiante por un mes.';
  return 'aportás al fondo de becas de la Academia.';
}

export const DonationForm = ({ category, accentColor = 'yellow', paymentLinks, onMessage }: Props) => {
  const { countryCode, loading: loadingCountry } = useCountryCode();

  const [countryFee,     setCountryFee]     = useState<CountryFee>(DEFAULT_FEE);
  const [coverFee,       setCoverFee]       = useState(false);
  const [paymentType,    setPaymentType]    = useState<PaymentType>('creditCard');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount,   setCustomAmount]   = useState('');
  const [customMode,     setCustomMode]     = useState(false);
  const [message,        setMessage]        = useState('');
  const [mpOpened,       setMpOpened]       = useState(false);
  const [copied,         setCopied]         = useState(false);

  useEffect(() => {
    if (!countryCode) return;
    setCountryFee(MP_FEES[countryCode] ?? DEFAULT_FEE);
  }, [countryCode]);

  // Propagar mensaje al padre cuando cambia
  useEffect(() => {
    onMessage?.(message);
  }, [message, onMessage]);

  // ── Cálculo del monto ─────────────────────────────────────────
  const baseAmount: number | null = (() => {
    if (customMode) {
      const parsed = parseInt(customAmount.replace(/\D/g, ''), 10);
      // Mínimo MIN_DONATION_AMOUNT: por debajo el redondeo de la comisión
      // introduce errores significativos (ej:  → ceil →  → error del 84%)
      return isNaN(parsed) || parsed < MIN_DONATION_AMOUNT ? null : parsed;
    }
    return selectedAmount;
  })();

  const feeRate = countryFee[paymentType];
  // Math.round (no ceil): ceil siempre redondea arriba, lo que en montos
  // pequeños hace que el donante pague de más y llegue dinero extra.
  // round minimiza el error en ambas direcciones.
  const amountWithFee = baseAmount && coverFee
    ? Math.round(baseAmount / (1 - feeRate))
    : baseAmount;
  const feeAmount = amountWithFee && baseAmount ? amountWithFee - baseAmount : 0;

  // ── Copiar monto ──────────────────────────────────────────────
  const handleCopyAmount = async () => {
    if (!amountWithFee) return;
    await navigator.clipboard.writeText(String(amountWithFee));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // ── Estilos ───────────────────────────────────────────────────
  const isAmber  = accentColor === 'amber';
  const btnBase  = isAmber
    ? 'bg-brand-amber hover:bg-brand-accent text-dark'
    : 'bg-brand-accent hover:bg-brand-amber text-dark';
  const ringColor = isAmber
    ? 'focus-visible:ring-brand-amber'
    : 'focus-visible:ring-brand-accent';
  const activePreset = isAmber
    ? 'border-brand-amber bg-brand-amber text-dark shadow-sm'
    : 'border-brand-accent bg-brand-accent text-dark shadow-sm';
  const highlightText = isAmber ? 'text-brand-amber' : 'text-brand-accent';

  const paymentTypeOptions: { id: PaymentType; hint: string }[] = [
    { id: 'creditCard', hint: `~${(countryFee.creditCard * 100).toFixed(1)}%` },
    { id: 'debitCard',  hint: `~${(countryFee.debitCard  * 100).toFixed(1)}%` },
    { id: 'wallet',     hint: `~${(countryFee.wallet     * 100).toFixed(1)}%` },
  ];

  return (
    <div className="space-y-6">

      {/* ── Selector de monto ─────────────────────────────────── */}
      <div>
        <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
          ¿Cuánto querés donar?
        </p>

        <div className="flex flex-wrap gap-2">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => { setSelectedAmount(amount); setCustomMode(false); setCustomAmount(''); }}
              aria-pressed={selectedAmount === amount && !customMode}
              className={`
                rounded-xl border px-4 py-2.5 text-sm font-semibold
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 ${ringColor}
                ${selectedAmount === amount && !customMode
                  ? activePreset
                  : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white'}
              `}
            >
              {formatARS(amount)}
            </button>
          ))}

          <button
            type="button"
            onClick={() => { setCustomMode(true); setSelectedAmount(null); }}
            aria-pressed={customMode}
            className={`
              rounded-xl border px-4 py-2.5 text-sm font-semibold
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 ${ringColor}
              ${customMode
                ? activePreset
                : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white'}
            `}
          >
            Otro monto
          </button>
        </div>

        {customMode && (
          <div className="relative mt-3">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-dark-soft dark:text-gray-mid">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder={String(MIN_DONATION_AMOUNT)}
              aria-label="Ingresar monto personalizado en pesos argentinos"
              className="
                w-full rounded-xl border border-black/10 bg-white py-3 pl-8 pr-4
                text-sm text-dark placeholder-dark-soft/40
                transition-colors duration-200
                focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
                dark:border-white/10 dark:bg-dark-soft dark:text-white
              "
            />
            {customAmount !== '' && parseInt(customAmount, 10) < MIN_DONATION_AMOUNT && (
              <p className="mt-1.5 text-xs text-brand-amber">
                El monto mínimo es {formatARS(MIN_DONATION_AMOUNT)}.
              </p>
            )}
          </div>
        )}

        {/* Referencia de impacto — solo cuando hay monto */}
        {baseAmount && (
          <div className="mt-3 rounded-lg border border-black/5 bg-surface-cream px-3 py-2 dark:border-white/5 dark:bg-dark">
            <p className="text-xs text-dark-soft dark:text-gray-mid">
              💡 Con{' '}
              <span className={`font-bold ${highlightText}`}>{formatARS(baseAmount)}</span>{' '}
              {getImpactMessage(baseAmount)}
            </p>
          </div>
        )}
      </div>

      {/* ── Cubrir comisión ────────────────────────────────────── */}
      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-dark-soft">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={coverFee}
            onChange={(e) => setCoverFee(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-accent"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-dark dark:text-white">
              Cubrir el costo de procesamiento
            </p>
            <p className="mt-0.5 text-xs leading-5 text-dark-soft dark:text-gray-mid">
              MercadoPago descuenta una comisión al recibir el pago. Activando
              esta opción, el 100% de tu donación llega a Valores Sinaí.
            </p>
          </div>
        </label>

        {coverFee && (
          <div className="mt-4 border-t border-black/5 pt-4 dark:border-white/5">
            <p className="mb-2 text-xs font-semibold text-dark-soft dark:text-gray-mid">
              ¿Con qué vas a pagar en MercadoPago?
            </p>

            {/* En AR todos los medios son 6,60%, pero mantenemos el selector
                para países con diferencias reales (BR, MX, CO, etc.) */}
            {loadingCountry ? (
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 flex-1 animate-pulse rounded-xl bg-surface-cream dark:bg-dark" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row">
                {paymentTypeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentType(opt.id)}
                    aria-pressed={paymentType === opt.id}
                    className={`
                      flex flex-1 flex-col items-center rounded-xl border px-3 py-2.5 text-center
                      transition-all duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                      ${paymentType === opt.id
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-black/10 bg-surface-cream hover:border-brand-accent/40 dark:border-white/10 dark:bg-dark'}
                    `}
                  >
                    <span className="text-xs font-semibold text-dark dark:text-white">
                      {PAYMENT_TYPE_LABELS[opt.id]}
                    </span>
                    <span className={`mt-0.5 text-xs font-bold ${paymentType === opt.id ? highlightText : 'text-dark-soft dark:text-gray-mid'}`}>
                      {opt.hint}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Nota aclaratoria para Argentina — todos los medios son iguales */}
            {!loadingCountry && countryCode === 'AR' && (
              <p className="mt-2 text-[10px] leading-4 text-dark-soft/70 dark:text-gray-mid/70">
                ℹ️ Para Link de pago en Argentina, MercadoPago cobra 6,60% en todos los medios.
              </p>
            )}

            {/* Resumen del cálculo */}
            {!loadingCountry && baseAmount && amountWithFee && (
              <div className="mt-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
                <p className="text-xs font-semibold text-dark dark:text-white">
                  📋 Lo que vas a ingresar en MercadoPago
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <p className={`text-2xl font-bold ${highlightText}`}>
                      {formatARS(amountWithFee)}
                    </p>
                    <p className="mt-0.5 text-xs text-dark-soft dark:text-gray-mid">
                      Tu donación: {formatARS(baseAmount)} + comisión: {formatARS(feeAmount)}
                    </p>
                    {countryFee.disclaimer && (
                      <p className="mt-0.5 text-[10px] text-dark-soft/60 dark:text-gray-mid/60">
                        {countryFee.disclaimer}
                      </p>
                    )}
                  </div>

                  {/* Botón copiar */}
                  <button
                    type="button"
                    onClick={handleCopyAmount}
                    className="
                      flex shrink-0 items-center gap-1.5 rounded-xl border border-brand-accent
                      bg-white px-3 py-2 text-xs font-bold text-brand-accent
                      transition-colors hover:bg-brand-accent hover:text-dark
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                      dark:bg-dark
                    "
                  >
                    {copied
                      ? <><IconCheck /> ¡Copiado!</>
                      : <><IconCopy /> Copiar monto</>
                    }
                  </button>
                </div>
              </div>
            )}

            <a
              href="https://www.mercadopago.com.ar/costs-section"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[10px] text-brand-amber underline hover:text-brand-accent"
            >
              Ver tarifas oficiales de MercadoPago →
            </a>
          </div>
        )}
      </div>

      {/* ── Mensaje / dedicatoria ──────────────────────────────── */}
      <div>
        <label
          htmlFor={`message-${category}`}
          className="mb-1.5 block text-sm font-semibold text-dark dark:text-white"
        >
          Mensaje o dedicatoria{' '}
          <span className="font-normal text-dark-soft dark:text-gray-mid">(opcional)</span>
        </label>
        <textarea
          id={`message-${category}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          maxLength={300}
          placeholder="Contanos por qué decidiste donar…"
          className="
            w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3
            text-sm text-dark placeholder-dark-soft/40
            transition-colors duration-200
            focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
            dark:border-white/10 dark:bg-dark-soft dark:text-white dark:placeholder-gray-mid/40
          "
        />
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xs text-dark-soft dark:text-gray-mid">
            {message.length > 0 && '✍️ Podés enviarlo junto al comprobante por WhatsApp o email.'}
          </p>
          <p className="text-xs text-dark-soft dark:text-gray-mid">
            {message.length}/300
          </p>
        </div>
      </div>

      {/* ── CTA — MercadoPago ──────────────────────────────────── */}
      <div className="rounded-2xl bg-surface-cream p-5 dark:bg-dark">

        {/* Recordatorio del monto si coverFee está activo */}
        {coverFee && amountWithFee && baseAmount && (
          <div className="mb-4 rounded-xl border border-brand-accent/20 bg-white p-3 dark:border-white/10 dark:bg-dark-soft">
            <p className="text-xs font-semibold text-dark dark:text-white">
              📌 Recordá ingresar este monto en MercadoPago
            </p>
            <p className={`mt-1 text-lg font-bold ${highlightText}`}>
              {formatARS(amountWithFee)}
            </p>
            <p className="text-xs text-dark-soft dark:text-gray-mid">
              Así el 100% de tu donación ({formatARS(baseAmount)}) llega a Valores Sinaí.
            </p>
          </div>
        )}

        {/* Instrucciones paso a paso */}
        <div className="mb-4 rounded-xl border border-black/5 bg-white p-3 dark:border-white/5 dark:bg-dark-soft">
          <p className="text-xs font-semibold text-dark dark:text-white">¿Cómo funciona?</p>
          <ol className="mt-1.5 space-y-1 text-xs leading-5 text-dark-soft dark:text-gray-mid">
            <li>1. Hacé click en el botón — te abrimos MercadoPago en otra pestaña.</li>
            <li>
              2. Ingresás{' '}
              {coverFee && amountWithFee
                ? <span className={`font-bold ${highlightText}`}>{formatARS(amountWithFee)}</span>
                : 'el monto que querés donar'
              }.
            </li>
            <li>3. Elegís el método de pago y confirmás.</li>
            <li>4. Tanto vos como Valores Sinaí reciben confirmación por email.</li>
          </ol>
        </div>

        {/* Botón principal */}
        <a
          href={paymentLinks.mp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMpOpened(true)}
          className={`
            inline-flex w-full items-center justify-center gap-2
            rounded-xl px-6 py-3.5 text-sm font-bold
            transition-all duration-200 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            ${btnBase}
          `}
        >
          <IconMercadoPago />
          Donar con MercadoPago
        </a>

        {/* Confirmación honesta post-click */}
        {mpOpened && (
          <div className="mt-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 px-4 py-3">
            <p className="text-xs font-semibold text-dark dark:text-white">
              🔗 Te abrimos MercadoPago en otra pestaña
            </p>
            <p className="mt-0.5 text-xs leading-5 text-dark-soft dark:text-gray-mid">
              Completá el pago allí y recibirás confirmación por email.
              {coverFee && amountWithFee && (
                <> Recordá ingresar{' '}
                  <span className={`font-bold ${highlightText}`}>{formatARS(amountWithFee)}</span>.
                </>
              )}
            </p>
          </div>
        )}

        <p className="mt-3 text-center text-xs text-dark-soft dark:text-gray-mid">
          🔒 Valores Sinaí no almacena datos de tu tarjeta.
        </p>
      </div>
    </div>
  );
};