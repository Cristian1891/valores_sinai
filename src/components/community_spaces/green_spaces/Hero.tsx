import React from 'react';
// import { useTranslation } from 'react-i18next';

// Componente Hero Principal
export const Hero: React.FC = () => {
//   const { t } = useTranslation();
  
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-[#8FBF73] to-[#74AADB] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-title md:text-5xl font-bold mb-6 animate-fade-in">
          Espacios Verdes que Inspiran
        </h1>
        <p className="text-subtitle md:text-xl mb-8 opacity-90">
          Descubre nuestras 2.5 hectáreas de naturaleza y tranquilidad, diseñadas para el encuentro y la recreación comunitaria
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Explorar Espacios
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
            Reservar Visita
          </button>
        </div>
      </div>
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-[#FEC40D] bg-opacity-30 rounded-full animate-bounce"></div>
    </section>
  );
};