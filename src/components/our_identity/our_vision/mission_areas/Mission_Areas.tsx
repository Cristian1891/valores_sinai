import { useTranslation } from 'react-i18next';

export const MissionAreas: React.FC = () => {
  const { t } = useTranslation();

  const areas = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('vision.education', 'Educación'),
      description: t('vision.education_desc', 'Formamos personas a través del conocimiento y valores cristianos')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4zM9 3v1h6V3H9zm2 5a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0V9a1 1 0 011-1z" />
        </svg>
      ),
      title: t('vision.culture', 'Cultura'),
      description: t('vision.culture_desc', 'Promovemos expresiones culturales que edifiquen y enriquezcan el alma')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('vision.social', 'Vida Social'),
      description: t('vision.social_desc', 'Construimos comunidad basada en el amor y respeto mutuo')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('vision.sports', 'Deportes'),
      description: t('vision.sports_desc', 'Desarrollamos el cuerpo y el espíritu de equipo a través del deporte')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('vision.spiritual', 'Vida Espiritual'),
      description: t('vision.spiritual_desc', 'Fortalecemos la fe y la relación personal con Dios')
    }
  ];

  return (
    <section className="py-16 px-4 bg-[var(--color-neutralLight)] dark:bg-[var(--color-grayDarkv1)]">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-section text-[var(--color-grayDark)] dark:text-white mb-4">
            {t('vision.areas_title', 'Áreas de Formación')}
          </h2>
          <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] max-w-3xl mx-auto">
            {t('vision.areas_description', 'Trabajamos de manera integral en diferentes aspectos de la vida humana para formar personas completas')}
          </p>
        </div>

        {/* Grid de áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-[var(--color-grayDark)] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[var(--color-accent)]/20"
            >
              {/* Icono */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-greenLight)] rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>

              {/* Contenido */}
              <h3 className="font-montserrat text-subtitle text-[var(--color-grayDark)] dark:text-white mb-3">
                {area.title}
              </h3>
              
              <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] leading-relaxed">
                {area.description}
              </p>

              {/* Línea decorativa */}
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-orange)] rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};