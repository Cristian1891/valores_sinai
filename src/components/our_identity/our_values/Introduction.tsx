import { useState, useEffect } from 'react';
import { Heart, Shield, Users, Star, HandHeart, Eye, Handshake, Target, UserCheck, HelpingHand, Bird, Award, Smile, CheckCircle, ArrowDown } from 'lucide-react';

export const Introduction: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Simulación de detección de modo oscuro
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  // Efecto parallax suave
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const valores = [
    {
      id: 'amor',
      titulo: 'AMOR',
      descripcion: 'El amor es la fuerza que nos impulsa a actuar con compasión y dedicación hacia nuestra comunidad. Es el motor que nos une y nos permite crear vínculos profundos y duraderos.',
      contenido: 'Practicamos el amor incondicional hacia quienes servimos, entendiendo que cada acción realizada con amor multiplica su impacto positivo en la comunidad.',
      icon: Heart,
      color: '#FF6B6B'
    },
    {
      id: 'responsabilidad',
      titulo: 'RESPONSABILIDAD',
      descripcion: 'Asumimos con seriedad nuestros compromisos, siendo conscientes del impacto de nuestras acciones en la comunidad y el medio ambiente.',
      contenido: 'Cada decisión que tomamos refleja nuestro compromiso con la excelencia y la rendición de cuentas ante quienes confían en nosotros.',
      icon: Shield,
      color: '#4ECDC4'
    },
    {
      id: 'lealtad',
      titulo: 'LEALTAD',
      descripcion: 'Mantenemos fidelidad a nuestros principios, a nuestra misión y a las personas que forman parte de nuestra comunidad.',
      contenido: 'La lealtad nos permite construir relaciones sólidas basadas en la confianza mutua y el compromiso compartido.',
      icon: Users,
      color: '#45B7D1'
    },
    {
      id: 'honradez',
      titulo: 'HONRADEZ',
      descripcion: 'Actuamos con rectitud y transparencia en todas nuestras acciones, siendo íntegros en nuestro proceder.',
      contenido: 'La honradez es fundamental para mantener la confianza de la comunidad y garantizar que nuestras acciones reflejen nuestros valores.',
      icon: Star,
      color: '#F7DC6F'
    },
    {
      id: 'tolerancia',
      titulo: 'TOLERANCIA',
      descripcion: 'Respetamos y valoramos la diversidad de ideas, culturas y perspectivas, promoviendo un ambiente inclusivo para todos.',
      contenido: 'Entendemos que la diversidad enriquece nuestra comunidad y nos permite crecer como organización y como personas.',
      icon: HandHeart,
      color: '#BB8FCE'
    },
    {
      id: 'confianza',
      titulo: 'CONFIANZA',
      descripcion: 'Construimos relaciones sólidas basadas en la credibilidad, la transparencia y el cumplimiento de nuestras promesas.',
      contenido: 'La confianza es el fundamento de todas nuestras relaciones, tanto internas como con la comunidad que servimos.',
      icon: Eye,
      color: '#85C1E9'
    },
    {
      id: 'respeto',
      titulo: 'RESPETO',
      descripcion: 'Tratamos a todas las personas con dignidad, reconociendo el valor intrínseco de cada individuo.',
      contenido: 'El respeto mutuo crea un ambiente donde todos pueden contribuir y desarrollarse plenamente.',
      icon: Handshake,
      color: '#82E0AA'
    },
    {
      id: 'esfuerzo',
      titulo: 'ESFUERZO',
      descripcion: 'Nos dedicamos con perseverancia y determinación a alcanzar nuestros objetivos y superar los desafíos.',
      contenido: 'Cada meta lograda es resultado del esfuerzo conjunto y la dedicación constante de nuestro equipo.',
      icon: Target,
      color: '#F8C471'
    },
    {
      id: 'compromiso',
      titulo: 'COMPROMISO',
      descripcion: 'Nos dedicamos plenamente a nuestra misión, asumiendo la responsabilidad de contribuir al bienestar de nuestra comunidad.',
      contenido: 'Nuestro compromiso va más allá de las palabras; se refleja en acciones concretas y resultados tangibles.',
      icon: UserCheck,
      color: '#D7BDE2'
    },
    {
      id: 'solidaridad',
      titulo: 'SOLIDARIDAD',
      descripcion: 'Nos unimos en apoyo mutuo, especialmente en momentos de dificultad, fortaleciendo los lazos comunitarios.',
      contenido: 'La solidaridad nos permite enfrentar juntos los desafíos y celebrar unidos los logros de nuestra comunidad.',
      icon: HelpingHand,
      color: '#AED6F1'
    },
    {
      id: 'paz',
      titulo: 'PAZ',
      descripcion: 'Promovemos la armonía y la resolución pacífica de conflictos, creando espacios de serenidad y bienestar.',
      contenido: 'Trabajamos activamente para construir un entorno donde reine la paz y donde todos puedan convivir en armonía.',
      icon: Bird,
      color: '#A9DFBF'
    },
    {
      id: 'honor',
      titulo: 'HONOR',
      descripcion: 'Actuamos con dignidad y nobleza, manteniendo siempre la integridad en nuestras acciones y decisiones.',
      contenido: 'El honor nos guía a hacer lo correcto, incluso cuando nadie está observando, siendo fieles a nuestros principios.',
      icon: Award,
      color: '#F4D03F'
    },
    {
      id: 'bondad',
      titulo: 'BONDAD',
      descripcion: 'Cultivamos la gentileza y la compasión en nuestras interacciones, buscando siempre el bienestar de otros.',
      contenido: 'La bondad transforma vidas y comunidades, creando un efecto multiplicador de positividad y esperanza.',
      icon: Smile,
      color: '#FADBD8'
    },
    {
      id: 'integridad',
      titulo: 'INTEGRIDAD',
      descripcion: 'Mantenemos coherencia entre nuestros valores, palabras y acciones, siendo auténticos en todo momento.',
      contenido: 'La integridad es el pilar que sostiene nuestra credibilidad y la confianza que la comunidad deposita en nosotros.',
      icon: CheckCircle,
      color: '#D5F4E6'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header mejorado con mejor espaciado y diseño profesional */}
      <div className="relative overflow-hidden">
        {/* Espaciado para el navbar fijo */}
        <div className="h-4"></div>
        
        {/* Fondo con gradiente y elementos decorativos */}
        <div className="relative bg-gradient-to-br from-[#74AADB] via-[#4A90E2] to-[#2E5984] py-20 lg:py-28">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-[#FEC40D] rounded-full blur-xl"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#FEC40D] rounded-full blur-xl"></div>
          </div>

          {/* Patrón de puntos decorativo */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          {/* Contenido principal del header */}
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            {/* Badge superior */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Heart className="w-4 h-4 text-[#FEC40D] mr-2" />
              <span className="text-sm font-montserrat font-medium text-white">
                Asociación Civil Valores Sinaí
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
              Nuestros
              <span className="block text-[#FEC40D]">Valores</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
              Los principios que guían nuestras acciones y definen nuestra identidad como asociación civil comprometida con el bienestar de nuestra comunidad.
            </p>

            {/* Estadísticas rápidas */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FEC40D] mb-1">14</div>
                <div className="text-sm md:text-base text-white/80">Valores Fundamentales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FEC40D] mb-1">1</div>
                <div className="text-sm md:text-base text-white/80">Misión Compartida</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#FEC40D] mb-1">∞</div>
                <div className="text-sm md:text-base text-white/80">Compromiso Total</div>
              </div>
            </div>

            {/* Botón de scroll suave */}
            <div className="animate-bounce">
              <button 
                onClick={() => {
                  const element = document.getElementById('valores-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group"
              >
                <ArrowDown className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Onda decorativa en la parte inferior */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-20">
              <path fill={darkMode ? '#111827' : '#f9fafb'} d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Sección de introducción mejorada */}
      <div id="valores-section" className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#74AADB]/10 dark:bg-[#FEC40D]/10 rounded-full mb-6">
              <Shield className="w-5 h-5 text-[#74AADB] dark:text-[#FEC40D] mr-2" />
              <span className="text-sm font-montserrat font-medium text-[#74AADB] dark:text-[#FEC40D]">
                Fundamentos de Nuestra Misión
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#74AADB] dark:text-[#FEC40D] mb-6">
              Principios que Nos Definen
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              En nuestra asociación civil, creemos firmemente que los valores son la brújula que orienta cada una de nuestras acciones. 
              Estos catorce valores fundamentales no son solo palabras en papel, sino principios vivientes que respiramos, 
              practicamos y compartimos diariamente en nuestro servicio a la comunidad.
            </p>
          </div>
        </div>

        {/* Grid de valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {valores.map((valor, index) => {
            const IconComponent = valor.icon;
            return (
              <div
                key={valor.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700 ${
                  activeValue === valor.id ? 'ring-2 ring-[#FEC40D] shadow-2xl' : ''
                }`}
                onClick={() => setActiveValue(activeValue === valor.id ? null : valor.id)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: `${valor.color}20`, border: `2px solid ${valor.color}` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: valor.color }}
                    />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-gray-800 dark:text-white mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {valor.descripcion}
                  </p>
                  {activeValue === valor.id && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-in slide-in-from-top-2 duration-200">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        {valor.contenido}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección de compromiso mejorada */}
        <div className="bg-gradient-to-r from-[#FEC40D] to-[#D28A2B] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-6">
              Nuestro Compromiso Contigo
            </h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
              Estos valores no son solo aspiraciones, sino compromisos reales que asumimos con cada persona que toca nuestras vidas. 
              Nos esforzamos cada día por ser dignos de la confianza que depositas en nosotros, 
              y por construir juntos una comunidad más fuerte, más unida y más próspera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#74AADB] hover:bg-[#5A8BC4] text-white font-montserrat font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Conoce Nuestros Proyectos
              </button>
              <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-montserrat font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Contáctanos
              </button>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-[#74AADB] dark:text-[#FEC40D] mb-4">
              ¿Quieres ser parte de nuestra misión?
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a nosotros y sé parte de una comunidad comprometida con hacer la diferencia. 
              Juntos podemos construir un futuro mejor para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#74AADB] hover:bg-[#5A8BC4] text-white font-montserrat font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Únete a Nosotros
              </button>
              <button className="px-8 py-4 border-2 border-[#74AADB] dark:border-[#FEC40D] text-[#74AADB] dark:text-[#FEC40D] hover:bg-[#74AADB] dark:hover:bg-[#FEC40D] hover:text-white dark:hover:text-gray-800 font-montserrat font-bold text-lg rounded-xl transition-all duration-300">
                Más Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};