import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInView, animated, useTrail } from '@react-spring/web';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  // Animación para el contenedor principal
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 150, friction: 20 }
    }),
    { once: true, rootMargin: '-15% 0%' }
  );

  // Animación para la columna izquierda
  const [leftRef, leftSprings] = useInView(
    () => ({
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0 },
      delay: 300,
      config: { mass: 1, tension: 280, friction: 25 }
    }),
    { once: true, rootMargin: '-15% 0%' }
  );

  // Animación para la columna derecha
  const [rightRef, rightSprings] = useInView(
    () => ({
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0 },
      delay: 400,
      config: { mass: 1, tension: 280, friction: 25 }
    }),
    { once: true, rootMargin: '-15% 0%' }
  );

  // Animaciones escalonadas para los elementos de contacto
  const contactItems = [t('contact.subtitle1'), t('contact.subtitle2'), t('contact.subtitle3')];
  const trail = useTrail(contactItems.length, {
    config: { tension: 250, friction: 20 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 30 },
    delay: 500
  });

  return (
    <animated.section 
      ref={ref} 
      style={springs} 
      id="contact-section" 
      className="w-full bg-[#DBCDB7] dark:bg-[var(--color-brown)] py-8 px-4 md:py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
        {/* Columna izquierda - Información de contacto */}
        <animated.div 
          ref={leftRef} 
          style={leftSprings} 
          className="w-full md:w-2/5 bg-[#DBCDB7] dark:bg-[var(--color-brown)] p-6 md:p-8"
        >
          <h2 className="font-montserrat font-bold text-section text-[#3F3E3E] dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          
          <p className="font-montserrat text-paragraph text-[#3F3E3E] dark:text-gray-300 mb-6">
            {t('contact.text')}
            <a 
              href="mailto:contacto@valores-sinai.com" 
              className="text-[#D28A2B] hover:underline"
            >
              {t('contact.link')}
            </a>
          </p>
          
          {/* Botón de consulta */}
          <a 
            href="/formulario-contacto" 
            className="inline-block px-4 py-2 mb-6 bg-[#FEC40D] rounded-md font-montserrat font-bold text-button text-[#3F3E3E] hover:bg-[#D28A2B] transition-colors duration-300"
          >
            {t('contact.button')}
          </a>
          
          {/* Información de contacto con animaciones escalonadas */}
          <div className="space-y-4">
            {trail.map(({ y, ...rest }, index) => (
              <animated.div 
                key={index} 
                style={{ ...rest, transform: y.to(y => `translateY(${y}px)`) }}
              >
                {index === 0 && (
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FEC40D] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3F3E3E]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-subtitle text-[#D28A2B]">
                        {t('contact.subtitle1')}
                      </p>
                      <p className="font-montserrat text-paragraph text-[#3F3E3E] dark:text-gray-300">
                        {t('contact.text1')}
                      </p>
                    </div>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FEC40D] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3F3E3E]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-subtitle text-[#D28A2B]">
                        {t('contact.subtitle2')}
                      </p>
                      <p className="font-montserrat text-paragraph text-[#3F3E3E] dark:text-gray-300">
                        {t('contact.text2')}
                      </p>
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FEC40D] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#3F3E3E]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-subtitle text-[#D28A2B]">
                        {t('contact.subtitle3')}
                      </p>
                      <p className="font-montserrat text-paragraph text-[#3F3E3E] dark:text-gray-300">
                        {t('contact.text3')}
                      </p>
                    </div>
                  </div>
                )}
              </animated.div>
            ))}
          </div>
        </animated.div>

        {/* Columna derecha - Mapa */}
        <animated.div 
          ref={rightRef} 
          style={rightSprings} 
          className="w-full md:w-3/5 h-64 md:h-auto"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.00885192582!2d-58.85255979999999!3d-34.47729969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b8caf5bdb71%3A0x54d80dea5c4c0762!2sAv.%20Pres.%20Juan%20Domingo%20Peron%203251%2C%20B1635%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746035437303!5m2!1ses!2sar" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Valores Sinai"
          ></iframe>
        </animated.div>
      </div>
    </animated.section>
  );
};