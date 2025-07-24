import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const areas = [
    {
      icon: "🎓",
      title: t('about.areas.education', 'Educación'),
      key: 'education'
    },
    {
      icon: "🎨",
      title: t('about.areas.culture', 'Cultura'),
      key: 'culture'
    },
    {
      icon: "🤝",
      title: t('about.areas.social', 'Social'),
      key: 'social'
    },
    {
      icon: "⚽",
      title: t('about.areas.sports', 'Deporte'),
      key: 'sports'
    },
    {
      icon: "🕊️",
      title: t('about.areas.spiritual', 'Espiritual'),
      key: 'spiritual'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white dark:bg-[var(--color-dark)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-section text-[var(--color-grayDark)] dark:text-white mb-4">
            {t('our_identity.who_we_are.title_2', 'Quiénes Somos')}
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center mb-16">
          
          {/* Columna de video */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full">
              {/* Container del video con aspect ratio responsivo */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <video 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                  controls
                  preload="metadata"
                //   poster="/img/video-thumbnail.jpg" // Imagen de preview opcional
                >
                  <source src="/img/Video_predio.mp4" type="video/mp4" />
                  <source src="/img/Video_predio.webm" type="video/webm" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
              
              {/* Overlay decorativo */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[var(--color-primary)] dark:border-[var(--color-accent)] rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Columna de contenido */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 h-full flex flex-col justify-center">
              
              <div className="space-y-4">
                <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] leading-relaxed">
                  {t('about.description1', 'Somos un equipo que busca desarrollar una propuesta educativa, cultural, social, deportiva y espiritual de calidad, basada en los valores humanísticos, a través de acciones que promuevan y contribuyan en la formación de las personas para transformar realidades con responsabilidad social.')}
                </p>

                <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] leading-relaxed">
                  {t('about.description2', 'Liderar a nivel Nacional e Internacional las acciones de planificación y diseño de políticas que permitan que más niños, jóvenes y sus familias se desarrollen en el ámbito de la educación, cultura, deporte y espiritualidad, y puedan expresarse y trabajar libremente, ejerciendo plenamente sus derechos humanos, dentro de una sociedad más compasiva, humana y unida.')}
                </p>
              </div>

              {/* Estadísticas o puntos destacados */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-[var(--color-neutralLight)] dark:bg-[var(--color-grayDarkv1)] rounded-lg">
                  <div className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">
                    10+
                  </div>
                  <div className="text-xs font-montserrat text-[var(--color-grayDark)] dark:text-white">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutralLight)] dark:bg-[var(--color-grayDarkv1)] rounded-lg">
                  <div className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-1">
                    5
                  </div>
                  <div className="text-xs font-montserrat text-[var(--color-grayDark)] dark:text-white">
                    Áreas de acción
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Áreas de trabajo */}
        <div className="text-center mb-12">
          <h3 className="font-montserrat font-bold text-subtitle text-[var(--color-grayDark)] dark:text-white mb-2">
            {t('about.areas.title', 'Nuestras Áreas de Acción')}
          </h3>
          <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] max-w-2xl mx-auto">
            Trabajamos de manera integral en cinco pilares fundamentales para el desarrollo humano
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {areas.map((area) => (
            <div 
              key={area.key}
              className="group bg-[var(--color-neutralLight)] dark:bg-[var(--color-grayDarkv1)] p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:bg-gradient-to-br hover:from-[var(--color-primary)] hover:to-[var(--color-accent)] hover:text-white"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className="font-montserrat font-bold text-highlight text-[var(--color-grayDark)] dark:text-white group-hover:text-white transition-colors duration-300">
                  {area.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action final */}
        <div className="text-center bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-8 lg:p-12 rounded-xl shadow-2xl">
          <h3 className="font-montserrat font-bold text-subtitle text-white mb-4">
            {t('about.cta.title', 'Únete a Nuestra Misión')}
          </h3>
          <p className="font-montserrat text-paragraph text-white mb-8 max-w-3xl mx-auto opacity-90">
            {t('about.cta.description', 'Juntos podemos construir una sociedad más compasiva, humana y unida. Tu participación hace la diferencia en la vida de miles de personas.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[var(--color-primary)] font-montserrat font-bold text-button rounded-lg hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              {t('about.cta.get_involved', 'Involúcrate')}
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-montserrat font-bold text-button rounded-lg hover:bg-white hover:text-[var(--color-primary)] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              {t('about.cta.learn_more', 'Conoce Más')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};