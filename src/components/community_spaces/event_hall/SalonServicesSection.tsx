// Sección de Servicios Adicionales
export const SalonServicesSection: React.FC = () => {
  const services = [
    {
      title: "Gestión Integral",
      description: "Coordinación completa de tu evento desde la planificación hasta la ejecución",
      icon: "📋",
      features: ["Planificación estratégica", "Coordinación logística", "Gestión de proveedores", "Control de calidad"]
    },
    {
      title: "Producción Audiovisual",
      description: "Servicios técnicos profesionales para transmisiones y grabaciones",
      icon: "🎬",
      features: ["Operadores especializados", "Equipos de grabación", "Edición en tiempo real", "Streaming multicámara"]
    },
    {
      title: "Protocolo & Seguridad",
      description: "Servicios de protocolo oficial y seguridad personalizada",
      icon: "🛡️",
      features: ["Personal de protocolo", "Seguridad privada", "Control de acceso", "Emergencias médicas"]
    },
    {
      title: "Catering Premium",
      description: "Gastronomía de excelencia adaptada a tu evento",
      icon: "🍽️",
      features: ["Menús personalizados", "Servicio de mozos", "Barra de tragos", "Opciones dietéticas"]
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios Adicionales
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complementa tu evento con nuestros servicios profesionales especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-[#302E2E] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#8FBF73] rounded-full mr-2"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};