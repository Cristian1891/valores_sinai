import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Formulario de Donación
export const DonationFormSection: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');
  const [country, setCountry] = useState<string>('AR');
  const [selectedProgram, setSelectedProgram] = useState<string>('general');
  const [documentType, setDocumentType] = useState<string>('DNI');
  const [documentNumber, setDocumentNumber] = useState<string>('');


  const location = useLocation();

  // Programas disponibles para donación
  const programas = [
    { id: 'general', name: 'Donación General', description: 'Apoyo a todas las actividades' },
    { id: 'inet-fiscal', name: 'Crédito Fiscal INET', description: 'Formación técnica-profesional' },
    { id: 'primer-empleo', name: 'Mi Primer Empleo', description: 'Inserción laboral juvenil' },
    { id: 'formacion-sindical', name: 'Formación Sindical', description: 'Capacitación sindical' },
    { id: 'capacitacion-municipal', name: 'Capacitación Municipal', description: 'Formación funcionarios públicos' },
    { id: 'gerenciamiento-iaetes', name: 'Gerenciamiento IAETES', description: 'Gestión educativa' },
    { id: 'trabajo-fiscal', name: 'Crédito Fiscal Ministerio de Trabajo', description: 'Capacitación laboral' }
  ];

  // Obtener parámetros de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const programaId = searchParams.get('programa');
    
    if (programaId) {
      setSelectedProgram(programaId);
    }
  }, [location]);

  const documentTypes = [
    { code: 'DNI', name: 'DNI' },
    { code: 'LC', name: 'Libreta Cívica' },
    { code: 'LE', name: 'Libreta de Enrolamiento' },
    { code: 'PASSPORT', name: 'Pasaporte' },
    { code: 'CEDULA', name: 'Cédula' },
    { code: 'OTHER', name: 'Otro' }
  ];

  const predefinedAmounts = [
    { amount: '3000', label: '$3.000' },
    { amount: '5000', label: '$5.000' },
    { amount: '10000', label: '$10.000' },
    { amount: '25000', label: '$25.000' },
    { amount: 'other', label: 'Otro monto' }
  ];

  const countries = [
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'US', name: 'Estados Unidos', flag: '🇺🇸' },
    { code: 'ES', name: 'España', flag: '🇪🇸' },
    { code: 'MX', name: 'México', flag: '🇲🇽' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: 'OTHER', name: 'Otro país', flag: '🌍' }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Tarjeta de Crédito/Débito', icon: '💳' },
    { id: 'transfer', name: 'Transferencia Bancaria', icon: '🏦' }
  ];

  const selectedProgramData = programas.find(p => p.id === selectedProgram);

  return (
    <section className="py-20 bg-[#E4E2D1] dark:bg-[#302E2E]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section md:text-4xl font-bold text-[#70615A] dark:text-white mb-4">
            Formulario de Donación
          </h2>
          <div className="w-24 h-1 bg-[#FEC40D] mx-auto mb-6"></div>
          <p className="text-paragraph md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            "Nunca permitas que la lealtad y la bondad te abandonen" - Prov. 3:3 NTV
          </p>
        </div>

        <div className="bg-white dark:bg-[#3F3E3E] rounded-2xl shadow-lg p-8">
          <form className="space-y-8">
            {/* Selección de programa */}
            <div>
              <label className="block text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                Programa a apoyar
              </label>
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
              >
                {programas.map((programa) => (
                  <option key={programa.id} value={programa.id}>
                    {programa.name} - {programa.description}
                  </option>
                ))}
              </select>
              {selectedProgramData && (
                <div className="mt-3 p-3 bg-[#8FBF73]/10 rounded-lg">
                  <p className="text-paragraph text-gray-700 dark:text-gray-300">
                    <strong>Apoyas:</strong> {selectedProgramData.name} - {selectedProgramData.description}
                  </p>
                </div>
              )}
            </div>

        {/* <div className="bg-white dark:bg-[#3F3E3E] rounded-2xl shadow-lg p-8">
          <form className="space-y-8"> */}
            {/* Selección de país */}
            <div>
              <label className="block text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                País de residencia
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {countries.map((countryOption) => (
                  <button
                    key={countryOption.code}
                    type="button"
                    onClick={() => setCountry(countryOption.code)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                      country === countryOption.code
                        ? 'border-[#FEC40D] bg-[#FEC40D]/10'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#8FBF73]'
                    }`}
                  >
                    <span className="text-xl">{countryOption.flag}</span>
                    <span className="text-paragraph font-bold text-gray-700 dark:text-gray-300">
                      {countryOption.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Monto de donación */}
            <div>
              <label className="block text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                ¿Cuánto quieres donar?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount.amount}
                    type="button"
                    onClick={() => setDonationAmount(amount.amount)}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      donationAmount === amount.amount
                        ? 'border-[#FEC40D] bg-[#FEC40D] text-gray-800'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#8FBF73] text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <span className="text-paragraph md:text-base font-bold">
                      {amount.label}
                    </span>
                  </button>
                ))}
              </div>

              {donationAmount === 'other' && (
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Ingresa el monto"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                  />
                </div>
              )}
            </div>

            {/* Frecuencia de donación */}
            <div>
              <label className="block text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                Frecuencia de donación
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    frequency === 'once'
                      ? 'border-[#FEC40D] bg-[#FEC40D] text-gray-800'
                      : 'border-gray-200 dark:border-gray-600 hover:border-[#8FBF73] text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-paragraph md:text-base font-bold">Una vez</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all duration-300 ${
                    frequency === 'monthly'
                      ? 'border-[#FEC40D] bg-[#FEC40D] text-gray-800'
                      : 'border-gray-200 dark:border-gray-600 hover:border-[#8FBF73] text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="text-paragraph md:text-base font-bold">Mensual</span>
                </button>
              </div>
            </div>

            {/* Método de pago */}
            <div>
              <label className="block text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                Método de pago
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id as 'card' | 'transfer')}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                      paymentMethod === method.id
                        ? 'border-[#FEC40D] bg-[#FEC40D]/10'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#8FBF73]'
                    }`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <span className="text-paragraph md:text-base font-bold text-gray-700 dark:text-gray-300">
                      {method.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Formulario de datos personales */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                />
              </div>
              <div>
                <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                  Apellido *
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
              />
            </div>

            <div>
              <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
              />
            </div>

            {/* Información de pago según método seleccionado */}
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white">
                  Información de la tarjeta
                </h3>
                <div>
                  <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                    Número de tarjeta *
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                      Fecha de expiración *
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'transfer' && (
              <div className="bg-[#74AADB]/10 p-6 rounded-lg">
                <h3 className="text-subtitle font-bold text-[#70615A] dark:text-white mb-4">
                  Información para transferencia
                </h3>
                <div className="space-y-2 text-paragraph">
                  <p><strong>Banco:</strong> Banco Provincia</p>
                  <p><strong>Titular:</strong> Valores Sinaí Asociación Civil</p>
                  <p><strong>CBU:</strong> 0140999803000001234567</p>
                  <p><strong>Alias:</strong> VALORES.SINAI.DONACION</p>
                </div>
                <div className="mt-4 p-3 bg-[#FEC40D]/20 rounded-lg">
                  <p className="text-paragraph text-gray-700 dark:text-gray-300">
                    <strong>Importante:</strong> Después de realizar la transferencia, 
                    envía el comprobante por email a donaciones@valoressinai.org.ar 
                    para procesar tu donación.
                  </p>
                </div>
              </div>
            )}

            {/* Términos y condiciones */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 text-[#8FBF73] focus:ring-[#8FBF73] border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-paragraph text-gray-700 dark:text-gray-300">
                Acepto los <a href="#" className="text-[#8FBF73] hover:underline">términos y condiciones</a> y 
                autorizo el procesamiento de mis datos personales para procesar la donación.
              </label>
            </div>

            {/* Información adicional */}
            <div>
              <label className="block text-paragraph font-bold text-[#70615A] dark:text-white mb-2">
                Mensaje o dedicatoria (opcional)
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-[#8FBF73] focus:outline-none text-paragraph dark:bg-[#302E2E] dark:text-white"
                placeholder="Comparte por qué decidiste donar o dedica tu donación a alguien especial..."
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-[#8FBF73] text-white font-bold rounded-lg hover:bg-[#74AADB] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {paymentMethod === 'card' ? 'Procesar Donación' : 'Enviar Información'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};