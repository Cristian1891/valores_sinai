// Sección de Actividades Acuáticas
export const AquaticActivitiesSection: React.FC = () => {
  const activities = [
    {
      title: "Natación Recreativa",
      description: "Disfruta de la natación libre en un ambiente relajado y seguro, perfecto para ejercitarse y divertirse",
      icon: "🏊‍♀️",
      benefits: ["Ejercicio cardiovascular", "Bajo impacto articular", "Relajación muscular", "Diversión familiar"],
      timeSlots: ["Mañana: 8:00 - 12:00", "Tarde: 14:00 - 18:00", "Noche: 19:00 - 22:00"],
      color: "from-[#74AADB] to-[#8FBF73]"
    },
    {
      title: "Actividades Infantiles",
      description: "Programas especiales para niños con juegos acuáticos supervisados y actividades educativas",
      icon: "🧒",
      benefits: ["Desarrollo motor", "Confianza en el agua", "Socialización", "Diversión garantizada"],
      timeSlots: ["Clases: 10:00 - 11:30", "Juegos: 15:00 - 16:30", "Familiares: 17:00 - 18:30"],
      color: "from-[#8FBF73] to-[#FEC40D]"
    },
    {
      title: "Aqua Fitness",
      description: "Ejercicios acuáticos de bajo impacto ideales para mantenerse en forma y mejorar la salud",
      icon: "💪",
      benefits: ["Fortalecimiento muscular", "Mejora cardiovascular", "Flexibilidad", "Rehabilitación"],
      timeSlots: ["Lunes/Miércoles: 9:00", "Martes/Jueves: 18:00", "Sábados: 10:00"],
      color: "from-[#FEC40D] to-[#74AADB]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Actividades Acuáticas
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sumérgete en una variedad de actividades diseñadas para todas las edades y niveles de experiencia
          </p>
        </div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-gradient-to-r ${activity.color} text-white`}>
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{activity.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{activity.title}</h3>
                </div>
                <p className="text-base md:text-lg mb-6 opacity-90">
                  {activity.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold mb-3">Beneficios</h4>
                    <div className="space-y-2">
                      {activity.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold mb-3">Horarios</h4>
                    <div className="space-y-2">
                      {activity.timeSlots.map((slot, slotIndex) => (
                        <div key={slotIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          <span className="text-sm">{slot}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center">
                  <div className="text-6xl mb-4">{activity.icon}</div>
                  <h4 className="text-xl font-bold mb-2">¡Únete a la Diversión!</h4>
                  <p className="text-sm opacity-90 mb-4">Consulta disponibilidad y horarios</p>
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
