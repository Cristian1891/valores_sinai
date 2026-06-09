import React from 'react';
import { useTranslation } from 'react-i18next';
import { sponsors } from '../constants/sponsors';

export const SponsorsSlider: React.FC = () => {
  const { t } = useTranslation('common');

  // Duplicamos el array para el loop infinito sin saltos
  const track = [...sponsors, ...sponsors];

  return (
    <>
      {/* Estilos embebidos optimizados para el comportamiento del Slider */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sponsors-animate {
          animation: marquee 40s linear infinite;
        }
        .sponsors-track:hover .sponsors-animate {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .sponsors-animate { animation: none; }
        }
      `}</style>

      <section
        aria-label={t('sponsors.ariaLabel', 'Empresas que nos apoyan')}
        className="border-t border-black/5 bg-gray-50/50 py-12 dark:border-white/5 dark:bg-dark"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título de sección con espaciado mejorado */}
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-dark-soft/80 dark:text-gray-mid">
            {t('sponsors.title', 'Empresas que nos apoyan')}
          </p>
        </div>

        {/* Contenedor con fade difuminado en los extremos (UX Premium) */}
        <div
          className="sponsors-track relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          {/* Track del slider con gap optimizado */}
          <div
            className="sponsors-animate flex w-max gap-6 py-2"
            role="list"
            aria-label="Lista de empresas"
          >
            {track.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                role="listitem"
                title={sponsor.name}
                className="
                  group flex h-24 w-48 shrink-0 items-center justify-center
                  rounded-2xl border border-black/5 bg-white px-6
                  shadow-xs transition-all duration-300 ease-out
                  hover:border-black/10 hover:shadow-md
                  dark:border-white/5 dark:bg-dark-soft dark:hover:border-white/10
                "
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-13 max-w-full object-contain
                    grayscale opacity-75 contrast-75
                    transition-all duration-300 ease-in-out
                    group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};