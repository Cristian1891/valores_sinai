import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useInView, animated } from '@react-spring/web';

export const Donation_Summary: React.FC = () => {
  // Estado para detectar si es una vista móvil
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { t } = useTranslation();

  // Animación para el contenedor principal
  const [containerRef, containerSprings] = useInView(
    () => ({
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
      config: { tension: 120, friction: 14 }
    }),
    { once: true, rootMargin: '-20% 0%' }
  );

  // Animación para imágenes con stagger
  const [imagesRef, imagesSprings] = useInView(
    () => ({
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
      delay: 200,
      config: { mass: 1, tension: 280, friction: 20 }
    }),
    { once: true, rootMargin: '-15% 0%' }
  );

  // Animación para texto
  const [textRef, textSprings] = useInView(
    () => ({
      from: { opacity: 0, x: 30 },
      to: { opacity: 1, x: 0 },
      config: { tension: 150, friction: 12 }
    }),
    { once: true, rootMargin: '-15% 0%' }
  );
  
  // Efecto para detectar el tamaño de la pantalla
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Comprobar al cargar
    checkIfMobile();
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIfMobile);
    // Limpiar listener al desmontar
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <animated.div ref={containerRef} style={containerSprings} className="bg-[#E4E2D1] dark:bg-[var(--color-grayDarkv1)] w-full py-6 px-4 md:py-8">
      <div className="max-w-6xl mx-auto">
        <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-between items-center'}`}>
          
          <animated.div ref={imagesRef} style={imagesSprings} className={`${isMobile ? 'w-full mb-6 flex justify-center' : 'w-1/2 flex justify-around pr-8'}`}>
            <div className={`
              ${isMobile ? 'grid grid-cols-2 gap-2 w-64 h-64' : 'grid grid-cols-2 gap-2 w-64 h-84'}
            `}>
              {/* Imagen superior izquierda */}
              <div className="flex items-end justify-end">
                <img
                  src="/img/donation_summary_1.jpg"
                  alt="Manos de solidaridad"
                  className="w-24 h-16 object-cover"
                />
              </div>
              
              {/* Imagen superior derecha */}
              <div className="flex items-end justify-end">
                <img
                  src="/img/donation_summary_2.jpg"
                  alt="Proyecto comunitario"
                  className="w-32 h-24 object-cover"
                />
              </div>
              
              {/* Imagen inferior izquierda */}
              <div className="flex items-start justify-start">
                <img
                  src="/img/donation_summary_3.jpg"
                  alt="Caja de donaciones"
                  className="w-32 h-28 object-cover"
                />
              </div>
              
              {/* Imagen inferior derecha */}
              <div className="flex items-start justify-start">
                <img
                  src="/img/donation_summary_4.jpg"
                  alt="Trabajo voluntario"
                  className="w-24 h-16 object-cover"
                />
              </div>
            </div>
          </animated.div>
          
          {/* Título, texto y botón - todo centrado en móvil */}
          <animated.div ref={textRef} style={textSprings} className={`${isMobile ? 'w-full text-center' : 'w-1/2 text-left'}`}>
            <div className="flex flex-col justify-center h-full">
              <h2 className={`font-montserrat text-section font-bold mb-3 text-gray-800 dark:text-white ${isMobile ? 'w-full mx-auto' : 'w-3/5'}`}>
                {t('donation.title')}
              </h2>
              <p className={`font-montserrat text-paragraph mb-4 text-gray-700 dark:text-gray-300 ${isMobile ? 'w-full mx-auto' : 'w-3/5'}`}>
                {t('donation.text')}
              </p>
              <div className={`${isMobile ? 'flex justify-center' : 'flex justify-start'}`}>
                <Link to="/donar">
                  <button className="bg-[#FEC40D] hover:bg-[#D28A2B] text-gray-800 font-montserrat font-bold text-button px-6 py-2 rounded-md transition-colors duration-300 cursor-pointer">
                    {t('donation.button')}
                  </button>
                </Link>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
}