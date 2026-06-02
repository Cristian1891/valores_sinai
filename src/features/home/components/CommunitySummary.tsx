// src/features/home/components/CommunitySummary/CommunitySummary.tsx
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

// Valores que aparecen en el logo original — extraídos del JSON de valores
const VALUES = [
  'Respeto', 'Compromiso', 'Solidaridad', 'Integridad',
  'Bondad', 'Paz', 'Honor', 'Confianza', 'Esfuerzo', 'Tolerancia', 
  'Responsabilidad', 'Amor', 'Honradez', 'Lealtad'
];

export const CommunitySummary = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden bg-dark-soft px-4 py-20 sm:px-6 lg:px-8">

      {/* Patrón tipográfico de fondo — evoca el círculo de valores del logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 overflow-hidden opacity-[0.04] select-none"
      >
        {Array.from({ length: 6 }).flatMap(() => VALUES).map((value, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-4xl font-black uppercase tracking-widest text-white sm:text-5xl lg:text-6xl"
          >
            {value}
          </span>
        ))}
      </div>

      {/* Anillo decorativo — derivado del círculo del logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-brand-accent/10 hidden lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-[320px] w-[320px] rounded-full border border-brand-accent/10 hidden lg:block"
      />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {t('community.kicker')}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t('community.title')}
          </h2>

          <p className="mt-2 text-xl font-semibold text-brand-accent sm:text-2xl">
            {t('community.subtitle')}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {t('community.text')}
          </p>

          <div className="mt-8">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber"
            >
              {t('community.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};