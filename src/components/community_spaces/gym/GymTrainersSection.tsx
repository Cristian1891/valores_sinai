// Sección de Trainers
export const GymTrainersSection: React.FC = () => {
  const trainers = [
    {
      name: "Carlos López",
      specialty: "Entrenamiento Funcional",
      experience: "8 años",
      certifications: ["NSCA-CPT", "CrossFit Level 2"],
      description: "Especialista en movimientos funcionales y preparación física integral",
      image: "💪",
      color: "from-[#8FBF73] to-[#74AADB]"
    },
    {
      name: "Ana García",
      specialty: "Yoga y Pilates",
      experience: "12 años",
      certifications: ["RYT-500", "Pilates Comprehensive"],
      description: "Experta en bienestar holístico y conexión mente-cuerpo",
      image: "🧘‍♀️",
      color: "from-[#74AADB] to-[#70615A]"
    },
    {
      name: "Diego Ruiz",
      specialty: "Spinning y Cardio",
      experience: "6 años",
      certifications: ["Spinning Instructor", "HIIT Specialist"],
      description: "Motivador nato especializado en entrenamientos cardiovasculares",
      image: "🚴‍♂️",
      color: "from-[#FEC40D] to-[#D28A2B]"
    },
    {
      name: "María Rodríguez",
      specialty: "Rehabilitación Deportiva",
      experience: "10 años",
      certifications: ["Kinesióloga", "Sports Therapy"],
      description: "Especialista en recuperación y prevención de lesiones",
      image: "🏥",
      color: "from-[#70615A] to-[#3F3E3E]"
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Nuestro Equipo de Profesionales
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Entrenadores certificados comprometidos con tu progreso y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${trainer.color} flex items-center justify-center text-3xl`}>
                  {trainer.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-paragraph text-[#FEC40D] font-bold mb-2">
                    {trainer.specialty}
                  </p>
                  <p className="text-paragraph text-gray-600 dark:text-gray-300 mb-4">
                    {trainer.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-paragraph font-medium text-gray-700 dark:text-gray-300 mr-2">
                        Experiencia:
                      </span>
                      <span className="text-paragraph text-[#8FBF73] font-bold">
                        {trainer.experience}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-paragraph font-medium text-gray-700 dark:text-gray-300 mr-2 mt-1">
                        Certificaciones:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {trainer.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="text-paragraph px-2 py-1 bg-[#8FBF73]/20 text-[#8FBF73] rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
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