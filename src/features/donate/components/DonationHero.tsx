// src/features/donate/components/DonationHero.tsx
import { useTranslation } from 'react-i18next';

export const DonationHero = () => {
  const { t } = useTranslation('donations');

  return (
    <section
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-dark"
      aria-labelledby="donation-hero-heading"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/mejores_fotos_salon/salon_gente_opcional.jpg)' }}
        role="presentation"
      />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/68 to-black/88" />

      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
        <div
          className="mx-auto my-5 h-px w-7 bg-brand-accent/40"
          aria-hidden="true"
        />

        <h1
          id="donation-hero-heading"
          className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl"
        >
          {t('hero.titleLine1')}<br />
          <em className="not-italic text-brand-accent">
            {t('hero.titleAccent')}
          </em>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-white/65 sm:text-lg">
          {t('hero.subtitle')}
        </p>

        <div className="mt-8">
          <a
            href="#donation-selector"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-7 py-3.5 text-sm font-extrabold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {t('hero.cta')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};