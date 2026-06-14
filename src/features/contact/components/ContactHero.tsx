// src/features/contact/components/ContactHero.tsx
//
// Datos (BACKGROUND_WORDS) → constants/contact.ts
// Este componente solo renderiza.

import { useTranslation } from 'react-i18next'
import { BACKGROUND_WORDS } from '../constants/contact'

// Número de repeticiones del patrón tipográfico de fondo.
// Lo suficiente para cubrir cualquier viewport sin coste perceptible de render.
const PATTERN_REPEAT = 6

export const ContactHero: React.FC = () => {
  const { t } = useTranslation('contact')

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate flex min-h-[55svh] flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-[#0A0A0A] px-4 py-24 text-center sm:px-6 lg:px-8"
    >
      {/* Gradiente radial de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-15"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, var(--color-brand-accent) 0%, transparent 70%)',
        }}
      />

      {/* Patrón tipográfico de valores — textura visual institucional */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex select-none flex-wrap items-center justify-center gap-x-10 gap-y-6 overflow-hidden opacity-[0.025]"
      >
        {Array.from({ length: PATTERN_REPEAT }).flatMap((_, groupIndex) =>
          BACKGROUND_WORDS.map((word) => (
            <span
              key={`${groupIndex}-${word}`}
              className="whitespace-nowrap font-sans text-5xl font-black uppercase tracking-widest text-white sm:text-6xl"
            >
              {word}
            </span>
          )),
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1
          id="contact-hero-heading"
          className="type-display sm:text-5xl lg:text-[3.2rem] text-white"
        >
          {t('hero.title')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-8 text-white/80 sm:text-lg">
          {t('hero.subtitle')}
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-10 h-1 w-16 rounded-full bg-brand-accent opacity-80"
        />
      </div>
    </section>
  )
}