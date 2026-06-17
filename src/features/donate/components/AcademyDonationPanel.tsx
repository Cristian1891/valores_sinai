// src/features/donate/components/AcademyDonationPanel.tsx

import { type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { DonationForm }    from './DonationForm';
import { ACADEMY_COURSES } from '../constants/donationConstants';
import { PAYMENT_LINKS as LINKS } from '../constants/paymentLinks';

import { AudioIcon }       from '../../academy/icons/AudioIcon';
import { MarketingIcon }   from '../../academy/icons/MarketingIcon';
import { PhotographyIcon } from '../../academy/icons/PhotographyIcon';
import { StreamingIcon }   from '../../academy/icons/StreamingIcon';

type IconProps = { className?: string }

const VideoIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75z" />
  </svg>
);

const DirectionIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 7.5h19.5M2.25 7.5v10.125c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V7.5M2.25 7.5V6.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125V7.5" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="m8.25 5.25 1.5 2.25M12 5.25l1.5 2.25M15.75 5.25l1.5 2.25" />
  </svg>
);

const FilmIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3.375 4.5h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 19.125V5.625c0-.621.504-1.125 1.125-1.125Z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6.75 4.5v15M17.25 4.5v15M2.25 9h19.5M2.25 15h19.5M6.75 9h.008v.008H6.75V9Zm0 6h.008v.008H6.75V15Zm10.5-6h.008v.008h-.008V9Zm0 6h.008v.008h-.008V15Z" />
  </svg>
);

const ProductionIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5M4.5 12h9.75M4.5 12a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M16.5 12h3.75M16.5 18h3.75M16.5 18a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H13.5" />
  </svg>
);

const COURSE_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  video:      VideoIcon,
  photo:      PhotographyIcon,
  audio:      AudioIcon,
  direction:  DirectionIcon,
  marketing:  MarketingIcon,
  streaming:  StreamingIcon,
  photo_cine: FilmIcon,
  production: ProductionIcon,
};

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

// ── Componente principal ──────────────────────────────────────────────────────
// donorMessage ya no se gestiona aquí: el cuadro de mensaje/WhatsApp/email
// vive dentro de DonationForm, debajo del textarea, más cerca del contexto.
export const AcademyDonationPanel = () => {
  const { t } = useTranslation('donations');

  return (
    <section
      id="academy-panel"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Columna izquierda ── */}
          <div>
            <p className="type-kicker text-brand-accent">
              {t('academy.kicker')}
            </p>
            <h2 className="mt-3 type-donate text-dark dark:text-white lg:text-3xl">
              {t('academy.title')}
            </h2>
            <p className="mt-4 type-body text-dark-soft dark:text-surface-cream sm:text-lg">
              {t('academy.desc')}
            </p>

            <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
              <p className="flex items-center gap-1.5 type-label text-brand-amber">
                <IconInfo />
                {t('academy.notice')}
              </p>
              <p className="mt-1 type-body-sm text-dark-soft dark:text-surface-cream">
                {t('academy.noticeText')}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 type-label text-dark dark:text-white">
                {t('academy.coursesTitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {ACADEMY_COURSES.map((course) => {
                  const Icon = COURSE_ICONS[course.id];
                  return (
                    <span
                      key={course.id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface-cream px-3 py-1.5 type-caption text-dark-soft dark:border-white/10 dark:bg-dark dark:text-surface-cream"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                      {t(course.nameKey)}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Columna derecha ── */}
          <div>
            <DonationForm
              category="academy"
              accentColor="yellow"
              paymentLinks={{ mp: LINKS.academy.mp }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};