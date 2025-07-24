// Componente de Estadísticas
export const StatsSection: React.FC = () => {
  const stats = [
    { number: "2.5", label: "Hectáreas", icon: "🌱" },
    { number: "9000", label: "m² Construidos", icon: "🏗️" },
    { number: "16", label: "Casas Familiares", icon: "🏠" },
    { number: "400", label: "Capacidad Salón", icon: "👥" }
  ];

  return (
    <section className="py-16 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-section md:text-4xl font-bold text-[#70615A] dark:text-[#FEC40D] mb-2">
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