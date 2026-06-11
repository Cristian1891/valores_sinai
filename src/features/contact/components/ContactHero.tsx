// src/features/contact/components/ContactHero.tsx
import { useTranslation } from 'react-i18next';

export const ContactHero: React.FC = () => {
  const { t } = useTranslation('contact');

  // Lista de valores para el patrón visual de fondo
  const VALORES = ['Amor', 'Servicio', 'Unidad', 'Inclusión', 'Creatividad', 'Excelencia'];

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate overflow-hidden bg-[#0A0A0A] border-t border-white/5
                px-4 py-24 text-center sm:px-6 lg:px-8
                min-h-[55svh] flex flex-col items-center justify-center" // ← cambios acá
    >
      {/* Gradiente radial de fondo — Sincronizado con el sistema de diseño mediante opacidad */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-15"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, var(--color-brand-accent) 0%, transparent 70%)',
        }}
      />

      {/* Patrón tipográfico de valores — Textura visual institucional sofisticada */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 overflow-hidden opacity-[0.025] select-none"
      >
        {Array.from({ length: 6 }).map((_, groupIndex) => 
          VALORES.map((val, valIndex) => (
            <span
              key={`${groupIndex}-${valIndex}`}
              className="whitespace-nowrap font-sans text-5xl font-black uppercase tracking-widest text-white sm:text-6xl"
            >
              {val}
            </span>
          ))
        )}
      </div>

      <div className="relative mx-auto max-w-3xl z-10">
        {/* Título Principal — Enfoque en Inter (font-sans) con tracking ajustado */}
        <h1
          id="contact-hero-heading"
          className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {t('hero.title', 'Conectá con Valores Sinaí')}
        </h1>

        {/* Subtítulo — Optimizado para legibilidad y contraste WCAG */}
        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-8 text-white/80 sm:text-lg">
          {t(
            'hero.subtitle',
            'Estamos para ayudarte con tus proyectos educativos, eventos especiales y todo lo relacionado con nuestros servicios comunitarios.',
          )}
        </p>

        {/* Línea decorativa brand — Un toque sutil del color de acento para cerrar la sección */}
        <div
          aria-hidden="true"
          className="mx-auto mt-10 h-1 w-16 rounded-full bg-brand-accent opacity-80"
        />
      </div>
    </section>
  );
};

