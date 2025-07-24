// Sección de Beneficios para Aliados
export const PartnerBenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Desarrollo de Talento",
      description: "Acceso a programas de capacitación especializados para el personal de la empresa",
      icon: "🎯",
      features: ["Cursos a medida", "Certificaciones oficiales", "Seguimiento personalizado"]
    },
    {
      title: "Instalaciones Premium",
      description: "Uso de nuestras instalaciones de 2.5 hectáreas para eventos corporativos",
      icon: "🏢",
      features: ["Salón para 400 personas", "Espacios de networking", "Tecnología audiovisual"]
    },
    {
      title: "Networking Estratégico",
      description: "Conexión con una red de empresas líderes y organizaciones de prestigio",
      icon: "🤝",
      features: ["Eventos exclusivos", "Mesas redondas", "Oportunidades de negocio"]
    },
    {
      title: "Responsabilidad Social",
      description: "Participación en programas de impacto social y desarrollo comunitario",
      icon: "🌱",
      features: ["Programas de inclusión", "Capacitación gratuita", "Impacto medible"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Beneficios para Aliados
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ser nuestro aliado significa acceder a beneficios exclusivos y oportunidades de crecimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-r from-[#74AADB]/5 to-[#8FBF73]/5 dark:from-[#74AADB]/10 dark:to-[#8FBF73]/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-6xl flex-shrink-0">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 mb-4">
                    {benefit.description}
                  </p>
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3"></div>
                        <span className="text-paragraph md:text-base">{feature}</span>
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
