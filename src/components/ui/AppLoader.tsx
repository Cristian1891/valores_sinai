// src/components/ui/AppLoader.tsx
import { useEffect, useState } from 'react';

type AppLoaderProps = {
  overlay?: boolean;
};

export const AppLoader = ({ overlay = true }: AppLoaderProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      role="status"
      aria-label="Cargando Valores Sinaí"
      className={`${
        overlay ? 'fixed inset-0 z-50' : 'relative'
      } flex flex-col items-center justify-center bg-dark transition-opacity duration-500 ease-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-white/5" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent border-r-brand-accent/40 animate-spin" />
          <img
            src="/img/logo_sinai.png"
            alt="Logo Valores Sinaí"
            className="h-20 w-20 object-contain animate-pulse select-none filter drop-shadow-[0_0_15px_rgba(254,196,13,0.15)]"
            decoding="sync"
          />
        </div>

        <h2 className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.3em] text-gray-mid animate-pulse">
          Valores Sinaí
        </h2>

        <span className="sr-only">Por favor espere, cargando la aplicación...</span>
      </div>
    </div>
  );
};