// src/features/home/components/SponsorsSlider.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → sponsors.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json

import { useTranslation } from 'react-i18next';
import { sponsors } from '../constants/sponsors';

export const SponsorsSlider = () => {
  const { t } = useTranslation('home');

  // Duplicamos para el loop infinito sin saltos visuales
  const track = [...sponsors, ...sponsors];

  return (
    <>
      {/* Animación del marquee — declarada aquí porque no forma parte del
          sistema global de Tailwind y es exclusiva de este componente */}
      <style>{`
        @keyframes sponsors-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sponsors-animate {
          animation: sponsors-marquee 40s linear infinite;
        }
        .sponsors-track:hover .sponsors-animate {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .sponsors-animate { animation: none; }
        }
      `}</style>

      <section
        aria-label={t('sponsors.ariaLabel')}
        className="border-t border-black/5 bg-gray-50/50 py-12 dark:border-white/5 dark:bg-dark"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-dark-soft/80 dark:text-gray-mid">
            {t('sponsors.title')}
          </p>
        </div>

        {/* Contenedor con fade en los extremos */}
        <div
          className="sponsors-track relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <div
            className="sponsors-animate flex w-max gap-6 py-2"
            role="list"
            aria-label={t('sponsors.title')}
          >
            {track.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                role="listitem"
                title={sponsor.name}
                className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-6 shadow-xs transition-all duration-300 ease-out hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-dark-soft dark:hover:border-white/10"
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-13 max-w-full object-contain grayscale opacity-75 contrast-75 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};