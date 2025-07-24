import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sección de Programas Activos
export const ProgramasActivosSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const navigate = useNavigate();
  
  const programas = [
    {
      id: 'inet-fiscal',
      title: 'Crédito Fiscal INET',
      category: 'educativo',
      description: 'Programa de formación técnica-profesional financiado por el Instituto Nacional de Educación Tecnológica.',
      beneficiarios: '2,500+ personas',
      años: '2020-2023',
      estado: 'Activo',
      impacto: 'Capacitación en oficios técnicos y mejora de empleabilidad',
      objetivos: [
        'Fortalecer competencias técnicas',
        'Mejorar inserción laboral',
        'Desarrollar habilidades blandas',
        'Certificación oficial'
      ],
      image: '🎓',
      color: 'from-[#74AADB] to-[#8FBF73]'
    },
    {
      id: 'primer-empleo',
      title: 'Mi Primer Empleo',
      category: 'laboral',
      description: 'Programa integral para jóvenes sin experiencia laboral previa, preparándolos para su inserción en el mercado de trabajo.',
      beneficiarios: '800+ jóvenes',
      años: '2020-2024',
      estado: 'Activo',
      impacto: 'Preparación integral para el mundo laboral',
      objetivos: [
        'Orientación vocacional',
        'Capacitación en oficios',
        'Desarrollo de habilidades sociales',
        'Acompañamiento en búsqueda laboral'
      ],
      image: '💼',
      color: 'from-[#8FBF73] to-[#FEC40D]'
    },
    {
      id: 'formacion-sindical',
      title: 'Formación Sindical',
      category: 'laboral',
      description: 'Capacitación dirigida a dirigentes y trabajadores sindicales para fortalecer la representación y negociación colectiva.',
      beneficiarios: '1,200+ trabajadores',
      años: '2020-2024',
      estado: 'Activo',
      impacto: 'Fortalecimiento del movimiento sindical',
      objetivos: [
        'Derechos laborales',
        'Negociación colectiva',
        'Liderazgo sindical',
        'Legislación laboral'
      ],
      image: '🤝',
      color: 'from-[#FEC40D] to-[#D28A2B]'
    },
    {
      id: 'capacitacion-municipal',
      title: 'Capacitación Municipal',
      category: 'institucional',
      description: 'Programas de formación para funcionarios públicos municipales orientados a mejorar la gestión y servicios.',
      beneficiarios: '500+ funcionarios',
      años: '2021-2024',
      estado: 'Activo',
      impacto: 'Modernización de la gestión pública',
      objetivos: [
        'Gestión pública eficiente',
        'Atención ciudadana',
        'Transparencia administrativa',
        'Innovación en servicios'
      ],
      image: '🏛️',
      color: 'from-[#70615A] to-[#74AADB]'
    },
    {
      id: 'gerenciamiento-iaetes',
      title: 'Gerenciamiento IAETES',
      category: 'educativo',
      description: 'Programa especializado en gestión y administración educativa para instituciones de educación técnica.',
      beneficiarios: '300+ docentes',
      años: '2022-2024',
      estado: 'Activo',
      impacto: 'Mejora en la gestión educativa',
      objetivos: [
        'Administración educativa',
        'Liderazgo pedagógico',
        'Gestión de recursos',
        'Evaluación institucional'
      ],
      image: '📊',
      color: 'from-[#D28A2B] to-[#70615A]'
    },
    {
      id: 'trabajo-fiscal',
      title: 'Crédito Fiscal Ministerio de Trabajo',
      category: 'laboral',
      description: 'Capacitación laboral financiada por el Ministerio de Trabajo para trabajadores en actividad y desempleados.',
      beneficiarios: '1,800+ trabajadores',
      años: '2020-2022',
      estado: 'Finalizado',
      impacto: 'Reconversión y actualización laboral',
      objetivos: [
        'Reconversión laboral',
        'Actualización técnica',
        'Inserción laboral',
        'Desarrollo de competencias'
      ],
      image: '⚙️',
      color: 'from-[#8FBF73] to-[#70615A]'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Programas', count: programas.length },
    { id: 'educativo', name: 'Educativos', count: programas.filter(p => p.category === 'educativo').length },
    { id: 'laboral', name: 'Laborales', count: programas.filter(p => p.category === 'laboral').length },
    { id: 'institucional', name: 'Institucionales', count: programas.filter(p => p.category === 'institucional').length }
  ];

  const handleDonarClick = (programaId: string, programaTitle: string) => {
    // Navegar a la página de donación con el programa seleccionado
    navigate(`/donacion?programa=${programaId}&titulo=${encodeURIComponent(programaTitle)}`);
  };

  const filteredProgramas = selectedCategory === 'todos' 
    ? programas 
    : programas.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Programas Desarrollados
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre los programas que hemos desarrollado para transformar vidas y comunidades a través de la educación y capacitación
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#FEC40D] text-gray-800 shadow-lg transform scale-105'
                  : 'bg-white dark:bg-[#3F3E3E] text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Grid de programas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProgramas.map((programa) => (
            <div key={programa.id} className="bg-white dark:bg-[#3F3E3E] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`h-32 bg-gradient-to-r ${programa.color} rounded-t-2xl flex items-center justify-center`}>
                <div className="text-6xl">{programa.image}</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    programa.estado === 'Activo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {programa.estado}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {programa.años}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-3">
                  {programa.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {programa.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <span className="font-bold text-[#74AADB] mr-2">👥</span>
                    <span className="text-gray-700 dark:text-gray-300">{programa.beneficiarios}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-bold text-[#8FBF73] mr-2">🎯</span>
                    <span className="text-gray-700 dark:text-gray-300">{programa.impacto}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-[#70615A] dark:text-white mb-2">
                    Objetivos Principales:
                  </h4>
                  <div className="space-y-1">
                    {programa.objetivos.slice(0, 3).map((objetivo, index) => (
                      <div key={index} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-[#FEC40D] rounded-full mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-400">{objetivo}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="w-full py-2 bg-[#8FBF73] text-white text-sm font-bold rounded-lg hover:bg-[#74AADB] transition-all duration-300">
                    Ver Detalles
                  </button>
                  <button className="w-full py-2 bg-[#FEC40D] text-gray-800 text-sm font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300"
                    onClick={() => handleDonarClick(programa.id, programa.title)}>
                    Donar para este Programa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};