// src/features/donate/components/AcademyDonationPanel.tsx

import { useState, type JSX } from 'react';
import { useTranslation } from 'react-i18next';

import { DonationForm }    from './DonationForm';
import { ACADEMY_COURSES } from '../constants/donationConstants';
import { PAYMENT_LINKS as LINKS } from '../constants/paymentLinks';

// ── Íconos reutilizados desde academy/icons ───────────────────────────────────
// Import cross-feature válido. A largo plazo mover a src/shared/icons/.
import { AudioIcon }       from '../../academy/icons/AudioIcon';
// import { AudiovisualIcon } from '../../academy/icons/AudiovisualIcon';
// import { ManagementIcon }  from '../../academy/icons/ManagementIcon';
import { MarketingIcon }   from '../../academy/icons/MarketingIcon';
import { PhotographyIcon } from '../../academy/icons/PhotographyIcon';
import { StreamingIcon }   from '../../academy/icons/StreamingIcon';

// ── Íconos complementarios (no existen en academy/icons aún) ─────────────────
// Mismo estilo: viewBox 0 0 24 24, fill none, stroke currentColor, strokeWidth 1.5.

type IconProps = { className?: string }

/** video — cámara con grabación */
const VideoIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75z" />
  </svg>
);

/** direction — claqueta de rodaje */
const DirectionIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M2.25 7.5h19.5M2.25 7.5v10.125c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125V7.5M2.25 7.5V6.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125V7.5" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="m8.25 5.25 1.5 2.25M12 5.25l1.5 2.25M15.75 5.25l1.5 2.25" />
  </svg>
);

/** photo_cine — rollo de película */
const FilmIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3.375 4.5h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 0 1 2.25 19.125V5.625c0-.621.504-1.125 1.125-1.125Z" />
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M6.75 4.5v15M17.25 4.5v15M2.25 9h19.5M2.25 15h19.5M6.75 9h.008v.008H6.75V9Zm0 6h.008v.008H6.75V15Zm10.5-6h.008v.008h-.008V9Zm0 6h.008v.008h-.008V15Z" />
  </svg>
);

/** production — sliders de mezcla */
const ProductionIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5M4.5 12h9.75M4.5 12a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M16.5 12h3.75M16.5 18h3.75M16.5 18a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H13.5" />
  </svg>
);

// ── Mapa id de curso → componente ícono ──────────────────────────────────────
// Mismo patrón que DEST_ICONS en GeneralDonationPanel.
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

// ── Íconos semánticos para la UI del panel ────────────────────────────────────

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ── Componente principal ──────────────────────────────────────────────────────
export const AcademyDonationPanel = () => {
  const { t } = useTranslation('donations');
  const [donorMessage, setDonorMessage] = useState('');

  return (
    <section
      id="academy-panel"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Columna izquierda ── */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {t('academy.kicker')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
              {t('academy.title')}
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-soft dark:text-surface-cream">
              {t('academy.desc')}
            </p>

            <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-brand-amber">
                <IconInfo />
                {t('academy.notice')}
              </p>
              <p className="mt-1 text-xs leading-5 text-dark-soft dark:text-surface-cream">
                {t('academy.noticeText')}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
                {t('academy.coursesTitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {ACADEMY_COURSES.map((course) => {
                  const Icon = COURSE_ICONS[course.id];
                  return (
                    <span
                      key={course.id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface-cream px-3 py-1.5 text-xs font-medium text-dark-soft dark:border-white/10 dark:bg-dark dark:text-surface-cream"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                      {t(course.nameKey)}
                    </span>
                  );
                })}
              </div>
            </div>

            {donorMessage.trim().length > 0 && (
              <div className="mt-6 rounded-xl border border-brand-accent/20 bg-surface-cream p-4 dark:border-white/10 dark:bg-dark">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-dark dark:text-white">
                  <IconMessage />
                  {t('panel.sendReceiptTitle')}
                </p>
                <p className="mt-1 text-xs italic text-dark-soft dark:text-surface-cream">
                  "{donorMessage}"
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/5491160122363?text=${encodeURIComponent(t('panel.whatsappMessage', { message: donorMessage, category: t('academy.kicker') }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-accent px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:bg-brand-amber"
                  >
                    <IconWhatsApp />
                    {t('panel.sendWhatsApp')}
                  </a>
                  <a
                    href={`mailto:valoressinai@gmail.com?subject=${encodeURIComponent(t('panel.emailSubjectAcademy'))}&body=${encodeURIComponent(t('panel.emailBody', { message: donorMessage, category: t('academy.kicker') }))}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white"
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
              category="academy"
              accentColor="yellow"
              paymentLinks={{ mp: LINKS.academy.mp }}
              onMessage={setDonorMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};