// Sección de Especialidades y Servicios
export const ServicesContactSection: React.FC = () => {
  const services = [
    {
      title: "Programas Educativos",
      icon: "🎓",
      description: "Capacitación profesional y formación laboral",
      contact: "educacion@valoressinai.org",
      areas: ["Crédito Fiscal INET", "Formación Sindical", "Capacitación Municipal"]
    },
    {
      title: "Eventos Corporativos",
      icon: "🏢",
      description: "Reuniones empresariales y team building",
      contact: "eventos@valoressinai.org",
      areas: ["Salón 400 personas", "Quincho Premium", "Salas de Conferencia"]
    },
    {
      title: "Convenios Institucionales",
      icon: "🤝",
      description: "Alianzas estratégicas con universidades y empresas",
      contact: "convenios@valoressinai.org",
      areas: ["Universidades", "Empresas", "Sindicatos"]
    },
    {
      title: "Instalaciones Deportivas",
      icon: "⚽",
      description: "Espacios para actividades físicas y recreativas",
      contact: "deportes@valoressinai.org",
      areas: ["Gimnasio", "Canchas", "Pileta"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Contacto Especializado
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cada área tiene un equipo especializado para atender tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-r from-[#8FBF73]/5 to-[#74AADB]/5 dark:from-[#8FBF73]/10 dark:to-[#74AADB]/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#8FBF73] mb-2">
                      📧 {service.contact}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {service.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-[#FEC40D] rounded-full mr-3"></div>
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#8FBF73] text-white font-bold rounded-lg hover:bg-[#74AADB] transition-colors text-sm">
                    Contactar Área
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};