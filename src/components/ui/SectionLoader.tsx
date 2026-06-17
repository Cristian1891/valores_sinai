// src/components/ui/SectionLoader.tsx
//
// Loader de sección — variante del AppLoader para contenido asíncrono
// dentro de una página ya renderizada.
//
// DIFERENCIA CON AppLoader:
//   AppLoader  → position: fixed, inset-0, z-50. Bloquea toda la pantalla.
//                Correcto para: carga inicial de la app, navegación entre rutas.
//   SectionLoader → position: relative, sin overlay. Ocupa el espacio de la sección.
//                Correcto para: fetch de datos en una sección específica.
//
// PROP minHeight:
//   Define la altura mínima del contenedor mientras carga.
//   Debe ser aproximada a la altura real del contenido que va a reemplazar
//   para evitar layout shift (CLS) cuando llegan los datos.
//   Por defecto: 320px — valor razonable para 3 cards de testimoniales en mobile.

import { useEffect, useState } from 'react';

interface SectionLoaderProps {
  /** Altura mínima del contenedor. Debe aproximarse a la altura real del contenido. */
  minHeight?: number | string;
  /** Label accesible para lectores de pantalla. */
  label?: string;
}

export const SectionLoader = ({
  minHeight = 320,
  label = 'Cargando contenido...',
}: SectionLoaderProps) => {
  // El mismo patrón de fade-in del AppLoader: evita el flash blanco en renders rápidos.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      role="status"
      aria-label={label}
      style={{ minHeight }}
      className={[
        'flex flex-col items-center justify-center rounded-2xl',
        'bg-dark/20 dark:bg-white/5',
        'transition-opacity duration-500 ease-out',
        mounted ? 'opacity-100' : 'opacity-0',
      ].join(' ')}
    >
      <div className="relative flex flex-col items-center">

        {/* Anillo exterior + spinner — idéntico al AppLoader */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-white/5" />
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-accent border-r-brand-accent/40 animate-spin" />

          {/* Logo con pulse — misma proporción que AppLoader pero escalado a la sección */}
          <img
            src="/img/logo_sinai.png"
            alt=""
            aria-hidden="true"
            className="h-24 w-24 object-contain scale-[2] animate-pulse select-none filter drop-shadow-[0_0_10px_rgba(254,196,13,0.15)]"
            decoding="sync"
            
          />
        </div>

        {/* Label visible — el AppLoader lo tiene solo para screen readers */}
        {/* <p className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-gray-mid animate-pulse">
          {label}
        </p> */}

      </div>

      {/* Texto accesible para screen readers */}
      {/* <span className="sr-only">{label}</span> */}
    </div>
  );
};