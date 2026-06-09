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

export interface SocialLinkConfig {
  key: 'instagram' | 'facebook' | 'x';
  href: string;
  label: string;
  // Color de hover específico de cada red — valor fijo de marca
  hoverColorClass: string;
}