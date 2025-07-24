import { useState } from "react";

// Sección de Normas y Recomendaciones
export const PoolRulesSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'rules' | 'recommendations' | 'schedule'>('rules');
  
  const poolRules = [
    "Ducharse antes de ingresar a la pileta",
    "No correr en los alrededores de la pileta",
    "Respetar las áreas destinadas para cada actividad",
    "Los niños menores de 12 años deben estar acompañados",
    "No está permitido el ingreso con alimentos o bebidas",
    "Usar calzado antideslizante en vestuarios",
    "Mantener limpio el espacio común",
    "Seguir las indicaciones del personal de seguridad"
  ];
  
  const recommendations = [
    "Aplicar protector solar antes de la exposición",
    "Hidratarse frecuentemente durante la actividad",
    "Usar gorro de natación para cabello largo",
    "Llevar toalla y ropa de cambio",
    "Evitar actividades intensas después de comer",
    "Informar cualquier condición médica relevante",
    "Respetar los horarios de limpieza y mantenimiento",
    "Usar anteojos de natación para mayor comodidad"
  ];
  
  const schedule = [
    { day: "Lunes a Viernes", hours: "8:00 - 22:00", note: "Horario completo" },
    { day: "Sábados", hours: "9:00 - 23:00", note: "Horario extendido" },
    { day: "Domingos", hours: "9:00 - 21:00", note: "Cierre temprano" },
    { day: "Limpieza", hours: "6:00 - 8:00", note: "Mantenimiento diario" }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Información Importante
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Todo lo que necesitas saber para disfrutar de nuestras instalaciones de forma segura y responsable
          </p>
        </div>

        <div className="bg-white dark:bg-[#302E2E] rounded-2xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setSelectedTab('rules')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                selectedTab === 'rules'
                  ? 'bg-[#74AADB] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              📋 Normas de Uso
            </button>
            <button
              onClick={() => setSelectedTab('recommendations')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                selectedTab === 'recommendations'
                  ? 'bg-[#74AADB] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              💡 Recomendaciones
            </button>
            <button
              onClick={() => setSelectedTab('schedule')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-200 ${
                selectedTab === 'schedule'
                  ? 'bg-[#74AADB] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              🕒 Horarios
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {selectedTab === 'rules' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-6">
                  Normas de Uso de la Pileta
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {poolRules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-6 h-6 bg-[#74AADB] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'recommendations' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-6">
                  Recomendaciones para tu Seguridad
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-6 h-6 bg-[#8FBF73] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{recommendation}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'schedule' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-6">
                  Horarios de Funcionamiento
                </h3>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#FEC40D] rounded-full"></div>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{item.day}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#70615A] dark:text-white">{item.hours}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
