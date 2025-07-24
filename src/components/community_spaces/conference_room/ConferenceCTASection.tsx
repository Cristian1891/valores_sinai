// Sección de Call to Action
export const ConferenceCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#74AADB] to-[#70615A] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🎯</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          Hagamos Realidad tu Próximo Evento
        </h2>
        <p className="text-paragraph md:text-xl mb-8 opacity-90">
          Nuestro equipo de expertos está listo para asesorarte y crear una experiencia 
          única para tu conferencia, seminario o evento corporativo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Solicitar Cotización
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
            Agendar Visita
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-subtitle font-bold mb-2">Respuesta Inmediata</h4>
            <p className="text-paragraph opacity-80">Cotización en menos de 24 horas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🏅</div>
            <h4 className="text-subtitle font-bold mb-2">Calidad Garantizada</h4>
            <p className="text-paragraph opacity-80">Estándares internacionales de servicio</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-subtitle font-bold mb-2">Atención Personalizada</h4>
            <p className="text-paragraph opacity-80">Coordinador dedicado para tu evento</p>
          </div>
        </div>
      </div>
    </section>
  );
};