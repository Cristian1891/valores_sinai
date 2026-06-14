// src/components/layout/Footer.tsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { FOOTER_NAV_LINKS } from '../../constants/navigation';
import { SOCIAL_LINKS_CONFIG } from '../../features/home/constants/socialLinks';
import { InstagramIcon, FacebookIcon, XIcon } from '../ui/icons/index';

const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon />,
  facebook:  <FacebookIcon />,
  x:         <XIcon />,
};

export const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 bg-dark transition-colors duration-300"
    >
      <div className="border-b border-brand-accent/30 px-4 py-5">
        <p className="mx-auto max-w-3xl text-center type-verse text-brand-accent lg:text-lg">
          {t('footer.verse')}
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Link
              to="/"
              aria-label="Ir al inicio — Valores Sinaí"
              className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <img
                src="/img/logo_sinai.png"
                alt="Logo Valores Sinaí"
                className="h-16 w-16 object-contain scale-[1.7]"
                loading="lazy" 
                decoding="async"
              />
            </Link>
            <p className="max-w-45 text-center type-body-sm text-gray-mid sm:text-left">
              {t('footer.address')}
            </p>
          </div>

          <nav aria-label={t('footer.navigation')}>
            {/*
             * text-center en mobile, sm:text-left en desktop.
             * Consistente con la columna del logo.
             */}
            <p className="mb-3 type-kicker text-brand-accent text-center sm:text-left">
              {t('footer.navigation')}
            </p>
            <ul className="flex flex-col items-center gap-2.5 sm:items-start">
              {FOOTER_NAV_LINKS.map(({ key, to }) => (
                <li key={key}>
                  <Link
                    to={to}
                    className="rounded px-1 type-label text-gray-mid transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            {/*
             * CORRECCIÓN: "Seguinos en nuestras redes sociales" se cortaba en mobile
             * porque type-kicker tiene letter-spacing: 0.25em — en 300-360px de
             * viewport ese tracking hace que el texto exceda el ancho disponible.
             *
             * Solución: text-balance (text-wrap: balance) distribuye el texto en
             * múltiples líneas de forma equilibrada cuando no entra en una sola.
             * Es superior a overflow-wrap: break-word porque mantiene la legibilidad
             * visual con líneas de ancho similar en lugar de cortar palabras.
             * text-center en mobile centra ambas líneas uniformemente.
             * sm:text-left restaura la alineación original en desktop.
             */}
            <p className="type-kicker text-brand-accent text-center text-balance sm:text-left">
              {t('footer.followUs')}
            </p>
            <ul className="flex flex-col items-center gap-2.5 sm:items-start" aria-label="Redes sociales de Valores Sinaí">
              {SOCIAL_LINKS_CONFIG.map(({ key, href, label }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2.5 rounded text-gray-mid transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    {ICON_MAP[key]}
                    <span className="type-label-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <p className="text-center type-caption text-gray-mid">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
};