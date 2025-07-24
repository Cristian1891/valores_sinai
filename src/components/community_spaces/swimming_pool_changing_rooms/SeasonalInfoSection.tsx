// Sección de Temporadas y Clima
export const SeasonalInfoSection: React.FC = () => {
  const seasons = [
    {
      name: "Temporada Alta",
      period: "Diciembre - Marzo",
      icon: "☀️",
      description: "Disfruta del verano con temperaturas ideales para actividades acuáticas",
      features: ["Temperatura del agua: 26-28°C", "Horarios extendidos", "Actividades especiales", "Mayor disponibilidad"],
      color: "from-[#FEC40D] to-[#74AADB]"
    },
    {
      name: "Temporada Media",
      period: "Abril - Mayo / Septiembre - Noviembre",
      icon: "🌤️",
      description: "Clima templado perfecto para quienes prefieren ambientes más tranquilos",
      features: ["Temperatura del agua: 22-25°C", "Menos concurrencia", "Ideal para ejercicio", "Tarifas promocionales"],
      color: "from-[#8FBF73] to-[#70615A]"
    },
    {
      name: "Temporada Baja",
      period: "Junio - Agosto",
      icon: "🌧️",
      description: "Actividades cubiertas y mantenimiento especializado de las instalaciones",
      features: ["Mantenimiento profundo", "Actividades en gimnasio", "Preparación para temporada", "Horarios reducidos"],
      color: "from-[#70615A] to-[#3F3E3E]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Temporadas y Clima
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Planifica tu visita según la temporada y aprovecha al máximo nuestras instalaciones durante todo el año
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {seasons.map((season, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`relative p-6 rounded-2xl bg-gradient-to-r ${season.color} text-white mb-4 transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{season.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{season.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{season.period}</p>
                  <p className="text-sm opacity-80">{season.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {season.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-[#74AADB] rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
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
