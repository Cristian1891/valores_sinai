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

        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-20 lg:border-r lg:border-white/5 lg:px-14 lg:py-24">

          <div className="mb-5 flex items-center gap-2.5" aria-hidden="true">

            <span className="type-kicker text-brand-accent/90">
              {t('hero.eyebrow')}
            </span>
          </div>

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

          <div
            className="my-5 h-0.5 w-8 rounded-sm bg-brand-accent"
            aria-hidden="true"
          />

          <p className="type-body max-w-[42ch] text-white lg:text-lg">
            {t('hero.subtitle')}
          </p>

        </div>

        <div
          className="flex flex-col justify-center gap-2.5 px-8 pb-16 pt-0 sm:px-12 lg:px-14 lg:py-24"
          role="list"
          aria-label={t('hero.areasLabel')}
        >

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

      <footer
        className="border-t border-white/5 bg-[#060606]"
        aria-label={t('hero.footerAriaLabel')}
      >
        <div className="mx-auto flex max-w-none items-center justify-between px-8 py-3 sm:px-12 lg:px-14">
          <span className="type-caption text-surface-cream/20">
            {t('hero.footerCopy')}
          </span>
        </div>
      </footer>

    </section>
  );
};