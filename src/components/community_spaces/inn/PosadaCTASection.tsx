// CTA Section para Posada
export const PosadaCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#3F3E3E] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🌟</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          ¿Listo para una Experiencia Única?
        </h2>
        <p className="text-paragraph md:text-xl mb-8 opacity-90">
          Descubre la tranquilidad y comodidad de nuestra posada en un entorno natural incomparable. 
          Tu descanso perfecto te está esperando.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Reservar Ahora
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            Consultar Tarifas
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🏡</div>
            <h4 className="text-subtitle font-bold mb-2">Ambiente Familiar</h4>
            <p className="text-paragraph opacity-80">Hospitalidad cálida en un entorno acogedor</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🌿</div>
            <h4 className="text-subtitle font-bold mb-2">Conexión Natural</h4>
            <p className="text-paragraph opacity-80">Despierta rodeado de naturaleza y tranquilidad</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-subtitle font-bold mb-2">Experiencia Completa</h4>
            <p className="text-paragraph opacity-80">Alojamiento + acceso a todas las instalaciones</p>
          </div>
        </div>
      </div>
    </section>
  );
};