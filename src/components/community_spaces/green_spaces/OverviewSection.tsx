export const OverviewSection: React.FC = () => {
//   const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section md:text-4xl font-bold text-[#3F3E3E] dark:text-white mb-6">
            Nuestro Espacio Natural
          </h2>
          <div className="w-24 h-1 bg-[#8FBF73] mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-[#8FBF73]/10 dark:bg-[#8FBF73]/20 p-6 rounded-lg">
              <h3 className="text-subtitle font-bold text-[#70615A] dark:text-[#8FBF73] mb-4">
                Extensión Total
              </h3>
              <p className="text-paragraph text-gray-700 dark:text-gray-300">
                Nuestro complejo abarca <strong>dos hectáreas y media</strong> de terreno natural, 
                con aproximadamente <strong>9,000 m² construidos</strong> integrados armoniosamente 
                con el entorno verde.
              </p>
            </div>
            
            <div className="bg-[#74AADB]/10 dark:bg-[#74AADB]/20 p-6 rounded-lg">
              <h3 className="text-subtitle font-bold text-[#70615A] dark:text-[#74AADB] mb-4">
                Filosofía Verde
              </h3>
              <p className="text-paragraph text-gray-700 dark:text-gray-300">
                Creemos en la importancia de los espacios verdes para el bienestar físico y mental 
                de nuestra comunidad. Cada área ha sido diseñada para promover la conexión con la naturaleza.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[#8FBF73] to-[#70615A] rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <p className="text-paragraph opacity-80">Vista panorámica de nuestros espacios verdes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
