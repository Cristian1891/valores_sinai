// Call to Action Final
export const SalonCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#3F3E3E] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🎭</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          Transforma tu Visión en Realidad
        </h2>
        <p className="text-paragraph md:text-xl mb-8 opacity-90">
          Desde eventos íntimos hasta grandes producciones, nuestro salón premium 
          está equipado con todo lo necesario para hacer de tu evento una experiencia única.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Reservar Fecha
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            Agendar Visita
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-subtitle font-bold mb-2">Planificación Experta</h4>
            <p className="text-paragraph opacity-80">Coordinación profesional desde el primer contacto</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h4 className="text-subtitle font-bold mb-2">Calidad Premium</h4>
            <p className="text-paragraph opacity-80">Tecnología de vanguardia y servicios de excelencia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-subtitle font-bold mb-2">Compromiso Total</h4>
            <p className="text-paragraph opacity-80">Garantizamos el éxito de tu evento</p>
          </div>
        </div>
      </div>
    </section>
  );
};