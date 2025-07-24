export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#70615A] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-section md:text-4xl font-bold mb-6">
          ¿Listo para Conocer Nuestros Espacios?
        </h2>
        <p className="text-paragraph md:text-lg mb-8 opacity-90">
          Te invitamos a visitar nuestras instalaciones y descubrir todos los espacios 
          verdes que tenemos preparados para ti y tu familia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Agendar Visita
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            Más Información
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">📍</div>
            <h4 className="text-subtitle font-bold mb-1">Ubicación</h4>
            <p className="text-paragraph opacity-80">Fácil acceso y estacionamiento</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🕒</div>
            <h4 className="text-subtitle font-bold mb-1">Horarios</h4>
            <p className="text-paragraph opacity-80">Abierto todos los días</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🔒</div>
            <h4 className="text-subtitle font-bold mb-1">Seguridad</h4>
            <p className="text-paragraph opacity-80">Monitoreado 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};