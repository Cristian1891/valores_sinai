// src/features/home/components/CommunitySummary.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → community.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { VALUES } from '../constants/values';

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
            className="whitespace-nowrap font-sans text-4xl font-black uppercase tracking-widest text-white sm:text-5xl lg:text-6xl"
          >
            {value}
          </span>
        ))}
      </div>

      {/* Anillos decorativos derivados del círculo del logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 hidden h-[500px] w-[500px] rounded-full border border-brand-accent/10 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 hidden h-80 w-80 rounded-full border border-brand-accent/10 lg:block"
      />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">

          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
            {t('community.kicker')}
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            {t('community.title')}
          </h2>

          <p className="mt-2 font-sans text-xl font-semibold leading-[1.35] tracking-tight text-brand-accent sm:text-2xl">
            {t('community.subtitle')}
          </p>

          <p className="mt-5 max-w-2xl font-sans text-base leading-[1.75] text-white/75 sm:text-lg">
            {t('community.text')}
          </p>

          <div className="mt-8">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 font-sans text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('community.button')}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};