import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { t } = useTranslation();

  // Detectar modo oscuro
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  // Observar cambios en el modo oscuro
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/salon_conferencia.jpeg" 
          alt="Interior acogedor de Valores Sinai" 
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro gradual para mejorar legibilidad */}
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-black/80 via-black/60 to-black/40' 
            : 'bg-gradient-to-r from-black/70 via-black/50 to-black/30'
        } transition-all duration-300`}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20">
        {/* Contenedor centrado */}
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          
          {/* Contenido de texto centrado */}
          <div className="w-full max-w-3xl">
            {/* Texto superior pequeño */}
            <p className={`font-montserrat text-paragraph mb-4 ${
              isDarkMode ? 'text-[#E4E2D1]' : 'text-[#E4E2D1]'
            } tracking-wide uppercase opacity-90`}>
              {t('hero.subtitle', 'Comprometidos con nuestros valores')}
            </p>

            {/* Título principal */}
            <h1 className={`font-montserrat text-title font-normal mb-6 ${
              isDarkMode ? 'text-white' : 'text-white'
            } leading-tight`}>
              {t('hero.title', 'Bienvenidos a Valores Sinai')}
            </h1>

            {/* Descripción */}
            <p className={`font-montserrat text-subtitle font-normal mb-8 mx-auto max-w-2xl ${
              isDarkMode ? 'text-[#E4E2D1]' : 'text-[#E4E2D1]'
            } leading-relaxed opacity-90`}>
              {t('hero.description', 'Creemos que cada esfuerzo cuenta y que, juntos podemos marcar una diferencia significativa')}
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contacto"
                className={`
                  px-8 py-3 rounded-md font-montserrat font-bold text-button 
                  bg-[var(--color-accent)] text-[var(--color-grayDark)] 
                  hover:bg-[var(--color-orange)] transition-all duration-300
                  transform hover:scale-105 shadow-lg hover:shadow-xl
                  min-w-[160px] text-center
                `}
              >
                {t('hero.contact', 'Contáctanos')}
              </Link>
              
              <Link
                to="/donar"
                className={`
                  px-8 py-3 rounded-md font-montserrat font-bold text-button 
                  border-2 border-[var(--color-accent)] text-[var(--color-accent)]
                  hover:bg-[var(--color-accent)] hover:text-[var(--color-grayDark)]
                  transition-all duration-300 transform hover:scale-105
                  backdrop-blur-sm bg-white/10
                  min-w-[160px] text-center
                `}
              >
                {t('hero.donate', 'Haz una donación')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg 
          className={`w-6 h-6 ${isDarkMode ? 'text-white/70' : 'text-white/70'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};