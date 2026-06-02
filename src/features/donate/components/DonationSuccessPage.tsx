// src/features/donations/DonationSuccessPage.tsx
//
// Se renderiza automáticamente cuando la URL contiene ?success=true
// Stripe agrega este parámetro al redirigir al usuario después del pago.
//
// Integración en DonationsPage.tsx:
//
//   import { useSearchParams } from 'react-router';
//   import { DonationSuccessPage } from './DonationSuccessPage';
//
//   export const DonationsPage = () => {
//     const [searchParams] = useSearchParams();
//     const isSuccess = searchParams.get('success') === 'true';
//
//     if (isSuccess) return <DonationSuccessPage />;
//     return ( ... tu página normal ... );
//   };

import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';

// ─── Componente de confetti liviano (CSS puro, sin dependencias) ───────────
// Genera partículas animadas con los colores de marca de Valores Sinaí
const CONFETTI_COLORS = ['#FEC40D', '#D28A2B', '#FFFFFF', '#010101'];
const CONFETTI_COUNT = 48;

function Confetti() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
        const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 3}s`;
        const duration = `${3 + Math.random() * 4}s`;
        const size = `${6 + Math.random() * 8}px`;
        const rotate = `${Math.random() * 360}deg`;

        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: '-20px',
              left,
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              opacity: 0,
              transform: `rotate(${rotate})`,
              animation: `confettiFall ${duration} ${delay} ease-in forwards`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0)   rotate(0deg)   scaleX(1); opacity: 1; }
          50%  { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scaleX(0.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
}

// ─── Ícono de check animado ────────────────────────────────────────────────
function AnimatedCheck() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      {/* Anillo pulsante */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-brand-accent/30"
        style={{ animationDuration: '1.5s', animationIterationCount: 3 }}
      />
      {/* Círculo de fondo */}
      <span className="absolute inset-0 rounded-full bg-brand-accent/20" />
      {/* Check */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 h-12 w-12 text-brand-accent"
        aria-hidden="true"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 0,
          animation: 'drawCheck 0.6s 0.3s ease-out both',
        }}
      >
        <style>{`
          @keyframes drawCheck {
            from { stroke-dashoffset: 100; opacity: 0; }
            to   { stroke-dashoffset: 0;   opacity: 1; }
          }
        `}</style>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

// ─── Próximos pasos ────────────────────────────────────────────────────────
const NEXT_STEPS = [
  {
    icon: '✉️',
    titleKey: 'success.step1Title',
    descKey: 'success.step1Desc',
    defaultTitle: 'Revisá tu email',
    defaultDesc:
      'Te enviamos un recibo de tu donación. Si no lo encontrás, revisá la carpeta de spam.',
  },
  {
    icon: '📋',
    titleKey: 'success.step2Title',
    descKey: 'success.step2Desc',
    defaultTitle: 'Tu donación queda registrada',
    defaultDesc:
      'El equipo de Valores Sinaí la procesa y la asigna al destino que elegiste.',
  },
  {
    icon: '💬',
    titleKey: 'success.step3Title',
    descKey: 'success.step3Desc',
    defaultTitle: '¿Querés saber el impacto?',
    defaultDesc:
      'Seguínos en redes sociales para ver cómo tu aporte transforma vidas reales.',
  },
];

// ─── Componente principal ──────────────────────────────────────────────────
export const DonationSuccessPage = () => {
  const { t } = useTranslation('donations');
  const [searchParams] = useSearchParams();

  // Detectar categoría desde URL (ej: ?success=true&category=academy)
  const category = searchParams.get('category') as 'academy' | 'solidarity' | null;

  // Scroll al top al montar
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const categoryLabel =
    category === 'academy'
      ? t('success.categoryAcademy', 'Academia Valores Sinaí')
      : category === 'solidarity'
        ? t('success.categorySolidarity', 'Fondo Solidario')
        : t('success.categoryGeneral', 'Valores Sinaí');

  return (
    <div ref={topRef} className="relative min-h-screen bg-dark overflow-hidden">
      {/* Confetti */}
      <Confetti />

      {/* Fondo decorativo radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(254,196,13,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl">

          {/* ── Sección principal ── */}
          <div
            className="rounded-3xl border border-white/10 bg-dark-soft p-8 text-center shadow-2xl sm:p-12"
            style={{ animation: 'fadeUp 0.5s ease-out both' }}
          >
            <style>{`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(24px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>

            {/* Check animado */}
            <div className="flex justify-center">
              <AnimatedCheck />
            </div>

            {/* Título */}
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('success.title', '¡Gracias por tu donación!')}
            </h1>

            {/* Subtítulo con categoría */}
            <p className="mt-3 text-base leading-7 text-white/70">
              {t('success.subtitle', {
                category: categoryLabel,
                defaultValue: `Tu aporte a {{category}} ya está en camino. Cada contribución hace posible que sigamos transformando vidas.`,
              })}
            </p>

            {/* Versículo */}
            <blockquote className="mx-auto mt-6 max-w-md rounded-2xl border border-brand-accent/20 bg-brand-accent/5 px-6 py-4">
              <p className="font-serif text-sm italic leading-7 text-brand-accent">
                {t(
                  'success.verse',
                  '"Dios ama al que da con alegría." — 2 Corintios 9:7',
                )}
              </p>
            </blockquote>

            {/* Compartir en redes */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {t('success.shareLabel', 'Compartí tu gesto')}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://valoressinai.com/donaciones')}&quote=${encodeURIComponent('Acabo de donar a Valores Sinaí. ¡Sumate vos también!')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartir en Facebook"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {/* Facebook icon */}
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.877z" />
                  </svg>
                  Facebook
                </a>

                <a
                  href={`https://www.instagram.com/valores_sinai/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver Valores Sinaí en Instagram"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {/* Instagram icon */}
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>

                <a
                  href={`https://x.com/intent/tweet?text=${encodeURIComponent('Acabo de donar a @ValoresSinai. ¡Sumate vos también! valoressinai.com/donaciones')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartir en X"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
              </div>
            </div>
          </div>

          {/* ── Próximos pasos ── */}
          <div
            className="mt-6 grid gap-4 sm:grid-cols-3"
            style={{ animation: 'fadeUp 0.5s 0.2s ease-out both' }}
          >
            {NEXT_STEPS.map((step, i) => (
              <div
                key={step.titleKey}
                className="rounded-2xl border border-white/10 bg-dark-soft p-5 text-center"
                style={{ animation: `fadeUp 0.4s ${0.3 + i * 0.1}s ease-out both` }}
              >
                <span className="text-2xl" aria-hidden="true">
                  {step.icon}
                </span>
                <p className="mt-3 text-sm font-semibold text-white">
                  {t(step.titleKey, step.defaultTitle)}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-white/60">
                  {t(step.descKey, step.defaultDesc)}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTAs finales ── */}
          <div
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            style={{ animation: 'fadeUp 0.4s 0.6s ease-out both' }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('success.goHome', 'Volver al inicio')}
            </Link>

            <Link
              to="/donaciones"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              {t('success.donateAgain', 'Hacer otra donación')}
            </Link>
          </div>

          {/* ── Contacto de soporte ── */}
          <p
            className="mt-8 text-center text-xs text-white/40"
            style={{ animation: 'fadeUp 0.4s 0.7s ease-out both' }}
          >
            {t('success.support', '¿Algún problema con tu donación?')}{' '}
            <a
              href="mailto:valoressinai@gmail.com"
              className="underline transition-colors hover:text-brand-accent focus-visible:outline-none"
            >
              valoressinai@gmail.com
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};