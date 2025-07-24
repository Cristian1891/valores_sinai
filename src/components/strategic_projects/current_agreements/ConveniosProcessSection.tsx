// Sección de Proceso de Convenios
export const ConveniosProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Identificación",
      description: "Identificamos instituciones que comparten nuestra visión y valores",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Evaluación",
      description: "Evaluamos la compatibilidad y beneficios mutuos del convenio",
      icon: "📊"
    },
    {
      number: "03",
      title: "Negociación",
      description: "Establecemos términos y condiciones que beneficien a ambas partes",
      icon: "💼"
    },
    {
      number: "04",
      title: "Implementación",
      description: "Ejecutamos y monitoreamos el cumplimiento del convenio",
      icon: "⚡"
    },
    {
      number: "05",
      title: "Evaluación",
      description: "Evaluamos resultados y planificamos la renovación o mejora",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Proceso de Convenios
          </h2>
          <div className="w-24 h-1 bg-[#74AADB] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seguimos un proceso estructurado para establecer alianzas sólidas y duraderas
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#74AADB] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FEC40D] rounded-full flex items-center justify-center text-black text-paragraph md:text-xs font-bold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-subtitle md:text-lg font-bold text-[#70615A] dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
