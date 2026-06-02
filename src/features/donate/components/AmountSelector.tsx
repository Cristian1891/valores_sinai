// src/features/donations/components/AmountSelector.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  value: number | null;
  onChange: (amount: number) => void;
  currency?: string;
}

const PRESET_AMOUNTS = [3000, 5000, 10000, 25000];

export const AmountSelector = ({ value, onChange, currency = 'ARS' }: Props) => {
  const { t } = useTranslation('donations');
  const [customMode, setCustomMode] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const handlePreset = (amount: number) => {
    setCustomMode(false);
    setCustomValue('');
    onChange(amount);
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    setCustomValue(raw);
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed) && parsed > 0) {
      onChange(parsed);
    }
  };

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
        {t('form.amountLabel', '¿Cuánto querés donar?')}
      </p>

      <div className="flex flex-wrap gap-2">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => handlePreset(amount)}
            className={`
              rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
              ${
                value === amount && !customMode
                  ? 'border-brand-accent bg-brand-accent text-dark shadow-sm'
                  : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white dark:hover:border-brand-accent'
              }
            `}
          >
            {formatAmount(amount)}
          </button>
        ))}

        <button
          type="button"
          onClick={() => {
            setCustomMode(true);
            setCustomValue('');
          }}
          className={`
            rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            ${
              customMode
                ? 'border-brand-accent bg-brand-accent text-dark shadow-sm'
                : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white dark:hover:border-brand-accent'
            }
          `}
        >
          {t('form.customAmount', 'Otro monto')}
        </button>
      </div>

      {customMode && (
        <div className="mt-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-dark-soft dark:text-gray-mid">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={customValue}
              onChange={handleCustomInput}
              placeholder="0"
              aria-label={t('form.customAmountLabel', 'Ingresar monto personalizado')}
              className="
                w-full rounded-xl border border-black/10 bg-white py-3 pl-8 pr-4
                text-sm text-dark placeholder-dark-soft/40
                transition-colors duration-200
                focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
                dark:border-white/10 dark:bg-dark-soft dark:text-white dark:placeholder-gray-mid/40
              "
            />
          </div>
        </div>
      )}
    </div>
  );
};