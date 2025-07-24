// Sección de Equipamiento Técnico
export const StudioEquipmentSection: React.FC = () => {
  const equipmentCategories = [
    {
      category: "Grabación",
      icon: "🎤",
      items: [
        { name: "Micrófonos de condensador", spec: "Neumann U87, AKG C414" },
        { name: "Micrófonos dinámicos", spec: "Shure SM57, SM58" },
        { name: "Interfaz de audio", spec: "Focusrite Scarlett 18i20" },
        { name: "Preamplificadores", spec: "Neve 1073, API 3124+" }
      ],
      color: "from-[#74AADB] to-[#8FBF73]"
    },
    {
      category: "Monitoreo",
      icon: "🔊",
      items: [
        { name: "Monitores de campo cercano", spec: "Yamaha HS8, KRK Rokit 5" },
        { name: "Auriculares profesionales", spec: "Sony MDR-7506, Sennheiser HD650" },
        { name: "Controlador de monitoreo", spec: "Mackie Big Knob Studio" },
        { name: "Tratamiento acústico", spec: "Paneles absorbentes y difusores" }
      ],
      color: "from-[#FEC40D] to-[#D28A2B]"
    },
    {
      category: "Producción",
      icon: "💻",
      items: [
        { name: "Estación de trabajo", spec: "Pro Tools HD, Logic Pro X" },
        { name: "Procesadores de efectos", spec: "Lexicon PCM96, TC Electronic" },
        { name: "Sintetizadores", spec: "Roland Fantom, Moog Subsequent" },
        { name: "Controladores MIDI", spec: "Akai MPK88, Novation Launchpad" }
      ],
      color: "from-[#8FBF73] to-[#70615A]"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Equipamiento Profesional
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tecnología de última generación para producciones musicales y audiovisuales de calidad profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-2xl text-white`}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-subtitle md:text-xl font-bold">{category.category}</h3>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-[#3F3E3E] p-6 rounded-b-2xl shadow-lg">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 dark:border-gray-600 pb-3 last:border-b-0">
                      <h4 className="text-paragraph md:text-sm font-bold text-[#70615A] dark:text-white mb-1">
                        {item.name}
                      </h4>
                      <p className="text-paragraph text-gray-600 dark:text-gray-300 text-xs">
                        {item.spec}
                      </p>
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