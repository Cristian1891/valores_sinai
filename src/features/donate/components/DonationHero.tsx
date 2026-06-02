// src/features/donations/components/DonationHero.tsx
import { useTranslation } from 'react-i18next';

export const DonationHero = () => {
  const { t } = useTranslation('donations');

  return (
    <section className="relative overflow-hidden bg-dark-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #FEC40D 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D28A2B 0%, transparent 40%)',
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        {/* Versículo */}
        <p className="mb-6 font-serif text-sm font-semibold italic tracking-wide text-brand-accent sm:text-base">
          {t('hero.verse', '"Amarás a tu prójimo como a ti mismo" — Marcos 12:31')}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('hero.title', 'Tu donación')}
          <span className="block text-brand-accent">
            {t('hero.titleAccent', 'transforma vidas')}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
          {t(
            'hero.subtitle',
            'Cada aporte hace posible que más personas desarrollen sus proyectos de vida, reciban educación y sean parte de nuestra comunidad.',
          )}
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
          {[
            { value: '+500', label: t('hero.stat1', 'Familias acompañadas') },
            { value: '8', label: t('hero.stat2', 'Cursos en la Academia') },
            { value: '100%', label: t('hero.stat3', 'Sin fines de lucro') },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <p className="text-2xl font-bold text-brand-accent sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};