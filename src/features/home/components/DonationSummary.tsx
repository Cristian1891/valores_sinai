import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { IMPACT_ITEMS } from '../constants/donationImpact';

export const DonationSummary = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-gray-mid dark:bg-gray-50/50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="type-kicker text-brand-accent dark:text-brand-accent">
            {t('donation.kicker')} 
          </p>
          <h2 className="mt-3 type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('donation.title')}
          </h2>
          <p className="mt-4 type-body text-dark dark:text-surface-cream sm:text-lg">
            {t('donation.text')}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="relative order-1">
            <div aria-hidden="true" className="absolute -left-4 -top-4 hidden h-32 w-32 rounded-3xl bg-brand-accent/15 blur-2xl lg:block" />
            <div className="relative overflow-hidden rounded-4xl shadow-md ring-1 ring-black/5">
              <img
                src="/img/mejores_fotos_salon/salon_gente_10.jpg"
                alt="Comunidad de Valores Sinaí reunida en el predio"
                loading="lazy"
                decoding="async"
                className="h-80 w-full object-cover sm:h-100 lg:h-115"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent" />
              <blockquote className="absolute bottom-5 left-5 right-5">
                <p className="type-verse text-white drop-shadow-md">
                  {t('donation.photoQuote')}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="order-2 flex flex-col gap-6">

            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white dark:bg-dark shadow-sm">
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
                    <p className="type-h4 text-dark dark:text-white sm:text-[18px] text-base">
                      {t(statKey)} 
                    </p>
                    <p className="mt-0.5 type-body-sm text-dark-soft dark:text-surface-cream">
                      {t(labelKey)}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2.5 border-t border-black/5 bg-surface-cream/60 px-6 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-success" aria-hidden="true" />
                <p className="type-caption text-dark-soft dark:text-black">
                  {t('donation.trustBadge')}
                </p>
              </div>
            </div>

            <p className="type-body text-dark dark:text-surface-cream">
              {t('donation.ctaText')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/donar"
                className="inline-flex items-center gap-2.5 rounded-xl bg-brand-accent px-7 py-3.5 type-cta text-dark transition-colors duration-200 hover:bg-brand-amber hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {t('donation.button')}
              </Link>

              <Link
                to="/que-ofrecemos"
                className="inline-flex items-center gap-2 rounded-xl border dark:border-white dark:text-white dark:hover:border-brand-accent dark:hover:text-brand-accent border-dark/25 px-7 py-3.5 type-cta text-dark transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {t('donation.secondaryButton')} 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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