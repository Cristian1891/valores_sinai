// src/features/home/components/SponsorsSlider.tsx
//
// CORRECCIÓN PRINCIPAL: se elimina el bloque <style> con @keyframes sponsors-marquee.
// Ese keyframe y las clases .sponsors-animate, .sponsors-track ya están declarados
// en src/index.css como animaciones globales. Duplicarlos aquí causaba:
//   — doble declaración del keyframe (desperdicio)
//   — posible conflicto en React Strict Mode (doble mount/unmount inyecta y elimina el <style>)
//   — inconsistencia: si se modifica la animación en index.css, el componente la ignora

import { useTranslation } from 'react-i18next';
import { sponsors } from '../constants/sponsors';

export const SponsorsSlider = () => {
  const { t } = useTranslation('home');
  const track = [...sponsors, ...sponsors];

  return (
    <section
      aria-label={t('sponsors.ariaLabel')}
      className="border-t border-black/5 bg-gray-50/50 py-12 dark:border-white/5 dark:bg-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*
          CORRECCIÓN: type-kicker reemplaza la combinación hardcodeada.
          Se añade text-center para mantener el alineado original.
        */}
        <p className="mb-8 text-center type-kicker text-brand-accent dark:text-brand-amber">
          {t('sponsors.title')}
        </p>
      </div>

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
              className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-white px-6 shadow-xs transition-all duration-300 ease-out hover:border-black/10 hover:shadow-md dark:border-white/5 dark:bg-gray-mid dark:hover:border-white/10"
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
  );
};