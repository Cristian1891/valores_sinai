// src/features/home/components/AboutPreview/AboutPreview.tsx
import { useTranslation } from 'react-i18next';

export const AboutPreview = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-surface-cream dark:bg-dark-soft px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Imagen */}
        <div className="relative order-1">
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-3xl bg-brand-accent/20 blur-2xl lg:block" />

          <div className="relative overflow-hidden rounded-4xl bg-white dark:bg-dark shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            <img
              src="/img/rec-pilar/recpilar_sinai_611296729_17872722597496347_5403781638977385714_n.jpg"
              alt="Comunidad de Valores Sinaí reunida al aire libre"
              className="h-80 w-full object-cover object-center sm:h-105 lg:h-130"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Texto */}
        <div className="order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('aboutPreview.kicker')}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-5xl">
            {t('aboutPreview.title')}
          </h2>

          <p className="mt-5 max-w-prose text-base leading-7 text-dark-soft dark:text-white/70 sm:text-lg sm:leading-8">
            {t('aboutPreview.text')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://recpilar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-dark dark:bg-brand-accent px-5 py-3 text-sm font-semibold text-white dark:text-dark transition-colors hover:bg-dark-soft dark:hover:bg-brand-amber"
            >
              {t('aboutPreview.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};