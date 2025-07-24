// Sección de Impacto de Donaciones - COMPLETADA
export const ImpactSection: React.FC = () => {
  const impactStats = [
    {
      number: '2,500+',
      label: 'Personas Capacitadas',
      description: 'A través de nuestros programas educativos',
      icon: '👨‍🎓'
    },
    {
      number: '16',
      label: 'Familias Alojadas',
      description: 'En nuestras casas familiares',
      icon: '🏠'
    },
    {
      number: '85%',
      label: 'Inserción Laboral',
      description: 'De egresados de nuestros programas',
      icon: '💼'
    },
    {
      number: '2.5',
      label: 'Hectáreas de Impacto',
      description: 'Espacio dedicado al desarrollo comunitario',
      icon: '🌱'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#8FBF73] to-[#74AADB] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold mb-4">
            El Impacto de Tu Donación
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg opacity-90 max-w-3xl mx-auto">
            Cada peso donado se convierte en oportunidades reales de transformación. 
            Mira cómo tu generosidad ha impactado nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-section md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-subtitle font-bold mb-2">{stat.label}</div>
              <div className="text-paragraph opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-20 text-black rounded-2xl p-8 mb-8">
            <h3 className="text-subtitle  font-bold mb-4">
              "Gracias a las donaciones, pudimos completar nuestro curso de electricidad 
              y hoy tengo mi propio emprendimiento"
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white bg-opacity-40 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="text-paragraph font-bold">Carlos Mendoza</p>
                <p className="text-paragraph opacity-80">Egresado del programa INET</p>
              </div>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-white text-[#8FBF73] font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Ver Más Testimonios
          </button>
        </div>
      </div>
    </section>
  );
};
