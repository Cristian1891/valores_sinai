import { useState } from "react";

// Sección de Paquetes y Precios
export const StudioPricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const plans = [
    {
      id: 'basic',
      name: 'Sesión Básica',
      duration: '4 horas',
      price: 'Consultar',
      features: [
        'Grabación en vivo',
        'Ingeniero de sonido incluido',
        'Hasta 8 pistas simultáneas',
        'Mezcla básica',
        'Archivo WAV de salida'
      ],
      popular: false,
      color: 'from-[#8FBF73] to-[#74AADB]'
    },
    {
      id: 'professional',
      name: 'Sesión Profesional',
      duration: '8 horas',
      price: 'Consultar',
      features: [
        'Todo lo de la sesión básica',
        'Hasta 24 pistas simultáneas',
        'Edición avanzada',
        'Mezcla profesional',
        'Masterización incluida',
        'Múltiples formatos de salida'
      ],
      popular: true,
      color: 'from-[#FEC40D] to-[#D28A2B]'
    },
    {
      id: 'premium',
      name: 'Producción Completa',
      duration: 'Proyecto completo',
      price: 'Consultar',
      features: [
        'Todo lo de la sesión profesional',
        'Preproducción y arreglos',
        'Músicos de sesión disponibles',
        'Postproducción completa',
        'Distribución digital',
        'Asesoría artística'
      ],
      popular: false,
      color: 'from-[#70615A] to-[#3F3E3E]'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Paquetes y Tarifas
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Planes flexibles adaptados a diferentes necesidades y presupuestos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-[#FEC40D] scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FEC40D] text-gray-800 px-4 py-1 rounded-full text-paragraph font-bold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-xl text-white mb-6`}>
                <div className="text-center">
                  <h3 className="text-subtitle md:text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-paragraph opacity-90 mb-2">{plan.duration}</p>
                  <div className="text-section md:text-3xl font-bold">{plan.price}</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-[#FEC40D] text-gray-800 hover:bg-[#D28A2B]' 
                    : 'bg-[#74AADB] text-white hover:bg-[#8FBF73]'
                }`}
              >
                Seleccionar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
