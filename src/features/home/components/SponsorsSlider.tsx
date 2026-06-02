// src/components/SponsorsSlider.tsx
//
// SETUP: Añadir en src/index.css (dentro del bloque @theme o como regla global):
//
// @keyframes marquee {
//   from { transform: translateX(0); }
//   to   { transform: translateX(-50%); }
// }
// .animate-marquee {
//   animation: marquee 30s linear infinite;
// }
// .animate-marquee:hover,
// .sponsors-track:hover .animate-marquee {
//   animation-play-state: paused;
// }
// @media (prefers-reduced-motion: reduce) {
//   .animate-marquee { animation: none; }
// }
//
// ── O bien podés usar el <style> embebido que está al final de este archivo ──

import { useTranslation } from 'react-i18next';

const sponsors = [
  { name: 'Banco Provincia',              logo: '/img/logos/banco-provincia-seeklogo.png' },
  { name: 'YPF',                          logo: '/img/logos/ypf-seeklogo.png' },
  { name: 'Eczane Pharma S.A',            logo: '/img/logos/eczane-logo-2.png' },
  { name: 'Mazzieri S.A',                 logo: '/img/logos/Mazzieri_SA.jpg' },
  { name: 'Bolsarpil S.A',               logo: '/img/logos/Bolsarpil.jpeg' },
  { name: 'Sansoni S.A',                  logo: '/img/logos/Sansoni.jpeg' },
  { name: 'Cestari Ind. Metalúrgica',     logo: '/img/logos/Cestari.png' },
  { name: 'Plegamex S.A.',                logo: '/img/logos/Plegamex.png' },
  { name: 'MG Ind. Metalúrgica S.A',     logo: '/img/logos/img_industriasmetalurgicas_logo.jpeg' },
  { name: 'Mega Energía S.A',             logo: '/img/logos/Mega Energía S.A 1.jpeg' },
  { name: 'Ingeniería Mega S.A',          logo: '/img/logos/Ingenieria-MEGA.png' },
  { name: 'Bracco',                       logo: '/img/logos/Bracco_Logo.png' },
  { name: 'Agrícola Noroeste S.R.L',     logo: '/img/logos/agricola_noroeste_1.jpg' },
  { name: 'SH Metalúrgica',              logo: '/img/logos/SH Metalúrgica.jpeg' },
];

export const SponsorsSlider: React.FC = () => {
  const { t } = useTranslation('common');

  // Duplicamos el array para el loop infinito sin saltos
  const track = [...sponsors, ...sponsors];

  return (
    <>
      {/* ── Keyframes embebidos como fallback.
          Si los añadiste en index.css podés borrar este bloque <style>. ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .sponsors-animate {
          animation: marquee 36s linear infinite;
        }
        .sponsors-track:hover .sponsors-animate {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .sponsors-animate { animation: none; }
        }
      `}</style>

      <section
        aria-label={t('sponsors.ariaLabel', 'Empresas que nos apoyan')}
        className="border-t border-black/5 bg-white py-10 dark:border-white/5 dark:bg-dark"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.25em] text-dark-soft dark:text-gray-mid">
            {t('sponsors.title', 'Empresas que nos apoyan')}
          </p>
        </div>

        {/* Contenedor con fade en los bordes */}
        <div
          className="sponsors-track relative overflow-hidden"
          /* Máscara CSS que crea el fade suave en ambos extremos */
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          {/* Track — duplicado para loop sin saltos */}
          <div
            className="sponsors-animate flex w-max gap-4"
            role="list"
            aria-label="Lista de empresas"
          >
            {track.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                role="listitem"
                title={sponsor.name}
                className="
                  group flex h-20 w-44 shrink-0 items-center justify-center
                  rounded-xl border border-black/5 bg-white px-5
                  shadow-sm transition-shadow duration-300
                  hover:shadow-md
                  dark:border-white/5 dark:bg-dark-soft
                "
              >
                <img
                  src={sponsor.logo}
                  alt={`Logo de ${sponsor.name}`}
                  loading="lazy"
                  decoding="async"
                  className="
                    max-h-11 max-w-full object-contain
                    grayscale opacity-60
                    transition-all duration-500 ease-out
                    group-hover:grayscale-0 group-hover:opacity-100
                    group-hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};