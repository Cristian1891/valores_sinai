// src/components/ui/AppLoader.tsx
import { useEffect, useState } from 'react';

export const AppLoader = () => {
  // Estado para manejar la opacidad y evitar parpadeos bruscos (UX de salida fluida)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pequeño ciclo de render para activar la transición de entrada CSS (Fade-in)
    const animationFrame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      role="status"
      aria-label="Cargando Valores Sinaí"
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-dark transition-opacity duration-500 ease-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Contenedor del Spinner Perimetral Moderno */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          {/* Anillo de fondo sutil */}
          <div className="absolute inset-0 rounded-full border-4 border-white/5" />
          
          {/* Anillo de carga animado con tus variables de Tailwind v4.3 */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent border-r-brand-accent/40 animate-spin" />

          {/* Logo Centralizado y Escalado */}
          <img
            src="/img/logo_sinai.png"
            alt="Logo Valores Sinaí"
            className="h-20 w-20 object-contain animate-pulse select-none filter drop-shadow-[0_0_15px_rgba(254,196,13,0.15)]"
            decoding="sync"
          />
        </div>

        {/* Texto de carga con tipografía Sans (Inter) y tracking elegante */}
        <h2 className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.3em] text-gray-mid animate-pulse">
          Valores Sinaí
        </h2>
        
        {/* Accesibilidad para lectores de pantalla */}
        <span className="sr-only">Por favor espere, cargando la aplicación...</span>
      </div>
    </div>
  );
};