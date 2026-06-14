// src/components/layout/Layout.tsx
//
// Cambios respecto a la versión anterior:
//   — useNavigation() de React Router v7 detecta cuándo hay una navegación en curso
//   — Mientras navigation.state === 'loading', se muestra el AppLoader sobre el contenido
//   — ScrollRestoration resetea el scroll en cada navegación nueva (fix de UX crítico)
//   — ToastContainer con tema dinámico según isDark (fix de dark mode)

import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { AppLoader } from '../ui/AppLoader';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';


// Tiempo mínimo de navegación antes de mostrar el overlay.
// En DEV: 0 para ver el loader siempre durante desarrollo.
// En producción: 200ms evita el flash en navegaciones rápidas.
const NAV_LOADER_DELAY_MS = import.meta.env.DEV ? 0 : 200;

export const Layout = () => {
  const { isDark } = useTheme();

  // navigation.state puede ser: 'idle' | 'loading' | 'submitting'
  // 'loading' se activa cuando React Router está resolviendo una ruta nueva
  // (descargando el chunk lazy + ejecutando loaders si los hubiera)
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading';

  const [showLoader, setShowLoader] = useState(false);
 
  useEffect(() => {
    if (!isNavigating) {
      setShowLoader(false);
      return;
    }
    const timer = setTimeout(() => setShowLoader(true), NAV_LOADER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isNavigating]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      {/*
        ScrollRestoration:
        - Hace scroll a top en cada navegación nueva
        - Restaura la posición al usar Atrás/Adelante del browser
        Debe ir lo más arriba posible dentro del árbol del router.
      */}
      <ScrollRestoration />

      <Navbar />

      <main className="grow pt-2 lg:pt-10 bg-dark overflow-x-hidden">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <WhatsAppButton />
      <Footer />

      {showLoader && <AppLoader overlay />}

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        // Respeta el dark mode del ThemeContext en lugar de quedarse siempre en 'light'
        theme={isDark ? 'dark' : 'light'}
      />
    </div>
  );
};