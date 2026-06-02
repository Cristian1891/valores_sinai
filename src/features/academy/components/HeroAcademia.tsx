// src/features/academia/components/HeroAcademia.tsx
import { useTranslation } from 'react-i18next';

export const HeroAcademia: React.FC = () => {
  const { t } = useTranslation('academia');

  return (
    <section
      className="relative overflow-hidden bg-surface-cream px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8"
      aria-labelledby="academia-hero-heading"
    >
      {/* Gradiente radial dinámico anclado al sistema de diseño */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-20"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% -10%, var(--color-brand-accent) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center z-10">
        
        {/* Badge "Próximamente" */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 px-4 py-2 ring-1 ring-brand-accent/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-dark-soft"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.796v.086a2.25 2.25 0 01-.754 1.693A28.633 28.633 0 016 11.459z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-dark-soft">
            {t('hero.badge', 'Próximamente')}
          </span>
        </div>

        {/* Título principal */}
        <h1
          id="academia-hero-heading"
          className="text-4xl font-bold tracking-tight text-dark sm:text-5xl lg:text-6xl font-sans"
        >
          {t('hero.title', 'Academia Valores Sinaí')}
        </h1>

        {/* Separador de marca */}
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-brand-accent" aria-hidden="true" />

        {/* Descripción principal */}
        <p className="mt-8 text-lg leading-8 text-dark-soft sm:text-xl">
          {t('hero.descriptionPrefix', 'Estamos preparando una ')}{' '}
          <strong className="font-semibold text-brand-amber">
            {t('hero.descriptionEmphasis', 'experiencia educativa transformadora')}
          </strong>{' '}
          {t('hero.descriptionSuffix', 'en oficios y habilidades digitales')}
        </p>

        <p className="mt-4 text-base leading-7 text-dark-soft/70">
          {t(
            'hero.secondaryDescription',
            'Más que cursos: una comunidad donde aprendés, crecés y te conectás con oportunidades reales en el mundo'
          )}
        </p>

        {/* Flecha indicadora (optimizada para a11y) */}
        <div className="mt-12 flex justify-center" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6 motion-safe:animate-bounce text-brand-amber"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
};