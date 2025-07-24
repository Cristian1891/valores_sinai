// Sección de Convenios Destacados
export const ConveniosDestacadosSection: React.FC = () => {
  const conveniosDestacados = [
    {
      institution: "Universidad Nacional de Avellaneda",
      type: "Educación Superior",
      description: "Desarrollo de programas académicos especializados y proyectos de investigación conjuntos",
      benefits: ["Acceso a programas especializados", "Proyectos de investigación", "Intercambio académico"],
      logo: "🎓",
      established: "2023"
    },
    {
      institution: "CONICET",
      type: "Investigación",
      description: "Colaboración en proyectos de investigación científica y desarrollo tecnológico",
      benefits: ["Investigación aplicada", "Desarrollo tecnológico", "Publicaciones científicas"],
      logo: "🔬",
      established: "2022"
    },
    {
      institution: "Municipio de Avellaneda",
      type: "Gobierno Local",
      description: "Programas de capacitación y desarrollo comunitario para la región",
      benefits: ["Programas municipales", "Desarrollo comunitario", "Capacitación local"],
      logo: "🏛️",
      established: "2021"
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Convenios Destacados
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {conveniosDestacados.map((convenio, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{convenio.logo}</div>
                <div>
                  <span className="text-paragraph md:text-xs text-[#74AADB] dark:text-[#FEC40D] font-bold uppercase tracking-wide">
                    {convenio.type}
                  </span>
                  <div className="text-paragraph md:text-xs text-gray-500 dark:text-gray-400">
                    Desde {convenio.established}
                  </div>
                </div>
              </div>
              
              <h3 className="text-subtitle md:text-lg font-bold text-[#70615A] dark:text-white mb-3">
                {convenio.institution}
              </h3>
              
              <p className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {convenio.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-paragraph md:text-sm font-bold text-[#8FBF73] dark:text-[#8FBF73] mb-2">
                  Beneficios:
                </h4>
                {convenio.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-[#74AADB] rounded-full mr-2"></div>
                    <span className="text-paragraph md:text-sm">{benefit}</span>
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
