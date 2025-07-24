// Sección de Testimonios y Casos de Éxito
export const ConferenceTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      type: "Conferencia Médica",
      organization: "Colegio de Médicos",
      attendees: "350 participantes",
      quote: "La calidad del equipamiento y la atención profesional superaron nuestras expectativas. El evento fue un éxito total.",
      rating: 5,
      year: "2024"
    },
    {
      type: "Convención Empresarial",
      organization: "Cámara de Comercio",
      attendees: "400 ejecutivos",
      quote: "Instalaciones de primer nivel y un servicio impecable. Definitivamente volveremos a elegir este lugar.",
      rating: 5,
      year: "2024"
    },
    {
      type: "Seminario Académico",
      organization: "Universidad Nacional",
      attendees: "280 estudiantes",
      quote: "El ambiente y la tecnología crearon las condiciones perfectas para nuestro seminario internacional.",
      rating: 5,
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Casos de Éxito
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empresas y organizaciones que confiaron en nosotros para sus eventos más importantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#E4E2D1] to-[#DBCDB7] dark:from-[#302E2E] dark:to-[#3F3E3E] rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                  {testimonial.type}
                </h3>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  {testimonial.organization}
                </p>
                <p className="text-paragraph text-[#74AADB] font-bold">
                  {testimonial.attendees}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FEC40D] text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-paragraph text-gray-700 dark:text-gray-300 italic text-center">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="text-center">
                <span className="text-paragraph text-gray-500 dark:text-gray-400">
                  {testimonial.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};