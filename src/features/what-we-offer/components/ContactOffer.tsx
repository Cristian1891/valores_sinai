// src/features/what-we-offer/components/ContactOffer.tsx
//
// Datos (QUICK_CONTACT_ITEMS) → constants/contact.ts
//   Los hrefs y íconos son invariantes de idioma; solo los labels se traducen.
//   Por eso contact.ts no necesita convertirse a factory: los labels se
//   sobreescriben directamente desde t() en el render.
// Tipos (QuickContactItem)    → types/what-we-offer.ts
// Este componente solo renderiza.

import { Fragment } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { QUICK_CONTACT_ITEMS } from '../constants/contact'

export const ContactOffer: React.FC = () => {
  const { t } = useTranslation('what-we-offer')

  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-ofrece-heading"
    >
      <div className="mx-auto max-w-3xl text-center">

        <p className="type-kicker mb-3 text-brand-accent">
          {t('contact.kicker')}
        </p>

        <h2
          id="cta-ofrece-heading"
          className="type-h2 text-white sm:text-4xl lg:text-[2.75rem]"
        >
          {t('contact.title')}
        </h2>

        <p className="type-body mx-auto mt-5 max-w-xl text-white/75 sm:text-lg">
          {t('contact.subtitle')}
        </p>

        {/* Links de contacto rápido
            Los labels vienen del JSON; los hrefs e íconos son invariantes
            de idioma y se mantienen en la constante. */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          {QUICK_CONTACT_ITEMS.map((item, index) => {
            const Icon = item.icon

            return (
              <Fragment key={item.href}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="type-label flex items-center gap-2 text-brand-accent transition-colors hover:text-brand-amber"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                  {item.label}
                </a>

                {index < QUICK_CONTACT_ITEMS.length - 1 && (
                  <span className="hidden text-white/30 sm:block" aria-hidden="true">
                    ·
                  </span>
                )}
              </Fragment>
            )
          })}
        </div>

        {/* CTA principal */}
        <div className="mt-10">
          <Link
            to="/contacto"
            className="type-cta inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            {t('contact.cta')}
            <ArrowRight className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  )
}