// Sección de Estadísticas de Impacto
export const ImpactStatsSection: React.FC = () => {
  const impactStats = [
    { number: "50+", label: "Empresas Aliadas", icon: "🏭" },
    { number: "15+", label: "Universidades", icon: "🎓" },
    { number: "8+", label: "Programas Activos", icon: "📋" },
    { number: "1000+", label: "Profesionales Capacitados", icon: "👨‍💼" }
  ];

  return (
    <section className="py-16 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestro Impacto
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300">
            Números que reflejan nuestro compromiso con la excelencia educativa
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-section md:text-4xl font-bold text-[#74AADB] dark:text-[#FEC40D] mb-2">
                {stat.number}
              </div>
              <div className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
