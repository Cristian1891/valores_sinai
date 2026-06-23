import React from 'react'
import { useTranslation } from 'react-i18next'
import { getEspacios, getServicios } from '../constants/spaces'
import { EspacioCard } from './EspacioCard'


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

        <div className="mb-12 text-center">
          <p className="type-kicker mb-3 text-brand-amber dark:text-brand-accent">
            {t('spaces.kicker')}
          </p>
          <h2
            id="espacios-heading"
            className="type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {t('spaces.title')}
          </h2>
          <p className="type-body mx-auto mt-4 max-w-2xl text-dark-soft dark:text-surface-cream sm:text-lg">
            {t('spaces.subtitle')}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {espacios.map((espacio) => (
            <EspacioCard key={espacio.nombre} {...espacio} />
          ))}
        </div>

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