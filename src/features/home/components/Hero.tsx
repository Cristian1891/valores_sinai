// src/features/home/components/Hero.tsx
//
// Rediseño — Junio 2026
// Cambios vs versión anterior:
//   — Kicker con línea decorativa (más específico que texto solo)
//   — H1 con break controlado para ritmo de lectura en desktop
//   — Subtítulo reescrito con los 4 ejes reales de la asociación
//   — Scroll hint sutil en el pie del hero
//   — Overlay asimétrico: denso izquierda, abierto derecha (foto respira)
//   — Point cards con título en brand-accent para jerarquía interna clara

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

      {/* Overlay asimétrico: denso izquierda donde vive el texto, abierto derecha */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="max-w-2xl">

          {/* Kicker con línea decorativa */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-0.5 w-6 rounded-full bg-brand-accent"
              aria-hidden="true"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              {t('hero.kicker')}
            </p>
          </div>

          {/* H1 — jerarquía visual clara, break controlado */}
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]"
          >
            {t('hero.titleLine1')}{' '}
            <em className="not-italic text-brand-accent">
              {t('hero.titleAccent')}
            </em>
          </h1>

          {/* Subtítulo */}
          <p className="mt-5 max-w-xl text-base leading-[1.8] text-white/70 sm:text-lg">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-bold text-dark transition-colors hover:bg-brand-amber sm:text-base"
            >
              {t('hero.primaryCta')}
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/quienes-somos"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>

          {/* Point cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { title: t('hero.points.point1Title'), text: t('hero.points.point1Text') },
              { title: t('hero.points.point2Title'), text: t('hero.points.point2Text') },
              { title: t('hero.points.point3Title'), text: t('hero.points.point3Text') },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/8 bg-white/4 p-4 backdrop-blur-sm"
              >
                <p className="text-xs font-bold text-brand-accent">{title}</p>
                <p className="mt-1.5 text-xs leading-[1.65] text-white/60">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll hint — sutil, accesible */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <div className="flex h-5 w-3.5 items-start justify-center rounded-full border border-white/20 pt-1">
          <div className="h-1.5 w-0.5 animate-bounce rounded-full bg-brand-accent/60" />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/20">
          scroll
        </span>
      </div>
    </section>
  );
};