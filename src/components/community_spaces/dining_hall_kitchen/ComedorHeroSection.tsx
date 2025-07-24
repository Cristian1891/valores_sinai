// Hero Section específica para Comedor-Cocina
export const ComedorHeroSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#FEC40D] via-[#D28A2B] to-[#70615A] text-white overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🍽️</div>
        <div className="absolute top-20 right-20 text-4xl">👨‍🍳</div>
        <div className="absolute bottom-20 left-20 text-5xl">🥘</div>
        <div className="absolute bottom-10 right-10 text-4xl">☕</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="text-8xl mb-6">🍽️</div>
          <h1 className="text-title md:text-6xl font-bold mb-6">
            Comedor y Cocina
          </h1>
          <p className="text-subtitle md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Espacios gastronómicos diseñados para experiencias culinarias únicas, 
            desde comidas familiares hasta grandes banquetes comunitarios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Reservar Mesa
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
              Ver Menú
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};