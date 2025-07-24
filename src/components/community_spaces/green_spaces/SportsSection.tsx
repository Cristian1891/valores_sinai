export const SportsSection: React.FC = () => {
  const sportsAreas = [
    {
      name: "Cancha de Fútbol",
      description: "Espacio amplio para la práctica del deporte más popular",
      icon: "⚽",
      features: ["Césped natural", "Iluminación nocturna", "Gradería"]
    },
    {
      name: "Cancha de Vóley",
      description: "Instalación profesional para voleibol",
      icon: "🏐",
      features: ["Superficie reglamentaria", "Red profesional", "Marcadores"]
    },
    {
      name: "Área de Paintball",
      description: "Zona especializada para paintball infantil",
      icon: "🎯",
      features: ["Obstáculos seguros", "Equipamiento incluido", "Supervisión"]
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Instalaciones Deportivas
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sportsAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-[#302E2E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-3">
                  {area.name}
                </h3>
                <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 mb-6">
                  {area.description}
                </p>
                <div className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#8FBF73] rounded-full mr-2"></div>
                      <span className="text-paragraph">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};