// src/features/home/components/DonationSummary.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → donation.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json
//
// Nota: los href de contacto (email, teléfono) se leen desde las claves
// contact.href1, contact.href2 para mantener una única fuente de verdad.

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

// ── Íconos inline (sin dependencia extra, stroke consistente con el sistema) ──

const IconMapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconHeartHandshake = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.95" />
  </svg>
);

const IconMicrophone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
    <line x1="12" y1="19" x2="12" y2="22" />
  </svg>
);

// Usamos 'as const' para que TypeScript infiera los tipos literales de statKey/labelKey
const IMPACT_ITEMS = [
  { id: 'predio',     Icon: IconMapPin,         statKey: 'donation.stat1', labelKey: 'donation.stat1Label' },
  { id: 'nonprofit',  Icon: IconHeartHandshake, statKey: 'donation.stat2', labelKey: 'donation.stat2Label' },
  { id: 'multimedia', Icon: IconMicrophone,     statKey: 'donation.stat3', labelKey: 'donation.stat3Label' },
] as const;

export const DonationSummary = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brand-amber">
            {t('donation.kicker')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]">
            {t('donation.title')}
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.75] text-dark-soft">
            {t('donation.text')}
          </p>
        </div>

        {/* Layout dos columnas */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda — fotografía */}
          <div className="relative order-1">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-3xl bg-brand-accent/15 blur-2xl lg:block"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-md ring-1 ring-black/5">
              <img
                src="/img/mejores_fotos_salon/salon_gente_10.jpg"
                alt="Comunidad de Valores Sinaí reunida en el predio"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover sm:h-[400px] lg:h-[460px]"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <blockquote className="absolute bottom-5 left-5 right-5">
                <p className="font-serif text-sm italic leading-6 text-white drop-shadow-md">
                  {t('donation.photoQuote')}
                </p>
              </blockquote>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="order-2 flex flex-col gap-6">

            {/* Card de impacto con íconos */}
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              {IMPACT_ITEMS.map(({ id, Icon, statKey, labelKey }, index) => (
                <div
                  key={id}
                  className={`flex items-start gap-4 px-6 py-5 ${
                    index < IMPACT_ITEMS.length - 1 ? 'border-b border-black/5' : ''
                  }`}
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-amber">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-sans text-lg font-bold leading-snug text-dark">
                      {t(statKey)}
                    </p>
                    <p className="mt-0.5 font-sans text-sm leading-[1.5] text-dark-soft">
                      {t(labelKey)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Badge de confianza */}
              <div className="flex items-center gap-2.5 border-t border-black/5 bg-surface-cream/60 px-6 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
                <p className="font-sans text-xs font-medium text-dark-soft">
                  {t('donation.trustBadge')}
                </p>
              </div>
            </div>

            {/* Texto de apoyo */}
            <p className="font-sans text-base leading-[1.75] text-dark-soft">
              {t('donation.ctaText')}
            </p>

            {/* Botones CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/donar"
                className="inline-flex items-center gap-2.5 rounded-xl bg-brand-accent px-7 py-3.5 font-sans text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {t('donation.button')}
              </Link>

              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 rounded-xl border border-dark/25 px-7 py-3.5 font-sans text-sm font-semibold text-dark transition-colors duration-200 hover:border-brand-amber hover:text-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {t('donation.secondaryButton')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};