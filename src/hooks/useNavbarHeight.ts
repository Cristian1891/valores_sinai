// src/hooks/useNavbarHeight.ts
//
// Mide la altura real del elemento navbar y la publica como CSS custom property
// en el :root, para que cualquier componente pueda usarla con var(--navbar-h).
//
// Por qué este approach es superior a hardcodear un valor:
//
//   1. DINÁMICO: si la navbar crece (menú mobile abierto, banner de aviso,
//      cambio de fuente del sistema), el valor se actualiza automáticamente.
//
//   2. CROSS-DEVICE: en Android, el viewport incluye a veces la barra del
//      browser y otras no. Con ResizeObserver medimos lo que el browser
//      realmente renderizó, sin suposiciones.
//
//   3. UNA FUENTE DE VERDAD: Layout.tsx, Hero.tsx, cualquier sección con
//      "full viewport minus navbar" usan la misma variable CSS en lugar
//      de duplicar el valor.
//
// Uso:
//   const navbarRef = useNavbarHeight();
//   <nav ref={navbarRef} ...>
//
// En CSS / Tailwind:
//   style={{ paddingTop: 'var(--navbar-h)' }}
//   style={{ minHeight: 'calc(100svh - var(--navbar-h))' }}

import { useRef, useEffect } from 'react';

export function useNavbarHeight() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Setea el valor inicial antes de que el observer arranque
    const update = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--navbar-h', `${h}px`);
    };

    update();

    // ResizeObserver detecta cambios de altura en tiempo real:
    // — menú mobile abriéndose
    // — cambios de fuente del sistema operativo
    // — rotación de pantalla
    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}