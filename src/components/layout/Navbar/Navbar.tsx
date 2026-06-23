import { Menu, X } from 'lucide-react';
import { useNavbar } from '../../../hooks/useNavbar';
import { LANGUAGES } from '../../../constants/languages';
import { NavLogo } from './NavLogo';
import { NavLinks } from './NavLinks';
import { DonateButton } from './DonateButton';
import { LangSelector } from './LangSelector';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const {
    t, i18n, isDark, isMobileOpen, openDropdown, isScrolled,
    setIsMobileOpen, toggleDropdown, changeLang, toggleTheme, closeMobileMenu,
  } = useNavbar();

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={[
        'fixed top-0 left-0 right-0 z-50 bg-dark transition-shadow duration-300',
        isScrolled ? 'shadow-lg shadow-black/40' : '',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">

          <NavLogo />

          <div className="hidden items-center gap-0.5 lg:flex">
            <NavLinks variant="desktop" t={t} />
            <DonateButton variant="desktop" label={t('navbar.donate')} />
            <LangSelector
              variant="desktop"
              currentLang={i18n.language}
              languages={LANGUAGES}
              t={t}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              changeLang={changeLang}
            />
            <ThemeToggle variant="desktop" isDark={isDark} onToggle={toggleTheme} t={t} />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            className="rounded p-2 text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent lg:hidden"
          >
            {isMobileOpen
              ? <X size={22} aria-hidden="true" />
              : <Menu size={22} aria-hidden="true" />
            }
          </button>

        </div>
      </div>

      {isMobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-dark lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              <NavLinks variant="mobile" t={t} onLinkClick={closeMobileMenu} />
              <DonateButton variant="mobile" label={t('navbar.donate')} onClick={closeMobileMenu} />
              <LangSelector
                variant="mobile"
                currentLang={i18n.language}
                languages={LANGUAGES}
                t={t}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                changeLang={changeLang}
              />
              <ThemeToggle variant="mobile" isDark={isDark} onToggle={toggleTheme} t={t} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};