// src/components/SocialMediaSection.tsx
import { useTranslation } from 'react-i18next';

// Claves i18n sugeridas en common.json:
// "social": {
//   "title": "Seguínos en nuestras redes sociales",
//   "subtitle": "Conectá con Valores Sinaí. Descubrí nuestras actividades, eventos y proyectos que transforman vidas.",
//   "instagram": "Instagram",
//   "facebook": "Facebook",
//   "x": "X"
// }

const socialLinks = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/valores_sinai/',
    label: 'Síguenos en Instagram',
    // Gradiente oficial de Instagram para el hover
    hoverClass: 'group-hover:text-[#E1306C]',
    icon: (
      <svg
        className="h-8 w-8 transition-colors duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/people/Valores-Sina%C3%AD/61573890669430/',
    label: 'Síguenos en Facebook',
    hoverClass: 'group-hover:text-[#1877F2]',
    icon: (
      <svg
        className="h-8 w-8 transition-colors duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.877z" />
      </svg>
    ),
  },
  {
    key: 'x',
    href: 'https://x.com/ValoresSinai',
    label: 'Síguenos en X',
    hoverClass: 'group-hover:text-dark dark:group-hover:text-white',
    icon: (
      <svg
        className="h-8 w-8 transition-colors duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
] as const;

export const SocialMediaSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8 dark:bg-dark-soft">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado — alineado a la izquierda para consistencia con el resto */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('social.kicker', 'Comunidad')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
            {t('social.title', 'Seguínos en nuestras redes sociales')}
          </h2>
          <p className="mt-4 text-base leading-7 text-dark-soft dark:text-gray-mid">
            {t(
              'social.subtitle',
              'Conectá con Valores Sinaí. Descubrí nuestras actividades, eventos y proyectos que transforman vidas. ¡Uníte a nuestra comunidad!',
            )}
          </p>
        </div>

        {/* Cards de redes */}
        <div
          role="list"
          aria-label="Redes sociales de Valores Sinaí"
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          {socialLinks.map(({ key, href, label, icon, hoverClass }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              role="listitem"
              className="
                group flex items-center gap-3
                rounded-2xl border border-black/5 bg-white px-6 py-4
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                dark:border-white/5 dark:bg-dark
              "
            >
              {/* Ícono — en gris por defecto, color de marca al hover */}
              <span className={`text-gray-mid transition-colors duration-300 ${hoverClass}`}>
                {icon}
              </span>

              {/* Nombre de la red */}
              <span className="font-sans text-sm font-semibold text-dark-soft transition-colors duration-300 group-hover:text-dark dark:text-gray-mid dark:group-hover:text-white">
                {t(`social.${key}`, key.charAt(0).toUpperCase() + key.slice(1))}
              </span>

              {/* Flecha — aparece solo en hover */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="
                  h-4 w-4 text-gray-mid
                  opacity-0 -translate-x-1
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-x-0
                "
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69L5.22 13.72a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/*
──────────────────────────────────────────────────────────────
CLAVES SUGERIDAS para i18n/locales/es/common.json
──────────────────────────────────────────────────────────────
"social": {
  "kicker": "Comunidad",
  "title": "Seguínos en nuestras redes sociales",
  "subtitle": "Conectá con Valores Sinaí. Descubrí nuestras actividades, eventos y proyectos que transforman vidas. ¡Uníte a nuestra comunidad!",
  "instagram": "Instagram",
  "facebook": "Facebook",
  "x": "X"
},
"sponsors": {
  "title": "Empresas que nos apoyan",
  "ariaLabel": "Empresas que nos apoyan"
}
──────────────────────────────────────────────────────────────
*/