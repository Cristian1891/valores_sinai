// Sección de Características de la Pileta
export const PoolFeaturesSection: React.FC = () => {
  const poolFeatures = [
    {
      icon: "🏊‍♂️",
      title: "Pileta Principal",
      description: "Amplia pileta diseñada para natación recreativa y actividades acuáticas familiares",
      details: ["Agua tratada profesionalmente", "Profundidad variable", "Escaleras de acceso", "Iluminación subacuática"]
    },
    {
      icon: "👶",
      title: "Área Infantil",
      description: "Zona especial para los más pequeños con profundidad reducida y juegos acuáticos",
      details: ["Profundidad segura", "Juegos acuáticos", "Supervisión constante", "Área sombreada"]
    },
    {
      icon: "🛡️",
      title: "Seguridad Integral",
      description: "Sistema completo de seguridad con salvavidas y equipamiento de emergencia",
      details: ["Salvavidas profesional", "Botiquín de primeros auxilios", "Señalización clara", "Protocolos de seguridad"]
    },
    {
      icon: "🌡️",
      title: "Mantenimiento Premium",
      description: "Control constante de calidad del agua y temperatura para máximo confort",
      details: ["Filtración continua", "Control de pH", "Limpieza diaria", "Análisis de agua regular"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Características de la Pileta
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una experiencia acuática completa con todas las comodidades y medidas de seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {poolFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-[#74AADB]/5 to-[#8FBF73]/5 dark:from-[#74AADB]/10 dark:to-[#8FBF73]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#74AADB] rounded-full mr-3"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};