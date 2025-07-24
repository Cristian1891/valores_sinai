// Sección de Servicios Gastronómicos
export const ComedorServicesSection: React.FC = () => {
  const services = [
    {
      title: "Comedor Principal",
      description: "Amplio espacio para comidas diarias, desayunos, almuerzos y cenas en un ambiente familiar y acogedor",
      icon: "🍽️",
      features: ["Capacidad para 120 personas", "Menú diario variado", "Horarios flexibles", "Ambiente familiar"],
      color: "from-[#FEC40D] to-[#D28A2B]"
    },
    {
      title: "Cafetería",
      description: "Espacio relajado para encuentros informales, café, meriendas y snacks durante todo el día",
      icon: "☕",
      features: ["Bebidas calientes y frías", "Pastelería artesanal", "Ambiente relajado", "WiFi disponible"],
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      title: "Proveeduría",
      description: "Servicio de abastecimiento y productos frescos para huéspedes y eventos especiales",
      icon: "🛒",
      features: ["Productos locales", "Ingredientes frescos", "Servicio personalizado", "Entregas programadas"],
      color: "from-[#74AADB] to-[#70615A]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios Gastronómicos
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tres espacios especializados para satisfacer todas tus necesidades gastronómicas
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-gradient-to-r ${service.color} text-white`}>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{service.icon}</div>
                  <h3 className="text-subtitle md:text-3xl font-bold">{service.title}</h3>
                </div>
                <p className="text-paragraph md:text-lg mb-8 opacity-90">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-paragraph md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm text-center">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h4 className="text-subtitle font-bold mb-2">¿Interesado en este servicio?</h4>
                  <p className="text-paragraph opacity-90 mb-4">Conoce más detalles y horarios</p>
                  <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                    Más Información
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