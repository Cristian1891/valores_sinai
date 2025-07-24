import { useState } from "react";

// Sección de Reservas y Disponibilidad
export const PosadaBookingSection: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState({
    checkin: '',
    checkout: '',
    guests: 1
  });

  const amenities = [
    { icon: '🏊', name: 'Pileta', available: true },
    { icon: '🏋️', name: 'Gimnasio', available: true },
    { icon: '🍽️', name: 'Comedor', available: true },
    { icon: '☕', name: 'Cafetería', available: true },
    { icon: '🎯', name: 'Paintball', available: true },
    { icon: '⚽', name: 'Canchas Deportivas', available: true }
  ];

  return (
    <section className="py-20 bg-[#DBCDB7] dark:bg-[#3F3E3E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Reservar tu Estadía
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Planifica tu estadía perfecta con acceso a todas nuestras instalaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario de Reserva */}
          <div className="bg-white dark:bg-[#302E2E] rounded-2xl p-8 shadow-lg">
            <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-6">
              Consultar Disponibilidad
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-paragraph font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Fecha de Llegada
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#74AADB] dark:bg-[#3F3E3E] dark:text-white"
                    value={selectedDates.checkin}
                    onChange={(e) => setSelectedDates({...selectedDates, checkin: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-paragraph font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Fecha de Salida
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#74AADB] dark:bg-[#3F3E3E] dark:text-white"
                    value={selectedDates.checkout}
                    onChange={(e) => setSelectedDates({...selectedDates, checkout: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-paragraph font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Número de Huéspedes
                </label>
                <select
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#74AADB] dark:bg-[#3F3E3E] dark:text-white"
                  value={selectedDates.guests}
                  onChange={(e) => setSelectedDates({...selectedDates, guests: parseInt(e.target.value)})}
                >
                  <option value={1}>1 Huésped</option>
                  <option value={2}>2 Huéspedes</option>
                  <option value={3}>3 Huéspedes</option>
                  <option value={4}>4 Huéspedes</option>
                  <option value={5}>5+ Huéspedes</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#74AADB] text-white font-bold rounded-lg hover:bg-[#8FBF73] transition-all duration-300 transform hover:scale-105"
              >
                Consultar Disponibilidad
              </button>
            </form>
          </div>

          {/* Instalaciones Incluidas */}
          <div className="bg-white dark:bg-[#302E2E] rounded-2xl p-8 shadow-lg">
            <h3 className="text-subtitle md:text-2xl font-bold text-[#70615A] dark:text-white mb-6">
              Instalaciones Incluidas
            </h3>
            <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-6">
              Como huésped de la posada, tienes acceso gratuito a todas nuestras instalaciones:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center p-3 bg-[#8FBF73]/10 rounded-lg">
                  <div className="text-2xl mr-3">{amenity.icon}</div>
                  <div>
                    <span className="text-paragraph font-bold text-gray-700 dark:text-gray-300">
                      {amenity.name}
                    </span>
                    {amenity.available && (
                      <div className="text-xs text-[#8FBF73] font-bold">✓ Disponible</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-[#FEC40D]/10 rounded-lg">
              <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                🎁 Beneficios Exclusivos
              </h4>
              <div className="space-y-2">
                <p className="text-paragraph text-gray-700 dark:text-gray-300">
                  • Descuentos en servicios adicionales
                </p>
                <p className="text-paragraph text-gray-700 dark:text-gray-300">
                  • Acceso preferencial a eventos
                </p>
                <p className="text-paragraph text-gray-700 dark:text-gray-300">
                  • Asesoramiento personalizado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};