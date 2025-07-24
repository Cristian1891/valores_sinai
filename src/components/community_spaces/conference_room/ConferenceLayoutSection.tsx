import { useState } from "react";

// Sección de Configuraciones de Salón
export const ConferenceLayoutSection: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState('auditorio');
  
  const layouts = [
    {
      id: 'auditorio',
      name: 'Auditorio',
      capacity: '400 personas',
      description: 'Configuración teatral ideal para conferencias magistrales y presentaciones principales',
      features: ['Visión óptima desde cualquier asiento', 'Iluminación teatral', 'Acceso controlado', 'Grabación profesional'],
      icon: '🎭'
    },
    {
      id: 'corporativo',
      name: 'Corporativo',
      capacity: '300 personas',
      description: 'Distribución empresarial para reuniones corporativas y presentaciones ejecutivas',
      features: ['Mesas ejecutivas', 'Conectividad individual', 'Material de oficina', 'Servicio de café'],
      icon: '💼'
    },
    {
      id: 'workshop',
      name: 'Taller Interactivo',
      capacity: '150 personas',
      description: 'Configuración en mesas redondas para workshops y sesiones de trabajo colaborativo',
      features: ['Mesas de trabajo', 'Espacios para grupos', 'Material didáctico', 'Facilitación incluida'],
      icon: '🔧'
    },
    {
      id: 'networking',
      name: 'Networking',
      capacity: '200 personas',
      description: 'Espacio abierto para eventos de networking y cócteles empresariales',
      features: ['Distribución flexible', 'Estaciones de comida', 'Área de exhibición', 'Música ambiental'],
      icon: '🤝'
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Configuraciones Flexibles
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Adaptamos el espacio según las necesidades específicas de tu evento
          </p>
        </div>

        {/* Selector de layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setSelectedLayout(layout.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedLayout === layout.id
                  ? 'bg-[#74AADB] text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-[#3F3E3E] text-gray-700 dark:text-gray-300 hover:bg-[#74AADB]/10'
              }`}
            >
              {layout.icon} {layout.name}
            </button>
          ))}
        </div>

        {/* Información del layout seleccionado */}
        {layouts.map((layout) => (
          selectedLayout === layout.id && (
            <div key={layout.id} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{layout.icon}</div>
                    <div>
                      <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-2">
                        {layout.name}
                      </h3>
                      <p className="text-paragraph md:text-base text-[#74AADB] font-bold">
                        {layout.capacity}
                      </p>
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
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-[#74AADB] to-[#70615A] rounded-lg shadow-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-8xl mb-4 opacity-70">{layout.icon}</div>
                        <p className="text-paragraph opacity-80">Vista previa de configuración</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};