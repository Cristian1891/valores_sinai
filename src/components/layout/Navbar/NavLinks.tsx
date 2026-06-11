// src/components/layout/Navbar/NavLinks.tsx
import { NavLink } from 'react-router';
import type { TFunction } from 'i18next';
import { MENU_ITEMS } from '../../../constants/navigation';

type Variant = 'desktop' | 'mobile';

interface NavLinksProps {
  variant: Variant;
  t: TFunction;
  onLinkClick?: () => void;
}

const SoonBadge = ({ variant }: { variant: Variant }) => (
  <span className={[
    'font-bold uppercase tracking-wider text-brand-amber select-none bg-brand-accent/20 text-[10px]',
    variant === 'desktop' ? 'rounded-full px-1.5 py-0.5' : 'rounded-md px-2 py-0.5',
  ].join(' ')}>
    Pronto
  </span>
);

export const NavLinks = ({ variant, t, onLinkClick }: NavLinksProps) => {
  const isDesktop = variant === 'desktop';

  return (
    <>
      {MENU_ITEMS.map((item) => (
        <NavLink
          key={item.key}
          to={item.url}
          onClick={onLinkClick}
          className={({ isActive }) =>
            isDesktop
              ? [
                  'inline-flex items-center gap-1.5 rounded px-2.5 py-2 type-label',
                  'transition-colors duration-200 cursor-pointer',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent',
                  isActive ? 'text-brand-accent' : 'text-white hover:text-brand-accent',
                ].join(' ')
              : [
                  'flex items-center justify-between rounded-xl px-4 py-3 type-label',
                  'transition-colors duration-200',
                  isActive
                    ? 'text-brand-accent bg-brand-accent/5'
                    : 'text-white hover:bg-white/5 hover:text-brand-accent',
                ].join(' ')
          }
        >
          <span>{t(`navbar.${item.key}`)}</span>
          {item.key === 'academy' && <SoonBadge variant={variant} />}
        </NavLink>
      ))}
    </>
  );
};