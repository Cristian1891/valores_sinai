// Sección de Membresías
export const GymMembershipSection: React.FC = () => {
  const memberships = [
    {
      id: 'basica',
      name: 'Membresía Básica',
      price: 'Consultar',
      period: 'Mensual',
      description: 'Acceso completo al gimnasio y equipamiento',
      features: [
        'Acceso libre 6:00 - 22:00',
        'Uso de todos los equipos',
        'Vestuarios y duchas',
        'Evaluación física inicial',
        'Rutina personalizada'
      ],
      popular: false,
      color: 'from-[#8FBF73] to-[#74AADB]'
    },
    {
      id: 'completa',
      name: 'Membresía Completa',
      price: 'Consultar',
      period: 'Mensual',
      description: 'Todo lo básico + clases grupales ilimitadas',
      features: [
        'Todo de la membresía básica',
        'Clases grupales ilimitadas',
        'Reserva prioritaria',
        'Seguimiento nutricional',
        'Acceso a pileta',
        'Toallas incluidas'
      ],
      popular: true,
      color: 'from-[#FEC40D] to-[#D28A2B]'
    },
    {
      id: 'premium',
      name: 'Membresía Premium',
      price: 'Consultar',
      period: 'Mensual',
      description: 'Experiencia completa con servicios exclusivos',
      features: [
        'Todo de la membresía completa',
        'Entrenador personal (2 sesiones/mes)',
        'Plan nutricional personalizado',
        'Masajes deportivos',
        'Acceso a instalaciones 24/7',
        'Invitados (2 por mes)'
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
            Planes de Membresía
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Encuentra el plan perfecto para alcanzar tus objetivos fitness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberships.map((membership) => (
            <div key={membership.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${membership.popular ? 'ring-2 ring-[#FEC40D] scale-105' : ''}`}>
              {membership.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FEC40D] text-gray-800 px-4 py-2 rounded-full text-button font-bold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className={`w-full h-2 bg-gradient-to-r ${membership.color} rounded-t-lg mb-6`}></div>
              
              <div className="text-center mb-6">
                <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-2">
                  {membership.name}
                </h3>
                <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                  {membership.description}
                </p>
                <div className="text-3xl font-bold text-[#FEC40D] mb-1">{membership.price}</div>
                <div className="text-paragraph text-gray-500 dark:text-gray-400">{membership.period}</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {membership.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                membership.popular 
                  ? 'bg-[#FEC40D] text-gray-800 hover:bg-[#D28A2B]' 
                  : 'bg-[#8FBF73] text-white hover:bg-[#74AADB]'
              }`}>
                Comenzar Ahora
              </button>
            </div>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <div className="mt-16 bg-gradient-to-r from-[#8FBF73] to-[#74AADB] rounded-2xl p-8 text-white">
          <h3 className="text-subtitle md:text-2xl font-bold text-center mb-8">
            Beneficios Incluidos en Todas las Membresías
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🏥</div>
              <h4 className="text-subtitle font-bold mb-2">Seguro Médico</h4>
              <p className="text-paragraph opacity-90">Cobertura completa durante entrenamientos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🅿️</div>
              <h4 className="text-subtitle font-bold mb-2">Estacionamiento</h4>
              <p className="text-paragraph opacity-90">Gratuito y seguro las 24 horas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚿</div>
              <h4 className="text-subtitle font-bold mb-2">Instalaciones</h4>
              <p className="text-paragraph opacity-90">Vestuarios, duchas y casilleros</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h4 className="text-subtitle font-bold mb-2">App Móvil</h4>
              <p className="text-paragraph opacity-90">Seguimiento y reservas online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
