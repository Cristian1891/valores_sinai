// src/features/about-us/components/HeroAbout.tsx
//
// Hero de la página "Quiénes Somos".
// Texto adaptado del estatuto de la asociación — simplificado para comunicación web.
// Principio UX: un hero orienta en 3-5 segundos, no informa en profundidad.
// Fondo: bg-dark → contrasta con HistoriaMisionVision que le sigue (bg-white).

import { useTranslation } from 'react-i18next';

export const HeroAbout: React.FC = () => {
  const { t } = useTranslation('about-us');

  return (
    <section
      className="relative isolate overflow-hidden bg-dark text-white"
      aria-label={t('hero.ariaLabel', 'Presentación de Valores Sinaí')}
    >
      {/* Imagen de fondo del predio */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_38%] bg-no-repeat"
        style={{ backgroundImage: 'url(/img/mejores_fotos_salon/salon_gente_5.jpg)' }}
        role="presentation"
      />
      {/* Overlay gradiente — más opaco a la izquierda para legibilidad */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">

          {/* Kicker institucional */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent sm:text-base">
            {t('hero.kicker', 'Asociación Civil · Inscr. 50162')}
          </p>

          {/* Headline — directo, sin lenguaje de estatuto */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.title', 'Educación, cultura, deporte')}
            <span className="mt-1 block text-brand-accent">
              {t('hero.titleAccent', 'y espiritualidad para todos')}
            </span>
          </h1>

          {/* Bajada — el texto del estatuto adaptado: más corto y humano */}
          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {t(
              'hero.subtitle',
              'Somos una Asociación Civil que desarrolla propuestas educativas, culturales, sociales, deportivas y espirituales, guiadas por valores humanísticos, para acompañar a las personas en la transformación de sus realidades.',
            )}
          </p>

          {/* Versículo guía — brevísimo, identidad cristiana */}
          {/* <blockquote className="mt-7 border-l-2 border-brand-accent pl-4">
            <p className="font-serif text-sm italic leading-6 text-white/70 sm:text-base">
              {t('hero.verse', '"Amarás a tu prójimo como a ti mismo."')}
            </p>
          </blockquote> */}

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

/*
──────────────────────────────────────────────────────────────
CLAVES i18n → src/i18n/locales/es/about.json  (sección "hero")
──────────────────────────────────────────────────────────────
"hero": {
  "ariaLabel": "Presentación de Valores Sinaí",
  "kicker": "Asociación Civil · Inscr. 50162",
  "title": "Educación, cultura, deporte",
  "titleAccent": "y espiritualidad para todos",
  "subtitle": "Somos una Asociación Civil que desarrolla propuestas educativas, culturales, sociales, deportivas y espirituales, guiadas por valores humanísticos, para acompañar a las personas en la transformación de sus realidades.",
  "verse": "\"Amarás a tu prójimo como a ti mismo.\""
}
──────────────────────────────────────────────────────────────
*/