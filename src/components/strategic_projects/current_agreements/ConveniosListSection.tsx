import { useState } from "react";

// Sección de Listado Completo de Convenios
export const ConveniosListSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('universidades');

  const conveniosPorCategoria = {
    universidades: [
      { name: "Universidad Nacional de Avellaneda", status: "Activo", year: "2023" },
      { name: "Universidad Nacional de Lomas de Zamora - Facultad de Ingeniería", status: "Activo", year: "2022" },
      { name: "Universidad Tecnológica Nacional - Facultad Regional Avellaneda", status: "Activo", year: "2021" }
    ],
    gobierno: [
      { name: "Municipio de Colón, Provincia de Buenos Aires", status: "Activo", year: "2020" },
      { name: "Municipio de Lomas de Zamora, Provincia de Buenos Aires", status: "Activo", year: "2021" },
      { name: "Municipio de Avellaneda, Provincia de Buenos Aires", status: "Activo", year: "2022" }
    ],
    educacion: [
      { name: "EEST No. 1 de Colón, Provincia de Buenos Aires", status: "Activo", year: "2020" },
      { name: "EEST No. 1 de Lincoln, Provincia de Buenos Aires", status: "Activo", year: "2021" },
      { name: "EEST No. 4 de Avellaneda, Provincia de Buenos Aires", status: "Activo", year: "2022" },
      { name: "EEST No. 9 de Avellaneda, Provincia de Buenos Aires", status: "Activo", year: "2023" },
      { name: "CFL No. 412 de Avellaneda, Provincia de Buenos Aires", status: "Activo", year: "2021" },
      { name: "CFL No. 422 de La Plata, Provincia de Buenos Aires", status: "Activo", year: "2022" }
    ],
    organizaciones: [
      { name: "CONICET", status: "Activo", year: "2022" },
      { name: "Secretaría de Salud, CGT", status: "Activo", year: "2021" },
      { name: "Asociación del personal superior de empresas de energía (APSEE)", status: "Activo", year: "2020" },
      { name: "Unión de recibidores de granos y anexos de la República Argentina", status: "Activo", year: "2023" },
      { name: "Hogar Bernardino Rivadavia", status: "Activo", year: "2021" },
      { name: "Grupo Provincia ART", status: "Activo", year: "2022" }
    ]
  };

  const tabs = [
    { id: 'universidades', label: 'Universidades', icon: '🎓' },
    { id: 'gobierno', label: 'Gobierno', icon: '🏛️' },
    { id: 'educacion', label: 'Educación', icon: '🏫' },
    { id: 'organizaciones', label: 'Organizaciones', icon: '🤝' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Directorio Completo de Convenios
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-[#E4E2D1] dark:bg-[#302E2E] rounded-xl p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 mx-1 my-1 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#74AADB] text-white shadow-lg'
                  : 'text-[#70615A] dark:text-gray-300 hover:bg-white dark:hover:bg-[#3F3E3E]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="text-paragraph md:text-sm font-bold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#DBCDB7] dark:bg-[#302E2E] rounded-xl p-8">
          <div className="grid gap-4">
            {conveniosPorCategoria[activeTab as keyof typeof conveniosPorCategoria].map((convenio, index) => (
              <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-subtitle md:text-base font-bold text-[#70615A] dark:text-white mb-1">
                      {convenio.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 mr-4">
                        Establecido: {convenio.year}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-paragraph md:text-xs font-bold ${
                        convenio.status === 'Activo' 
                          ? 'bg-[#8FBF73] text-white' 
                          : 'bg-gray-300 text-gray-700'
                      }`}>
                        {convenio.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl opacity-60">
                    {tabs.find(tab => tab.id === activeTab)?.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};