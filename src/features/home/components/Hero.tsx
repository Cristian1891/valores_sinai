// src/features/home/components/Hero.tsx
//
// Ejemplo de uso del sistema tipográfico centralizado.
// Las clases type-* vienen de @utility en src/index.css.
// Si la escala tipográfica cambia, se actualiza en index.css
// y se propaga automáticamente a este componente.

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <section
      className="relative isolate overflow-hidden bg-dark text-white"
      aria-labelledby="hero-heading"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(/img/fotos_hero_home/valores_sinai_657385215_17943737628000129_1940408640949195477_n.jpg)',
        }}
        role="presentation"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">

          {/* Kicker */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-6 rounded-full bg-brand-accent" aria-hidden="true" />
            {/* type-kicker — 11px, uppercase, tracking amplio */}
            <p className="type-kicker text-brand-accent">
              {t('hero.kicker')}
            </p>
          </div>

          {/* H1 — type-display base + breakpoints en el componente */}
          <h1
            id="hero-heading"
            className="type-display sm:text-5xl lg:text-[3.2rem]"
          >
            {t('hero.titleLine1')}{' '}
            <em className="not-italic text-brand-accent">
              {t('hero.titleAccent')}
            </em>
          </h1>

          {/* Subtítulo — type-body base + sm en breakpoint */}
          <p className="mt-5 max-w-xl type-body text-white/70 sm:text-lg sm:leading-[1.8]">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 type-cta text-dark transition-colors hover:bg-brand-amber sm:text-base"
            >
              {t('hero.primaryCta')}
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/quienes-somos"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 type-cta font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>

          {/* Point cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              { title: t('hero.points.point1Title'), text: t('hero.points.point1Text') },
              { title: t('hero.points.point2Title'), text: t('hero.points.point2Text') },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                {/* type-body-sm para el título de la card + bold manual */}
                <p className="type-body-sm font-bold text-brand-accent">{title}</p>
                {/* type-body-sm para el texto descriptivo */}
                <p className="mt-1.5 type-body-sm text-white/60">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};