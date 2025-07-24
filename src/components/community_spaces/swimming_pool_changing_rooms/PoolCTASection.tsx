import React, { useState } from 'react';

// Sección de Call to Action
export const PoolCTASection: React.FC = () => {
  const [isHorariosModalOpen, setIsHorariosModalOpen] = useState(false);

  const handleConsultarHorarios = () => {
    setIsHorariosModalOpen(true);
  };

  const handleConocerInstalaciones = () => {
    // Scroll hacia la sección de instalaciones o abrir modal
    const instalacionesSection = document.getElementById('instalaciones');
    if (instalacionesSection) {
      instalacionesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => {
    setIsHorariosModalOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#74AADB] to-[#8FBF73] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-6xl mb-6">🏊‍♂️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Sumergirte en la Diversión?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Te esperamos en nuestras instalaciones acuáticas para que disfrutes de momentos únicos 
            de relajación, ejercicio y diversión en familia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleConsultarHorarios}
              className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Consultar Horarios
            </button>
            <button 
              onClick={handleConocerInstalaciones}
              className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conocer Instalaciones
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg font-bold mb-2">Agua Cristalina</h4>
              <p className="text-sm opacity-80">Tratamiento profesional y control de calidad constante</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg font-bold mb-2">Seguridad Total</h4>
              <p className="text-sm opacity-80">Personal capacitado y equipamiento de emergencia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h4 className="text-lg font-bold mb-2">Para Toda la Familia</h4>
              <p className="text-sm opacity-80">Espacios adaptados para todas las edades y necesidades</p>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <span>Consultas: (011) 4567-8900</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📧</span>
                <span>info@asociacionacuatica.org</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📍</span>
                <span>Av. Principal 123, Buenos Aires</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Horarios */}
      {isHorariosModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Horarios de Atención</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-semibold text-[#74AADB] mb-2">Pileta Principal</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Lunes a Viernes:</strong> 6:00 - 22:00</p>
                  <p><strong>Sábados:</strong> 8:00 - 20:00</p>
                  <p><strong>Domingos:</strong> 9:00 - 18:00</p>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-semibold text-[#8FBF73] mb-2">Pileta Infantil</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Lunes a Viernes:</strong> 9:00 - 18:00</p>
                  <p><strong>Fines de Semana:</strong> 10:00 - 17:00</p>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-semibold text-[#FEC40D] mb-2">Clases de Natación</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Niños:</strong> Lun/Mié/Vie 16:00 - 17:00</p>
                  <p><strong>Adultos:</strong> Mar/Jue 19:00 - 20:00</p>
                  <p><strong>Adultos Mayores:</strong> Lun/Mié 10:00 - 11:00</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Los horarios pueden variar en feriados y fechas especiales. 
                  Para más información, contactanos por teléfono o WhatsApp.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
              <button
                onClick={() => window.open('https://wa.me/5491145678900', '_blank')}
                className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#22C55E] transition-colors"
              >
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};