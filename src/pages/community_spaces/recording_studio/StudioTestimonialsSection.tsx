// Sección de Testimonios de Clientes
export const StudioTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Cantautora",
      text: "El estudio tiene un sonido increíble. El equipo técnico es muy profesional y me ayudaron a lograr exactamente el sonido que buscaba para mi álbum.",
      rating: 5,
      project: "Álbum 'Caminos'"
    },
    {
      name: "Los Acordes",
      role: "Banda de Rock",
      text: "Grabamos aquí nuestro EP y quedamos fascinados. La acústica del estudio y la calidad del equipamiento son de primer nivel.",
      rating: 5,
      project: "EP 'Noches de Ciudad'"
    },
    {
      name: "Carlos Media",
      role: "Podcaster",
      text: "Para mi podcast necesitaba un sonido limpio y profesional. El estudio superó mis expectativas y el servicio fue excelente.",
      rating: 5,
      project: "Podcast 'Historias Urbanas'"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-[#74AADB]/10 to-[#8FBF73]/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FEC40D] text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-paragraph md:text-sm text-gray-600 dark:text-gray-300 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-4">
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-1">
                  {testimonial.role}
                </p>
                <p className="text-paragraph text-[#8FBF73] font-bold">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};