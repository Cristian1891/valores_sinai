import { useEffect, useState } from 'react';
import type { SectionLoaderProps } from '../../types/global';


export const SectionLoader = ({
  minHeight = 320,
  label = 'Cargando contenido...',
}: SectionLoaderProps) => {
 
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

        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-white/5" />
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-accent border-r-brand-accent/40 animate-spin" />

          <img
            src="/img/logo_sinai.png"
            alt=""
            aria-hidden="true"
            className="h-24 w-24 object-contain scale-[2] animate-pulse select-none filter drop-shadow-[0_0_10px_rgba(254,196,13,0.15)]"
            decoding="sync"
            
          />
        </div>

      </div>

    </div>
  );
};