// src/features/donations/components/PaymentMethodSelector.tsx
//
// Métodos disponibles:
//   - MercadoPago  → Argentina + Brasil (Pix automático) + resto LATAM
//   - PayPal       → Internacional (USA, Europa, resto del mundo)
//   - Transferencia bancaria → Sin comisiones, 100% llega a la asociación
//
// Stripe fue removido: no opera en Argentina sin LLC en EE.UU.
// PayPal reemplaza a Stripe como opción internacional.

import { useTranslation } from 'react-i18next';

export type PaymentMethod = 'mercadopago' | 'paypal' | 'bank';

interface Props {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

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

const methods: {
  id: PaymentMethod;
  labelKey: string;
  hintKey:  string;
  badgeKey?: string;
  icon: React.ReactNode;
}[] = [
  {
    id:        'mercadopago',
    labelKey:  'payment.mercadopago',
    hintKey:   'payment.mercadopagoHint',
    badgeKey:  'payment.mercadopagoBadge',
    icon:      <MercadoPagoIcon />,
  },
  // {
  //   id:       'paypal',
  //   labelKey: 'payment.paypal',
  //   hintKey:  'payment.paypalHint',
  //   badgeKey: 'payment.paypalBadge',
  //   icon:     <PayPalIcon />,
  // },
  // {
  //   id:       'bank',
  //   labelKey: 'payment.bank',
  //   hintKey:  'payment.bankHint',
  //   icon:     <BankIcon />,
  // },
];

export const PaymentMethodSelector = ({ value, onChange }: Props) => {
  const { t } = useTranslation('donations');

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
        {t('payment.label')}
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
      <div className="mt-3 min-h-10">
        {value === 'mercadopago' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            💳 {t('payment.mpNote')}
          </p>
        )}
        {value === 'paypal' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            🌎 {t('payment.paypalNote')}
          </p>
        )}
        {value === 'bank' && (
          <p className="text-xs leading-5 text-dark-soft dark:text-gray-mid">
            ✅ {t('payment.bankNote')}
          </p>
        )}
      </div>
    </div>
  );
};