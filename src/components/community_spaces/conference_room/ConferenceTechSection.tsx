// Sección de Capacidades Técnicas
export const ConferenceTechSection: React.FC = () => {
  const techSpecs = [
    {
      icon: "🔊",
      title: "Audio Profesional",
      description: "Sistema de sonido de alta fidelidad con micrófonos inalámbricos y acústica optimizada",
      features: ["Micrófonos de solapa", "Sistema de audio distribuido", "Control de volumen por zonas", "Grabación de audio"]
    },
    {
      icon: "📺",
      title: "Proyección HD",
      description: "Equipamiento audiovisual de última generación para presentaciones impactantes",
      features: ["Proyector 4K", "Pantalla de 120 pulgadas", "Conexión HDMI/USB", "Transmisión inalámbrica"]
    },
    {
      icon: "💻",
      title: "Conectividad Total",
      description: "Red WiFi empresarial y puertos de conectividad en cada mesa para máxima productividad",
      features: ["WiFi de alta velocidad", "Puertos USB y corriente", "Conexión por cable", "Soporte técnico"]
    },
    {
      icon: "🎥",
      title: "Streaming & Grabación",
      description: "Servicios de transmisión en vivo y grabación profesional para eventos híbridos",
      features: ["Streaming en vivo", "Grabación profesional", "Múltiples cámaras", "Edición incluida"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Tecnología de Vanguardia
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Equipamiento profesional para garantizar el éxito de cada presentación y evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techSpecs.map((spec, index) => (
            <div key={index} className="bg-gradient-to-r from-[#74AADB]/5 to-[#70615A]/5 dark:from-[#74AADB]/10 dark:to-[#70615A]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{spec.icon}</div>
                <div className="flex-1">
                  <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 mb-4">
                    {spec.description}
                  </p>
                  <div className="space-y-2">
                    {spec.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#74AADB] rounded-full mr-3"></div>
                        <span className="text-paragraph">{feature}</span>
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