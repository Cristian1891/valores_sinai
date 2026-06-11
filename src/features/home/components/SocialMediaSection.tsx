// src/features/home/components/SocialMediaSection.tsx
//
// Consumo i18n: namespace 'home' exclusivamente → social.*
// Todas las claves viven en src/i18n/locales/{es,en,pt}/home.json

import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS_CONFIG } from '../constants/socialLinks';
import { InstagramIcon, FacebookIcon, XIcon } from '../../../components/ui/icons';

// Íconos con tamaño específico de esta sección (h-8 w-8).
// El Footer usa los mismos íconos con su tamaño default (h-5 w-5).
const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon className="h-8 w-8 transition-colors duration-300" />,
  facebook:  <FacebookIcon  className="h-8 w-8 transition-colors duration-300" />,
  x:         <XIcon         className="h-8 w-8 transition-colors duration-300" />,
};

export const SocialMediaSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="bg-surface-cream px-4 py-16 dark:bg-dark-soft sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-10 max-w-2xl">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-brand-amber">
            {t('social.kicker')}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('social.title')}
          </h2>
          <p className="mt-4 font-sans text-base leading-[1.75] text-dark-soft dark:text-gray-mid">
            {t('social.subtitle')}
          </p>
        </div>

        {/* Lista de redes */}
        <ul
          aria-label="Redes sociales de Valores Sinaí"
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          {SOCIAL_LINKS_CONFIG.map(({ key, href, label, hoverColorClass }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:border-white/5 dark:bg-dark"
              >
                <span className={`text-gray-mid transition-colors duration-300 ${hoverColorClass}`}>
                  {ICON_MAP[key]}
                </span>

                <span className="font-sans text-sm font-semibold text-dark-soft transition-colors duration-300 group-hover:text-dark dark:text-gray-mid dark:group-hover:text-white">
                  {t(`social.${key}`)}
                </span>

                {/* Flecha de "ir a" — aparece en hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 -translate-x-1 text-gray-mid opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69L5.22 13.72a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};