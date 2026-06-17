// src/features/donate/components/GeneralDonationPanel.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DonationForm }            from './DonationForm';
import { SOLIDARITY_DESTINATIONS } from '../constants/donationConstants';
import { PAYMENT_LINKS }           from '../constants/paymentLinks';

const DEST_ICONS = {
  calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  ),
  wrench: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      className="h-5 w-5" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
} as const;

// ── Componente principal ──────────────────────────────────────────────────────
// donorMessage ya no se gestiona aquí: el cuadro de mensaje/WhatsApp/email
// vive dentro de DonationForm, debajo del textarea, más cerca del contexto.
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

          {/* ── Columna izquierda ── */}
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

          {/* ── Columna derecha ── */}
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