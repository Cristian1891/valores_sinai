// src/features/donations/components/DonationHero.tsx
import { useTranslation } from 'react-i18next';

export const DonationHero = () => {
  const { t } = useTranslation('donations');

  return (
    <section
      className="relative isolate overflow-hidden bg-dark min-h-svh flex items-center" // ← los cambios están acá
      aria-labelledby="donation-hero-heading"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/mejores_fotos_salon/salon_gente_opcional.jpg)' }}
        role="presentation"
      />
      {/* Overlay: más denso abajo para que el texto respire */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/68 to-black/88" />

      {/* Kicker — arriba a la derecha, responde la pregunta de confianza */}
      {/* <div
        className="absolute top-7 right-7 z-10 flex items-center gap-2.5"
        aria-hidden="true"
      >
        <span className="h-px w-4 shrink-0 bg-brand-accent/60" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent/70">
          {t('hero.kicker', 'Sin fines de lucro · Pilar, Buenos Aires')}
        </span>
      </div> */}

      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">

        {/* Versículo — apertura espiritual, establece el tono */}
        {/* <p className="font-serif text-xs italic tracking-wide text-white/45 sm:text-sm">
          {t('hero.verse', '"Amarás a tu prójimo como a ti mismo" — Marcos 12:31')}
        </p> */}

        {/* Divisor dorado — separa el espíritu del llamado a la acción */}
        <div
          className="mx-auto my-5 h-px w-7 bg-brand-accent/40"
          aria-hidden="true"
        />

        {/* H1 — con voz propia, específico de Argentina y de Sinaí */}
        <h1
          id="donation-hero-heading"
          className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl"
        >
          {t('hero.titleLine1', 'Cada peso que donás')}<br />
          {/* {t('hero.titleLine2', 'construye')}{' '} */}
          <em className="not-italic text-brand-accent">
            {t('hero.titleAccent', 'comunidad')}
          </em>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-[1.8] text-white/65 sm:text-lg">
          {t(
            'hero.subtitle',
            'Tu aporte hace posible que más personas accedan a educación, deporte, cultura y un espacio donde se sientan parte de algo.',
          )}
        </p>

        {/* CTA — primera persona, convierte más que imperativo */}
        <div className="mt-8">
          <a
            href="#donation-selector"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-7 py-3.5 text-sm font-extrabold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {t('hero.cta', 'Quiero donar')}
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