// src/features/about-us/components/OrganizationalValues.tsx
import { useTranslation } from 'react-i18next';
import { VALORES } from '../constants/values-about';

export const OrganizationalValues = () => {
  const { t } = useTranslation('about-us');

  return (
    <section
      className="bg-surface-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby="valores-heading"
    >
      <div className="mx-auto max-w-6xl">

        {/* Encabezado */}
        <div className="mb-12">
          <p className="type-kicker text-brand-amber">
            {t('values.kicker')}
          </p>
          <h2
            id="valores-heading"
            className="mt-2 type-h2 text-dark"
          >
            {t('values.title')}
          </h2>
          <div className="mt-3 h-0.5 w-10 bg-brand-accent" aria-hidden="true" />
          <p className="mt-5 max-w-xl type-body-sm text-dark-soft">
            {t('values.description')}
          </p>
        </div>

        {/* Grilla de cards */}
        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          role="list"
          aria-label={t('values.ariaLabel')}
        >
          {VALORES.map((valor) => (
            <li
              key={valor.id}
              className="group relative aspect-3/4 overflow-hidden rounded-2xl bg-dark"
            >
              {/*
                imageUrl e imageAlt vienen del array local — son assets,
                no contenido traducible. name y description vienen del JSON.
              */}
              <img
                src={valor.imageUrl}
                alt={valor.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.08]"
              />

              {/* Overlay reposo */}
              <div
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5 transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
              />
              {/* Overlay hover */}
              <div
                className="absolute inset-0 bg-black/68 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              {/* Línea inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />

              {/* Texto */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                <p className="type-h3 text-base text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:mb-2 sm:text-[17px]">
                  {t(`values.items.${valor.id}.name`)}
                </p>
                <p className="max-h-0 overflow-hidden type-body-sm text-[11.5px] text-white/80 opacity-0 transition-all duration-300 ease-out group-hover:max-h-28 group-hover:opacity-100 sm:text-xs">
                  {t(`values.items.${valor.id}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};