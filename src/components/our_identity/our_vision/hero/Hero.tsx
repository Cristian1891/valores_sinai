import { useTranslation } from 'react-i18next';

export const HeroVision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-greenLight)] dark:from-[var(--color-grayDark)] dark:to-[var(--color-dark)] py-20 px-4 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
          <span className="font-montserrat text-button text-white font-bold">
            {t('vision.badge', 'NUESTRA VISIÓN')}
          </span>
        </div>

        {/* Título principal */}
        <h1 className="font-montserrat text-title text-white mb-8 leading-tight">
          {t('vision.title', 'Llevando el Evangelio a Toda Criatura')}
        </h1>

        {/* Subtítulo */}
        <p className="font-montserrat text-subtitle text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
          {t('vision.subtitle', 'A través de acciones que promuevan la vida cotidiana, formando personas desde la educación, la cultura, la vida social, deportiva y espiritual')}
        </p>

        {/* Versículo destacado */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-3xl mx-auto">
          <blockquote className="font-montserrat text-highlight text-[var(--color-accent)] mb-4">
            "{t('vision.verse', 'AMAR AL PRÓJIMO, COMO A TI MISMO')}"
          </blockquote>
          <cite className="font-montserrat text-paragraph text-white/80">
            {t('vision.verse_reference', 'Marcos 12:31')}
          </cite>
        </div>
      </div>
    </section>
  );
};