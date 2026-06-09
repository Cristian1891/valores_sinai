// src/features/home/components/SocialMediaSection.tsx
import { useTranslation } from 'react-i18next';
import { SOCIAL_LINKS_CONFIG } from '../../home/constants/socialLinks';
import { InstagramIcon, FacebookIcon, XIcon } from '../../../components/ui/icons';

// Instanciamos los íconos con h-8 w-8 — tamaño específico de esta sección.
// El Footer usa los mismos íconos con h-5 w-5 (su default).
// Ambos consumen la misma fuente de verdad en components/icons/.
const ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon className="h-8 w-8 transition-colors duration-300" />,
  facebook:  <FacebookIcon  className="h-8 w-8 transition-colors duration-300" />,
  x:         <XIcon         className="h-8 w-8 transition-colors duration-300" />,
};

export const SocialMediaSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8 dark:bg-dark-soft">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('social.kicker', 'Comunidad')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
            {t('social.title', 'Seguínos en nuestras redes sociales')}
          </h2>
          <p className="mt-4 text-base leading-7 text-dark-soft dark:text-gray-mid">
            {t('social.subtitle', 'Conectá con Valores Sinaí. Descubrí nuestras actividades, eventos y proyectos que transforman vidas. ¡Uníte a nuestra comunidad!')}
          </p>
        </div>

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
                className="
                  group flex items-center gap-3
                  rounded-2xl border border-black/5 bg-white px-6 py-4
                  shadow-sm transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-md
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                  dark:border-white/5 dark:bg-dark
                "
              >
                <span className={`text-gray-mid transition-colors duration-300 ${hoverColorClass}`}>
                  {ICON_MAP[key]}
                </span>

                <span className="font-sans text-sm font-semibold text-dark-soft transition-colors duration-300 group-hover:text-dark dark:text-gray-mid dark:group-hover:text-white">
                  {t(`social.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
                </span>

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