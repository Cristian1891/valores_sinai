// src/features/home/components/Contact.tsx
//
// DECISIÓN: Se eliminaron todas las animaciones de @react-spring/web.
// Motivo: las animaciones de entrada (fade + slide) en secciones de contacto
// añaden latencia perceptible antes de que el usuario pueda leer la información
// (email, teléfono, dirección). En secciones de conversión y contacto, el
// contenido debe estar disponible inmediatamente — la animación compite con
// la intención del usuario. Best practice 2026: animar decoración, no contenido funcional.

import { useTranslation } from 'react-i18next';
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

  return (
    <section
      id="contact"
      aria-label={t('contact.ariaLabel')}
      className="bg-white dark:bg-dark-soft px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 max-w-2xl">
          <p className="type-kicker text-brand-amber dark:text-brand-accent">
            {t('contact.kicker')}
          </p>
          <h2 className="mt-3 type-h2 text-dark dark:text-white sm:text-4xl lg:text-[2.75rem]">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-prose type-body text-dark-soft dark:text-surface-cream sm:text-lg">
            {t('contact.text')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={t(item.hrefKey)}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-surface-cream dark:bg-dark p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent text-dark">
                      <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="type-kicker text-brand-amber">
                        {t(item.labelKey)}
                      </p>
                      <p className="mt-0.5 type-label-sm text-dark dark:text-surface-cream transition-colors group-hover:text-brand-amber">
                        {t(item.valueKey)}
                      </p>
                    </div>
                  </a>
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
          </div>

          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.4716942953283!2d-58.8358485!3d-34.4655458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9da20db05ebb%3A0x6bba847df51373ea!2sAv.%20Pres.%20Juan%20Domingo%20Per%C3%B3n%203251%2C%20B1635%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718468000000!5m2!1ses-419!2sar"
              title={t('contact.mapTitle')}
              className="h-72 w-full sm:h-96 lg:h-full"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
};