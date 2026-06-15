// src/features/what-we-offer/components/HeroOffer.tsx
//
// Estado y efecto del video → useVideoPlayback
// Datos (claims)            → construidos desde i18n con getHeroClaims(t)
// Tipos                     → types/what-we-offer.ts
// Este componente solo renderiza.

import { useTranslation } from 'react-i18next'
import { useVideoPlayback } from '../hooks/useVideoPlayback'
import { getHeroClaims } from '../constants/hero'

// ── Íconos inline — son internos del componente, no se comparten ─────────────

const IconPause = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
)

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
    <path d="M6 4.75a.75.75 0 0 1 1.14-.643l11.5 7.25a.75.75 0 0 1 0 1.286l-11.5 7.25A.75.75 0 0 1 6 19.25V4.75z" />
  </svg>
)

// ── Componente ────────────────────────────────────────────────────────────────

export const HeroOffer = () => {
  const { t } = useTranslation('what-we-offer')
  const { videoRef, isPlaying, togglePlayback } = useVideoPlayback()

  // Se reconstruye solo cuando cambia el idioma (t es estable por referencia
  // dentro del mismo locale, cambia al cambiar idioma → useMemo no agrega valor).
  const claims = getHeroClaims(t)

  return (
    <div className="bg-[#111110]">
      <section
        className="relative isolate overflow-hidden"
        style={{ minHeight: '100svh' }}
        aria-labelledby="ofrece-hero-heading"
      >
        {/* Video full-bleed */}
        <video
          ref={videoRef}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img/poster/video_sinai_poster.jpg"
          aria-label={t('hero.video.ariaLabel')}
        >
          <source src="/img/videos/video_sinai.webm" type="video/webm" />
          <source src="/img/videos/video_sinai.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(105deg, rgba(1,1,1,0.52) 0%, rgba(1,1,1,0.28) 55%, rgba(1,1,1,0.05) 100%)',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/10" aria-hidden="true" />

        {/* Contenido */}
        <div
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:py-24"
          style={{ minHeight: 'inherit' }}
        >
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3" aria-hidden="true">
              {/* <span className="h-px w-5 shrink-0 bg-brand-amber" /> */}
              <span className="type-kicker text-brand-accent">
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* H1
                La construcción titleLine1 + titleLine2 + titleAccent permite
                controlar el salto de línea y el color del acento desde el JSON,
                sin necesidad de interpolación con componentes React (Trans).
            */}
            <h1
              id="ofrece-hero-heading"
              className="type-display sm:text-5xl lg:text-[3.2rem]"
            >
              {t('hero.titleLine1')}<br />
              {t('hero.titleLine2')}{' '}
              <em className="not-italic text-brand-accent">
                {t('hero.titleAccent')}
              </em>
            </h1>

            {/* Descripción */}
            <p className="type-body mt-5 text-white/70 lg:text-lg">
              {t('hero.description')}
            </p>

            {/* Ubicación */}
            <div className="mt-4 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 shrink-0 text-brand-amber/90"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
              </svg>
              <span className="type-body text-brand-amber/90 tracking-[0.06em]">
                {t('hero.location')}
              </span> 
            </div>

            {/* Claims */}
            <div
              className="mt-8 border-t border-white/12 pt-6"
              role="list"
              aria-label={t('hero.claimsAriaLabel')}
            >
              <div className="flex flex-col gap-5">
                {claims.map((claim) => (
                  <div key={claim.key} className="flex gap-3" role="listitem">
                    {/* <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                      aria-hidden="true"
                    /> */}
                    <div>
                      <p className="type-kicker mb-1 text-brand-amber/90">
                        {claim.label}
                      </p>
                      <p className="type-body-sm text-white/65">
                        {claim.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Botón pausa/play — WCAG 2.1 criterio 2.2.2 */}
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? t('hero.video.pauseAriaLabel') : t('hero.video.playAriaLabel')}
          aria-pressed={!isPlaying}
          className="absolute bottom-5 left-5 z-20 flex items-center gap-1.5 rounded-full border border-dark/15 bg-white/40 px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-dark/25 hover:text-dark/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber type-caption text-dark/55 font-medium tracking-[0.08em]"
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
          <span>{isPlaying ? t('hero.video.pauseLabel') : t('hero.video.playLabel')}</span>
        </button>
      </section>

      {/* Caption bar */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#0e0e0d] px-6 py-2.5 sm:px-10">
        <span className="type-caption text-white/25 tracking-[0.02em]">
          {t('hero.captionBar.description')}
        </span>
        <span className="type-caption flex items-center gap-1.5 text-white/25">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 shrink-0 text-brand-amber/40" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
          </svg>
          {t('hero.captionBar.address')}
        </span>
      </div>
    </div>
  )
}