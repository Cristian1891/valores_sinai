// CTA Section del Café
export const CafeCTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#70615A] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">☕</div>
        <h2 className="text-section md:text-4xl font-bold mb-6">
          ¿Listo para una Experiencia Única?
        </h2>
        <p className="text-paragraph md:text-lg mb-8 opacity-90">
          Te esperamos para compartir momentos especiales, sabores auténticos y 
          conversaciones que perduran en el tiempo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            Visítanos Hoy
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            Hacer Pedido
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="text-subtitle font-bold mb-2">Fácil Ubicación</h4>
            <p className="text-paragraph opacity-80">Dentro del predio, acceso directo desde estacionamiento</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎵</div>
            <h4 className="text-subtitle font-bold mb-2">Ambiente Único</h4>
            <p className="text-paragraph opacity-80">Música suave, decoración cálida y vistas naturales</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💝</div>
            <h4 className="text-subtitle font-bold mb-2">Momentos Especiales</h4>
            <p className="text-paragraph opacity-80">Cada visita es una nueva historia por contar</p>
          </div>
        </div>
      </div>
    </section>
  );
};