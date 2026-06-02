// src/features/about-us/components/Team.tsx
//
// Sección "Nuestro equipo" de la página "Quiénes Somos".
// Fondo: bg-surface-cream — contrasta con Purpose (bg-white) y
// con PresidentMessage que le sigue (bg-dark-soft).
//
// Texto: se mantiene el actual (más conciso y correcto).
// NO se reemplaza por el del componente viejo con colores blue-700/gray-50,
// ya que ese texto es más largo, repite "Quiénes somos" y usa paleta incorrecta.

import { useTranslation } from 'react-i18next';

export const Team: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <section
      className="bg-surface-warm px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Imagen del equipo */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-dark shadow-xl ring-1 ring-black/5">
              <img
                src="/img/team.jpg"
                alt={t('team.imageAlt', 'Equipo de trabajo de Valores Sinaí reunido')}
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[480px]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent" aria-hidden="true" />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-amber">
              {t('team.kicker', 'Las personas detrás de Sinaí')}
            </p>

            <h2
              id="team-heading"
              className="text-3xl font-bold tracking-tight text-dark sm:text-4xl"
            >
              {t('team.title', 'Nuestro equipo')}
            </h2>

            <div className="mt-3 h-px w-12 bg-brand-accent" aria-hidden="true" />

            <p className="mt-6 text-base leading-8 text-dark-soft">
              {t(
                'team.description1',
                'Somos un grupo de colaboradores y profesionales que compartimos una misma visión: construir una comunidad más solidaria, humana y unida.',
              )}
            </p>

            <p className="mt-4 text-base leading-8 text-dark-soft">
              {t(
                'team.description2',
                'Cada integrante aporta su conocimiento y dedicación para hacer realidad nuestros proyectos, guiados por valores humanísticos y por el deseo genuino de ver vidas transformadas.',
              )}
            </p>

            {/* Pills de valores del equipo */}
            <div
              className="mt-8 flex flex-wrap gap-2"
              aria-label={t('team.valuesLabel', 'Valores del equipo')}
            >
              {[
                t('team.value1', 'Compromiso'),
                t('team.value2', 'Servicio'),
                t('team.value3', 'Solidaridad'),
                t('team.value4', 'Fe'),
                t('team.value5', 'Excelencia'),
              ].map((value) => (
                <span
                  key={value}
                  className="rounded-full bg-dark px-4 py-1.5 text-xs font-semibold text-white"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};