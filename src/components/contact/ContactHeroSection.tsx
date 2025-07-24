// Hero Section para Contacto
export const ContactHeroSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#70615A] via-[#3F3E3E] to-[#010101] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">📧</div>
        <div className="absolute top-20 right-20 text-4xl">📞</div>
        <div className="absolute bottom-20 left-20 text-5xl">🤝</div>
        <div className="absolute bottom-10 right-10 text-4xl">💬</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="text-8xl mb-6">💬</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conectemos
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con tus proyectos educativos, eventos especiales 
            y todo lo relacionado con nuestros servicios comunitarios
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-lg p-4 text-black backdrop-blur-sm">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="font-bold mb-1">Horarios</h3>
              <p className="text-sm opacity-80">Lun-Vie: 9:00-18:00</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg text-black p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold mb-1">Respuesta</h3>
              <p className="text-sm opacity-80">24-48 horas</p>
            </div>
            <div className="bg-white bg-opacity-10 text-black rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold mb-1">Especialización</h3>
              <p className="text-sm opacity-80">Educación y Eventos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};