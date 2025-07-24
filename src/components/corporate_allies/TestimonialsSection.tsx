// Sección de Testimonios
export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. María González",
      position: "Directora de RRHH",
      company: "Mega Energía S.A",
      content: "La alianza con Valores Sinai ha sido transformadora para nuestro equipo. Los programas de capacitación han elevado significativamente las competencias de nuestros profesionales.",
      rating: 5
    },
    {
      name: "Ing. Carlos Rodríguez",
      position: "Decano",
      company: "Universidad Nacional de Avellaneda",
      content: "El trabajo conjunto ha permitido crear puentes sólidos entre la academia y la industria, beneficiando a estudiantes y profesionales por igual.",
      rating: 5
    },
    {
      name: "Lic. Ana Martínez",
      position: "Coordinadora de Formación",
      company: "APSEE",
      content: "Los programas de formación sindical han fortalecido el liderazgo de nuestros representantes. Es una alianza que genera valor real.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Lo que Dicen Nuestros Aliados
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="text-[#FEC40D] text-xl">⭐</div>
                ))}
              </div>
              
              <p className="text-paragraph md:text-base text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <h4 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-paragraph text-gray-600 dark:text-gray-300">
                  {testimonial.position}
                </p>
                <p className="text-paragraph text-[#74AADB] font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
