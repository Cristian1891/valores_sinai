// Sección de Servicios de la Posada
export const PosadaServicesSection: React.FC = () => {
  const services = [
    {
      category: 'Servicios Básicos',
      items: [
        { icon: '🧹', name: 'Limpieza Diaria', description: 'Servicio de limpieza incluido' },
        { icon: '🛁', name: 'Ropa de Cama', description: 'Cambio de ropa de cama cada 3 días' },
        { icon: '📶', name: 'WiFi Gratuito', description: 'Internet de alta velocidad' },
        { icon: '🅿️', name: 'Estacionamiento', description: 'Espacio de parking incluido' }
      ]
    },
    {
      category: 'Servicios Adicionales',
      items: [
        { icon: '🍳', name: 'Desayuno', description: 'Opcional, con productos locales' },
        { icon: '🧺', name: 'Lavandería', description: 'Servicio de lavado y planchado' },
        { icon: '🔐', name: 'Caja de Seguridad', description: 'Para objetos de valor' },
        { icon: '🚗', name: 'Transfer', description: 'Servicio de traslado disponible' }
      ]
    },
    {
      category: 'Servicios Exclusivos',
      items: [
        { icon: '🌿', name: 'Actividades Naturales', description: 'Senderismo y observación' },
        { icon: '🧘', name: 'Zona de Relajación', description: 'Espacios para meditación' },
        { icon: '📚', name: 'Biblioteca', description: 'Sala de lectura tranquila' },
        { icon: '🎯', name: 'Actividades Recreativas', description: 'Acceso a todas las instalaciones' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios de la Posada
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una experiencia completa con servicios pensados para tu comodidad y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((serviceCategory, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg">
              <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-6 text-center">
                {serviceCategory.category}
              </h3>
              <div className="space-y-4">
                {serviceCategory.items.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-[#302E2E] rounded-lg hover:bg-gray-100 dark:hover:bg-[#3F3E3E] transition-colors duration-200">
                    <div className="text-2xl flex-shrink-0">{service.icon}</div>
                    <div>
                      <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-1">
                        {service.name}
                      </h4>
                      <p className="text-paragraph text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
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