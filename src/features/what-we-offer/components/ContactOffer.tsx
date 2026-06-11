// src/features/que-ofrecemos/components/CtaContactoOfrece.tsx

import { Link } from 'react-router';
import type { LucideIcon } from 'lucide-react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

type QuickContactItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
};

const QUICK_CONTACT_ITEMS: QuickContactItem[] = [
  {
    href: 'mailto:valoressinai@gmail.com',
    label: 'valoressinai@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui',
    label: 'Av. Juan Domingo Perón 3251, Pres. Derqui',
    icon: MapPin,
    external: true,
  },
];

export const ContactOffer: React.FC = () => {
  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-ofrece-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
          Reservas y consultas
        </p>

        <h2
          id="cta-ofrece-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          ¿Querés usar nuestros espacios?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75">
          Contactános para consultar disponibilidad, armar un presupuesto o conocer más
          sobre cómo podés reservar el predio para tu iglesia, ministerio, grupo o evento.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          {QUICK_CONTACT_ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <Fragment key={item.href}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-amber"
                >
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                  {item.label}
                </a>

                {index < QUICK_CONTACT_ITEMS.length - 1 && (
                  <span className="hidden text-white/30 sm:block" aria-hidden="true">
                    ·
                  </span>
                )}
              </Fragment>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-8 py-4 text-sm font-bold text-dark transition-colors duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Envianos tu consulta
            <ArrowRight className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};