// Sección de Tecnología y Equipamiento
export const SalonTechnologySection: React.FC = () => {
  const techFeatures = [
    {
      category: "Audio & Video",
      icon: "📹",
      features: [
        "Sistema de sonido profesional 7.1",
        "Micrófonos inalámbricos (8 unidades)",
        "Proyección 4K ultra HD",
        "Pantallas LED de 85 pulgadas",
        "Transmisión en vivo HD"
      ]
    },
    {
      category: "Iluminación",
      icon: "💡",
      features: [
        "Iluminación LED inteligente",
        "Control de intensidad por zonas",
        "Efectos de colores RGB",
        "Luces de escenario profesionales",
        "Iluminación de emergencia"
      ]
    },
    {
      category: "Conectividad",
      icon: "🌐",
      features: [
        "WiFi de alta velocidad",
        "Conexiones HDMI múltiples",
        "Puertos USB en mesas",
        "Streaming y videoconferencias",
        "Red eléctrica industrial"
      ]
    },
    {
      category: "Climatización",
      icon: "❄️",
      features: [
        "Aire acondicionado central",
        "Control de temperatura por zonas",
        "Ventilación natural",
        "Sistema de purificación",
        "Calefacción radiante"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Tecnología de Vanguardia
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Equipamiento profesional para garantizar el éxito de tu evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((category, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-3">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3 mt-1.5"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
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