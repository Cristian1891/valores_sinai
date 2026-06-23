import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './useTheme'; 

export const useNavbar = () => {
  const { t, i18n } = useTranslation('common');
  const { isDark, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

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