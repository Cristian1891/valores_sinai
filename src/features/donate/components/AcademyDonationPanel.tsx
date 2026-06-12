// src/features/donate/components/AcademyDonationPanel.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DonationForm }    from './DonationForm';
import { ACADEMY_COURSES} from '../constants/donationConstants';

// Re-export paymentLinks from the new location
import { PAYMENT_LINKS as LINKS } from '../constants/paymentLinks';

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
            <p className="mt-4 text-sm leading-7 text-dark-soft dark:text-gray-mid">
              {t('academy.desc')}
            </p>

            <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
              <p className="text-xs font-semibold text-brand-amber">
                ℹ️ {t('academy.notice')}
              </p>
              <p className="mt-1 text-xs leading-5 text-dark-soft dark:text-gray-mid">
                {t('academy.noticeText')}
              </p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
                {t('academy.coursesTitle')}
              </p>
              <div className="flex flex-wrap gap-2">
                {ACADEMY_COURSES.map((course) => (
                  <span
                    key={course.id}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface-cream px-3 py-1.5 text-xs font-medium text-dark-soft dark:border-white/10 dark:bg-dark dark:text-gray-mid"
                  >
                    <span aria-hidden="true">{course.emoji}</span>
                    {t(course.nameKey)}
                  </span>
                ))}
              </div>
            </div>

            {donorMessage.trim().length > 0 && (
              <div className="mt-6 rounded-xl border border-brand-accent/20 bg-surface-cream p-4 dark:border-white/10 dark:bg-dark">
                <p className="text-xs font-semibold text-dark dark:text-white">
                  💬 {t('panel.sendReceiptTitle')}
                </p>
                <p className="mt-1 text-xs italic text-dark-soft dark:text-gray-mid">
                  "{donorMessage}"
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/5491160122363?text=${encodeURIComponent(t('panel.whatsappMessage', { message: donorMessage, category: t('academy.kicker') }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-accent px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:bg-brand-amber"
                  >
                    💬 {t('panel.sendWhatsApp')}
                  </a>
                  <a
                    href={`mailto:valoressinai@gmail.com?subject=${encodeURIComponent(t('panel.emailSubjectAcademy'))}&body=${encodeURIComponent(t('panel.emailBody', { message: donorMessage, category: t('academy.kicker') }))}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white"
                  >
                    ✉️ {t('panel.sendEmail')}
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