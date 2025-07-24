// Sección final con Call to Action
export const QuinchoCTASection: React.FC = () => {
//   const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-r from-[#70615A] to-[#3F3E3E] text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="text-6xl mb-6">🔥</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {/* {t('quincho.ctaTitle') || '¿Listo para tu Próxima Celebración?'} */}
          {'¿Listo para tu Próxima Celebración?'}
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          No esperes más para reservar el quincho perfecto para tu evento. 
          Nuestro equipo está listo para ayudarte a crear momentos únicos e inolvidables.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-[#FEC40D] text-gray-800 font-bold rounded-lg hover:bg-[#D28A2B] transition-all duration-300 transform hover:scale-105">
            {/* {t('quincho.reservarAhora') || 'Reservar Ahora'} */}
            {'Reservar Ahora'}
          </button>
          <button className="px-8 py-4 border-2 border-[#FEC40D] text-[#FEC40D] font-bold rounded-lg hover:bg-[#FEC40D] hover:text-gray-800 transition-all duration-300">
            {/* {t('quincho.consultarPrecios') || 'Consultar Precios'} */}
            {'Consultar Precios'}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-lg font-bold mb-2">Reserva Garantizada</h4>
            <p className="text-sm opacity-80">Tu fecha asegurada con nuestra confirmación inmediata</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h4 className="text-lg font-bold mb-2">Experiencia Premium</h4>
            <p className="text-sm opacity-80">Calidad y servicio excepcional en cada detalle</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">💝</div>
            <h4 className="text-lg font-bold mb-2">Recuerdos Únicos</h4>
            <p className="text-sm opacity-80">Momentos especiales en un entorno natural incomparable</p>
          </div>
        </div>
      </div>
    </section>
  );
};
