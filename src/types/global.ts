import type { ReactNode } from 'react';

// Exportamos el tipo para el Theme
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Exportamos el tipo para el Navbar
export interface MenuItem {
  key: string;
  url: string;
  submenu?: { key: string; url: string }[];
}


export interface SocialLink {
  key: string;
  href: string;
  label: string;
  icon: ReactNode;
}