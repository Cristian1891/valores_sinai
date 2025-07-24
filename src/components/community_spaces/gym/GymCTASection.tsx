// Sección CTA para Gimnasio
export const GymCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#3F3E3E] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🏋️‍♀️</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          ¡Comienza tu Transformación Hoy!
        </h2>
        <p className="text-paragraph md:text-xl mb-8 opacity-90">
          Únete a nuestra comunidad fitness y descubre todo tu potencial en un ambiente 
          único rodeado de naturaleza y con el mejor equipamiento.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Prueba Gratuita
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            Agendar Visita
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-subtitle font-bold mb-2">Resultados Garantizados</h4>
            <p className="text-paragraph opacity-80">Plan personalizado para alcanzar tus objetivos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="text-subtitle font-bold mb-2">Ambiente Único</h4>
            <p className="text-paragraph opacity-80">Entrena rodeado de naturaleza y tranquilidad</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">👥</div>
            <h4 className="text-subtitle font-bold mb-2">Comunidad Activa</h4>
            <p className="text-paragraph opacity-80">Conoce personas con tus mismos objetivos</p>
          </div>
        </div>
      </div>
    </section>
  );
};