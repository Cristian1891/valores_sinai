import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      {/* Fondo */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/img/fotos_hero_home/valores_sinai_657385215_17943737628000129_1940408640949195477_n.jpg)' }}
      />
      <div className="absolute inset-0 -z-10 bg-black/65" />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent sm:text-base">
            {t('hero.kicker')} 
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/que-ofrecemos"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-semibold text-dark transition-colors hover:bg-brand-amber sm:text-base"
            >
              {t('hero.primaryCta')}
            </Link>

            <Link
              to="/quienes-somos" 
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
            >
              {t('hero.secondaryCta')}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-brand-accent">{t('hero.points.point1Title')}</p>
              <p className="mt-1 text-sm text-white/85">{t('hero.points.point1Text')}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-brand-accent">{t('hero.points.point2Title')}</p>
              <p className="mt-1 text-sm text-white/85">{t('hero.points.point2Text')}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-brand-accent">{t('hero.points.point3Title')}</p>
              <p className="mt-1 text-sm text-white/85">{t('hero.points.point3Text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};