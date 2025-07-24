import { useState } from "react";

// Sección de Horarios y Clases
export const GymScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('lunes');
  
  const schedule = {
    lunes: [
      { time: "07:00", activity: "Yoga Matutino", instructor: "Ana García", duration: "60 min" },
      { time: "09:00", activity: "Entrenamiento Funcional", instructor: "Carlos López", duration: "45 min" },
      { time: "18:00", activity: "Pilates", instructor: "María Rodríguez", duration: "50 min" },
      { time: "19:30", activity: "Zumba", instructor: "Sofía Martín", duration: "60 min" }
    ],
    martes: [
      { time: "08:00", activity: "Spinning", instructor: "Diego Ruiz", duration: "45 min" },
      { time: "10:00", activity: "Aqua Aeróbicos", instructor: "Laura Paz", duration: "45 min" },
      { time: "17:00", activity: "CrossFit", instructor: "Roberto Silva", duration: "60 min" },
      { time: "19:00", activity: "Yoga Relajante", instructor: "Ana García", duration: "60 min" }
    ],
    miercoles: [
      { time: "07:30", activity: "Cardio HIIT", instructor: "Carlos López", duration: "30 min" },
      { time: "09:30", activity: "Pilates Reformer", instructor: "María Rodríguez", duration: "55 min" },
      { time: "18:30", activity: "Danza Fitness", instructor: "Sofía Martín", duration: "50 min" },
      { time: "20:00", activity: "Relajación", instructor: "Ana García", duration: "45 min" }
    ]
  };

  const days = [
    { key: 'lunes', label: 'Lunes' },
    { key: 'martes', label: 'Martes' },
    { key: 'miercoles', label: 'Miércoles' },
    { key: 'jueves', label: 'Jueves' },
    { key: 'viernes', label: 'Viernes' },
    { key: 'sabado', label: 'Sábado' }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Horarios y Clases Grupales
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entrenamientos dirigidos por instructores certificados para maximizar tus resultados
          </p>
        </div>

        {/* Selector de días */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setSelectedDay(day.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedDay === day.key
                  ? 'bg-[#FEC40D] text-gray-800'
                  : 'bg-white dark:bg-[#3F3E3E] text-gray-600 dark:text-gray-300 hover:bg-[#FEC40D] hover:text-gray-800'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Horarios del día seleccionado */}
        <div className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg">
          <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-6 text-center">
            Programación del {days.find(d => d.key === selectedDay)?.label}
          </h3>
          
          <div className="space-y-4">
            {schedule[selectedDay as keyof typeof schedule]?.map((class_item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#8FBF73]/10 to-[#74AADB]/10 rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl font-bold text-[#FEC40D]">{class_item.time}</div>
                  <div>
                    <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white">{class_item.activity}</h4>
                    <p className="text-paragraph text-gray-600 dark:text-gray-300">
                      {class_item.instructor} • {class_item.duration}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#8FBF73] text-white rounded-lg hover:bg-[#74AADB] transition-all duration-300">
                  Reservar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#3F3E3E] rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl mb-4">⏰</div>
            <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
              Horario Libre
            </h4>
            <p className="text-paragraph text-gray-600 dark:text-gray-300">
              6:00 - 22:00 todos los días
            </p>
          </div>
          <div className="bg-white dark:bg-[#3F3E3E] rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
              Entrenamientos Grupales
            </h4>
            <p className="text-paragraph text-gray-600 dark:text-gray-300">
              Máximo 12 personas por clase
            </p>
          </div>
          <div className="bg-white dark:bg-[#3F3E3E] rounded-lg p-6 text-center shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
              Entrenamiento Personal
            </h4>
            <p className="text-paragraph text-gray-600 dark:text-gray-300">
              Disponible con cita previa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
