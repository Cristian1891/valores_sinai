// Sección de Características de la Cocina
export const ComedorKitchenSection: React.FC = () => {
  const kitchenFeatures = [
    {
      icon: "🔥",
      title: "Cocina Industrial",
      description: "Equipamiento profesional para la preparación de grandes volúmenes de comida",
      specs: ["Hornos industriales", "Plancha profesional", "Freidoras industriales", "Campana extractora"]
    },
    {
      icon: "🥶",
      title: "Refrigeración",
      description: "Sistema de conservación de alimentos con tecnología de última generación",
      specs: ["Cámaras frigoríficas", "Heladeras comerciales", "Congeladores verticales", "Control de temperatura"]
    },
    {
      icon: "🧽",
      title: "Área de Higiene",
      description: "Zona especializada para el lavado y sanitización de utensilios y vajilla",
      specs: ["Lavavajillas industrial", "Piletas de acero inoxidable", "Estaciones de lavado", "Productos sanitarios"]
    },
    {
      icon: "📦",
      title: "Almacenamiento",
      description: "Espacios organizados para el almacenamiento eficiente de ingredientes y suministros",
      specs: ["Despensas ventiladas", "Estanterías industriales", "Control de inventario", "Área de secos"]
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Instalaciones de Cocina
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Equipamiento profesional para garantizar la máxima calidad en cada preparación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {kitchenFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3"></div>
                        <span className="text-paragraph">{spec}</span>
                      </div>
                    ))}
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