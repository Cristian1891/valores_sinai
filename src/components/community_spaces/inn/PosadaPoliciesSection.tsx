// Sección de Políticas y Normas
export const PosadaPoliciesSection: React.FC = () => {
  const policies = [
    {
      title: 'Check-in y Check-out',
      icon: '🕐',
      details: [
        'Check-in: 15:00 - 22:00',
        'Check-out: 08:00 - 11:00',
        'Check-in tardío disponible',
        'Almacenamiento de equipaje gratuito'
      ]
    },
    {
      title: 'Políticas de Cancelación',
      icon: '📋',
      details: [
        'Cancelación gratuita hasta 48h antes',
        'Política flexible para grupos',
        'Reembolso del 50% hasta 24h antes',
        'Modificaciones sin costo adicional'
      ]
    },
    {
      title: 'Normas de Convivencia',
      icon: '🤝',
      details: [
        'Respeto por el descanso de otros huéspedes',
        'Cuidado de las instalaciones',
        'Prohibido fumar en habitaciones',
        'Mascotas permitidas bajo consulta'
      ]
    },
    {
      title: 'Seguridad',
      icon: '🔒',
      details: [
        'Vigilancia 24/7',
        'Cámaras de seguridad en áreas comunes',
        'Personal de seguridad nocturno',
        'Protocolo de emergencias establecido'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Políticas y Normas
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Información importante para garantizar una estadía placentera para todos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-gradient-to-r from-[#74AADB]/5 to-[#8FBF73]/5 dark:from-[#74AADB]/10 dark:to-[#8FBF73]/10 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{policy.icon}</div>
                <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white">
                  {policy.title}
                </h3>
              </div>
              <div className="space-y-3">
                {policy.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3 mt-2"></div>
                    <span className="text-paragraph text-gray-700 dark:text-gray-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};