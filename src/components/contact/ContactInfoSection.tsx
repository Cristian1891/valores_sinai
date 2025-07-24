// Sección de Información de Contacto
export const ContactInfoSection: React.FC = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email Principal",
      content: "info@valoressinai.org",
      description: "Respuesta en 24-48 horas",
      action: "mailto:info@valoressinai.org"
    },
    {
      icon: "📞",
      title: "Teléfono",
      content: "+54 11 1234-5678",
      description: "Lun-Vie: 9:00-18:00",
      action: "tel:+5411234567"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      content: "+54 9 11 1234-5678",
      description: "Nos gusta atenderte de manera más cercana, escribimos por WhatsApp así gestionamos juntos tu consulta .",
      action: "https://wa.me/5491112345678"
    },
    {
      icon: "📍",
      title: "Ubicación",
      content: "Buenos Aires, Argentina",
      description: "Visitanos con cita previa",
      action: "#mapa"
    }
  ];

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Múltiples Formas de Contacto
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Elige la forma que más te convenga para comunicarte con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-[#3F3E3E] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-[#70615A] dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold text-[#8FBF73] mb-2">
                  {method.content}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {method.description}
                </p>
                <a
                  href={method.action}
                  className="inline-block px-6 py-2 bg-[#8FBF73] text-white font-bold rounded-lg hover:bg-[#74AADB] transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};