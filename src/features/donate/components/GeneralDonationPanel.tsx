import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DonationForm }            from './DonationForm';
import { SOLIDARITY_DESTINATIONS } from '../constants/donationConstants';
import { PAYMENT_LINKS }           from '../constants/paymentLinks';
import { DEST_ICONS } from '../constants/destIcons';


export const GeneralDonationPanel = () => {
  const { t } = useTranslation('donations');
  const [activeDestination, setActiveDestination] = useState<string | null>(null);

  return (
    <section
      id="solidarity-panel"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <p className="type-kicker text-brand-amber">
              {t('solidarity.kicker')}
            </p>
            <h2 className="mt-3 text-dark type-donate dark:text-white lg:text-3xl">
              {t('solidarity.title')}
            </h2>
            <p className="mt-4 type-body text-dark-soft dark:text-gray-mid sm:text-lg">
              {t('solidarity.desc')}
            </p>

            <div className="mt-6 space-y-3">
              <p className="type-label text-dark dark:text-white">
                {t('solidarity.destinationsTitle')}
              </p>
              {SOLIDARITY_DESTINATIONS.map((dest) => {
                const isActive = activeDestination === dest.id;
                const Icon     = DEST_ICONS[dest.iconName];

                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setActiveDestination(isActive ? null : dest.id)}
                    aria-expanded={isActive}
                    className={`
                      w-full rounded-2xl border p-4 text-left transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber 
                      ${isActive
                        ? 'border-brand-amber bg-brand-amber/10'
                        : 'border-black/10 bg-white hover:border-brand-amber/50 dark:border-white/10 dark:bg-dark'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 type-label items-center justify-center rounded-xl bg-brand-amber/10 text-brand-amber"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                      <p className="flex-1 type-label text-dark dark:text-white">
                        {t(dest.titleKey)}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 shrink-0 text-brand-amber transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {isActive && (
                      <p className="mt-3 type-body-sm text-dark-soft dark:text-gray-mid">
                        {t(dest.descKey)}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-amber bg-surface-cream py-4 pl-5 pr-4 dark:bg-dark">
              <p className="type-verse text-brand-amber dark:text-white">
                {t('solidarity.quote')}
              </p>
            </blockquote>
          </div>

          <div>
            <DonationForm
              category="solidarity"
              accentColor="amber"
              paymentLinks={{ mp: PAYMENT_LINKS.solidarity.mp }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};