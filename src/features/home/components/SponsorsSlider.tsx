import { useTranslation } from 'react-i18next';
import { sponsors } from '../constants/sponsors';

export const SponsorsSlider = () => {
  const { t } = useTranslation('home');

  return (
    <section
      aria-label={t('sponsors.ariaLabel')}
      className="border-t border-black/5 bg-gray-50/50 py-14 dark:border-white/5 dark:bg-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center type-kicker text-brand-accent dark:text-brand-amber">
          {t('sponsors.title')}
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-6"
          role="list"
          aria-label={t('sponsors.title')}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              role="listitem"
              title={sponsor.name}
              className="flex h-52 w-96 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-white px-8 shadow-xs dark:border-white/5 dark:bg-surface-cream" 
            >
              <img
                src={sponsor.logo}
                alt={`Logo de ${sponsor.name}`}
                loading="lazy"
                decoding="async"
                className="max-h-40 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};