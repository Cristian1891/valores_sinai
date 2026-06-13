// src/features/about-us/components/Team.tsx
import { useTranslation } from 'react-i18next';

export const Team = () => {
  const { t } = useTranslation('about-us');

  return (
    <section
      className="bg-surface-warm dark:bg-dark px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-dark shadow-xl ring-1 ring-black/5">
              <img
                src="/img/team.jpg"
                alt={t('team.imageAlt')}
                className="h-75 w-full object-cover sm:h-100 lg:h-120"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent" aria-hidden="true" />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">

            {/* Kicker */}
            <p className="mb-3 type-kicker text-brand-amber">
              {t('team.kicker')}
            </p>

            {/* H2 */}
            <h2
              id="team-heading"
              className="type-h2 text-dark dark:text-white sm:text-4xl"
            >
              {t('team.title')}
            </h2>

            <div className="mt-3 h-px w-12 bg-brand-amber" aria-hidden="true" />

            {/* Párrafos */}
            <p className="mt-6 type-body text-dark-soft dark:text-surface-cream">
              {t('team.description1')}
            </p>
            <p className="mt-4 type-body text-dark-soft dark:text-surface-cream">
              {t('team.description2')}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};