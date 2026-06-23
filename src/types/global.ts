import type { ReactNode } from 'react';
import type { TFunction } from 'i18next';
import type { LANGUAGES } from '../constants/languages';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

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
  hoverColorClass: string;
}


export interface UseCountryCodeResult {
  countryCode: string | null;
  loading: boolean;
}

export type Variant = 'desktop' | 'mobile';

export interface ThemeToggleProps {
  variant: Variant;
  isDark: boolean;
  onToggle: () => void; 
  t: TFunction;
}

export interface NavLinksProps {
  variant: Variant;
  t: TFunction;
  onLinkClick?: () => void;
}

export interface LangSelectorProps {
  variant: Variant;
  currentLang: string;
  languages: typeof LANGUAGES;
  t: TFunction;
  openDropdown: string | null;
  toggleDropdown: (key: string) => void;
  changeLang: (lng: string) => void;
}

export interface DonateButtonProps {
  variant: Variant;
  label: string;
  onClick?: () => void;
}

export interface IconProps {
  className?: string;
}


export type AppLoaderProps = {
  overlay?: boolean;
};

export interface SectionLoaderProps {
  minHeight?: number | string;
  label?: string;
}

export type FooterNavLink = {
  readonly key: string;
  readonly to:  string;
};

