import { useState } from "react";

// Sección de Programas Desarrollados
export const ProgramsSection: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<number | null>(null);

  const programs = [
    {
      title: "Crédito Fiscal INET",
      period: "2020-2023",
      description: "Programa de formación continua financiado por el Instituto Nacional de Educación Tecnológica",
      achievements: ["500+ profesionales capacitados", "15 cursos especializados", "Certificación oficial"],
      icon: "📚",
      status: "Activo"
    },
    {
      title: "Crédito Fiscal MTEySS",
      period: "2020-2022",
      description: "Capacitación laboral a través del Ministerio de Trabajo, Empleo y Seguridad Social",
      achievements: ["300+ trabajadores formados", "10 especialidades técnicas", "Inserción laboral garantizada"],
      icon: "👷",
      status: "Completado"
    },
    {
      title: "Mi Primer Empleo",
      period: "2021-Presente",
      description: "Programa de inserción laboral para jóvenes sin experiencia previa",
      achievements: ["200+ jóvenes insertados", "80% tasa de empleabilidad", "Seguimiento post-inserción"],
      icon: "🚀",
      status: "Activo"
    },
    {
      title: "Formación Sindical",
      period: "2022-Presente",
      description: "Desarrollo de competencias para dirigentes y representantes sindicales",
      achievements: ["100+ dirigentes capacitados", "5 módulos especializados", "Certificación reconocida"],
      icon: "🤝",
      status: "Activo"
    }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Programas Desarrollados
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Iniciativas que transforman vidas y fortalecen capacidades profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-[#302E2E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                activeProgram === index ? 'ring-2 ring-[#FEC40D]' : ''
              }`}
              onClick={() => setActiveProgram(activeProgram === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{program.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  program.status === 'Activo' 
                    ? 'bg-[#8FBF73] text-white' 
                    : 'bg-gray-200 text-gray-800'
                }`}>
                  {program.status}
                </span>
              </div>
              
              <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-2">
                {program.title}
              </h3>
              
              <p className="text-paragraph md:text-sm text-[#FEC40D] font-medium mb-3">
                {program.period}
              </p>
              
              <p className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 mb-4">
                {program.description}
              </p>
              
              {activeProgram === index && (
                <div className="space-y-2 animate-fade-in">
                  <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                    Logros Destacados
                  </h4>
                  {program.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#8FBF73] rounded-full mr-2"></div>
                      <span className="text-paragraph">{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};