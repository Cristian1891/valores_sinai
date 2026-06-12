// src/features/contact/components/ContactMethods.tsx
//
// Datos (CONTACT_METHODS) → constants/contact.ts
// Tipos (ContactMethod)   → types/contact.ts
// Este componente solo renderiza.

import React from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronRight } from 'lucide-react'
import { CONTACT_METHODS } from '../constants/contact'

export const ContactMethods: React.FC = () => {
  const { t } = useTranslation('contact')

  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="bg-surface-cream px-4 py-14 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="contact-methods-heading"
          className="mb-8 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber"
        >
          {t('methods.heading')}
        </h2>

        <p className="mb-10 max-w-xl font-sans text-base leading-7 text-dark-soft dark:text-gray-mid">
          {t('methods.subheading')}
        </p>

        <div
          role="list"
          aria-label={t('methods.ariaLabel')}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon

            return (
              <a
                key={method.key}
                href={method.href}
                role="listitem"
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-4 rounded-3xl border border-black/5 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/5 dark:bg-dark"
              >
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-dark transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.9} aria-hidden="true" />
                </div>

                <p className="font-sans text-sm font-bold uppercase tracking-wider text-dark dark:text-white">
                  {t(method.labelKey)}
                </p>

                <p className="font-sans text-sm font-semibold text-brand-amber transition-colors duration-200 group-hover:text-brand-accent">
                  {t(method.valueKey)}
                </p>

                {method.descriptionKey && (
                  <p className="font-sans text-xs leading-5 text-dark-soft dark:text-gray-mid">
                    {t(method.descriptionKey)}
                  </p>
                )}

                <span
                  aria-hidden="true"
                  className="mt-auto inline-flex items-center gap-1.5 rounded-xl bg-dark px-4 py-2 font-sans text-xs font-bold text-white ring-2 ring-transparent transition-all duration-200 group-hover:bg-brand-accent group-hover:text-dark group-hover:ring-brand-amber dark:bg-dark-soft dark:group-hover:bg-brand-accent dark:group-hover:text-dark dark:group-hover:ring-brand-amber"
                >
                  {t('methods.ctaLabel')}
                  <ChevronRight
                    className="h-3.5 w-3.5 transition-all duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}