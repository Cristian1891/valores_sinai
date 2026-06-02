// src/features/donations/components/DonationCategorySelector.tsx
import { useTranslation } from 'react-i18next';
import type { DonationCategory } from '../DonationsPage';

interface Props {
  selected: DonationCategory;
  onSelect: (category: DonationCategory) => void;
}

const categories: {
  id: Exclude<DonationCategory, null>;
  emoji: string;
  titleKey: string;
  descKey: string;
  impactKey: string[];
  color: string;
  borderActive: string;
  bgActive: string;
}[] = [
  {
    id: 'academy',
    emoji: '🎓',
    titleKey: 'category.academy.title',
    descKey: 'category.academy.desc',
    impactKey: [
      'category.academy.impact1',
      'category.academy.impact2',
      'category.academy.impact3',
    ],
    color: 'text-brand-accent',
    borderActive: 'border-brand-accent',
    bgActive: 'bg-brand-accent/10',
  },
  {
    id: 'solidarity',
    emoji: '🤝',
    titleKey: 'category.solidarity.title',
    descKey: 'category.solidarity.desc',
    impactKey: [
      'category.solidarity.impact1',
      'category.solidarity.impact2',
      'category.solidarity.impact3',
    ],
    color: 'text-brand-amber',
    borderActive: 'border-brand-amber',
    bgActive: 'bg-brand-amber/10',
  },
];

export const DonationCategorySelector = ({ selected, onSelect }: Props) => {
  const { t } = useTranslation('donations');

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {categories.map((cat) => {
        const isActive = selected === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(isActive ? null : cat.id)}
            aria-pressed={isActive}
            className={`
              group relative w-full rounded-3xl border-2 p-7 text-left
              transition-all duration-300
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
              ${
                isActive
                  ? `${cat.borderActive} ${cat.bgActive} shadow-lg`
                  : 'border-black/10 bg-white hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-dark-soft'
              }
            `}
          >
            {/* Badge seleccionado */}
            {isActive && (
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3.5 w-3.5 text-dark"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}

            {/* Ícono */}
            <span
              className={`
                flex h-14 w-14 items-center justify-center rounded-2xl text-2xl
                transition-transform duration-300 group-hover:scale-110
                ${isActive ? 'bg-brand-accent/20' : 'bg-surface-cream dark:bg-dark'}
              `}
              aria-hidden="true"
            >
              {cat.emoji}
            </span>

            {/* Título */}
            <h3
              className={`mt-4 text-xl font-bold tracking-tight ${
                isActive ? cat.color : 'text-dark dark:text-white'
              }`}
            >
              {t(cat.titleKey)}
            </h3>

            {/* Descripción */}
            <p className="mt-2 text-sm leading-6 text-dark-soft dark:text-gray-mid">
              {t(cat.descKey)}
            </p>

            {/* Lista de impacto */}
            <ul className="mt-4 space-y-1.5">
              {cat.impactKey.map((key) => (
                <li key={key} className="flex items-center gap-2 text-sm text-dark-soft dark:text-gray-mid">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-4 w-4 shrink-0 ${cat.color}`}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t(key)}
                </li>
              ))}
            </ul>

            {/* CTA inline */}
            <p
              className={`mt-5 text-sm font-semibold ${
                isActive ? cat.color : 'text-dark-soft dark:text-gray-mid'
              }`}
            >
              {isActive
                ? t('category.selected', '✓ Seleccionado — completá el formulario abajo')
                : t('category.select', 'Seleccionar →')}
            </p>
          </button>
        );
      })}
    </div>
  );
};