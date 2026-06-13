// src/features/home/components/Contact.tsx
import { useTranslation } from 'react-i18next';
import { useInView, animated, useTrail } from '@react-spring/web';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ContactItem = {
  key: string;
  labelKey: string;
  valueKey: string;
  hrefKey: string;
  icon: LucideIcon;
  external: boolean;
};

const CONTACT_ITEMS: ContactItem[] = [
  { key: 'email',   labelKey: 'contact.subtitle1', valueKey: 'contact.text1', hrefKey: 'contact.href1', icon: Mail,   external: false },
  { key: 'phone',   labelKey: 'contact.subtitle2', valueKey: 'contact.text2', hrefKey: 'contact.href2', icon: Phone,  external: false },
  { key: 'address', labelKey: 'contact.subtitle3', valueKey: 'contact.text3', hrefKey: 'contact.href3', icon: MapPin, external: true  },
];

export const Contact = () => {
  const { t } = useTranslation('home');

  const [sectionRef, sectionSpring] = useInView(
    () => ({ from: { opacity: 0 }, to: { opacity: 1 }, config: { tension: 160, friction: 22 } }),
    { once: true, rootMargin: '-10% 0%' },
  );
  const [leftRef, leftSpring] = useInView(
    () => ({ from: { opacity: 0, x: -40 }, to: { opacity: 1, x: 0 }, delay: 150, config: { mass: 1, tension: 260, friction: 26 } }),
    { once: true, rootMargin: '-10% 0%' },
  );
  const [rightRef, rightSpring] = useInView(
    () => ({ from: { opacity: 0, x: 40 }, to: { opacity: 1, x: 0 }, delay: 250, config: { mass: 1, tension: 260, friction: 26 } }),
    { once: true, rootMargin: '-10% 0%' },
  );
  const trail = useTrail(CONTACT_ITEMS.length, {
    from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, delay: 400, config: { tension: 240, friction: 22 },
  });

  return (
    <animated.section
      ref={sectionRef}
      style={sectionSpring}
      id="contact"
      aria-label={t('contact.ariaLabel')}
      className="bg-white dark:bg-dark-soft px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 max-w-2xl">
          {/* CORRECCIÓN: type-kicker */}
          <p className="type-kicker text-brand-amber dark:text-brand-accent">
            {t('contact.kicker')}
          </p>
          {/* CORRECCIÓN: type-h2 + breakpoints */}
          <h2 className="mt-3 type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('contact.title')}
          </h2>
          {/* CORRECCIÓN: type-body */}
          <p className="mt-4 max-w-prose type-body text-dark-soft dark:text-surface-cream sm:text-lg">
            {t('contact.text')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">

          <animated.div ref={leftRef} style={leftSpring} className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-4">
              {trail.map(({ y, ...rest }, index) => {
                const item = CONTACT_ITEMS[index];
                const Icon = item.icon;

                return (
                  <animated.div
                    key={item.key}
                    style={{ ...rest, transform: y.to((v) => `translateY(${v}px)`) }}
                  >
                    <a
                      href={t(item.hrefKey)}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-surface-cream dark:bg-dark p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-dark">
                        <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        {/*
                          CORRECCIÓN: type-kicker reemplaza la combinación
                          font-sans text-xs font-semibold uppercase tracking-wider.
                          Son semánticamente equivalentes (etiqueta pequeña en mayúsculas).
                          Se adapta el color al contexto de la card.
                        */}
                        <p className="type-kicker text-brand-amber">
                          {t(item.labelKey)}
                        </p>
                        {/*
                          CORRECCIÓN: type-label-sm reemplaza font-sans text-sm font-medium.
                          13px, 500 — correcto para el valor de un dato de contacto.
                        */}
                        <p className="mt-0.5 type-label-sm text-dark dark:text-surface-cream transition-colors group-hover:text-brand-amber">
                          {t(item.valueKey)}
                        </p>
                      </div>
                    </a>
                  </animated.div>
                );
              })}
            </div>

            <Link
              to="/contacto"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 type-cta text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('contact.button')}
              <ArrowRight className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
            </Link>
          </animated.div>

          <animated.div
            ref={rightRef}
            style={rightSpring}
            className="overflow-hidden rounded-3xl ring-1 ring-black/5 lg:col-span-3"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.00885192582!2d-58.85255979999999!3d-34.47729969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b8caf5bdb71%3A0x54d80dea5c4c0762!2sAv.%20Pres.%20Juan%20Domingo%20Peron%203251%2C%20B1635%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746035437303!5m2!1ses!2sar"
              title={t('contact.mapTitle')}
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