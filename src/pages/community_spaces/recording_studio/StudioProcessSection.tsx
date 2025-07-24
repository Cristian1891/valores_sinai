// Sección de Proceso de Grabación
export const StudioProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Preproducción",
      description: "Planificación del proyecto, selección de equipos y preparación del estudio",
      icon: "📋",
      details: ["Análisis del proyecto", "Configuración técnica", "Planificación de sesiones"]
    },
    {
      number: "02",
      title: "Grabación",
      description: "Sesión de grabación con nuestro equipo técnico especializado",
      icon: "🎤",
      details: ["Setup de micrófonos", "Grabación multipista", "Monitoreo en tiempo real"]
    },
    {
      number: "03",
      title: "Edición",
      description: "Proceso de edición, corrección y optimización del material grabado",
      icon: "✂️",
      details: ["Edición de audio", "Corrección de timing", "Limpieza de ruido"]
    },
    {
      number: "04",
      title: "Mezcla",
      description: "Balanceado profesional de todos los elementos sonoros",
      icon: "🎛️",
      details: ["Ecualización", "Compresión", "Efectos y espacialización"]
    },
    {
      number: "05",
      title: "Masterización",
      description: "Proceso final de optimización para distribución",
      icon: "🎯",
      details: ["Masterización final", "Múltiples formatos", "Control de calidad"]
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestro Proceso
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un flujo de trabajo profesional que garantiza resultados de calidad excepcional
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-[#74AADB] to-[#8FBF73] z-0"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-[#302E2E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-section md:text-2xl font-bold text-[#FEC40D] mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-subtitle md:text-lg font-bold text-[#70615A] dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center justify-center text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#8FBF73] rounded-full mr-2"></div>
                        <span className="text-paragraph">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
