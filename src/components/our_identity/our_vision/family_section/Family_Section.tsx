import { useTranslation } from 'react-i18next';

export const FamilySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-white dark:bg-[var(--color-dark)] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-greenLight)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 bg-[var(--color-accent)]/10 rounded-full mb-6">
              <span className="font-montserrat text-button text-[var(--color-orange)] font-bold">
                {t('vision.family_badge', 'NUESTRA FAMILIA')}
              </span>
            </div>

            <h2 className="font-montserrat text-section text-[var(--color-grayDark)] dark:text-white mb-6 leading-tight">
              {t('vision.family_title', 'Un Espacio Donde el Amor Prevalece')}
            </h2>

            <div className="space-y-6">
              <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] leading-relaxed">
                {t('vision.family_text1', 'Como Asociación Civil, queremos alcanzar a todas aquellas vidas que quieran formar parte de nuestra familia, enfatizando en los valores cristianos.')}
              </p>

              <p className="font-montserrat text-paragraph text-[var(--color-brown)] dark:text-[var(--color-grayLight)] leading-relaxed">
                {t('vision.family_text2', 'Construimos así un espacio en donde el amor por el prójimo prevalezca por encima de todo, sabiendo que nuestro testimonio podrá transformar vidas.')}
              </p>

              {/* Valores destacados */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
                  <span className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-white font-bold">
                    {t('vision.value_love', 'Amor')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-greenLight)] rounded-full"></div>
                  <span className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-white font-bold">
                    {t('vision.value_respect', 'Respeto')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full"></div>
                  <span className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-white font-bold">
                    {t('vision.value_service', 'Servicio')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[var(--color-orange)] rounded-full"></div>
                  <span className="font-montserrat text-paragraph text-[var(--color-grayDark)] dark:text-white font-bold">
                    {t('vision.value_transformation', 'Transformación')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Elemento visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Círculos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[var(--color-primary)]/20 rounded-full blur-xl"></div>
              
              {/* Contenedor principal */}
              <div className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-greenLight)] rounded-3xl p-8 text-center shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  {/* Icono central */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1z" />
                    </svg>
                  </div>
                  
                  <h3 className="font-montserrat text-subtitle text-white mb-4">
                    {t('vision.join_title', 'Únete a Nuestra Familia')}
                  </h3>
                  
                  <p className="font-montserrat text-paragraph text-white/90 mb-6">
                    {t('vision.join_text', 'Un lugar donde cada persona es valorada y puede crecer espiritualmente')}
                  </p>

                  {/* Estadísticas simbólicas */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-montserrat text-highlight text-[var(--color-accent)] mb-1">∞</div>
                      <div className="font-montserrat text-paragraph text-white/80">{t('vision.infinite_love', 'Amor')}</div>
                    </div>
                    <div>
                      <div className="font-montserrat text-highlight text-[var(--color-accent)] mb-1">1</div>
                      <div className="font-montserrat text-paragraph text-white/80">{t('vision.one_family', 'Familia')}</div>
                    </div>
                    <div>
                      <div className="font-montserrat text-highlight text-[var(--color-accent)] mb-1">✝</div>
                      <div className="font-montserrat text-paragraph text-white/80">{t('vision.one_faith', 'Fe')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};