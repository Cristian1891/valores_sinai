// Sección de Capacidades y Servicios
export const QuinchoCapacitySection: React.FC = () => {
//   const { t } = useTranslation();
  
  const capacities = [
    { icon: "👥", number: "80", label: "Personas sentadas", description: "Capacidad máxima cómoda" },
    { icon: "🍽️", number: "12", label: "Mesas disponibles", description: "Distribuidas estratégicamente" },
    { icon: "🔥", number: "4", label: "Parrillas grandes", description: "Simultáneas en funcionamiento" },
    { icon: "🅿️", number: "30", label: "Espacios de parking", description: "Exclusivos para quincho" }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            {/* {t('quincho.capacidades') || 'Capacidades y Servicios'} */}
            {'Capacidades y Servicios'}
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {capacities.map((capacity, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {capacity.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-[#FEC40D] mb-2">
                {capacity.number}
              </div>
              <div className="text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                {capacity.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {capacity.description}
              </div>
            </div>
          ))}
        </div>

        {/* Servicios adicionales */}
        <div className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#70615A] dark:text-white mb-6 text-center">
            {/* {t('quincho.serviciosAdicionales') || 'Servicios Adicionales'} */}
            {'Servicios Adicionales'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-[#8FBF73]/10 rounded-lg">
              <div className="text-3xl mb-2">🧊</div>
              <h4 className="font-bold text-[#70615A] dark:text-white mb-2">Heladeras</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Grandes heladeras para mantener bebidas y alimentos frescos</p>
            </div>
            <div className="text-center p-4 bg-[#74AADB]/10 rounded-lg">
              <div className="text-3xl mb-2">🎵</div>
              <h4 className="font-bold text-[#70615A] dark:text-white mb-2">Sistema de Audio</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Equipo de sonido profesional para ambientar tu evento</p>
            </div>
            <div className="text-center p-4 bg-[#FEC40D]/10 rounded-lg">
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-bold text-[#70615A] dark:text-white mb-2">Iluminación</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Luces LED cálidas para crear el ambiente perfecto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
