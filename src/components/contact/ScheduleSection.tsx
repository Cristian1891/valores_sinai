// Sección de Horarios y Disponibilidad
export const ScheduleSection: React.FC = () => {
  const scheduleData = [
    {
      day: "Lunes - Viernes",
      hours: "9:00 - 18:00",
      services: "Administración, Consultas, Visitas"
    },
    {
      day: "Sábados",
      hours: "10:00 - 16:00",
      services: "Eventos, Quincho, Instalaciones"
    },
    {
      day: "Domingos",
      hours: "10:00 - 14:00",
      services: "Solo eventos programados"
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Horarios de Atención
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Planifica tu visita o consulta según nuestros horarios
          </p>
        </div>

        <div className="bg-white dark:bg-[#302E2E] rounded-2xl shadow-lg overflow-hidden">
          {scheduleData.map((schedule, index) => (
            <div key={index} className={`p-6 ${index !== scheduleData.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}>
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-[#70615A] dark:text-white">
                    {schedule.day}
                  </h3>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-[#8FBF73]">
                    {schedule.hours}
                  </span>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {schedule.services}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-[#FEC40D]/10 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Nota:</strong> Para eventos especiales y visitas grupales, 
              recomendamos coordinar con anticipación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};