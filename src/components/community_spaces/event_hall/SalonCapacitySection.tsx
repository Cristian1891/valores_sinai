import { useState } from "react";

// Sección de Capacidades y Configuraciones
export const SalonCapacitySection: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState<string>('auditorio');
  
  const layouts = [
    {
      id: 'auditorio',
      name: 'Auditorio',
      capacity: '400',
      description: 'Configuración teatral para conferencias y presentaciones',
      features: ['Escenario elevado', 'Proyección HD', 'Audio profesional', 'Iluminación escénica']
    },
    {
      id: 'banquete',
      name: 'Banquete',
      capacity: '300',
      description: 'Mesas redondas para cenas de gala y celebraciones',
      features: ['Mesas de 10 personas', 'Servicio de catering', 'Decoración elegante', 'Pista de baile']
    },
    {
      id: 'cocktail',
      name: 'Cocktail',
      capacity: '400',
      description: 'Espacio abierto para eventos networking y recepciones',
      features: ['Barra móvil', 'Estaciones de comida', 'Áreas de networking', 'Música ambiental']
    },
    {
      id: 'exposicion',
      name: 'Exposición',
      capacity: '500',
      description: 'Layout para ferias, exhibiciones y muestras comerciales',
      features: ['Stands modulares', 'Conexiones eléctricas', 'Iluminación dirigida', 'Espacios de demostración']
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Configuraciones del Salón
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Espacio versátil que se adapta a cualquier tipo de evento con múltiples configuraciones
          </p>
        </div>

        {/* Selector de Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setSelectedLayout(layout.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedLayout === layout.id
                  ? 'bg-[#FEC40D] text-gray-800 shadow-lg'
                  : 'bg-gray-100 dark:bg-[#3F3E3E] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#302E2E]'
              }`}
            >
              {layout.name}
            </button>
          ))}
        </div>

        {/* Detalle del Layout Seleccionado */}
        {layouts.map((layout) => (
          selectedLayout === layout.id && (
            <div key={layout.id} className="bg-gradient-to-r from-[#74AADB]/5 to-[#70615A]/5 dark:from-[#74AADB]/10 dark:to-[#70615A]/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-subtitle md:text-3xl font-bold text-[#70615A] dark:text-white mb-4">
                    Configuración {layout.name}
                  </h3>
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">👥</div>
                    <div>
                      <div className="text-section md:text-4xl font-bold text-[#FEC40D]">
                        {layout.capacity}
                      </div>
                      <div className="text-paragraph text-gray-600 dark:text-gray-300">
                        personas
                      </div>
                    </div>
                  </div>
                  <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 mb-6">
                    {layout.description}
                  </p>
                  <div className="space-y-3">
                    {layout.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                        <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#74AADB] to-[#70615A] rounded-xl p-8 text-white text-center">
                  <div className="text-6xl mb-4">📐</div>
                  <h4 className="text-subtitle font-bold mb-2">Layout Profesional</h4>
                  <p className="text-paragraph opacity-90 mb-4">
                    Configuración optimizada para {layout.name.toLowerCase()}
                  </p>
                  <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
                    Ver Plano Detallado
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};