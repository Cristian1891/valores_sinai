// Sección de Call to Action para Programas
export const ProgramasCTASection: React.FC = () => {
  const actions = [
    {
      title: "Participar en Programas",
      description: "Únete a nuestros programas de formación y capacitación",
      icon: "🎯",
      buttonText: "Inscribirse",
      color: "bg-[#8FBF73] hover:bg-[#74AADB]"
    },
    {
      title: "Donar para Programas",
      description: "Contribuye al desarrollo y continuidad de nuestros proyectos",
      icon: "💝",
      buttonText: "Donar Ahora",
      color: "bg-[#FEC40D] hover:bg-[#D28A2B] text-gray-800"
    },
    {
      title: "Ser Voluntario",
      description: "Forma parte de nuestro equipo de trabajo y transformación",
      icon: "🙌",
      buttonText: "Ser Voluntario",
      color: "bg-[#74AADB] hover:bg-[#70615A]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#3F3E3E] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🌟</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Únete a Nuestra Misión
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto font-montserrat">
            Juntos podemos seguir transformando vidas a través de la educación y capacitación. 
            Cada programa es una oportunidad de cambio real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{action.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">{action.title}</h3>
              <p className="text-sm opacity-90 mb-6 font-montserrat">{action.description}</p>
              <button className={`px-6 py-3 ${action.color} font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-button font-montserrat`}>
                {action.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              "Las acciones que tengamos hoy, serán el resultado del mañana"
            </h3>
            <p className="text-lg opacity-90 mb-6 font-montserrat">
              El testimonio de vida que demos en nuestro día a día, podrá ser luz y transformación para bendecir a otros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#74AADB] hover:bg-[#8FBF73] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-button font-montserrat">
                Conocer Más Programas
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-[#70615A] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-button font-montserrat">
                Contactar Equipo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

