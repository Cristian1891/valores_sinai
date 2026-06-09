// src/features/que-ofrecemos/components/HeroOffer.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface Claim {
  key: string;
  label: string;
  text: string;
}

const CLAIMS: Claim[] = [
  {
    key: 'espacios',
    label: 'Espacios para todos',
    text: 'Niños, jóvenes y familias crecen en educación, cultura, deporte y espiritualidad.',
  },
  {
    key: 'crecimiento',
    label: 'Tu lugar de crecimiento',
    text: 'Transformación de vidas a través del amor al prójimo, la solidaridad y la paz.',
  },
];

const IconPause = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3" aria-hidden="true">
    <path d="M6 4.75a.75.75 0 0 1 1.14-.643l11.5 7.25a.75.75 0 0 1 0 1.286l-11.5 7.25A.75.75 0 0 1 6 19.25V4.75z" />
  </svg>
);

export const HeroOffer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) { videoRef.current?.pause(); setIsPlaying(false); }
      else { videoRef.current?.play(); setIsPlaying(true); }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const togglePlayback = () => {
    if (isPlaying) { videoRef.current?.pause(); setIsPlaying(false); }
    else { videoRef.current?.play(); setIsPlaying(true); }
  };

  return (
    <div className="bg-[#111110]">
      <section
        className="relative isolate overflow-hidden"
        style={{ minHeight: 'min(580px, 88svh)' }}
        aria-labelledby="ofrece-hero-heading"
      >
        {/* Barras de acento — firma visual de la sección */}
        <div className="absolute inset-x-0 top-0 z-10 h-[3px] bg-brand-accent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[3px] bg-brand-accent" aria-hidden="true" />

        {/* Video full-bleed */}
        <video
          ref={videoRef}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img/mejores_fotos_canchas/cancha_futbol_vacia_2.jpg"
          aria-label="Video ambiental de las instalaciones de Valores Sinaí"
        >
          <source src="/img/Video_predio.mp4" type="video/mp4" />
          <source src="/img/Video_predio.webm" type="video/webm" />
        </video>

        {/* Overlay asimétrico: denso izquierda donde vive el texto */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(105deg, rgba(1,1,1,0.88) 0%, rgba(1,1,1,0.65) 50%, rgba(1,1,1,0.2) 100%)',
          }}
        />
        {/* Capa base para legibilidad mínima en toda la imagen */}
        <div className="absolute inset-0 -z-10 bg-black/30" aria-hidden="true" />

        {/* Contenido */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-5 shrink-0 bg-brand-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent/75">
                Nuestros espacios · Pres. Derqui
              </span>
            </div>

            {/* H1 */}
            <h1
              id="ofrece-hero-heading"
              className="font-serif text-[2.3rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl"
            >
              Un lugar diseñado<br />
              para{' '}
              <em className="not-italic text-brand-accent">vos</em>
            </h1>

            {/* Descripción */}
            <p className="mt-5 text-[14px] leading-[1.8] text-white/60 lg:text-[13.5px]">
              Descubrí las instalaciones de Valores Sinaí, diseñadas para
              alojamiento, alimentación, recreación, eventos y encuentros
              comunitarios.
            </p>

            {/* Ubicación */}
            <div className="mt-4 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-3.5 w-3.5 shrink-0 text-brand-accent/50"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
              </svg>
              <span className="text-[11px] tracking-[0.06em] text-white/35">
                Av. Juan Domingo Perón 3251, Pres. Derqui
              </span>
            </div>

            {/* Claims */}
            <div
              className="mt-8 border-t border-white/[0.08] pt-6"
              role="list"
              aria-label="Pilares de Valores Sinaí"
            >
              <div className="flex flex-col gap-5">
                {CLAIMS.map((claim, i) => (
                  <div key={claim.key} className="flex gap-3" role="listitem">
                    <span
                      className="mt-0.5 w-4 shrink-0 font-sans text-[11px] font-bold tabular-nums tracking-[0.04em] text-brand-accent/50"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
                        {claim.label}
                      </p>
                      <p className="text-[12.5px] leading-[1.65] text-white/60">
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
          aria-label={isPlaying ? 'Pausar video de fondo' : 'Reproducir video de fondo'}
          aria-pressed={!isPlaying}
          className="absolute bottom-5 left-5 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium tracking-[0.08em] text-white/45 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          {isPlaying ? <IconPause /> : <IconPlay />}
          <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
        </button>
      </section>

      {/* Caption bar */}
      <div className="flex items-center justify-between border-t border-white/[0.05] bg-[#0e0e0d] px-6 py-2.5 sm:px-10">
        <span className="text-[11px] tracking-[0.02em] text-white/25">
          Vista general de nuestras instalaciones
        </span>
        <span className="flex items-center gap-1.5 text-[11px] text-white/25">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 shrink-0 text-brand-accent/40" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
          </svg>
          Av. Juan Domingo Perón 3251
        </span>
      </div>
    </div>
  );
};