import { useTranslation } from 'react-i18next';
import { InitialsAvatar } from './InitialsAvatar';

export const PresidentMessage = () => {

  const { t } = useTranslation('about-us');

  return (
    <section
      className="bg-dark-soft px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="president-heading"
    >
      <div className="mx-auto max-w-3xl">

        {/* Kicker */}
        <p className="mb-3 text-center type-kicker text-brand-accent">
          {t('president.kicker')}
        </p>

        {/* H2 */}
        <h2
          id="president-heading"
          className="mb-10 text-center type-h2 text-white sm:text-4xl"
        >
          {t('president.title')}
        </h2>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl bg-dark ring-1 ring-white/10">

          {/* Header de la card */}
          <div className="flex items-center gap-5 border-b border-white/10 px-8 py-6">
            <InitialsAvatar initials="HA" size="lg" />
            <div>
              <p className="type-h3 text-white">
                {t('president.name')}
              </p>
              <p className="type-body-sm text-white/60">
                {t('president.role')}
              </p>
            </div>
          </div>

          {/* Cuerpo */}
          <div className="relative px-8 py-10">

            {/* Comillas decorativas */}
            <span
              className="pointer-events-none absolute right-8 top-6 font-serif text-8xl leading-none text-brand-accent/10 select-none"
              aria-hidden="true"
            >
              "
            </span>

            <p className="mb-2 type-kicker text-brand-amber">
              {t('president.messageLabel')}
            </p>

            <p className="mt-4 type-body text-white/80">
              {t('president.greeting')}
            </p>
            <p className="mt-4 type-body text-white/80">
              {t('president.message1')}
            </p>
            <p className="mt-4 type-body text-white/80">
              {t('president.message2')}
            </p>
            <p className="mt-4 type-body text-white/80">
              {t('president.message3')}
            </p>

            {/* Firma */}
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
              <div className="h-px w-8 bg-brand-accent" aria-hidden="true" />
              <p className="type-verse text-white/60">
                {t('president.signature')}
              </p>
            </div>
          </div>
        </div>

        {/* Versículo de cierre */}
        <p className="mt-10 text-center type-verse text-white/50">
          {t('president.closingVerse')}
        </p>

      </div>
    </section>
  );
};