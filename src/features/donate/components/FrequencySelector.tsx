// src/features/donations/components/FrequencySelector.tsx
import { useTranslation } from 'react-i18next';

export type DonationFrequency = 'once' | 'monthly';

interface Props {
  value: DonationFrequency;
  onChange: (freq: DonationFrequency) => void;
}

export const FrequencySelector = ({ value, onChange }: Props) => {
  const { t } = useTranslation('donations');

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
        {t('form.frequencyLabel', 'Frecuencia de donación')}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Mensual — visualmente destacado como recomendado */}
        <button
          type="button"
          onClick={() => onChange('monthly')}
          aria-pressed={value === 'monthly'}
          className={`
            relative rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            ${
              value === 'monthly'
                ? 'border-brand-accent bg-brand-accent text-dark shadow-md'
                : 'border-black/10 bg-white text-dark hover:border-brand-accent/50 dark:border-white/10 dark:bg-dark-soft dark:text-white'
            }
          `}
        >
          {/* Badge recomendado */}
          <span
            className={`
              absolute -top-2.5 left-1/2 -translate-x-1/2
              rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider
              ${value === 'monthly' ? 'bg-dark text-brand-accent' : 'bg-brand-accent text-dark'}
            `}
          >
            {t('form.recommended', 'Recomendado')}
          </span>
          <span className="block text-center">
            ⭐ {t('form.monthly', 'Mensual')}
          </span>
          <span
            className={`mt-0.5 block text-center text-xs font-normal ${
              value === 'monthly' ? 'text-dark/70' : 'text-dark-soft dark:text-gray-mid'
            }`}
          >
            {t('form.monthlyHint', 'Mayor impacto sostenido')}
          </span>
        </button>

        {/* Una vez */}
        <button
          type="button"
          onClick={() => onChange('once')}
          aria-pressed={value === 'once'}
          className={`
            rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            ${
              value === 'once'
                ? 'border-brand-accent bg-brand-accent text-dark shadow-md'
                : 'border-black/10 bg-white text-dark hover:border-brand-accent/50 dark:border-white/10 dark:bg-dark-soft dark:text-white'
            }
          `}
        >
          <span className="block text-center">{t('form.once', 'Una vez')}</span>
          <span
            className={`mt-0.5 block text-center text-xs font-normal ${
              value === 'once' ? 'text-dark/70' : 'text-dark-soft dark:text-gray-mid'
            }`}
          >
            {t('form.onceHint', 'Donación única')}
          </span>
        </button>
      </div>
    </div>
  );
};