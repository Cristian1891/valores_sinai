// Sección de Categorías de Aliados
export const PartnerCategoriesSection: React.FC = () => {
  const categories = [
    {
      title: "Universidades",
      description: "Convenios académicos que fortalecen la formación profesional y el desarrollo de competencias técnicas",
      icon: "🎓",
      count: "15+",
      partners: ["Universidad Nacional de Avellaneda", "Universidad Nacional de Lomas de Zamora", "Universidad Tecnológica Nacional"],
      color: "from-[#74AADB] to-[#8FBF73]"
    },
    {
      title: "Empresas Industriales",
      description: "Partnerships estratégicos con empresas líderes en metalurgia, energía y manufactura",
      icon: "🏭",
      count: "20+",
      partners: ["Mega Energía S.A", "Plegamex S.A", "Bracco"],
      color: "from-[#70615A] to-[#74AADB]"
    },
    {
      title: "Instituciones Públicas",
      description: "Colaboración con ministerios, municipios y organismos gubernamentales para el desarrollo social",
      icon: "🏛️",
      count: "10+",
      partners: ["CONICET", "Municipio de Avellaneda", "Municipio de Lomas de Zamora"],
      color: "from-[#FEC40D] to-[#D28A2B]"
    },
    {
      title: "Organizaciones Sindicales",
      description: "Trabajo conjunto con sindicatos para el fortalecimiento laboral y la capacitación profesional",
      icon: "🤝",
      count: "8+",
      partners: ["CGT", "APSEE", "Unión de Recibidores de Granos"],
      color: "from-[#8FBF73] to-[#70615A]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestros Aliados Estratégicos
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Categorizamos nuestras alianzas para maximizar el impacto en diferentes sectores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <div className={`relative p-8 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-6 transform group-hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-subtitle md:text-2xl font-bold">{category.title}</h3>
                    <span className="text-paragraph md:text-lg opacity-90">{category.count} aliados</span>
                  </div>
                </div>
                <p className="text-paragraph md:text-base opacity-90 leading-relaxed mb-4">
                  {category.description}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-[#302E2E] rounded-xl p-6">
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                  Aliados Destacados
                </h4>
                <div className="space-y-3">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3"></div>
                      <span className="text-paragraph md:text-base">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};