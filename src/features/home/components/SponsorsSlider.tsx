// src/features/home/components/SponsorsSlider.tsx
//
// DECISIONES DE DISEÑO (2026):
//
// 1. TAMAÑO DE LOGOS — best practice para sliders de sponsors en ONGs/asociaciones:
//    Tarjetas h-28 w-56 con logos max-h-16. Suficiente para leer el nombre/marca
//    sin dominar visualmente la sección. El estándar de la industria (Stripe, GitHub,
//    etc.) usa tarjetas que permiten al logo respirar con padding generoso.
//
// 2. GRAYSCALE POR DEFECTO + COLOR EN HOVER — práctica estándar confirmada en 2026:
//    - Grayscale unifica la paleta y evita que logos coloridos compitan con la
//      identidad visual de la asociación (brand-accent amarillo).
//    - El hover con color original funciona como micro-interacción que recompensa
//      al usuario curioso y da información sin ruido visual constante.
//    - NO se recomienda mostrar color siempre en sliders de sponsors: genera
//      competencia visual y distrae del contenido principal de la página.
//
// 3. SIN hover en tarjetas del slider animado — el hover en elementos que se
//    mueven crea una UX confusa (el elemento escapa del cursor). Solo se aplica
//    el cambio de color del logo, que es suficiente feedback.

import { useTranslation } from 'react-i18next';
import { sponsors } from '../constants/sponsors';

export const SponsorsSlider = () => {
  const { t } = useTranslation('home');
  // Duplicamos el array para crear el efecto de loop infinito sin cortes
  const track = [...sponsors, ...sponsors];

  return (
    <section
      aria-label={t('sponsors.ariaLabel')}
      className="border-t border-black/5 bg-gray-50/50 py-14 dark:border-white/5 dark:bg-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center type-kicker text-brand-accent dark:text-brand-amber">
          {t('sponsors.title')}
        </p>
      </div>

      <div
        className="sponsors-track relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="sponsors-animate flex w-max gap-5 py-3"
          role="list"
          aria-label={t('sponsors.title')}
        >
          {track.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              role="listitem"
              title={sponsor.name}
              // h-28 w-56: tarjeta más alta y ancha para que el logo respire
              className="group flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-white px-7 shadow-xs dark:border-white/5 dark:bg-dark-soft"
            >
              <img
                src={sponsor.logo}
                alt={`Logo de ${sponsor.name}`}
                loading="lazy"
                decoding="async"
                // max-h-16 (64px): sube desde 52px anterior — logo legible sin saturar
                // grayscale + opacity reducida por defecto; color original en hover
                className="max-h-16 max-w-full object-contain grayscale opacity-60 contrast-75 transition-all duration-400 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};