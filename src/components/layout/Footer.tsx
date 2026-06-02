// src/components/layout/Footer.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { FOOTER_NAV_LINKS } from '../../constants/navigation';
import { SOCIAL_LINKS } from '../../constants/social-media';

export const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-dark-soft transition-colors duration-300 dark:bg-dark"
    >
      {/* Versículo destacado */}
      <div className="border-b border-brand-accent/30 px-4 py-4">
        <p className="mx-auto max-w-3xl text-center font-serif text-xs font-semibold uppercase tracking-wide text-brand-accent sm:text-sm">
          {t('footer.verse')}
        </p>
      </div>

      {/* Cuerpo principal */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Columna 1 — Logo */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link
              to="/"
              aria-label="Ir al inicio — Valores Sinaí"
              className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <img
                src="/img/logo_sinai.png"
                alt="Logo Valores Sinaí"
                className="h-16 w-16 object-contain"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <p className="max-w-50 text-center font-sans text-xs leading-relaxed text-gray-mid sm:text-left">
              Asociación Civil Valores Sinaí
            </p>
          </div>

          {/* Columna 2 — Navegación rápida */}
          <nav aria-label="Navegación del footer">
            <ul className="flex flex-col items-center gap-2 sm:items-start">
              {FOOTER_NAV_LINKS.map(({ key, to }) => (
                <li key={key}>
                  <Link
                    to={to}
                    className="rounded px-1 font-sans text-sm text-gray-mid transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3 — Redes sociales */}
          <div className="flex flex-col items-center gap-3 sm:items-end">
            <p className="font-sans text-sm font-semibold text-brand-accent">
              {t('footer.followUs')}
            </p>

            <div className="flex gap-4" role="list" aria-label="Redes sociales">
              {SOCIAL_LINKS.map(({ key, href, label, icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="rounded font-sans text-gray-mid transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 py-4">
        <p className="text-center font-sans text-xs text-gray-mid">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};