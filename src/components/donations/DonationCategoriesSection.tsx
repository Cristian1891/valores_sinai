import { useState } from "react";

// Sección de Categorías de Donación
export const DonationCategoriesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');

  const categories = [
    {
      id: 'general',
      title: 'Donación General',
      description: 'Apoya todas nuestras actividades y permite que destinemos los recursos donde más se necesiten',
      icon: '🏠',
      color: 'from-[#74AADB] to-[#8FBF73]',
      impact: 'Mantenimiento de instalaciones, programas educativos y actividades comunitarias',
      examples: [
        'Mantenimiento de las 16 casas familiares',
        'Servicios básicos del complejo',
        'Equipamiento general',
        'Actividades comunitarias'
      ]
    },
    {
      id: 'educacion',
      title: 'Programas Educativos',
      description: 'Financia programas de formación, capacitación técnica y desarrollo profesional',
      icon: '📚',
      color: 'from-[#8FBF73] to-[#FEC40D]',
      impact: 'Formación integral para jóvenes y adultos en oficios técnicos y habilidades blandas',
      examples: [
        'Crédito Fiscal INET',
        'Programa Mi Primer Empleo',
        'Formación Sindical',
        'Capacitación Municipal'
      ]
    },
    {
      id: 'infraestructura',
      title: 'Infraestructura',
      description: 'Mejora y ampliación de nuestras instalaciones deportivas, educativas y comunitarias',
      icon: '🏗️',
      color: 'from-[#FEC40D] to-[#D28A2B]',
      impact: 'Espacios modernos y seguros para el desarrollo integral de nuestra comunidad',
      examples: [
        'Mejoras en gimnasio y pileta',
        'Ampliación del estudio de grabación',
        'Modernización de aulas',
        'Equipamiento deportivo'
      ]
    },
    {
      id: 'social',
      title: 'Proyectos Sociales',
      description: 'Iniciativas de apoyo a familias vulnerables y programas de inclusión social',
      icon: '🤲',
      color: 'from-[#D28A2B] to-[#70615A]',
      impact: 'Apoyo directo a familias en situación de vulnerabilidad social',
      examples: [
        'Asistencia alimentaria',
        'Apoyo escolar para niños',
        'Programas de contención familiar',
        'Actividades de inclusión'
      ]
    },
    {
      id: 'deportes',
      title: 'Actividades Deportivas',
      description: 'Fomenta el deporte como herramienta de integración y desarrollo personal',
      icon: '⚽',
      color: 'from-[#70615A] to-[#74AADB]',
      impact: 'Promoción de la salud física y mental a través del deporte',
      examples: [
        'Torneos comunitarios',
        'Escuelas deportivas',
        'Equipamiento deportivo',
        'Mantenimiento de canchas'
      ]
    },
    {
      id: 'tecnologia',
      title: 'Tecnología y Comunicación',
      description: 'Modernización tecnológica para mejorar la comunicación y los procesos educativos',
      icon: '💻',
      color: 'from-[#8FBF73] to-[#70615A]',
      impact: 'Herramientas digitales para potenciar la educación y comunicación',
      examples: [
        'Equipos de computación',
        'Mejoras en conectividad',
        'Plataformas educativas',
        'Sistemas de comunicación'
      ]
    }
  ];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Elige Cómo Quieres Ayudar
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selecciona el área que más te inspire. Cada donación, sin importar el monto, 
            hace una diferencia real en la vida de nuestra comunidad.
          </p>
        </div>

        {/* Botones de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold text-button transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-[#FEC40D] text-gray-800 shadow-lg transform scale-105'
                  : 'bg-[#E4E2D1] dark:bg-[#3F3E3E] text-gray-700 dark:text-gray-300 hover:bg-[#DBCDB7] dark:hover:bg-gray-600'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Información detallada de la categoría seleccionada */}
        {selectedCategoryData && (
          <div className="bg-[#E4E2D1] dark:bg-[#302E2E] rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className={`w-20 h-20 bg-gradient-to-r ${selectedCategoryData.color} rounded-full flex items-center justify-center text-3xl text-white mb-6`}>
                  {selectedCategoryData.icon}
                </div>
                <h3 className="text-section md:text-3xl font-bold text-[#70615A] dark:text-white mb-4">
                  {selectedCategoryData.title}
                </h3>
                <p className="text-paragraph md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {selectedCategoryData.description}
                </p>
                <div className="bg-white dark:bg-[#3F3E3E] p-4 rounded-lg">
                  <h4 className="text-subtitle font-bold text-[#8FBF73] mb-2">Impacto Esperado:</h4>
                  <p className="text-paragraph text-gray-700 dark:text-gray-300">
                    {selectedCategoryData.impact}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                  Tu donación contribuye a:
                </h4>
                <div className="space-y-3">
                  {selectedCategoryData.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FEC40D] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-paragraph md:text-base text-gray-700 dark:text-gray-300">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full px-6 py-3 bg-[#8FBF73] text-white font-bold rounded-lg hover:bg-[#74AADB] transition-all duration-300 transform hover:scale-105">
                    Donar a {selectedCategoryData.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};