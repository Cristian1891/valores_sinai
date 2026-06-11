// src/components/layout/Footer.tsx
//
// Cambios respecto a la versión anterior:
//   — Links de navegación: text-xs (12px) → type-label-sm (13px) — más legibles
//   — Links de redes sociales: ahora tienen label visible además del ícono
//   — Versículo: text-xs → type-verse — usa la fuente serif que le corresponde
//   — Copyright: type-caption en lugar de text-xs manual
//   — Descripción de la asociación: type-body-sm en lugar de text-xs
//   — Todas las clases tipográficas vienen del sistema en index.css

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

      {/* Versículo destacado */}
      <div className="border-b border-brand-accent/30 px-4 py-5">
        <p className="mx-auto max-w-3xl text-center type-verse text-brand-accent sm:text-sm">
          {t('footer.verse')}
        </p>
      </div>

      {/* Cuerpo principal */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">

          {/* Columna 1 — Logo + descripción */}
          <div className="flex flex-col items-center gap-4 sm:items-start">
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

            {/*
              type-body-sm (14px) en lugar de text-xs (12px).
              El nombre de la asociación en el footer merece ser legible,
              no decorativo.
            */}
            <p className="max-w-[180px] text-center type-body-sm leading-relaxed text-gray-mid sm:text-left">
              Asociación Civil Valores Sinaí — Presidente Derqui, Buenos Aires
            </p>
          </div>

          {/* Columna 2 — Navegación rápida */}
          <nav aria-label="Navegación del footer">
            <p className="mb-3 type-kicker text-brand-accent/70 text-center sm:text-left">
              Navegación
            </p>
            <ul className="flex flex-col items-center gap-2.5 sm:items-start">
              {FOOTER_NAV_LINKS.map(({ key, to }) => (
                <li key={key}>
                  <Link
                    to={to}
                    className="
                      rounded px-1
                      type-label-sm text-gray-mid
                      transition-colors duration-200
                      hover:text-brand-accent
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                    "
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Columna 3 — Redes sociales */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <p className="type-kicker text-brand-accent">
              {t('footer.followUs')}
            </p>

            <ul
              className="flex flex-col gap-2.5"
              aria-label="Redes sociales de Valores Sinaí"
            >
              {SOCIAL_LINKS_CONFIG.map(({ key, href, label }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex items-center gap-2.5 rounded
                      text-gray-mid
                      transition-colors duration-200
                      hover:text-brand-accent
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                    "
                  >
                    {ICON_MAP[key]}
                    {/*
                      Label visible junto al ícono.
                      Íconos solos sin label son ambiguos en footers —
                      WCAG 2.2 recomienda que los controles interactivos
                      tengan nombre visible además del aria-label.
                    */}
                    <span className="type-label-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 py-5">
        <p className="text-center type-caption text-gray-mid">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>

    </footer>
  );
};