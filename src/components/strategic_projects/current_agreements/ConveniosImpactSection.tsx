// Sección de Testimonio/Impacto
export const ConveniosImpactSection: React.FC = () => {
  const impacts = [
    {
      metric: "15+",
      label: "Convenios Activos",
      description: "Alianzas estratégicas vigentes"
    },
    {
      metric: "5000+",
      label: "Beneficiarios",
      description: "Personas impactadas por nuestros convenios"
    },
    {
      metric: "8",
      label: "Años de Experiencia",
      description: "Construyendo alianzas sólidas"
    },
    {
      metric: "100%",
      label: "Compromiso",
      description: "Cumplimiento de acuerdos establecidos"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#8FBF73] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold mb-6">
            Impacto de Nuestros Convenios
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-paragraph md:text-lg max-w-3xl mx-auto opacity-90">
            Nuestros convenios han generado un impacto significativo en la comunidad, 
            creando oportunidades de desarrollo y crecimiento para miles de personas.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="text-section md:text-4xl font-bold mb-2">
                {impact.metric}
              </div>
              <div className="text-subtitle md:text-xl font-bold mb-2">
                {impact.label}
              </div>
              <div className="text-paragraph md:text-sm opacity-80">
                {impact.description}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-sm">
          <div className="text-4xl mb-6">🤝</div>
          <h3 className="text-subtitle md:text-2xl font-bold mb-4">
            "Construyendo Puentes hacia el Futuro"
          </h3>
          <p className="text-paragraph md:text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
            Cada convenio representa una oportunidad de multiplicar nuestro impacto, 
            llevando esperanza y transformación a más comunidades a través de alianzas estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
};