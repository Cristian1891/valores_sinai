// Sección de Tipos de Eventos
export const QuinchoEventsSection: React.FC = () => {
//   const { t } = useTranslation();
  
  const eventTypes = [
    {
      title: "Reuniones Familiares",
      description: "El espacio ideal para celebrar cumpleaños, aniversarios y encuentros familiares en un ambiente cálido y acogedor",
      icon: "👨‍👩‍👧‍👦",
      features: ["Ambiente familiar", "Seguridad garantizada", "Espacios para niños cercanos", "Flexibilidad horaria"],
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      title: "Eventos Corporativos",
      description: "Perfecto para team building, celebraciones empresariales y reuniones de trabajo en un entorno único",
      icon: "🏢",
      features: ["Presentaciones al aire libre", "Networking natural", "Catering personalizado", "Tecnología disponible"],
      color: "from-[#74AADB] to-[#70615A]"
    },
    {
      title: "Celebraciones Especiales",
      description: "Bodas, graduaciones, bautismos y otras ceremonias importantes en contacto directo con la naturaleza",
      icon: "🎉",
      features: ["Decoración incluida", "Fotografías naturales", "Ceremonias personalizadas", "Recuerdos inolvidables"],
      color: "from-[#FEC40D] to-[#8FBF73]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            {/* {t('quincho.tiposEventos') || 'Tipos de Eventos'} */}
            {'Tipos de Eventos'}
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestro quincho se adapta perfectamente a todo tipo de celebraciones y reuniones
          </p>
        </div>

        <div className="space-y-8">
          {eventTypes.map((event, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-gradient-to-r ${event.color} text-white`}>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{event.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{event.title}</h3>
                </div>
                <p className="text-base md:text-lg mb-8 opacity-90">
                  {event.description}
                </p>
                <div className="space-y-3">
                  {event.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm text-center">
                  <div className="text-6xl mb-4">{event.icon}</div>
                  <h4 className="text-xl font-bold mb-2">¿Planificando un evento?</h4>
                  <p className="text-sm opacity-90 mb-4">Te ayudamos a organizarlo perfectamente</p>
                  <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                    {/* {t('quincho.consultarDisponibilidad') || 'Consultar Disponibilidad'} */}
                    {'Consultar Disponibilidad'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};