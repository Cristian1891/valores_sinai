import { useTranslation } from "react-i18next";
import { useInView } from "@react-spring/web";
import { animated } from "@react-spring/web";

export const About: React.FC = () => {
  const { t } = useTranslation();

  // Animación para la versión desktop
  const [desktopRef, desktopSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -50,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    { once: true, rootMargin: '-20% 0%' }
  );

  const [textRef, textSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    { once: true, rootMargin: '-20% 0%' }
  );

  // Animación para la versión mobile
  const [mobileRef, mobileSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    { once: true, rootMargin: '-20% 0%' }
  );

  return (
    <section className="w-full bg-white dark:bg-[var(--color-grayDark)] py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Versión Desktop */}
        <div className="hidden md:flex flex-row items-center">
          <animated.div 
            ref={desktopRef}
            style={desktopSprings}
            className="w-2/5 pr-8 h-full"
          >
            <img 
              src="/img/about_home.jpg" 
              alt="Valores Sinaí" 
              className="w-full object-cover rounded-md shadow-lg"
            />
          </animated.div>
          
          <animated.div 
            ref={textRef}
            style={textSprings}
            className="w-3/5"
          >
            <h2 className="text-section font-montserrat font-bold text-[#74AADB] dark:text-[#74AADB] mb-4">
              {t('about.title')}
            </h2>
            
            <p className="text-paragraph font-montserrat text-gray-800 dark:text-gray-300 mb-6">
              {t('about.text')}
            </p>
            
            <div className="flex flex-row space-x-12">
              {/* Sección Misión */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-[#74AADB] text-3xl">★</span>
                </div>
                <div>
                  <h3 className="text-subtitle font-ibm text-[#74AADB] mb-2">
                    {t('about.subtitle1')}
                  </h3>
                  <p className="text-paragraph font-montserrat text-gray-800 dark:text-gray-300">
                    {t('about.text1')}
                  </p>
                </div>
              </div>
              
              {/* Sección Visión */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-[#74AADB] text-3xl">★</span>
                </div>
                <div>
                  <h3 className="text-subtitle font-ibm text-[#74AADB] mb-2">
                    {t('about.subtitle2')}
                  </h3>
                  <p className="text-paragraph font-montserrat text-gray-800 dark:text-gray-300">
                    {t('about.text2')}
                  </p>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
        
        {/* Versión Mobile */}
        <animated.div 
          ref={mobileRef}
          style={mobileSprings}
          className="md:hidden flex flex-col"
        >
          <h2 className="text-section font-montserrat font-bold text-center text-[#74AADB] dark:text-[#74AADB] mb-4">
            {t('about.title')}
          </h2>
          
          <div className="mb-6">
            <img 
              src="/img/about_home.jpg" 
              alt="Valores Sinaí" 
              className="w-full max-w-xs mx-auto h-auto rounded-md"
            />
          </div>
          
          <p className="text-paragraph font-montserrat text-center text-gray-800 dark:text-gray-300 mb-6">
            {t('about.text')}
          </p>
          
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="w-1/2 flex flex-col items-center px-2">
                <span className="text-[#74AADB] text-3xl mb-2">★</span>
                <h3 className="text-subtitle font-ibm text-[#74AADB] text-center mb-4">
                  {t('about.subtitle1')}
                </h3>
                <p className="text-paragraph font-montserrat text-center text-gray-800 dark:text-gray-300">
                  {t('about.text1')}
                </p>
              </div>
              
              <div className="w-1/2 flex flex-col items-center px-2">
                <span className="text-[#74AADB] text-3xl mb-2">★</span>
                <h3 className="text-subtitle font-ibm text-[#74AADB] text-center mb-4">
                  {t('about.subtitle2')}
                </h3>
                <p className="text-paragraph font-montserrat text-center text-gray-800 dark:text-gray-300">
                  {t('about.text2')}
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
}