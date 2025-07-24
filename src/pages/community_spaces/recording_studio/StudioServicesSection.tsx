// Sección de Servicios de Grabación
export const StudioServicesSection: React.FC = () => {
  const services = [
    {
      title: "Grabación Musical",
      description: "Sesiones profesionales para artistas solistas, bandas y agrupaciones musicales",
      icon: "🎵",
      features: [
        "Grabación multicanal hasta 32 pistas",
        "Sesiones de voz y coros",
        "Grabación de instrumentos acústicos",
        "Overdubs y arreglos musicales"
      ],
      duration: "4-8 horas",
      ideal: "Músicos y bandas"
    },
    {
      title: "Producción de Podcast",
      description: "Grabación y edición profesional para programas de radio y podcasts",
      icon: "🎙️",
      features: [
        "Cabina aislada acústicamente",
        "Hasta 4 personas simultáneamente",
        "Edición y masterización",
        "Intro y outros personalizados"
      ],
      duration: "2-4 horas",
      ideal: "Podcasters y periodistas"
    },
    {
      title: "Doblaje y Locución",
      description: "Servicios especializados para proyectos audiovisuales y comerciales",
      icon: "🎬",
      features: [
        "Cabina de doblaje profesional",
        "Sincronización con video",
        "Múltiples idiomas",
        "Corrección de audio en tiempo real"
      ],
      duration: "1-3 horas",
      ideal: "Productoras y agencias"
    },
    {
      title: "Masterización",
      description: "Proceso final de optimización para distribución digital y física",
      icon: "🎛️",
      features: [
        "Ecualización profesional",
        "Compresión y limitación",
        "Análisis espectral",
        "Múltiples formatos de salida"
      ],
      duration: "1-2 horas",
      ideal: "Productores musicales"
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios de Grabación
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Servicios especializados para cada tipo de proyecto musical y audiovisual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#FEC40D] rounded-full mr-2"></div>
                        <span className="text-paragraph">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div>
                      <p className="text-paragraph font-bold text-[#70615A] dark:text-[#FEC40D]">
                        {service.duration}
                      </p>
                      <p className="text-paragraph text-gray-500 dark:text-gray-400">
                        {service.ideal}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-[#74AADB] text-white rounded-lg hover:bg-[#8FBF73] transition-colors duration-300">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};