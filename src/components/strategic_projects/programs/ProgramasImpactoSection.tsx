// Sección de Estadísticas e Impacto
export const ProgramasImpactoSection: React.FC = () => {
  const stats = [
    {
      number: "6,000+",
      label: "Personas Capacitadas",
      description: "Beneficiarios directos de nuestros programas",
      icon: "👥",
      color: "text-[#74AADB]"
    },
    {
      number: "15",
      label: "Programas Activos",
      description: "Iniciativas en desarrollo simultáneo",
      icon: "📋",
      color: "text-[#8FBF73]"
    },
    {
      number: "85%",
      label: "Inserción Laboral",
      description: "Tasa de empleabilidad post-capacitación",
      icon: "💼",
      color: "text-[#FEC40D]"
    },
    {
      number: "4",
      label: "Años de Experiencia",
      description: "Desarrollando programas de calidad",
      icon: "🏆",
      color: "text-[#D28A2B]"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      programa: "Mi Primer Empleo",
      testimonio: "Gracias a este programa conseguí mi primer trabajo en una empresa metalúrgica. La capacitación fue excelente y el acompañamiento durante la búsqueda laboral fue fundamental.",
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Rodríguez",
      programa: "Formación Sindical",
      testimonio: "La formación sindical me permitió desarrollar habilidades de liderazgo y negociación que aplico diariamente en mi trabajo como delegado.",
      avatar: "👨‍🔧"
    },
    {
      name: "Ana Martín",
      programa: "Capacitación Municipal",
      testimonio: "Los conocimientos adquiridos transformaron mi manera de gestionar los servicios públicos. Ahora puedo brindar mejor atención a los ciudadanos.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Impacto y Resultados
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestros programas generan transformaciones reales en las vidas de las personas y las comunidades
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-base font-bold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="bg-gradient-to-r from-[#E4E2D1] to-[#DBCDB7] dark:from-[#302E2E] dark:to-[#3F3E3E] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#70615A] dark:text-white mb-8 text-center">
            Testimonios de Impacto
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-[#010101] rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-[#70615A] dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#74AADB]">{testimonial.programa}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.testimonio}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};