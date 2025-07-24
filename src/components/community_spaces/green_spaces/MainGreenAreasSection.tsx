export const MainGreenAreasSection: React.FC = () => {
  const greenAreas = [
    {
      title: "Áreas de Recreación",
      description: "Amplios espacios verdes para el disfrute familiar y comunitario, perfectos para actividades al aire libre y momentos de conexión con la naturaleza.",
      features: ["Placita para niños", "Canchita de fútbol", "Cancha de vóley", "Espacios de picnic"],
      image: "🌳",
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      title: "Zona de Relajación",
      description: "Espacios diseñados para el descanso y la contemplación, rodeados de vegetación natural que invita a la paz y tranquilidad.",
      features: ["Jardines paisajísticos", "Senderos naturales", "Áreas de descanso", "Espacios meditativos"],
      image: "🌿",
      color: "from-[#74AADB] to-[#8FBF73]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestras Áreas Verdes
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Espacios naturales cuidadosamente diseñados para promover el bienestar, la recreación y el encuentro comunitario
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {greenAreas.map((area, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative p-8 rounded-2xl bg-gradient-to-r ${area.color} text-white mb-6 transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="text-6xl mb-4 opacity-80">{area.image}</div>
                <h3 className="text-subtitle md:text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-paragraph md:text-base opacity-90 leading-relaxed">
                  {area.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {area.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                    <span className="text-paragraph md:text-base">{feature}</span>
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