// src/features/donate/components/GeneralDonationPanel.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DonationForm }            from './DonationForm';
import { SOLIDARITY_DESTINATIONS } from '../constants/donationConstants';
import { PAYMENT_LINKS }           from '../constants/paymentLinks';

// ── Íconos SVG para los destinos del Fondo Solidario ─────────────────────────
// Se mantienen en este archivo porque solo los usa este panel.
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

// ── Íconos semánticos que reemplazan emojis ───────────────────────────────────

/** 💬 → Burbuja de mensaje / dedicatoria del donante */
const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

/** 💬 → WhatsApp / envío por chat */
const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

/** ✉️ → Email */
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const GeneralDonationPanel = () => {
  const { t } = useTranslation('donations');
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [donorMessage,      setDonorMessage]      = useState('');

  return (
    <section
      id="solidarity-panel"
      className="border-t border-black/5 bg-surface-cream px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Columna izquierda ── */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              {t('solidarity.kicker')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
              {t('solidarity.title')}
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-soft dark:text-gray-mid">
              {t('solidarity.desc')}
            </p>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-dark dark:text-white">
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
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/10 text-brand-amber"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>
                      <p className="flex-1 text-sm font-semibold text-dark dark:text-white">
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
                      <p className="mt-3 text-xs leading-5 text-dark-soft dark:text-gray-mid">
                        {t(dest.descKey)}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-amber bg-white py-4 pl-5 pr-4 dark:bg-dark">
              <p className="font-serif text-sm italic leading-7 text-dark-soft dark:text-white">
                {t('solidarity.quote')}
              </p>
            </blockquote>

            {donorMessage.trim().length > 0 && (
              <div className="mt-6 rounded-xl border border-brand-amber/20 bg-white p-4 dark:border-white/10 dark:bg-dark">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-dark dark:text-white">
                  <IconMessage />
                  {t('panel.sendReceiptTitle')}
                </p>
                <p className="mt-1 text-xs italic text-dark-soft dark:text-gray-mid">
                  "{donorMessage}"
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/5491160122363?text=${encodeURIComponent(t('panel.whatsappMessage', { message: donorMessage, category: t('solidarity.kicker') }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-amber px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:bg-brand-accent"
                  >
                    <IconWhatsApp />
                    {t('panel.sendWhatsApp')}
                  </a>
                  <a
                    href={`mailto:valoressinai@gmail.com?subject=${encodeURIComponent(t('panel.emailSubjectSolidarity'))}&body=${encodeURIComponent(t('panel.emailBody', { message: donorMessage, category: t('solidarity.kicker') }))}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-surface-cream px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:border-brand-amber dark:border-white/10 dark:bg-dark-soft dark:text-white"
                  >
                    <IconMail />
                    {t('panel.sendEmail')}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Columna derecha ── */}
          <div>
            <DonationForm
              category="solidarity"
              accentColor="amber"
              paymentLinks={{ mp: PAYMENT_LINKS.solidarity.mp }}
              onMessage={setDonorMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};