import { useState } from "react";

// Formulario de Contacto Principal
export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    organizacion: '',
    tipoConsulta: '',
    mensaje: '',
    fechaEvento: '',
    cantidadPersonas: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tiposConsulta = [
    { value: 'capacitacion', label: 'Programas de Capacitación' },
    { value: 'eventos', label: 'Eventos y Celebraciones' },
    { value: 'quincho', label: 'Reserva de Quincho' },
    { value: 'instalaciones', label: 'Uso de Instalaciones' },
    { value: 'convenios', label: 'Convenios Institucionales' },
    { value: 'otros', label: 'Otros Servicios' }
  ];

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#8FBF73] text-white rounded-2xl p-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-4">¡Mensaje Enviado!</h2>
            <p className="text-lg mb-6">
              Gracias por contactarnos. Nuestro equipo revisará tu consulta y se comunicará contigo 
              en las próximas 24-48 horas.
            </p>
            <button 
              onClick={() => {setSubmitted(false); setFormData({
                nombre: '', email: '', telefono: '', organizacion: '', 
                tipoConsulta: '', mensaje: '', fechaEvento: '', cantidadPersonas: ''
              })}}
              className="px-8 py-3 bg-white text-[#8FBF73] font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enviar Otro Mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Cuéntanos sobre tu Proyecto
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        <div className="bg-[#E4E2D1] dark:bg-[#302E2E] rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
                placeholder="+54 11 1234-5678"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Organización/Empresa
              </label>
              <input
                type="text"
                name="organizacion"
                value={formData.organizacion}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
                placeholder="Nombre de tu organización"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Tipo de Consulta *
              </label>
              <select
                name="tipoConsulta"
                required
                value={formData.tipoConsulta}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                {tiposConsulta.map(tipo => (
                  <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
                Cantidad de Personas (si aplica)
              </label>
              <input
                type="number"
                name="cantidadPersonas"
                value={formData.cantidadPersonas}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
                placeholder="Ej: 50"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
              Fecha del Evento (si aplica)
            </label>
            <input
              type="date"
              name="fechaEvento"
              value={formData.fechaEvento}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-bold text-[#70615A] dark:text-white mb-2">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              required
              rows={6}
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8FBF73] focus:border-transparent"
              placeholder="Describe tu consulta o proyecto en detalle..."
            />
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-4 bg-[#8FBF73] text-white font-bold rounded-lg hover:bg-[#74AADB] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};