// src/components/Hero.tsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface CarouselItem {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { t } = useTranslation();
  
  // Array de elementos del carrusel
  const carouselItems: CarouselItem[] = [
    {
      image: "/img/carousel_home_6.jpeg", // Reemplazar con la ruta de tu imagen
      title: t('hero.slide1.title'),
      subtitle: t('hero.slide1.subtitle'),
      buttonText: t('hero.slide1.button'),
      buttonUrl: "/proyectos"
    },
    {
      image: "/img/carousel_home_8.jpeg", // Reemplazar con la ruta de tu segunda imagen
      title: t('hero.slide2.title'),
      subtitle: t('hero.slide2.subtitle'),
      buttonText: t('hero.slide2.button'),
      buttonUrl: "/programas"
    },
    {
      image: "/img/carousel_home_5.jpeg", // Reemplazar con la ruta de tu tercera imagen
      title: t('hero.slide3.title'),
      subtitle: t('hero.slide3.subtitle'),
      buttonText: t('hero.slide3.button'),
      buttonUrl: "/aliados"
    }
  ];

  console.log("Carousel items:", carouselItems);

  // Avanzar automáticamente el carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    
    return () => clearInterval(interval);
    
    
  }, [carouselItems.length]);

  // Función para cambiar manualmente el slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Retroceder al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel container */}
      <div className="relative h-full w-full">
        {carouselItems.map((item, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Imagen de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay oscuro para mejorar la legibilidad del texto */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-25"></div> */}
            </div>

            {/* Contenido del slide */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-10">
              <div className="text-white mb-6">
                <h2 className="text-lg md:text-2xl mb-2 text-subtitle">{t('hero.asociacion')}</h2>
                <h1 className="text-2xl md:text-4xl text-title text-[#FEC40D] mb-4">{item.title}</h1>
                <p className="text-sm md:text-base text-paragraph max-w-2xl mx-auto">
                  {item.subtitle}
                </p>
              </div>
              <a 
                href={item.buttonUrl} 
                className="px-6 py-2 bg-[#FEC40D] rounded-md text-button font-bold text-sm md:text-base text-gray-800 hover:bg-[#D28A2B] transition-colors"
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Controles del carrusel */}
        {carouselItems.length > 1 && (
          <>
            {/* Botón anterior */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Slide anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botón siguiente */}
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Slide siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores de slide */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
              <div className="flex space-x-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-[#FEC40D]' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Ir al slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};