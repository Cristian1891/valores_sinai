// src/features/home/components/AboutPreview.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → aboutPreview.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json

import { useTranslation } from 'react-i18next';

export const AboutPreview = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-surface-cream px-4 py-16 dark:bg-dark-soft sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">

        {/* Imagen */}
        <div className="relative order-1">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-3xl bg-brand-accent/20 blur-2xl lg:block"
          />

          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 dark:bg-dark dark:ring-white/5">
            <img
              src="/img/rec-pilar/recpilar_sinai_611296729_17872722597496347_5403781638977385714_n.jpg"
              alt="Estudio REC Pilar Sinaí — espacio multimedial de la asociación"
              className="h-80 w-full object-cover object-center sm:h-[26rem] lg:h-[32rem]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Texto */}
        <div className="order-2">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brand-amber">
            {t('aboutPreview.kicker')}
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('aboutPreview.title')}
          </h2>

          <p className="mt-5 max-w-prose font-sans text-base leading-[1.75] text-dark-soft dark:text-white/70 sm:text-lg">
            {t('aboutPreview.text')}
          </p>

          <div className="mt-8">
            <a
              href="https://recpilar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-dark px-5 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-dark-soft dark:bg-brand-accent dark:text-dark dark:hover:bg-brand-amber"
            >
              {t('aboutPreview.cta')}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};