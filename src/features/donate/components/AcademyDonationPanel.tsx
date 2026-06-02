// src/features/donations/components/AcademyDonationPanel.tsx
//
// Panel de donación para la Academia Valores Sinaí.
// Muestra los cursos disponibles de forma informativa, pero la donación
// es al fondo de becas general de la Academia.

import { useTranslation } from 'react-i18next';
import { DonationForm } from './DonationForm';
import { PAYMENT_LINKS } from '../config/paymentLinks';

// Cursos de la Academia — solo informativos
const ACADEMY_COURSES = [
  { id: 'video', emoji: '🎬', nameKey: 'academy.courses.video' },
  { id: 'photo', emoji: '📷', nameKey: 'academy.courses.photo' },
  { id: 'audio', emoji: '🎵', nameKey: 'academy.courses.audio' },
  { id: 'direction', emoji: '🎥', nameKey: 'academy.courses.direction' },
  { id: 'marketing', emoji: '📱', nameKey: 'academy.courses.marketing' },
  { id: 'streaming', emoji: '📡', nameKey: 'academy.courses.streaming' },
  { id: 'photo_cine', emoji: '🎞️', nameKey: 'academy.courses.photoCine' },
  { id: 'production', emoji: '🎙️', nameKey: 'academy.courses.production' },
];

export const AcademyDonationPanel = () => {
  const { t } = useTranslation('donations');

  return (
    <section
      id="academy-panel"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Columna izquierda — info sobre la Academia */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {t('academy.kicker', 'Academia Valores Sinaí')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
              {t('academy.title', 'Financiá becas para jóvenes')}
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-soft dark:text-gray-mid">
              {t(
                'academy.desc',
                'Tu donación va al fondo de becas general de la Academia. La asociación distribuye los recursos según la necesidad de cada estudiante y cada curso.',
              )}
            </p>

            {/* Aviso importante */}
            <div className="mt-5 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
              <p className="text-xs font-semibold text-brand-amber">
                ℹ️ {t('academy.notice', 'Sobre la distribución de fondos')}
              </p>
              <p className="mt-1 text-xs leading-5 text-dark-soft dark:text-gray-mid">
                {t(
                  'academy.noticeText',
                  'Tu donación se destina a la Academia en general. Los cursos que ves a continuación son solo informativos: la junta directiva de Valores Sinaí asigna las becas según los criterios y necesidades vigentes.',
                )}
              </p>
            </div>

            {/* Cursos — solo informativos */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
                {t('academy.coursesTitle', 'Cursos que impulsás con tu donación')}
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

            {/* Impacto visual */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: '8', labelKey: 'academy.stat1', label: 'Cursos disponibles' },
                { value: '+120', labelKey: 'academy.stat2', label: 'Estudiantes activos' },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-black/5 bg-surface-cream p-4 dark:border-white/5 dark:bg-dark"
                >
                  <p className="text-2xl font-bold text-brand-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-dark-soft dark:text-gray-mid">
                    {t(stat.labelKey, stat.label)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div>
            <DonationForm
              category="academy"
              accentColor="yellow"
              paymentLinks={PAYMENT_LINKS.academy}
            />
          </div>
        </div>
      </div>
    </section>
  );
};