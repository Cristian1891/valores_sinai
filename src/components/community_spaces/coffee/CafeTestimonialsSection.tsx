// Sección de Testimonios del Café
export const CafeTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Visitante habitual",
      comment: "El café más auténtico que he probado. El ambiente es tan cálido que te hace sentir como en casa.",
      rating: 5,
      avatar: "👩‍🦳"
    },
    {
      name: "Carlos Rodríguez",
      role: "Organizador de eventos",
      comment: "Organizamos reuniones de trabajo aquí. El espacio es perfecto y el servicio excepcional.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ana Martínez",
      role: "Mamá de familia",
      comment: "Mis hijos y yo venimos todas las semanas. Es nuestro lugar especial para compartir.",
      rating: 5,
      avatar: "👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#8FBF73] to-[#74AADB] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold mb-4">
            Lo que Dicen Nuestros Visitantes
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-center mb-4 text-black">
                <div className="text-4xl mb-3">{testimonial.avatar}</div>
                <h4 className="text-subtitle font-bold">{testimonial.name}</h4>
                <p className="text-paragraph opacity-80">{testimonial.role}</p>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#FEC40D] text-xl">⭐</span>
                ))}
              </div>
              <p className="text-paragraph text-center text-black opacity-90 italic">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
