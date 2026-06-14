// src/features/what-we-offer/components/Beneficiaries.tsx
//
// Datos (BENEFICIARY_GROUPS) → construidos desde i18n con getBeneficiaryGroups(t)
// Tipos (TipoGrupoItem)      → types/what-we-offer.ts
// Este componente solo renderiza.

import React from 'react'
import { useTranslation } from 'react-i18next'
import { getBeneficiaryGroups } from '../constants/beneficiaries'

export const Beneficiaries: React.FC = () => {
  const { t } = useTranslation('what-we-offer')
  const groups = getBeneficiaryGroups(t)

  return (
    <section
      className="bg-white dark:bg-black px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="paraquien-heading"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-12 text-center">
          <p className="type-kicker mb-3 text-brand-amber">
            {t('beneficiaries.kicker')}
          </p>
          <h2
            id="paraquien-heading"
            className="type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {t('beneficiaries.title')}
          </h2>
          <p className="type-body mx-auto mt-4 max-w-xl text-dark-soft dark:text-surface-cream sm:text-lg">
            {t('beneficiaries.subtitle')}
          </p>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-accent" aria-hidden="true" />
        </div>

        {/* Grilla de grupos */} 
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((tipo) => (
            <div
              key={tipo.titulo}
              className="flex gap-4 rounded-2xl bg-surface-cream dark:bg-dark-soft dark:border-white/5 p-6 ring-1 ring-black/5"
            >
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent"
                aria-hidden="true"
              >
                {tipo.icon}
              </div>

              <div>
                <h3 className="type-body mb-1.5 text-dark font-bold dark:text-brand-accent sm:text-lg">{tipo.titulo}</h3>
                <p className="type-body-sm text-dark-soft dark:text-white">{tipo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}