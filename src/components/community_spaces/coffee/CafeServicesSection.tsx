// Sección de Horarios y Servicios
export const CafeServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🕐",
      title: "Horarios Flexibles",
      description: "Abierto para desayunos, almuerzos y meriendas",
      details: ["Lunes a Viernes: 7:00 - 18:00", "Sábados: 8:00 - 19:00", "Domingos: 9:00 - 17:00"]
    },
    {
      icon: "📱",
      title: "Pedidos para Llevar",
      description: "Ordena con anticipación y retira sin esperas",
      details: ["Pedidos por WhatsApp", "Preparación rápida", "Empaque ecológico", "Descuentos especiales"]
    },
    {
      icon: "🎂",
      title: "Eventos Especiales",
      description: "Organizamos celebraciones íntimas y reuniones",
      details: ["Cumpleaños pequeños", "Reuniones de trabajo", "Celebraciones familiares", "Reservas grupales"]
    },
    {
      icon: "🌱",
      title: "Compromiso Sustentable",
      description: "Productos locales y prácticas eco-amigables",
      details: ["Ingredientes orgánicos", "Packaging biodegradable", "Comercio justo", "Residuos mínimos"]
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Servicios y Comodidades
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-[#302E2E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
              <div className="space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#FEC40D] rounded-full mr-3"></div>
                    <span className="text-paragraph">{detail}</span>
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