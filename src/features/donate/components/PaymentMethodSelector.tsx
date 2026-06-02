// src/features/donations/components/PaymentMethodSelector.tsx
//
// Métodos disponibles:
//   - MercadoPago  → Argentina + Brasil (Pix automático) + resto LATAM
//   - PayPal       → Internacional (USA, Europa, resto del mundo)
//   - Transferencia bancaria → Sin comisiones, 100% llega a la asociación
//
// Stripe fue removido: no opera en Argentina sin LLC en EE.UU.
// PayPal reemplaza a Stripe como opción internacional.
//
// Los links se configuran en src/features/donations/config/paymentLinks.ts

import { useTranslation } from 'react-i18next';

export type PaymentMethod = 'mercadopago' | 'paypal' | 'bank';

interface Props {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

// Ícono oficial de PayPal (wordmark simplificado en SVG)
const PayPalIcon = () => (
  <svg
    viewBox="0 0 80 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-auto"
    aria-hidden="true"
  >
    {/* P azul oscuro */}
    <path
      d="M7.5 0h5.8c2.6 0 4.3 1.3 3.9 4-.5 3.3-2.7 4.5-5.3 4.5H9.8L8.7 14H5.3L7.5 0z"
      fill="#003087"
    />
    <path
      d="M9.9 6.8h1.7c1.2 0 2-.4 2.2-1.6.2-1-.4-1.6-1.6-1.6H10.6L9.9 6.8z"
      fill="#003087"
    />
    {/* P celeste */}
    <path
      d="M18.2 3.2h5.8c2.6 0 4.3 1.3 3.9 4-.5 3.3-2.7 4.5-5.3 4.5h-2.1L19.4 17h-3.4l2.2-13.8z"
      fill="#009CDE"
    />
    <path
      d="M20.6 10h1.7c1.2 0 2-.4 2.2-1.6.2-1-.4-1.6-1.6-1.6h-1.6L20.6 10z"
      fill="#009CDE"
    />
    {/* "al" text */}
    <path
      d="M30.5 5.5c1.4 0 2.5.4 3 1.1l-.7 2.1c-.4-.6-1.1-.9-2-.9-.5 0-.9.1-1.2.4-.3.2-.5.5-.6.9h3.5l-.3 1.6h-3.4c0 .5.2.8.5 1 .3.2.8.3 1.4.3.8 0 1.6-.2 2.2-.7l-.6 2c-.7.4-1.6.6-2.6.6-1.2 0-2.2-.3-2.8-.9-.7-.6-1-1.4-.9-2.5.1-.9.4-1.7.9-2.3.5-.7 1.1-1.2 1.9-1.5.7-.1 1.4-.2 1.7-.2zM35.5 5.6h2.7l.2 5.8 2.9-5.8h2.7l-5 8.3h-2.9l-.6-8.3z"
      fill="#003087"
    />
  </svg>
);

// Ícono de MercadoPago (círculo azul MP)
const MercadoPagoIcon = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#009EE3" />
    <path
      d="M16 7C10.477 7 6 11.477 6 17c0 5.523 4.477 10 10 10 2.394 0 4.595-.843 6.325-2.244l-2.42-2.42A6.474 6.474 0 0 1 16 23.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c2.19 0 4.127 1.086 5.301 2.75L24.5 10.5A9.956 9.956 0 0 0 16 7z"
      fill="white"
    />
    <path
      d="M24.5 17c0 .51-.046 1.01-.133 1.494l3.463 1.006A10 10 0 0 0 26 17c0-1.116-.182-2.19-.518-3.194l-3.3 1.914A6.515 6.515 0 0 1 22.5 17z"
      fill="white"
    />
  </svg>
);

// Ícono de banco
const BankIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
    <path
      fillRule="evenodd"
      d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5Zm-3 .418v9.5h1.5v-9.5h-1.5Zm-3.75 0v9.5h1.5v-9.5h-1.5Zm-3.75 0v9.5h1.5v-9.5H9.75Zm-3.75 0v9.5H7.5v-9.5H6Z"
      clipRule="evenodd"
    />
  </svg>
);

const methods: {
  id: PaymentMethod;
  labelKey: string;
  hintKey: string;
  badgeKey?: string;   // badge opcional (ej: "Recomendado para AR")
  icon: React.ReactNode;
}[] = [
  {
    id: 'mercadopago',
    labelKey: 'payment.mercadopago',
    hintKey: 'payment.mercadopagoHint',
    badgeKey: 'payment.mercadopagoBadge',
    icon: <MercadoPagoIcon />,
  },
  {
    id: 'paypal',
    labelKey: 'payment.paypal',
    hintKey: 'payment.paypalHint',
    badgeKey: 'payment.paypalBadge',
    icon: <PayPalIcon />,
  },
  {
    id: 'bank',
    labelKey: 'payment.bank',
    hintKey: 'payment.bankHint',
    icon: <BankIcon />,
  },
];

export const PaymentMethodSelector = ({ value, onChange }: Props) => {
  const { t } = useTranslation('donations');

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
        {t('payment.label', 'Método de pago')}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {methods.map(({ id, labelKey, hintKey, badgeKey, icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={value === id}
            className={`
              relative flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
              ${
                value === id
                  ? 'border-brand-accent bg-brand-accent/10'
                  : 'border-black/10 bg-white hover:border-brand-accent/50 dark:border-white/10 dark:bg-dark-soft'
              }
            `}
          >
            {/* Badge opcional */}
            {badgeKey && (
              <span className="absolute -top-2 right-3 rounded-full bg-dark px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                {t(badgeKey)}
              </span>
            )}

            <span
              className={`shrink-0 ${
                value === id ? 'text-brand-accent' : 'text-dark-soft dark:text-gray-mid'
              }`}
            >
              {icon}
            </span>

            <div className="min-w-0">
              <p
                className={`text-sm font-semibold ${
                  value === id
                    ? 'text-dark dark:text-white'
                    : 'text-dark-soft dark:text-gray-mid'
                }`}
              >
                {t(labelKey)}
              </p>
              <p className="text-xs text-dark-soft dark:text-gray-mid">{t(hintKey)}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Nota contextual según método seleccionado */}
      <div className="mt-3 min-h-[2.5rem]">
        {value === 'mercadopago' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            💳 {t('payment.mpNote', 'Acepta tarjetas argentinas, Pix (Brasil) y más medios LATAM. Comisión: ~6.3% tarjeta de crédito / ~3.3% débito.')}
          </p>
        )}
        {value === 'paypal' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            🌎 {t('payment.paypalNote', 'Ideal para donantes de USA, Europa y el resto del mundo. Comisión: ~3.9% + USD 0.30 por transacción.')}
          </p>
        )}
        {value === 'bank' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            ✅ {t('payment.bankNote', 'Sin comisiones. El 100% de tu donación llega a Valores Sinaí. Ver instrucciones abajo.')}
          </p>
        )}
      </div>
    </div>
  );
};