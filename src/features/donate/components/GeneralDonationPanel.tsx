// src/features/donations/components/GeneralDonationPanel.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DonationForm } from './DonationForm';
import { PAYMENT_LINKS } from '../config/paymentLinks';

const SOLIDARITY_DESTINATIONS = [
  {
    id: 'events',
    emoji: '🎪',
    titleKey: 'solidarity.dest.events.title',
    descKey:  'solidarity.dest.events.desc',
  },
  {
    id: 'assistance',
    emoji: '🤲',
    titleKey: 'solidarity.dest.assistance.title',
    descKey:  'solidarity.dest.assistance.desc',
  },
  {
    id: 'infrastructure',
    emoji: '🏡',
    titleKey: 'solidarity.dest.infrastructure.title',
    descKey:  'solidarity.dest.infrastructure.desc',
  },
];

export const GeneralDonationPanel = () => {
  const { t } = useTranslation('donations');
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [donorMessage, setDonorMessage] = useState('');

  return (
    <section
      id="solidarity-panel"
      className="border-t border-black/5 bg-surface-cream px-4 py-14 dark:border-white/5 dark:bg-dark-soft sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Columna izquierda — info ── */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              {t('solidarity.kicker', 'Fondo Solidario')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
              {t('solidarity.title', 'Apoyá la comunidad directamente')}
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-soft dark:text-gray-mid">
              {t(
                'solidarity.desc',
                'El Fondo Solidario financia eventos comunitarios, asistencia a personas en situación vulnerable y proyectos de infraestructura del predio.',
              )}
            </p>

            {/* Destinos del fondo */}
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-dark dark:text-white">
                {t('solidarity.destinationsTitle', '¿A qué puede ir tu aporte?')}
              </p>
              {SOLIDARITY_DESTINATIONS.map((dest) => (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => setActiveDestination(activeDestination === dest.id ? null : dest.id)}
                  aria-expanded={activeDestination === dest.id}
                  className={`
                    w-full rounded-2xl border p-4 text-left transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber
                    ${activeDestination === dest.id
                      ? 'border-brand-amber bg-brand-amber/10'
                      : 'border-black/10 bg-white hover:border-brand-amber/50 dark:border-white/10 dark:bg-dark'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/10 text-xl"
                      aria-hidden="true"
                    >
                      {dest.emoji}
                    </span>
                    <p className="flex-1 text-sm font-semibold text-dark dark:text-white">
                      {t(dest.titleKey)}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 shrink-0 text-brand-amber transition-transform duration-200 ${activeDestination === dest.id ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {activeDestination === dest.id && (
                    <p className="mt-3 text-xs leading-5 text-dark-soft dark:text-gray-mid">
                      {t(dest.descKey)}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Versículo */}
            <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-amber bg-white py-4 pl-5 pr-4 dark:bg-dark">
              <p className="font-serif text-sm italic leading-7 text-dark-soft dark:text-gray-mid">
                {t('solidarity.quote', '"Cada uno según el don que ha recibido, minístrelo a los otros." — 1 Pedro 4:10')}
              </p>
            </blockquote>

            {/* Acceso rápido para enviar comprobante con el mensaje */}
            {donorMessage.trim().length > 0 && (
              <div className="mt-6 rounded-xl border border-brand-amber/20 bg-white p-4 dark:border-white/10 dark:bg-dark">
                <p className="text-xs font-semibold text-dark dark:text-white">
                  💬 Envianos tu mensaje junto al comprobante
                </p>
                <p className="mt-1 text-xs text-dark-soft dark:text-gray-mid italic">
                  "{donorMessage}"
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={`https://wa.me/5491160122363?text=${encodeURIComponent(`Hola, hice una donación al Fondo Solidario.\n\nMi mensaje: "${donorMessage}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-amber px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:bg-brand-accent"
                  >
                    💬 Enviar por WhatsApp
                  </a>
                  <a
                    href={`mailto:valoressinai@gmail.com?subject=Donaci%C3%B3n%20Fondo%20Solidario&body=${encodeURIComponent(`Hola, hice una donación al Fondo Solidario.\n\nMi mensaje: "${donorMessage}"`)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-surface-cream px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:border-brand-amber dark:border-white/10 dark:bg-dark-soft dark:text-white"
                  >
                    ✉️ Enviar por email
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Columna derecha — formulario ── */}
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