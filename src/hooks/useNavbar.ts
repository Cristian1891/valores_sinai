import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// Asegurate de que la ruta coincida con dónde ubicaste finalmente el hook
import { useTheme } from './useTheme'; 

export const useNavbar = () => {
  const { t, i18n } = useTranslation('common');
  const { isDark, toggleTheme } = useTheme();

  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // 1. Scroll listener (Soluciona el warning de setIsScrolled)
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    // Usamos passive: true por buenas prácticas de rendimiento en eventos de scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2. Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown]') && !target.closest('[data-dropdown-toggle]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // 3. Cerrar menú móvil y dropdowns con Escape (Accesibilidad)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // 4. Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    // Limpieza al desmontar
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  // Funciones memoizadas para evitar re-renders innecesarios
  const toggleDropdown = useCallback((key: string) => {
    setOpenDropdown(prev => (prev === key ? null : key));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  const changeLang = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    setOpenDropdown(null);
    setIsMobileOpen(false);
  }, [i18n]);

  // Exponemos exactamente lo que el Navbar.tsx necesita
  return {
    t,
    i18n,
    isDark,
    toggleTheme,
    isMobileOpen,
    setIsMobileOpen,
    openDropdown,
    toggleDropdown,
    isScrolled,
    changeLang,
    closeMobileMenu,
  };
};