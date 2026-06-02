// src/features/contact/Contact.tsx
//
// Dependencia: @react-spring/web
// npm install @react-spring/web  ← si aún no la instalaste
//
// Claves i18n → ver bloque de comentarios al final del archivo

import { useTranslation } from 'react-i18next';
import { useInView, animated, useTrail } from '@react-spring/web';
import { Link } from 'react-router';

// ── Datos de contacto ────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  {
    key: 'email',
    labelKey: 'contact.subtitle1',
    valueKey: 'contact.text1',
    href: 'mailto:info@valores-sinai.com',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    key: 'phone',
    labelKey: 'contact.subtitle2',
    valueKey: 'contact.text2',
    href: 'tel:+54987654321',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    key: 'address',
    labelKey: 'contact.subtitle3',
    valueKey: 'contact.text3',
    href: 'https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
] as const;

// ── Componente ───────────────────────────────────────────────────────────────
export const Contact: React.FC = () => {
  const { t } = useTranslation('home');

  // Fade-in de la sección al entrar en viewport
  const [sectionRef, sectionSpring] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 160, friction: 22 },
    }),
    { once: true, rootMargin: '-10% 0%' },
  );

  // Slide-in desde la izquierda — columna de info
  const [leftRef, leftSpring] = useInView(
    () => ({
      from: { opacity: 0, x: -40 },
      to: { opacity: 1, x: 0 },
      delay: 150,
      config: { mass: 1, tension: 260, friction: 26 },
    }),
    { once: true, rootMargin: '-10% 0%' },
  );

  // Slide-in desde la derecha — mapa
  const [rightRef, rightSpring] = useInView(
    () => ({
      from: { opacity: 0, x: 40 },
      to: { opacity: 1, x: 0 },
      delay: 250,
      config: { mass: 1, tension: 260, friction: 26 },
    }),
    { once: true, rootMargin: '-10% 0%' },
  );

  // Aparición escalonada de los ítems de contacto
  const trail = useTrail(CONTACT_ITEMS.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 400,
    config: { tension: 240, friction: 22 },
  });

  return (
    <animated.section
      ref={sectionRef}
      style={sectionSpring}
      id="contact"
      aria-label={t('contact.ariaLabel', 'Sección de contacto')}
      className="bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Encabezado ── */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('contact.kicker', 'Estamos para vos')}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            {t('contact.title', 'Contactanos')}
          </h2>
          <p className="mt-4 max-w-prose text-base leading-7 text-dark-soft">
            {t(
              'contact.text',
              'Si necesitás información sobre nuestros programas y servicios, no dudes en comunicarte con nosotros.',
            )}
          </p>
        </div>

        {/* ── Layout dos columnas ── */}
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">

          {/* Columna izquierda — 2/5 en desktop */}
          <animated.div
            ref={leftRef}
            style={leftSpring}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* Ítems de contacto */}
            <div className="flex flex-col gap-4">
              {trail.map(({ y, ...rest }, index) => {
                const item = CONTACT_ITEMS[index];
                return (
                  <animated.div
                    key={item.key}
                    style={{ ...rest, transform: y.to((v) => `translateY(${v}px)`) }}
                  >
                    <a
                      href={item.href}
                      target={item.key === 'address' ? '_blank' : undefined}
                      rel={item.key === 'address' ? 'noopener noreferrer' : undefined}
                      className="
                        group flex items-start gap-4
                        rounded-2xl border border-black/5 bg-surface-cream p-5
                        transition-all duration-300
                        hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                      "
                    >
                      {/* Ícono — fondo brand-accent, texto dark para contraste AAA */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-dark">
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        {/* Etiqueta — brand-amber sobre surface-cream: contraste suficiente */}
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                          {t(item.labelKey)}
                        </p>
                        {/* Valor — text-dark sobre surface-cream: contraste máximo */}
                        <p className="mt-0.5 text-sm font-medium text-dark transition-colors group-hover:text-brand-amber">
                          {t(item.valueKey)}
                        </p>
                      </div>
                    </a>
                  </animated.div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              to="/contacto"
              className="
                inline-flex w-fit items-center gap-2
                rounded-xl bg-brand-accent px-6 py-3
                text-sm font-bold text-dark
                transition-colors duration-200 hover:bg-brand-amber
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
              "
            >
              {t('contact.button', 'Envíanos tu consulta')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </animated.div>

          {/* Columna derecha — Mapa — 3/5 en desktop */}
          <animated.div
            ref={rightRef}
            style={rightSpring}
            className="overflow-hidden rounded-3xl ring-1 ring-black/5 lg:col-span-3"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.00885192582!2d-58.85255979999999!3d-34.47729969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b8caf5bdb71%3A0x54d80dea5c4c0762!2sAv.%20Pres.%20Juan%20Domingo%20Peron%203251%2C%20B1635%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746035437303!5m2!1ses!2sar"
              title={t('contact.mapTitle', 'Ubicación de Valores Sinaí en Google Maps')}
              className="h-72 w-full sm:h-96 lg:h-full"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </animated.div>

        </div>
      </div>
    </animated.section>
  );
};

/*
──────────────────────────────────────────────────────────────
JERARQUÍA DE COLORES — solo light mode
──────────────────────────────────────────────────────────────

  Sección           bg-white              (#FFFFFF)
  Tarjetas          bg-surface-cream      (#E4E2D1)  contraste sobre white
  Etiqueta ítem     text-brand-amber      (#D28A2B)  legible sobre cream
  Valor ítem        text-dark             (#010101)  máximo contraste
  Hover valor       text-brand-amber      (#D28A2B)  señal de interactividad
  Ícono fondo       bg-brand-accent       (#FEC40D)  amarillo de marca
  Ícono color       text-dark             (#010101)  contraste AAA sobre amarillo
  CTA fondo         bg-brand-accent       (#FEC40D)
  CTA hover         bg-brand-amber        (#D28A2B)
  CTA texto         text-dark             (#010101)

──────────────────────────────────────────────────────────────
CLAVES i18n → i18n/locales/es/common.json
──────────────────────────────────────────────────────────────
"contact": {
  "ariaLabel": "Sección de contacto",
  "kicker":    "Estamos para vos",
  "title":     "Contactanos",
  "text":      "Si necesitás información sobre nuestros programas y servicios, no dudes en comunicarte con nosotros.",
  "button":    "Envíanos tu consulta",
  "mapTitle":  "Ubicación de Valores Sinaí en Google Maps",
  "subtitle1": "Correo electrónico",
  "text1":     "info@valores-sinai.com",
  "subtitle2": "Teléfono",
  "text2":     "+54 9 11 1234-5678",
  "subtitle3": "Dirección",
  "text3":     "Av. Juan Domingo Perón 3251, Pres. Derqui"
}

Replicar traducidas en en/common.json y pt/common.json.
──────────────────────────────────────────────────────────────
*/