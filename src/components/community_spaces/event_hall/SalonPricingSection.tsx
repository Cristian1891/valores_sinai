import { useState } from "react";

// Sección de Precios y Cotizaciones
export const SalonPricingSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('basico');
  
  const pricingTiers = [
    {
      id: 'basico',
      name: 'Uso Básico',
      duration: '8 horas',
      price: 'Desde $XXX',
      description: 'Alquiler del salón con servicios esenciales',
      features: [
        'Salón por 8 horas',
        'Configuración estándar',
        'Audio básico',
        'Iluminación general',
        'Limpieza incluida'
      ],
      popular: false
    },
    {
      id: 'profesional',
      name: 'Evento Profesional',
      duration: '12 horas',
      price: 'Desde $XXX',
      description: 'Paquete completo para eventos corporativos',
      features: [
        'Todo lo del básico',
        'Equipos audiovisuales',
        'Configuración personalizada',
        'Coordinador de evento',
        'Servicios técnicos'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Producción Premium',
      duration: '24 horas',
      price: 'Consultar',
      description: 'Servicio integral para grandes producciones',
      features: [
        'Todo lo del profesional',
        'Producción audiovisual',
        'Transmisión en vivo',
        'Catering incluido',
        'Protocolo y seguridad'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Planes y Cotizaciones
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Opciones flexibles adaptadas a tu presupuesto y necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-[#FEC40D] scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FEC40D] text-gray-800 px-4 py-1 rounded-full text-paragraph font-bold">
                    Más Solicitado
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                  {tier.description}
                </p>
                <div className="text-section md:text-3xl font-bold text-[#74AADB] mb-2">
                  {tier.price}
                </div>
                <p className="text-paragraph text-gray-500">{tier.duration}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3 mt-1.5"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                tier.popular 
                  ? 'bg-[#FEC40D] text-gray-800 hover:bg-[#D28A2B]' 
                  : 'bg-[#74AADB] text-white hover:bg-[#70615A]'
              }`}>
                Solicitar Cotización
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#74AADB]/10 to-[#70615A]/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
              ¿Necesitas un presupuesto personalizado?
            </h3>
            <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-6">
              Nuestro equipo comercial está listo para crear una propuesta única para tu evento
            </p>
            <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300">
              Contactar Asesor Comercial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};