// src/components/layout/Navbar/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';
import type { TFunction } from 'i18next';

type Variant = 'desktop' | 'mobile';

interface ThemeToggleProps {
  variant: Variant;
  isDark: boolean;
  onToggle: () => void;
  t: TFunction;
}

export const ThemeToggle = ({ variant, isDark, onToggle, t }: ThemeToggleProps) => {
  const icon = isDark
    ? <Sun size={18} aria-hidden="true" className="fill-brand-accent text-brand-accent" strokeWidth={1.5} />
    : <Moon size={18} aria-hidden="true" className="fill-white/90 text-white" strokeWidth={1.5} />;

  if (variant === 'desktop') {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
        className="rounded p-2 text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        {icon}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 type-label text-white transition-colors hover:bg-white/10 hover:text-brand-accent"
    >
      {icon}
      <span>{isDark ? t('navbar.lightTheme', 'Tema claro') : t('navbar.darkTheme', 'Tema oscuro')}</span>
    </button>
  );
};