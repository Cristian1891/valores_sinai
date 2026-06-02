// src/components/layout/Navbar.tsx
import { useNavbar } from '../../hooks/useNavbar';
import { Link, NavLink } from 'react-router';
import { MENU_ITEMS } from '../../constants/navigation';
import { LANGUAGES } from '../../constants/languages';

export const Navbar = () => {
  const {
    t,
    i18n,
    isDark,
    isMobileOpen,
    openDropdown,
    isScrolled,
    setIsMobileOpen,
    toggleDropdown,
    changeLang,
    toggleTheme,
  } = useNavbar();

  // Clases base optimizadas con flexbox para la alineación perfecta del badge
  const navLinkClass =
    'font-sans text-sm font-semibold text-white inline-flex items-center gap-1.5 ' +
    'hover:text-brand-accent transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ' +
    'rounded px-2 py-2 cursor-pointer';

  const dropdownItemClass =
    'w-full text-left px-4 py-2 font-sans text-sm text-dark-soft ' +
    'hover:bg-brand-blue/20 transition-colors duration-150 cursor-pointer';

  const mobileLinkClass =
    'flex items-center justify-between rounded-xl px-4 py-3 font-sans text-base font-semibold text-white ' +
    'hover:bg-white/5 hover:text-brand-accent transition-colors duration-200';

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 bg-dark transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/40' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            aria-label="Ir al inicio — Valores Sinaí"
          >
            <img
              src="/img/logo_sinai.png"
              alt="Logo Valores Sinaí"
              className="h-27 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {MENU_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                to={item.url}
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? 'text-brand-accent' : ''}`
                }
              >
                <span>{t(`navbar.${item.key}`)}</span>
                
                {/* Inyección semántica del Badge para Academia en Escritorio */}
                {item.key === 'academy' && (
                  <span className="rounded-full bg-brand-accent/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-amber select-none">
                    {t('navbar.soon', 'Pronto')}
                  </span>
                )}
              </NavLink>
            ))}

            <Link
              to="/donar"
              className="ml-2 rounded-md bg-brand-accent px-4 py-2 font-sans text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber"
            >
              {t('navbar.donate')}
            </Link>

            {/* Selector de idioma */}
            <div className="relative ml-1">
              <button
                type="button"
                data-dropdown-toggle
                onClick={() => toggleDropdown('lang')}
                className={`${navLinkClass} flex items-center gap-1`}
                aria-haspopup="menu"
                aria-expanded={openDropdown === 'lang'}
                aria-label={t('navbar.language')}
              >
                <span className="text-xs font-bold uppercase tracking-wider">
                  {i18n.language.slice(0, 2)}
                </span>
              </button>

              {openDropdown === 'lang' && (
                <div
                  data-dropdown
                  role="menu"
                  className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl bg-white py-1 shadow-xl ring-1 ring-black/5"
                >
                  {LANGUAGES.map((lng) => (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => changeLang(lng)}
                      className={dropdownItemClass}
                      role="menuitem"
                    >
                      {t(`navbar.languages.${lng}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded p-2 font-sans text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            className="rounded p-2 font-sans text-white transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent md:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-dark md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {MENU_ITEMS.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.url}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `${mobileLinkClass} ${isActive ? 'text-brand-accent' : ''}`
                  }
                >
                  <span>{t(`navbar.${item.key}`)}</span>

                  {/* Inyección semántica del Badge para Academia en Móvil */}
                  {item.key === 'academia' && (
                    <span className="rounded-md bg-brand-accent/20 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-amber select-none">
                      {t('navbar.soon', 'Pronto')}
                    </span>
                  )}
                </NavLink>
              ))}

              <Link
                to="/donar"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-accent px-4 py-3 font-sans text-base font-bold text-dark transition-colors hover:bg-brand-amber"
              >
                {t('navbar.donate')}
              </Link>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t('navbar.language')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lng) => (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => changeLang(lng)}
                      className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                        i18n.language.slice(0, 2) === lng
                          ? 'bg-brand-accent text-dark'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      {t(`navbar.languages.${lng}`)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left font-sans text-base font-semibold text-white transition-colors hover:bg-white/10 hover:text-brand-accent"
              >
                {isDark ? '☀️ Tema claro' : '🌙 Tema oscuro'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};