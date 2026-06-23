import { useTranslation } from 'react-i18next';
import { MercadoPagoIcon } from '../icons/MercadoPagoIcon';
import type { PaymentMethod, Props } from '../types/donations';

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