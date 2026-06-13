// src/features/home/components/CommunitySummary.tsx
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { VALUES } from '../constants/values';

export const CommunitySummary = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden bg-dark-soft dark:bg-dark px-4 py-20 sm:px-6 lg:px-8">

      {/* Patrón tipográfico de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 overflow-hidden opacity-[0.04] select-none"
      >
        {Array.from({ length: 6 }).flatMap(() => VALUES).map((value, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-sans text-4xl font-black uppercase tracking-widest text-white sm:text-5xl lg:text-6xl"
          >
            {value}
          </span>
        ))}
      </div>

      {/* Anillos decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-40 hidden h-125 w-125 rounded-full border border-brand-accent/10 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 hidden h-80 w-80 rounded-full border border-brand-accent/10 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">

          {/* CORRECCIÓN: type-kicker */}
          <p className="type-kicker text-brand-accent">
            {t('community.kicker')}
          </p>

          {/* CORRECCIÓN: type-h2 + breakpoints */}
          <h2 className="mt-3 type-h2 text-white sm:text-4xl lg:text-[2.75rem]">
            {t('community.title')}
          </h2>

          {/*
            CORRECCIÓN: type-h3 reemplaza la combinación manual.
            type-h3 define 20px, 600, line-height 1.35 — exactamente
            lo que se necesita para un subtítulo dentro de sección.
            Se agrega sm:text-2xl como el componente original requería.
          */}
          <p className="mt-2 type-h3 text-brand-accent lg:text-2xl">
            {t('community.subtitle')}
          </p>

          {/* CORRECCIÓN: type-body + breakpoint */}
          <p className="mt-5 max-w-2xl type-body text-white/75 lg:text-lg">
            {t('community.text')}
          </p>

          <div className="mt-8">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 type-cta text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('community.button')}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};