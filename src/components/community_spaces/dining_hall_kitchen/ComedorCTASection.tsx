// Sección de CTA específica para Comedor
export const ComedorCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FEC40D] to-[#D28A2B] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🍽️</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          ¿Listo para una Experiencia Gastronómica Única?
        </h2>
        <p className="text-paragraph md:text-xl mb-8 opacity-90">
          Reserva tu mesa en nuestro comedor y disfruta de la mejor gastronomía 
          en un ambiente familiar y acogedor rodeado de naturaleza.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Reservar Mesa
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
            Consultar Menú
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🕒</div>
            <h4 className="text-subtitle font-bold mb-2">Horarios Amplios</h4>
            <p className="text-paragraph opacity-80">Servicio desde las 7:00 hasta las 22:00</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">👨‍🍳</div>
            <h4 className="text-subtitle font-bold mb-2">Cocina Profesional</h4>
            <p className="text-paragraph opacity-80">Chefs especializados en cocina tradicional</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌱</div>
            <h4 className="text-subtitle font-bold mb-2">Ingredientes Frescos</h4>
            <p className="text-paragraph opacity-80">Productos locales y de temporada</p>
          </div>
        </div>
      </div>
    </section>
  );
};