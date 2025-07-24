import { useState } from "react";

// Sección de Tipos de Habitaciones
export const PosadaRoomsSection: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  
  const roomTypes = [
    {
      id: 'individual',
      name: 'Habitación Individual',
      capacity: '1 persona',
      beds: '1 cama individual',
      price: 'Consultar',
      features: [
        'Baño privado',
        'Escritorio de trabajo',
        'Armario amplio',
        'Ventana con vista al jardín',
        'WiFi gratuito'
      ],
      icon: '🛏️',
      color: 'from-[#74AADB] to-[#8FBF73]'
    },
    {
      id: 'doble',
      name: 'Habitación Doble',
      capacity: '2 personas',
      beds: '1 cama matrimonial',
      price: 'Consultar',
      features: [
        'Baño privado completo',
        'Área de estar',
        'Balcón privado',
        'Minibar',
        'Aire acondicionado',
        'TV LED'
      ],
      icon: '🛏️',
      color: 'from-[#8FBF73] to-[#FEC40D]',
      popular: true
    },
    {
      id: 'familiar',
      name: 'Habitación Familiar',
      capacity: '4 personas',
      beds: '2 camas dobles',
      price: 'Consultar',
      features: [
        'Baño privado amplio',
        'Sala de estar',
        'Cocina básica',
        'Terraza privada',
        'Juegos para niños',
        'Espacio de almacenamiento'
      ],
      icon: '🏠',
      color: 'from-[#FEC40D] to-[#70615A]'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Tipos de Habitaciones
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Habitaciones diseñadas para diferentes necesidades, todas con el máximo confort y vistas privilegiadas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div key={room.id} className={`relative bg-white dark:bg-[#3F3E3E] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${room.popular ? 'ring-2 ring-[#FEC40D] scale-105' : ''}`}>
              {room.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#FEC40D] text-gray-800 px-4 py-1 rounded-full text-button font-bold">
                    Más Solicitada
                  </span>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${room.color} flex items-center justify-center`}>
                <div className="text-6xl text-white">{room.icon}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-subtitle md:text-xl font-bold text-[#70615A] dark:text-white mb-2">
                  {room.name}
                </h3>
                <div className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                  <p className="mb-1">👥 {room.capacity}</p>
                  <p className="mb-1">🛏️ {room.beds}</p>
                  <p className="font-bold text-[#FEC40D] text-subtitle">{room.price}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-[#8FBF73] rounded-full mr-3"></div>
                      <span className="text-paragraph">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedRoom(room.id)}
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    room.popular 
                      ? 'bg-[#FEC40D] text-gray-800 hover:bg-[#D28A2B]' 
                      : 'bg-[#74AADB] text-white hover:bg-[#8FBF73]'
                  }`}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};