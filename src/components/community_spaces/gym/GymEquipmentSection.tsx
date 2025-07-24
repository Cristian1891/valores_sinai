// Sección de Equipamiento
export const GymEquipmentSection: React.FC = () => {
  const equipmentCategories = [
    {
      category: "Cardio",
      icon: "🏃‍♂️",
      color: "from-[#74AADB] to-[#8FBF73]",
      equipment: [
        { name: "Caminadoras", count: "6", description: "Tecnología avanzada con programas personalizados" },
        { name: "Elípticas", count: "4", description: "Bajo impacto para todas las edades" },
        { name: "Bicicletas", count: "8", description: "Spinning y estáticas con monitores" },
        { name: "Remo", count: "3", description: "Entrenamiento completo de cuerpo" }
      ]
    },
    {
      category: "Fuerza",
      icon: "🏋️‍♀️",
      color: "from-[#8FBF73] to-[#70615A]",
      equipment: [
        { name: "Mancuernas", count: "Set completo", description: "Desde 1kg hasta 50kg" },
        { name: "Barras", count: "6", description: "Olímpicas y estándar" },
        { name: "Máquinas", count: "12", description: "Multifuncionales de alta gama" },
        { name: "Rack", count: "2", description: "Power rack completo" }
      ]
    },
    {
      category: "Funcional",
      icon: "🤸‍♂️",
      color: "from-[#70615A] to-[#FEC40D]",
      equipment: [
        { name: "TRX", count: "8", description: "Suspensión y peso corporal" },
        { name: "Kettlebells", count: "Set completo", description: "Diversos pesos disponibles" },
        { name: "Pelotas", count: "15", description: "Medicina, yoga y pilates" },
        { name: "Bandas", count: "20", description: "Resistencia variable" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Equipamiento Profesional
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnología de última generación para todos los niveles y objetivos de entrenamiento
          </p>
        </div>

        <div className="space-y-12">
          {equipmentCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-[#302E2E] dark:to-[#3F3E3E] rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{category.icon}</div>
                <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.equipment.map((item, itemIndex) => (
                  <div key={itemIndex} className={`relative p-6 rounded-xl bg-gradient-to-r ${category.color} text-white transform hover:scale-105 transition-all duration-300`}>
                    <div className="mb-4">
                      <h4 className="text-subtitle font-bold mb-2">{item.name}</h4>
                      <div className="text-2xl font-bold mb-2">{item.count}</div>
                    </div>
                    <p className="text-paragraph opacity-90">{item.description}</p>
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
