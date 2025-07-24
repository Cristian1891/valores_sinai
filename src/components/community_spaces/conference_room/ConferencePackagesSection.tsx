// Sección de Paquetes Empresariales
export const ConferencePackagesSection: React.FC = () => {
  const packages = [
    {
      id: 'basic',
      name: 'Paquete Básico',
      duration: 'Medio día (4 horas)',
      price: 'Consultar',
      features: [
        'Uso del salón con capacidad para 200 personas',
        'Proyector y pantalla incluidos',
        'Sistema de audio básico',
        'WiFi empresarial',
        'Estacionamiento incluido',
        'Soporte técnico básico'
      ],
      popular: false,
      color: 'from-[#8FBF73] to-[#74AADB]'
    },
    {
      id: 'professional',
      name: 'Paquete Profesional',
      duration: 'Día completo (8 horas)',
      price: 'Consultar',
      features: [
        'Capacidad máxima 400 personas',
        'Equipamiento AV completo',
        'Grabación profesional',
        'Coffee breaks incluidos',
        'Servicio de recepción',
        'Coordinador asignado',
        'Material promocional',
        'Fotografía del evento'
      ],
      popular: true,
      color: 'from-[#74AADB] to-[#70615A]'
    },
    {
      id: 'premium',
      name: 'Paquete Premium',
      duration: 'Evento completo (personalizado)',
      price: 'Consultar',
      features: [
        'Todo lo del paquete profesional',
        'Streaming en vivo HD',
        'Traducción simultánea',
        'Catering gourmet completo',
        'Transporte ejecutivo',
        'Suite VIP para organizadores',
        'Servicio de protocolo',
        'Post-producción incluida'
      ],
      popular: false,
      color: 'from-[#FEC40D] to-[#D28A2B]'
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Paquetes Empresariales
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales diseñadas para satisfacer las necesidades específicas de tu evento corporativo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-[#74AADB] scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#74AADB] text-white px-4 py-1 rounded-full text-button font-bold">
                    Más Solicitado
                  </span>
                </div>
              )}
              
              <div className={`text-center mb-6 p-4 rounded-lg bg-gradient-to-r ${pkg.color} text-white`}>
                <h3 className="text-subtitle font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-paragraph opacity-90 mb-4">{pkg.duration}</p>
                <div className="text-section font-bold">{pkg.price}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3 mt-2"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-[#74AADB] text-white hover:bg-[#70615A]' 
                  : 'bg-[#8FBF73] text-white hover:bg-[#74AADB]'
              }`}>
                Solicitar Cotización
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};