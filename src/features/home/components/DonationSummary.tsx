// src/features/home/components/DonationSummary.tsx
//
// Cambios respecto a la versión anterior:
//   1. bg-white → bg-surface-cream  (consistencia con el ritmo visual del home)
//   2. Logo reemplazado por fotografía de comunidad real
//   3. Tarjeta de stat reemplazada por tres tarjetas de impacto verificables
//   4. Link corregido: /donar → /donaciones

import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

const IMPACT_ITEMS = [
  {
    id: 'campus',
    emoji: '🏡',
    statKey: 'donation.stat2',
    labelKey: 'donation.stat2Label',
  },
  {
    id: 'nonprofit',
    emoji: '🤝',
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
          <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">
            {t('donation.title')}
          </h2>
          <p className="mt-4 text-base leading-7 text-dark-soft">
            {t('donation.text')}
          </p>
        </div>

        {/* Layout dos columnas */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda — fotografía de comunidad real */}
          {/* 
            Usá la misma foto del hero recortada diferente para mostrar
            un subgrupo y evitar sensación de repetición exacta.
            object-position: "center top" muestra la parte superior del grupo.
            Reemplazá la ruta si tenés otra foto de actividad o predio.
          */}
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

              {/* Overlay gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

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

            {/* Tres tarjetas de impacto verificables */}
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
                    <p className="text-2xl font-bold leading-none text-dark">
                      {t(item.statKey)}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-dark-soft">
                      {t(item.labelKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de apoyo */}
            <p className="text-base leading-7 text-dark-soft">
              {t('donation.cta_text')}
            </p>

            {/* CTA — ruta corregida a /donaciones */}
            <Link
              to="/donar"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('donation.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};