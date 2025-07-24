// import { useTranslation } from "react-i18next";

export const QuinchoFeaturesSection: React.FC = () => {
//   const { t } = useTranslation();
  
  const features = [
    {
      icon: "🔥",
      title: "Parrillas Profesionales",
      description: "Equipamiento de alta calidad para asados perfectos, con múltiples parrillas y espacio para grupos grandes",
      details: ["Parrillas de hierro fundido", "Sistema de ventilación", "Mesas de apoyo", "Utensilios incluidos"]
    },
    {
      icon: "🏠",
      title: "Espacio Techado",
      description: "Área cubierta amplia que protege del sol y la lluvia, garantizando comodidad en cualquier clima",
      details: ["Techo de tejas", "Ventilación natural", "Iluminación LED", "Espacio para 80 personas"]
    },
    {
      icon: "🪑",
      title: "Mobiliario Completo",
      description: "Mesas, sillas y bancos rústicos de madera, diseñados para la comodidad y el estilo campestre",
      details: ["Mesas de madera maciza", "Sillas y bancos", "Barra de apoyo", "Decoración rústica"]
    },
    {
      icon: "🚿",
      title: "Servicios Completos",
      description: "Baños, lavaderos y área de limpieza equipada para mayor comodidad de los usuarios",
      details: ["Baños privados", "Lavaderos industriales", "Área de limpieza", "Agua caliente y fría"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            {/* {t('quincho.caracteristicas') || 'Características del Quincho'} */}
            {'Características del Quincho'}
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un espacio completamente equipado para que solo te preocupes por disfrutar con tus invitados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-r from-[#8FBF73]/5 to-[#74AADB]/5 dark:from-[#8FBF73]/10 dark:to-[#74AADB]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
