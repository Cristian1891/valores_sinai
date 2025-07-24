// Sección de Experiencia del Café
export const CafeExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para la relajación y el encuentro, donde cada rincón invita a quedarse y disfrutar.",
      icon: "🏡",
      features: ["Decoración cálida", "Música ambiente", "Iluminación natural", "Espacios íntimos"],
      color: "from-[#D28A2B] to-[#FEC40D]"
    },
    {
      title: "Productos Artesanales",
      description: "Cada producto es elaborado con ingredientes frescos y técnicas tradicionales que resaltan el sabor auténtico.",
      icon: "👨‍🍳",
      features: ["Recetas caseras", "Ingredientes frescos", "Preparación diaria", "Calidad garantizada"],
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      title: "Conexión Social",
      description: "Un lugar para compartir conversaciones, crear vínculos y fortalecer la comunidad en un ambiente relajado.",
      icon: "🤝",
      features: ["Espacios grupales", "Mesas comunitarias", "Eventos especiales", "Encuentros culturales"],
      color: "from-[#74AADB] to-[#70615A]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            La Experiencia del Café
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Más que un café, es un espacio donde los sabores se encuentran con las emociones
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex bg-gradient-to-r ${experience.color} text-white shadow-xl`}>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4">{experience.icon}</div>
                  <h3 className="text-subtitle md:text-2xl font-bold">{experience.title}</h3>
                </div>
                <p className="text-paragraph md:text-base mb-8 opacity-90">
                  {experience.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {experience.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-paragraph">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
                <div className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm text-center">
                  <div className="text-6xl mb-4">{experience.icon}</div>
                  <h4 className="text-subtitle font-bold mb-2">¿Primera vez aquí?</h4>
                  <p className="text-paragraph opacity-90 mb-4">Descubre nuestra filosofía gastronómica</p>
                  <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                    Conocer Más
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