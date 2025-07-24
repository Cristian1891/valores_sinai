// Sección de Vestuarios y Servicios
export const ChangingRoomsSection: React.FC = () => {
  const vestuarioFeatures = [
    {
      icon: "🚿",
      title: "Duchas Modernas",
      description: "Instalaciones de ducha con agua caliente y fría, completamente equipadas",
      amenities: ["Agua caliente 24/7", "Duchas individuales", "Dispensadores de jabón", "Ganchos y repisas"]
    },
    {
      icon: "🔒",
      title: "Lockers Seguros",
      description: "Casilleros individuales con sistema de seguridad para guardar pertenencias",
      amenities: ["Casilleros amplios", "Cerraduras seguras", "Numeración clara", "Supervisión constante"]
    },
    {
      icon: "👕",
      title: "Áreas de Cambio",
      description: "Espacios privados y cómodos para cambiarse con total comodidad",
      amenities: ["Cabinas individuales", "Bancos de madera", "Espejos grandes", "Ventilación óptima"]
    },
    {
      icon: "🧴",
      title: "Amenities Premium",
      description: "Productos de higiene y comodidades adicionales para una experiencia completa",
      amenities: ["Secadores de pelo", "Productos de higiene", "Toallas disponibles", "Área de maquillaje"]
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Vestuarios y Servicios
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Instalaciones modernas y completas para tu máxima comodidad antes y después del disfrute acuático
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vestuarioFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#70615A] dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
              </div>
              <div className="space-y-2">
                {feature.amenities.map((amenity, amenityIndex) => (
                  <div key={amenityIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#74AADB] rounded-full mr-2"></div>
                    <span className="text-xs">{amenity}</span>
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
