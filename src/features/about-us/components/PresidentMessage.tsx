import { useTranslation } from 'react-i18next';

export const PresidentMessage = () => {

  const { t } = useTranslation('about-us');

  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="president-heading"
    >
      <div className="mx-auto max-w-3xl">

        <p className="mb-3 text-center type-kicker text-brand-accent">
          {t('president.kicker')}
        </p>

        <h2
          id="president-heading"
          className="mb-10 text-center type-h2 text-white sm:text-4xl lg:text-[2.75rem]" 
        >
          {t('president.title')}
        </h2>

        <div className="overflow-hidden rounded-3xl bg-dark ring-1 ring-white/10">

          <div className="flex items-center gap-5 border-b border-white/10 px-8 py-6">
            <img
              src="/img/logo_sinai.png"
              alt="Logo Valores Sinaí"
              className="h-24 w-24 shrink-0 object-contain scale-[2]"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="type-h3 text-brand-amber lg:text-2xl">
                {t('president.role')}
              </p>
            </div>
          </div>

          <div className="relative px-8 py-10">

            <span
              className="pointer-events-none absolute right-8 top-6 font-serif text-8xl leading-none text-brand-accent/10 select-none"
              aria-hidden="true"
            >
              "
            </span>

            <p className="mt-4 type-body text-white/80 lg:text-lg">
              {t('president.greeting')}
            </p>
            <p className="mt-4 type-body text-white/80 lg:text-lg">
              {t('president.message1')}
            </p>
            <p className="mt-4 type-body text-white/80 lg:text-lg">
              {t('president.message2')}
            </p>
            <p className="mt-4 type-body text-white/80 lg:text-lg">
              {t('president.message3')}
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="h-px w-8 bg-brand-amber" aria-hidden="true" />
              <p className="type-verse text-brand-amber lg:text-lg">
                {t('president.signature')}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center type-verse text-brand-accent lg:text-lg">
          {t('president.closingVerse')}
        </p>

      </div>
    </section>
  );
};