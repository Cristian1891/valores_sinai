// src/features/about-us/components/HeroAbout.tsx
import { useTranslation } from 'react-i18next';

export const HeroAbout = () => {
  const { t } = useTranslation('about-us');

  return (
    <section
      className="relative isolate overflow-hidden bg-dark text-white"
      aria-label={t('hero.ariaLabel')}
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-position-[center_38%] bg-no-repeat"
        style={{ backgroundImage: 'url(/img/mejores_fotos_salon/salon_gente_5.jpg)' }}
        role="presentation"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/55 to-black/25" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl"> 

          {/* Kicker */}
          <p className="mb-4 type-kicker text-brand-accent">
            {t('hero.kicker')}
          </p>

          {/* H1 */}
          <h1 className="type-display sm:text-5xl lg:text-6xl">
            {t('hero.title')}
            <span className="mt-1 block text-brand-accent">
              {t('hero.titleAccent')}
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-xl type-body text-white/80 sm:text-lg sm:leading-8">
            {t('hero.subtitle')}
          </p>

        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 lg:flex"
        aria-hidden="true"
      >
        <span className="h-8 w-px animate-pulse bg-white/40" />
      </div>
    </section>
  );
};