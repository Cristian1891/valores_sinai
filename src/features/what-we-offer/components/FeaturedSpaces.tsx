// src/features/what-we-offer/components/FeaturedSpaces.tsx
//
// Datos (ESPACIOS, SERVICIOS) → construidos desde i18n con getEspacios/getServicios(t)
// Tipos (EspacioCardProps)    → types/what-we-offer.ts
// Este componente solo renderiza.

import React from 'react'
import { useTranslation } from 'react-i18next'
import { getEspacios, getServicios } from '../constants/spaces'
import type { EspacioCardProps } from '../types/what-we-offer'

// ── Subcomponente EspacioCard ─────────────────────────────────────────────────
// Se mantiene en este archivo porque solo lo usa FeaturedSpaces.

const EspacioCard: React.FC<EspacioCardProps> = ({
  nombre,
  descripcion,
  imagen,
  alt,
  tag,
  objectPosition = 'center',
}) => (
  <article className="group overflow-hidden rounded-2xl bg-white dark:bg-dark shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-md">
    <div className="relative h-48 overflow-hidden sm:h-52">
      <img
        src={imagen}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition }}
      />
      {tag && (
        <span className="type-caption absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 font-bold text-dark">
          {tag}
        </span>
      )}
    </div>
    <div className="p-5">
      <h3 className="type-h3 mb-1.5 text-base text-dark dark:text-white">{nombre}</h3>
      <p className="type-body-sm text-dark-soft dark:text-surface-cream">{descripcion}</p>
    </div>
  </article>
)

// ── Componente principal ──────────────────────────────────────────────────────

export const FeaturedSpaces: React.FC = () => {
  const { t } = useTranslation('what-we-offer')
  const espacios = getEspacios(t)
  const servicios = getServicios(t)

  return (
    <section
      className="bg-surface-cream dark:bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="espacios-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="type-kicker mb-3 text-brand-amber dark:text-brand-accent">
            {t('spaces.kicker')}
          </p>
          <h2
            id="espacios-heading"
            className="type-h2 text-dark dark:text-white sm:text-4xl"
          >
            {t('spaces.title')}
          </h2>
          <p className="type-body mx-auto mt-4 max-w-2xl text-dark-soft dark:text-surface-cream">
            {t('spaces.subtitle')}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Grilla de espacios físicos */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {espacios.map((espacio) => (
            <EspacioCard key={espacio.nombre} {...espacio} />
          ))}
        </div>

        {/* Servicios del predio */}
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-dark/10" aria-hidden="true" />
            <p className="type-kicker text-brand-amber">
              {t('spaces.servicesLabel')}
            </p>
            <div className="h-px flex-1 bg-dark/10" aria-hidden="true" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {servicios.map((servicio) => (
              <EspacioCard key={servicio.nombre} {...servicio} />
            ))}
          </div>

          {/* Contacto estudio jurídico */}
          <div className="mt-6 text-center">
            <p className="type-body-sm font-medium text-dark-soft dark:text-surface-cream">
              {t('spaces.legalContact')}
            </p>
            <a
              href="mailto:Dra.danielaaramberri@gmail.com"
              className="type-cta mt-3 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-2.5 text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              {t('spaces.legalCta')}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}