// Sección de Servicios Complementarios
export const ConferenceServicesSection: React.FC = () => {
  const services = [
    {
      category: "Servicios Técnicos",
      items: [
        { name: "Soporte técnico especializado", icon: "🔧", description: "Técnico presente durante todo el evento" },
        { name: "Transmisión en vivo", icon: "📡", description: "Streaming profesional HD" },
        { name: "Grabación multi-cámara", icon: "🎥", description: "Registro completo del evento" },
        { name: "Iluminación profesional", icon: "💡", description: "Configuración según necesidades" }
      ]
    },
    {
      category: "Servicios de Hospitalidad",
      items: [
        { name: "Catering empresarial", icon: "🍽️", description: "Menús personalizados" },
        { name: "Coffee breaks", icon: "☕", description: "Pausas programadas" },
        { name: "Servicio de recepción", icon: "🏩", description: "Atención personalizada" },
        { name: "Coordinación integral", icon: "📋", description: "Gestión completa del evento" }
      ]
    },
    {
      category: "Servicios Adicionales",
      items: [
        { name: "Traducción simultánea", icon: "🗣️", description: "Interpretes profesionales" },
        { name: "Material promocional", icon: "📚", description: "Diseño e impresión" },
        { name: "Fotografía profesional", icon: "📸", description: "Cobertura completa" },
        { name: "Transporte ejecutivo", icon: "🚗", description: "Traslados coordinados" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios Complementarios
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Servicios adicionales para hacer de tu evento una experiencia completa y profesional
          </p>
        </div>

        <div className="space-y-12">
          {services.map((serviceCategory, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-r from-[#E4E2D1] to-[#DBCDB7] dark:from-[#302E2E] dark:to-[#3F3E3E] rounded-2xl p-8">
              <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-8 text-center">
                {serviceCategory.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCategory.items.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white dark:bg-[#3F3E3E] rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                      {service.name}
                    </h4>
                    <p className="text-paragraph text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
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