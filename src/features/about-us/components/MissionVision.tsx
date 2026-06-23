import { HeartHandshake, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const MissionVision = () => {
  const { t } = useTranslation('about-us');

  return (
    <section
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-dark"
      aria-labelledby="historia-heading"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-14 text-center">
          <p className="mb-3 type-kicker text-brand-amber">
            {t('mission.kicker')}
          </p>
          <h2 
            id="historia-heading" 
            className="type-h2 text-dark sm:text-4xl dark:text-white lg:text-[2.75rem]"
          >
            {t('mission.title')}
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        <p className="mx-auto mb-14 max-w-3xl text-center type-body text-dark-soft dark:text-surface-cream sm:text-lg">
          {t('mission.history')}
        </p>

        <div className="mb-14 grid gap-6 sm:grid-cols-2">

          <div className="rounded-3xl bg-surface-cream dark:bg-dark-soft p-8 ring-1 ring-black/5">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent"
              aria-hidden="true"
            >
              <HeartHandshake className="h-6 w-6 text-dark" strokeWidth={1.75} />
            </div>
            <h3 className="mb-1 type-kicker text-brand-accent">
              {t('mission.missionLabel')}
            </h3>
            <p className="mt-2 type-body-sm text-dark-soft dark:dark:text-white">
              {t('mission.missionText')}
            </p>
          </div>

          <div className="rounded-3xl bg-surface-cream dark:bg-dark-soft p-8 ring-1 ring-black/5">
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent"
              aria-hidden="true"
            >
              <Eye className="h-6 w-6 text-dark" strokeWidth={1.75} />
            </div>
            <h3 className="mb-1 type-kicker text-brand-accent">
              {t('mission.visionLabel')}
            </h3>
            <p className="mt-2 type-body-sm text-dark-soft dark:dark:text-white">
              {t('mission.visionText')}
            </p>
          </div>

        </div>

        <figure className="relative overflow-hidden rounded-3xl bg-dark dark:bg-dark-soft px-8 py-12 text-center sm:px-14">
          <span
            className="pointer-events-none absolute -top-4 left-6 select-none font-serif text-[8rem] leading-none text-brand-accent/60"
            aria-hidden="true"
          >
            "
          </span>
          <blockquote>
            <p className="relative type-verse text-xl font-semibold leading-9 text-white sm:text-2xl">
              {t('mission.quote')}
            </p>
          </blockquote>
          <figcaption className="mt-4 type-kicker text-brand-accent">
            {t('mission.quoteAuthor')}
          </figcaption>
        </figure>

      </div>
    </section>
  );
};