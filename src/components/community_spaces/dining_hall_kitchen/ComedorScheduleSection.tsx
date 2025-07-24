// Sección de Horarios y Reservas
export const ComedorScheduleSection: React.FC = () => {
  const schedules = [
    {
      service: "Desayuno",
      time: "07:00 - 10:00",
      description: "Café, té, jugos, tostadas, facturas y opciones saludables",
      icon: "🌅",
      color: "bg-[#FEC40D]/20"
    },
    {
      service: "Almuerzo",
      time: "12:00 - 15:00",
      description: "Menú completo con entrada, plato principal y postre",
      icon: "☀️",
      color: "bg-[#8FBF73]/20"
    },
    {
      service: "Merienda",
      time: "15:30 - 17:30",
      description: "Café, té, mate, tortas y opciones dulces",
      icon: "🍰",
      color: "bg-[#74AADB]/20"
    },
    {
      service: "Cena",
      time: "19:00 - 22:00",
      description: "Variedad de platos calientes y opciones para todos los gustos",
      icon: "🌙",
      color: "bg-[#70615A]/20"
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Horarios de Servicio
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Servicio gastronómico durante todo el día para tu comodidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedules.map((schedule, index) => (
            <div key={index} className={`${schedule.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
              <div className="text-4xl mb-4">{schedule.icon}</div>
              <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                {schedule.service}
              </h3>
              <div className="text-paragraph font-bold text-[#FEC40D] mb-3">
                {schedule.time}
              </div>
              <p className="text-paragraph text-gray-700 dark:text-gray-300">
                {schedule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-[#302E2E] rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-6">
              Reservas Especiales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🎂</div>
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  Celebraciones
                </h4>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  Menús especiales para cumpleaños y eventos
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🥗</div>
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  Dietas Especiales
                </h4>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  Adaptamos el menú a necesidades específicas
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">👥</div>
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  Grupos Grandes
                </h4>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  Servicio especializado para eventos masivos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};