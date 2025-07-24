// Sección de Tipos de Eventos Profesionales
export const SalonEventTypesSection: React.FC = () => {
  const eventTypes = [
    {
      title: "Conferencias & Convenciones",
      description: "Eventos corporativos de alto nivel con tecnología profesional y servicios premium",
      icon: "🎤",
      benefits: ["Traducción simultánea", "Registro digital", "Networking dirigido", "Certificaciones"],
      color: "from-[#74AADB] to-[#70615A]"
    },
    {
      title: "Espectáculos & Shows",
      description: "Producciones artísticas y culturales con escenario profesional e iluminación teatral",
      icon: "🎭",
      benefits: ["Escenario elevado", "Camerinos privados", "Efectos especiales", "Venta de entradas"],
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      title: "Ferias & Exposiciones",
      description: "Eventos comerciales y muestras industriales con espacios modulares adaptables",
      icon: "🏢",
      benefits: ["Stands personalizados", "Conexiones industriales", "Áreas de demostración", "Logística incluida"],
      color: "from-[#FEC40D] to-[#8FBF73]"
    },
    {
      title: "Galas & Premiaciones",
      description: "Celebraciones elegantes con servicios de lujo y protocolo profesional",
      icon: "🏆",
      benefits: ["Protocolo oficial", "Catering gourmet", "Fotografía profesional", "Transmisión en vivo"],
      color: "from-[#70615A] to-[#FEC40D]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Eventos Profesionales
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Desde íntimas reuniones hasta grandes producciones, nuestro salón se adapta a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventTypes.map((event, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${event.color} text-white p-8 hover:scale-105 transition-all duration-300`}>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{event.icon}</div>
                  <h3 className="text-subtitle md:text-2xl font-bold">{event.title}</h3>
                </div>
                <p className="text-paragraph md:text-base mb-6 opacity-90">
                  {event.description}
                </p>
                <div className="space-y-3">
                  {event.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-paragraph">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                  Consultar Presupuesto
                </button>
              </div>
              <div className="absolute -top-4 -right-4 text-6xl opacity-20">
                {event.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};