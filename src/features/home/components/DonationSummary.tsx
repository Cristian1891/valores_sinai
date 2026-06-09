// src/features/home/components/DonationSummary.tsx
//
// Cambios respecto a la versión anterior:
//   1. Tres tarjetas de impacto (se agregó REC Pilar como tercera)
//   2. Labels descriptivos concretos en cada tarjeta (no solo el stat)
//   3. Botón secundario ghost "Conocé el predio" para retener visitantes no listos
//   4. Badge de confianza institucional (CUIT / asociación civil)
//   5. Copy de CTA sin referencia a donaciones mensuales

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const IMPACT_ITEMS = [
  {
    id: 'campus',
    emoji: '🏡',
    statKey: 'donation.stat1',
    labelKey: 'donation.stat1Label',
  },
  {
    id: 'nonprofit',
    emoji: '🤝',
    statKey: 'donation.stat2',
    labelKey: 'donation.stat2Label',
  },
  {
    id: 'studio',
    emoji: '🎙️',
    statKey: 'donation.stat3',
    labelKey: 'donation.stat3Label',
  },
] as const;

export const DonationSummary = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-surface-warm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('donation.kicker')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-dark sm:text-4xl">
            {t('donation.title')}
          </h2>
          <p className="mt-4 text-base leading-7 text-dark-soft">
            {t('donation.text')}
          </p>
        </div>

        {/* Layout dos columnas */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda — fotografía de comunidad */}
          <div className="relative order-1">
            {/* Decoración de fondo */}
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-3xl bg-brand-accent/15 blur-2xl lg:block"
            />

            <div className="relative overflow-hidden rounded-[2rem] shadow-md ring-1 ring-black/5">
              <img
                src="/img/mejores_fotos_salon/salon_gente_8.jpg"
                alt="Comunidad de Valores Sinaí reunida en el predio"
                className="h-[320px] w-full object-cover object-top sm:h-[400px] lg:h-[460px]"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              {/* Versículo sobre la foto */}
              <blockquote className="absolute bottom-5 left-5 right-5">
                <p className="font-serif text-sm italic leading-6 text-white drop-shadow-md">
                  {t(
                    'donation.photoQuote',
                    '"Amarás a tu prójimo como a ti mismo" — Marcos 12:31',
                  )}
                </p>
              </blockquote>
            </div>
          </div>

          {/* Columna derecha — impacto + CTA */}
          <div className="order-2 flex flex-col gap-6">

            {/* Tres tarjetas de impacto */}
            <div className="flex flex-col gap-3">
              {IMPACT_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-2xl"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xl font-bold leading-none text-dark">
                      {t(item.statKey)}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-dark-soft">
                      {t(item.labelKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de apoyo — sin referencia a donaciones mensuales */}
            <p className="text-base leading-7 text-dark-soft">
              {t(
                'donation.cta_text',
                'Cada aporte, grande o pequeño, sostiene directamente los programas, el predio y el estudio de la comunidad.',
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              {/* CTA primario */}
              <Link
                to="/donar"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {/* Corazón SVG inline — sin dependencia de icon lib */}
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
                {t('donation.button', 'Quiero donar')}
              </Link>

              {/* CTA secundario — retiene visitantes no listos para donar */}
              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 rounded-xl border border-dark/15 bg-transparent px-6 py-3 text-sm font-semibold text-dark-soft transition-colors duration-200 hover:border-brand-amber hover:text-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {t('donation.secondaryButton', 'Conocé el predio')}
                {/* Flecha SVG inline */}
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

            {/* Badge de confianza institucional */}
            {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-success"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-success">
                {t(
                  'donation.trustBadge',
                  'Asociación civil inscripta · CUIT verificado',
                )}
              </span>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};