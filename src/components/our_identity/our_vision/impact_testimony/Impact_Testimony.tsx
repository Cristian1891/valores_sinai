import { useTranslation } from 'react-i18next';

export const ImpactTestimony: React.FC = () => {
  const { t } = useTranslation();

  const impactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('vision.impact_inspiration', 'Inspiración'),
      description: t('vision.impact_inspiration_desc', 'Motivamos a otros a través de nuestro ejemplo de vida')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t('vision.impact_transformation', 'Transformación'),
      description: t('vision.impact_transformation_desc', 'Cambiamos vidas a través del amor y la acción')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('vision.impact_empowerment', 'Empoderamiento'),
      description: t('vision.impact_empowerment_desc', 'Fortalecemos a las personas para que alcancen su potencial')
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[var(--color-beige)] to-[var(--color-neutralLight)] dark:from-[var(--color-grayDarkv1)] dark:to-[var(--color-grayDark)]">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent)]/10 rounded-full mb-6">
            <span className="font-montserrat text-button text-[var(--color-orange)] font-bold">
              {t('vision.testimony_badge', 'NUESTRO TESTIMONIO')}
            </span>
          </div>
          
          <h2 className="font-montserrat text-section text-[var(--color-grayDark)] dark:text-white mb-6 leading-tight">
            {t('vision.testimony_title', 'Transformando Vidas a Través del Testimonio')}
          </h2>
          
          <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] max-w-4xl mx-auto leading-relaxed">
            {t('vision.testimony_description', 'Sabemos que el testimonio que demos en nuestro accionar podrá ser de impacto en otros para transformar vidas y crear un mundo mejor.')}
          </p>
        </div>

        {/* Grid de impacto */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactItems.map((item, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Círculo con icono */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-full text-white mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              
              <h3 className="font-montserrat text-subtitle text-[var(--color-grayDark)] dark:text-white mb-4">
                {item.title}
              </h3>
              
              <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de llamada a la acción */}
        <div className="bg-white dark:bg-[var(--color-grayDark)] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--color-accent)]/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent rounded-tr-full"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-greenLight)] rounded-full text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 12v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            
            <h3 className="font-montserrat text-section text-[var(--color-grayDark)] dark:text-white mb-4">
              {t('vision.cta_title', 'Sé Parte del Cambio')}
            </h3>
            
            <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] mb-8 max-w-2xl mx-auto">
              {t('vision.cta_description', 'Tu vida puede ser testimonio de transformación. Únete a nosotros en esta misión de llevar amor y esperanza a cada rincón de nuestra comunidad.')}
            </p>

            {/* Frase inspiradora */}
            <div className="bg-gradient-to-r from-[var(--color-primary)]/5 via-[var(--color-accent)]/5 to-[var(--color-greenLight)]/5 rounded-2xl p-6 border-l-4 border-[var(--color-accent)]">
              <blockquote className="font-montserrat text-highlight text-[var(--color-grayDark)] dark:text-white italic">
                "{t('vision.quote', 'Cada acción de amor es una semilla de transformación que plantamos en el corazón del mundo.')}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
