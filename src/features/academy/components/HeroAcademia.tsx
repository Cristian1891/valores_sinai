// src/features/academy/components/HeroAcademia.tsx
//
// TIPOGRAFÍA — decisiones tomadas:
//
//   Eyebrow / areasHeader  → type-kicker   (11px, sans, uppercase, tracking 0.22em)
//   <h1>                   → type-display  (serif 36px mobile) + sm/xl overrides encima
//                            type-display fija color white, pero acá el color es
//                            surface-cream — se sobreescribe con text-surface-cream.
//   Subtítulo del hero     → type-verse    (serif itálico 14px, line-height 1.6)
//                            El subtítulo es una descripción larga sobre fondo oscuro:
//                            serif + itálico da el tono "institucional / misional"
//                            que el contexto de una ONG cristiana necesita.
//   AreaCard nombre        → type-label    (14px, 600) — texto interactivo, link-weight
//   AreaCard tag           → type-caption  (12px, 500) — meta-info de la card

import React from 'react';
import { useTranslation } from 'react-i18next';
import { AreaCard } from './AreaCard';
import { AREAS } from '../constants/areas';

export const HeroAcademia: React.FC = () => {
  const { t } = useTranslation('academy');

  return (
    <section
      className="relative flex min-h-svh flex-col bg-[#0a0a0a]"
      aria-labelledby="academia-hero-heading"
    >
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">

        {/* ── Columna izquierda: texto ── */}
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-20 lg:border-r lg:border-white/5 lg:px-14 lg:py-24">
 
          {/* Eyebrow — type-kicker: 11px, sans, uppercase, tracking 0.22em */}
          <div className="mb-5 flex items-center gap-2.5" aria-hidden="true">
            {/* <div className="h-px w-5 shrink-0 bg-brand-accent" /> */}
            <span className="type-kicker text-brand-accent/90">
              {t('hero.eyebrow')}
            </span>
          </div>

          {/* Badge de estado — mantiene sus clases propias: es un badge
              con glow y pulse, no texto corriente. type-kicker aplicado
              al span de texto interno para consistencia de tracking. */}
          <div
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-[3px] border border-brand-accent/20 px-2.5 py-1"
            role="status"
            aria-label={t('hero.badgeAriaLabel')}
          >
            <span
              className="block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand-accent"
              style={{ boxShadow: '0 0 4px var(--color-brand-accent)' }}
              aria-hidden="true"
            />
            <span className="type-kicker text-brand-amber/90">
              {t('hero.badge')}
            </span>
          </div>

          {/* H1 — type-display como base (serif 36px, weight 700, line-height 1.12)
              + breakpoints sm/xl que escalan el tamaño según el diseño original.
              color: type-display fija `color: white` pero acá usamos surface-cream
              para el tono cálido del sistema de color — se sobreescribe con
              text-surface-cream. La em con el acento dorado sigue igual. */}
          <h1
            id="academia-hero-heading"
            className="type-display text-surface-cream sm:text-5xl lg:text-[3.2rem] tracking-tight font-extrabold"
          >
            {t('hero.titleLine1')}<br />
            {t('hero.titleLine2')}{' '}
            <em className="not-italic text-brand-accent">
              {t('hero.titleLine3')}
            </em>
          </h1> 

          {/* Separador decorativo */}
          <div
            className="my-5 h-0.5 w-8 rounded-sm bg-brand-accent"
            aria-hidden="true"
          />

          {/* Subtítulo — type-verse: serif itálico 14px, line-height 1.6.
              Es la clase del sistema exactamente pensada para este uso:
              "blockquotes sobre imágenes, descripciones misionales".
              max-w limita la línea a ~42ch para legibilidad óptima. */}
          <p className="type-body max-w-[42ch] text-white lg:text-lg">
            {t('hero.subtitle')}
          </p>

        </div>

        {/* ── Columna derecha: áreas de formación ── */}
        <div
          className="flex flex-col justify-center gap-2.5 px-8 pb-16 pt-0 sm:px-12 lg:px-14 lg:py-24"
          role="list"
          aria-label={t('hero.areasLabel')}
        >
          {/* Header de la lista — type-kicker */}
          <p
            className="mb-1 type-kicker text-brand-accent"
            aria-hidden="true"
          >
            {t('hero.areasHeader')}
          </p>

          {AREAS.map((area) => (
            <AreaCard key={area.key} area={area} t={t} />
          ))}
        </div>

      </div>

      {/* ── Footer strip ── */}
      <footer
        className="border-t border-white/5 bg-[#060606]"
        aria-label={t('hero.footerAriaLabel')}
      >
        <div className="mx-auto flex max-w-none items-center justify-between px-8 py-3 sm:px-12 lg:px-14">
          {/* Copyright / meta — type-caption: 12px, 500 */}
          <span className="type-caption text-surface-cream/20">
            {t('hero.footerCopy')}
          </span>
        </div>
      </footer>

    </section>
  );
};