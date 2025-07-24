import { useTranslation } from 'react-i18next';

export const Purpose: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 px-4 bg-white dark:bg-[var(--color-dark)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna de texto */}
          <div className="order-2 lg:order-1">
            <h2 className="font-montserrat font-bold text-section text-[var(--color-grayDark)] dark:text-white mb-6">
              Nuestra historia y propósito
            </h2>
            
            <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] mb-8 leading-relaxed">
              En Valores Sinaí, nuestra historia comienza con una simple idea: la de unir a las personas para construir un futuro mejor. Creamos un espacio donde se fomente la colaboración y la participación activa de la comunidad. Nos enfocamos en llevar a cabo proyectos que realmente impacten la vida de las personas y generen un cambio positivo.
            </p>
            
            <p className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-[var(--color-neutralLight)] mb-8 leading-relaxed">
              Cada día trabajamos con pasión para fortalecer los lazos dentro de nuestra comunidad. A través de diversas iniciativas, hemos promovido la educación, el arte y el bienestar espiritual. Nuestro propósito es inspirar y transformar vidas a través de cada actividad que emprendemos.
            </p>

            <div className="bg-[var(--color-primary)] dark:bg-[var(--color-grayDarkv1)] p-6 rounded-lg">
              <h3 className="font-montserrat font-bold text-subtitle text-white mb-4">
                ¿Por qué elegir unirte a nosotros?
              </h3>
              
              <p className="font-montserrat text-paragraph text-white leading-relaxed">
                Unirte a Valores Sinaí significa ser parte de una iniciativa que se preocupa por el bienestar de todos. Estamos comprometidos a generar un impacto real y duradero en la comunidad, integrando acciones que inviten a cada persona a contribuir con su tiempo y recursos. Juntos, podemos convertir nuestras ideas en realidad y mejorar la vida de quienes nos rodean.
              </p>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/img/purpose.jpeg" 
                alt="Interior de Valores Sinaí - Espacio comunitario"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              {/* Overlay sutil para mejorar contraste si es necesario */}
              <div className="absolute inset-0 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


