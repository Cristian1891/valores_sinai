import { useState } from "react";

// Sección de Reservas y Precios
export const QuinchoBookingSection: React.FC = () => {
//   const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  const packages = [
    {
      id: 'basico',
      name: 'Paquete Básico',
      duration: '4 horas',
      price: 'Consultar',
      features: [
        'Uso del quincho techado',
        'Parrillas y utensilios',
        'Mesas y sillas para 40 personas',
        'Acceso a baños y lavaderos',
        'Estacionamiento incluido'
      ],
      popular: false
    },
    {
      id: 'completo',
      name: 'Paquete Completo',
      duration: '8 horas',
      price: 'Consultar',
      features: [
        'Todo lo del paquete básico',
        'Capacidad para 80 personas',
        'Sistema de audio incluido',
        'Heladeras disponibles',
        'Iluminación nocturna',
        'Servicio de limpieza'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Paquete Premium',
      duration: 'Día completo',
      price: 'Consultar',
      features: [
        'Todo lo del paquete completo',
        'Decoración personalizada',
        'Servicio de catering opcional',
        'Coordinador de evento',
        'Fotografía del evento',
        'Acceso a áreas verdes'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            {/* {t('quincho.paquetesReservas') || 'Paquetes y Reservas'} */}
            {'Paquetes y Reservas'}
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Elige el paquete que mejor se adapte a tu evento y celebra de manera inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-[#FEC40D] scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FEC40D] text-gray-800 px-4 py-1 rounded-full text-sm font-bold">
                    {/* {t('quincho.masPopular') || 'Más Popular'} */}
                    {'Más Popular'}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.duration}</p>
                <div className="text-3xl font-bold text-[#FEC40D] mb-2">{pkg.price}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-[#FEC40D] text-gray-800 hover:bg-[#D28A2B]' 
                    : 'bg-[#8FBF73] text-white hover:bg-[#74AADB]'
                }`}
              >
                {/* {t('quincho.reservarPaquete') || 'Reservar Paquete'} */}
                {'Reservar Paquete'}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#70615A] dark:text-white mb-4">
              {/* {t('quincho.informacionReservas') || 'Información de Reservas'} */}
              {'Información de Reservas'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-[#70615A] dark:text-white mb-4">
                {/* {t('quincho.politicasReserva') || 'Políticas de Reserva'} */}
                {'Políticas de Reserva'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3 mt-2"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Reserva mínima de 48 horas de anticipación
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3 mt-2"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Seña del 50% para confirmar la reserva
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3 mt-2"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Cancelación gratuita hasta 24 horas antes
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-[#70615A] dark:text-white mb-4">
                {/* {t('quincho.contactoReservas') || 'Contacto para Reservas'} */}
                {'Contacto para Reservas'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">📞</div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    +54 11 1234-5678
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">📧</div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    reservas@valoressinai.org
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">💬</div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    WhatsApp: +54 9 11 1234-5678
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};