import { useTranslation } from 'react-i18next';
import { CircleCheck, Check, ChevronRight } from 'lucide-react';
import { DONATION_CATEGORIES } from '../constants/donationConstants';
import type { Props } from '../types/donations';
import { ICON_MAP } from '../constants/icon-map';



export const DonationCategorySelector = ({ selected, onSelect }: Props) => {
  const { t } = useTranslation('donations');

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {DONATION_CATEGORIES.map((cat) => {
        const isActive = selected === cat.id;
        const Icon     = ICON_MAP[cat.iconName];

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(isActive ? null : cat.id)}
            aria-pressed={isActive}
            className={`
              group relative w-full cursor-pointer rounded-3xl border-2 p-7 text-left
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber
              ${
                isActive
                  ? `${cat.borderActive} ${cat.bgActive} scale-[1.01] shadow-lg`
                  : `border-surface-warm bg-white
                     hover:-translate-y-1 hover:border-brand-amber/60 hover:shadow-lg
                     dark:border-white/10 dark:bg-dark-soft dark:hover:border-white/30`
              }
            `}
          >
            {isActive && (
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand-amber">
                <CircleCheck className="h-3.5 w-3.5 text-dark" aria-hidden="true" strokeWidth={2.4} />
              </span>
            )}

            <span
              className="
                flex h-14 w-14 items-center justify-center rounded-2xl
                border border-brand-amber/30 bg-brand-amber/10
                text-brand-amber transition-all duration-200
                group-hover:scale-110
              "
              aria-hidden="true" 
            >
              <Icon className="h-7 w-7" strokeWidth={1.9} />
            </span>

            <h3 className={`mt-4 type-kicker ${isActive ? cat.colorClass : 'text-dark dark:text-white'}`}>
              {t(cat.titleKey)}
            </h3>

            <p className="mt-2 type-body text-dark-soft dark:text-gray-mid lg:text-lg">
              {t(cat.descKey)}
            </p>

            <ul className="mt-4 space-y-1.5">
              {cat.impactKeys.map((key) => (
                <li key={key} className="flex items-center gap-2 type-body-sm text-dark-soft dark:text-gray-mid">
                  <Check className={`h-4 w-4 shrink-0 ${cat.colorClass}`} aria-hidden="true" strokeWidth={2.25} />
                  {t(key)}
                </li>
              ))} 
            </ul>

            <div className="mt-5">
              {isActive ? (
                <span className={`inline-flex items-center gap-1.5 type-label ${cat.colorClass}`}>
                  <CircleCheck className="h-4 w-4" aria-hidden="true" strokeWidth={2.25} />
                  {t('category.selected')}
                </span>
              ) : (
                <span className="
                  inline-flex items-center gap-1.5 rounded-full type-label
                  border border-brand-amber/40 bg-brand-accent/10
                  px-4 py-1.5 text-brand-amber
                  transition-all duration-200
                  group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-dark
                ">
                  {t('category.select')}
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" strokeWidth={2.25} />
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};