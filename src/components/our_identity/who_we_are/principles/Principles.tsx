import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Principles: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { t } = useTranslation();

  // Verificar si estamos en modo oscuro
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  // Detector de cambios de modo oscuro en el DOM
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

  // Definir los iconos para cada principio
  const principleIcons = {
    mission: '🎯',
    vision: '🔮',
    values: '💎'
  };

  return (
    <section className={`py-12 px-4 ${isDarkMode ? 'bg-[var(--color-dark)]' : 'bg-[var(--color-neutralLight)]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Contenido de texto */}
          <div className="flex-1 lg:pr-8">
            <h2 className={`font-montserrat font-bold text-section mb-6 ${isDarkMode ? 'text-white' : 'text-[var(--color-grayDark)]'}`}>
              {t('our_identity.who_we_are.title')}
            </h2>
            
            <div className="space-y-4 mb-6">
              <p className={`font-montserrat text-paragraph leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-[var(--color-grayDark)]'}`}>
                {t('our_identity.who_we_are.description')}
              </p>
            </div>

            {/* Lista de principios */}
            <div className="space-y-4">
              {/* Misión */}
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 leading-none">
                  {principleIcons.mission}
                </div>
                <div className="flex-1">
                  <span className={`font-montserrat font-bold text-highlight ${isDarkMode ? 'text-[var(--color-accent)]' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.mission.title')}:
                  </span>
                  <span className={`font-montserrat text-paragraph ml-2 ${isDarkMode ? 'text-gray-300' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.mission.description')}
                  </span>
                </div>
              </div>

              {/* Visión */}
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 leading-none">
                  {principleIcons.vision}
                </div>
                <div className="flex-1">
                  <span className={`font-montserrat font-bold text-highlight ${isDarkMode ? 'text-[var(--color-accent)]' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.vision.title')}:
                  </span>
                  <span className={`font-montserrat text-paragraph ml-2 ${isDarkMode ? 'text-gray-300' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.vision.description')}
                  </span>
                </div>
              </div>

              {/* Valores */}
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 leading-none">
                  {principleIcons.values}
                </div>
                <div className="flex-1">
                  <span className={`font-montserrat font-bold text-highlight ${isDarkMode ? 'text-[var(--color-accent)]' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.values.title')}:
                  </span>
                  <span className={`font-montserrat text-paragraph ml-2 ${isDarkMode ? 'text-gray-300' : 'text-[var(--color-grayDark)]'}`}>
                    {t('our_identity.who_we_are.values.description')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1 lg:max-w-md w-full">
            <div className="relative">
              <img 
                src="/img/qs_seccion2.jpg" 
                alt={t('our_identity.who_we_are.imageAlt')}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
              />
              {/* Overlay sutil en modo oscuro */}
              {isDarkMode && (
                <div className="absolute inset-0 bg-opacity-20 rounded-lg"></div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};