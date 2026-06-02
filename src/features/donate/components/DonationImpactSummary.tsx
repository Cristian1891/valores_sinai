// src/features/donations/components/DonationImpactSummary.tsx
//
// Resumen visual del impacto antes del formulario.
// Se puede incluir en DonationsPage entre el selector de categoría y los paneles.

import { useTranslation } from 'react-i18next';

const IMPACT_ITEMS = [
  {
    id: 'student',
    emoji: '🎓',
    amountKey: 'impact.student.amount',
    descKey: 'impact.student.desc',
  },
  {
    id: 'family',
    emoji: '🏠',
    amountKey: 'impact.family.amount',
    descKey: 'impact.family.desc',
  },
  {
    id: 'event',
    emoji: '🎪',
    amountKey: 'impact.event.amount',
    descKey: 'impact.event.desc',
  },
];

export const DonationImpactSummary = () => {
  const { t } = useTranslation('donations');

  return (
    <section className="border-t border-black/5 bg-surface-cream px-4 py-10 dark:border-white/5 dark:bg-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
          {t('impact.kicker', 'Lo que lográs con tu aporte')}
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {IMPACT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5 dark:bg-dark-soft dark:ring-white/5"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.emoji}
              </span>
              <p className="mt-3 text-lg font-bold text-brand-accent">{t(item.amountKey)}</p>
              <p className="mt-1 text-xs leading-5 text-dark-soft dark:text-gray-mid">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};