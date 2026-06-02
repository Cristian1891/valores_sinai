// src/features/contact/components/ContactMethods.tsx
import { useTranslation } from 'react-i18next';

// ── Tipos ────────────────────────────────────────────────────────────────────
interface ContactMethod {
  key: string;
  labelKey: string;
  valueKey: string;
  descriptionKey?: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}

// ── Icono Email ──────────────────────────────────────────────────────────────
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

// ── Icono Teléfono ───────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
      clipRule="evenodd"
    />
  </svg>
);

// ── Icono WhatsApp ───────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ── Icono Ubicación ──────────────────────────────────────────────────────────
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
      clipRule="evenodd"
    />
  </svg>
);

// ── Datos de métodos de contacto ─────────────────────────────────────────────
// Los hrefs reales los ajustás en tus claves i18n o acá directamente.
// El número de WhatsApp debe tener formato internacional sin espacios ni guiones.
const CONTACT_METHODS: ContactMethod[] = [
  {
    key: 'email',
    labelKey: 'methods.email.label',
    valueKey: 'methods.email.value',
    href: 'mailto:valoressinai@gmail.com',
    icon: <EmailIcon />,
  },
  {
    key: 'phone',
    labelKey: 'methods.phone.label',
    valueKey: 'methods.phone.value',
    href: 'tel:+5491160122363',
    icon: <PhoneIcon />,
  },
  {
    key: 'whatsapp',
    labelKey: 'methods.whatsapp.label',
    valueKey: 'methods.whatsapp.value',
    descriptionKey: 'methods.whatsapp.description',
    // Reemplazá 5491112345678 con el número real de WhatsApp
    href: 'https://wa.me/5491160122363',
    external: true,
    icon: <WhatsAppIcon />,
  },
  {
    key: 'location',
    labelKey: 'methods.location.label',
    valueKey: 'methods.location.value',
    descriptionKey: 'methods.location.description',
    href: 'https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui',
    external: true,
    icon: <LocationIcon />,
  },
];

// ── Componente ───────────────────────────────────────────────────────────────
export const ContactMethods: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <section
      aria-labelledby="contact-methods-heading"
      className="bg-surface-cream px-4 py-14 sm:px-6 lg:px-8 dark:bg-dark-soft"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado de sección — visualmente oculto pero presente para lectores */}
        <h2
          id="contact-methods-heading"
          className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber"
        >
          {t('methods.heading', 'Múltiples formas de contacto')}
        </h2>

        <p className="mb-10 max-w-xl font-sans text-base leading-7 text-dark-soft dark:text-gray-mid">
          {t(
            'methods.subheading',
            'Elegí la forma que más te convenga para comunicarte con nosotros.',
          )}
        </p>

        {/* Grid de tarjetas — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div
          role="list"
          aria-label={t('methods.ariaLabel', 'Métodos de contacto')}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACT_METHODS.map((method) => (
            <a
              key={method.key}
              href={method.href}
              role="listitem"
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              aria-label={t(method.labelKey)}
              className="
                group flex flex-col items-center gap-4 rounded-3xl
                border border-black/5 bg-white p-7 text-center
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg hover:shadow-black/8
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                dark:border-white/5 dark:bg-dark
              "
            >
              {/* Ícono con fondo brand-accent */}
              <div
                aria-hidden="true"
                className="
                  flex h-14 w-14 items-center justify-center rounded-2xl
                  bg-brand-accent text-dark
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                {method.icon}
              </div>

              {/* Etiqueta */}
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-dark dark:text-white">
                {t(method.labelKey)}
              </p>

              {/* Valor principal — color brand para destacar */}
              <p className="font-sans text-sm font-semibold text-brand-amber transition-colors duration-200 group-hover:text-brand-accent">
                {t(method.valueKey)}
              </p>

              {/* Descripción opcional (WhatsApp y Ubicación) */}
              {method.descriptionKey && (
                <p className="font-sans text-xs leading-5 text-dark-soft dark:text-gray-mid">
                  {t(method.descriptionKey)}
                </p>
              )}

              {/* CTA inline — accesible porque el <a> completo es el enlace */}
              <span
                aria-hidden="true"
                className="
                  mt-auto inline-flex items-center gap-1.5 rounded-xl
                  bg-dark px-4 py-2 font-sans text-xs font-bold text-white
                  transition-colors duration-200
                  group-hover:bg-brand-accent group-hover:text-dark
                  dark:bg-dark-soft dark:group-hover:bg-brand-accent dark:group-hover:text-dark
                "
              >
                {t('methods.ctaLabel', 'Contactanos')}
                {/* Flecha que aparece en hover */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};