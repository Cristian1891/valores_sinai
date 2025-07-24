import React from 'react';
import { useTranslation } from 'react-i18next';

export const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 bg-[var(--color-neutralLight)] dark:bg-[var(--color-grayDarkv1)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Columna de imagen del equipo */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <img 
                src="/img/about_team.jpg" 
                alt="Equipo de trabajo de Valores Sinaí"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              {/* Overlay sutil para mejorar contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Columna de contenido */}
          <div className="order-2 lg:order-2">
            <h2 className="font-montserrat font-bold text-section text-[var(--color-grayDark)] dark:text-white mb-6">
              {t('team.title', 'Nuestro Equipo')}
            </h2>
            
            <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] mb-6 leading-relaxed">
              {t('team.description1', 'Detrás de cada iniciativa de Valores Sinaí hay un grupo de personas apasionadas y comprometidas con el cambio social. Nuestro equipo está formado colaboradores y profesionales que comparten una visión común: construir una comunidad más fuerte y solidaria.')}
            </p>
            
            <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] mb-8 leading-relaxed">
              {t('team.description2', 'Cada miembro aporta sus conocimientos, experiencia y dedicación para hacer realidad nuestros proyectos. Juntos, trabajamos con transparencia, respeto y un profundo sentido de responsabilidad hacia nuestra comunidad.')}
            </p>

            {/* Estadísticas o valores del equipo */}
            {/* <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-[var(--color-dark)] p-4 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">
                    {t('team.stats.volunteers', '25+')}
                  </div>
                  <div className="font-montserrat text-small text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)]">
                    {t('team.stats.volunteers_label', 'Voluntarios activos')}
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-[var(--color-dark)] p-4 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-2xl text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">
                    {t('team.stats.experience', '5+')}
                  </div>
                  <div className="font-montserrat text-small text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)]">
                    {t('team.stats.experience_label', 'Años de experiencia')}
                  </div>
                </div>
              </div>
            </div> */}

            {/* Call to action destacado */}
            <div className="bg-[var(--color-primary)] dark:bg-[var(--color-grayDark)] p-6 rounded-lg">
              <h3 className="font-montserrat font-bold text-subtitle text-white mb-4">
                {t('team.join.title', '¡Únete a nuestro equipo!')}
              </h3>
              
              <p className="font-montserrat text-paragraph text-white mb-4 leading-relaxed">
                {t('team.join.description', 'Siempre estamos buscando personas comprometidas que quieran formar parte de nuestra misión. Si compartes nuestros valores y deseas contribuir al bienestar de la comunidad, te invitamos a conocer más sobre las oportunidades de voluntariado.')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 bg-white text-[var(--color-primary)] font-montserrat font-bold text-button rounded-md hover:bg-gray-100 transition-colors duration-300">
                  {t('team.join.volunteer_btn', 'Ser voluntario')}
                </button>
                <button className="px-6 py-2 border-2 border-white text-white font-montserrat font-bold text-button rounded-md hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300">
                  {t('team.join.contact_btn', 'Contáctanos')}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
