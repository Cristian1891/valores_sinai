// src/features/academia/components/HeroAcademia.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface AreaItem {
  key: string;
  index: string;
  nameKey: string;
  nameDefault: string;
  tagKey: string;
  tagDefault: string;
  icon: React.ReactNode;
}

const AREAS: AreaItem[] = [
  {
    key: 'audiovisual',
    index: '01',
    nameKey: 'hero.area1.name',
    nameDefault: 'Producción Audiovisual',
    tagKey: 'hero.area1.tag',
    tagDefault: 'Video · Edición · Contenido',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
      </svg>
    ),
  },
  {
    key: 'marketing',
    index: '02',
    nameKey: 'hero.area2.name',
    nameDefault: 'Marketing Digital',
    tagKey: 'hero.area2.tag',
    tagDefault: 'Redes · Estrategia · Marca',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69zM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69z" />
      </svg>
    ),
  },
  {
    key: 'fotografia',
    index: '03',
    nameKey: 'hero.area3.name',
    nameDefault: 'Fotografía y Sonido',
    tagKey: 'hero.area3.tag',
    tagDefault: 'Cámara · Audio · Producción',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    key: 'gestion',
    index: '04',
    nameKey: 'hero.area4.name',
    nameDefault: 'Gestión Cultural',
    tagKey: 'hero.area4.tag',
    tagDefault: 'Comunidad · Eventos · Proyectos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    key: 'streaming',
    index: '05',
    nameKey: 'hero.area5.name',
    nameDefault: 'Streaming y Medios',
    tagKey: 'hero.area5.tag',
    tagDefault: 'Live · Broadcast · Plataformas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 0 1 0-5.303m5.304-.001a3.75 3.75 0 0 1 0 5.304m-7.425 2.122a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
      </svg>
    ),
  },
];

interface AreaCardProps {
  area: AreaItem;
  t: (key: string, fallback: string) => string;
}

const AreaCard: React.FC<AreaCardProps> = ({ area, t }) => (
  <div
    className="group flex items-center gap-4 rounded-md border border-white/[0.05] bg-white/[0.02] px-4 py-3.5 transition-colors duration-200 hover:border-brand-accent/20 hover:bg-brand-accent/[0.03]"
    role="listitem"
  >
    <span
      className="w-5 shrink-0 font-serif text-[11px] font-bold tracking-[0.05em] text-brand-accent/30"
      aria-hidden="true"
    >
      {area.index}
    </span>

    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-gray-mid/60"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      {area.icon}
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-[13px] font-semibold leading-snug text-surface-cream/75">
        {t(area.nameKey, area.nameDefault)}
      </p>
      <p className="mt-0.5 text-[10px] font-normal text-surface-cream/25">
        {t(area.tagKey, area.tagDefault)}
      </p>
    </div>
  </div>
);

export const HeroAcademia: React.FC = () => {
  const { t } = useTranslation('academia');

  return (
    <section
      className="relative flex min-h-svh flex-col bg-[#0a0a0a]"
      aria-labelledby="academia-hero-heading"
    >
      {/* ── Grid principal ── */}
      <div className="grid flex-1 grid-cols-1 lg:grid-cols-2">

        {/* ── Columna izquierda: texto ── */}
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 sm:py-20 lg:border-r lg:border-white/[0.05] lg:px-14 lg:py-24">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-2.5" aria-hidden="true">
            <div className="h-px w-5 shrink-0 bg-brand-accent" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-mid/70">
              {t('hero.eyebrow', 'Academia Valores Sinaí')}
            </span>
          </div>

          {/* Badge de estado */}
          <div
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-[3px] border border-brand-accent/20 px-2.5 py-1"
            role="status"
            aria-label={t('hero.badgeAriaLabel', 'Estado: en construcción')}
          >
            <span
              className="block h-[5px] w-[5px] shrink-0 animate-pulse rounded-full bg-brand-accent"
              style={{ boxShadow: '0 0 4px var(--color-brand-accent)' }}
              aria-hidden="true"
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent/70">
              {t('hero.badge', 'En construcción')}
            </span>
          </div>

          {/* Título — reescrito con identidad real */}
          <h1
            id="academia-hero-heading"
            className="font-sans text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-surface-cream sm:text-5xl lg:text-[2.75rem] xl:text-5xl"
          >
            {t('hero.titleLine1', 'Formación real')}<br />
            {t('hero.titleLine2', 'para el mundo')}{' '}
            <em className="not-italic text-brand-accent">
              {t('hero.titleLine3', 'digital.')}
            </em>
          </h1>

          {/* Separador */}
          <div
            className="my-5 h-0.5 w-8 rounded-sm bg-brand-accent"
            aria-hidden="true"
          />

          {/* Subtítulo */}
          <p className="max-w-[42ch] font-serif text-[14.5px] font-normal leading-[1.8] text-surface-cream/40">
            {t(
              'hero.subtitle',
              'Estamos construyendo una formación en oficios y habilidades digitales pensada para el mundo real. Dejanos tus datos abajo y te avisamos antes que nadie.',
            )}
          </p>

        </div>

        {/* ── Columna derecha: áreas de formación ── */}
        <div
          className="flex flex-col justify-center gap-2.5 px-8 pb-16 pt-0 sm:px-12 lg:px-14 lg:py-24"
          role="list"
          aria-label={t('hero.areasLabel', 'Áreas de formación próximas')}
        >
          <p
            className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-surface-cream/25"
            aria-hidden="true"
          >
            {t('hero.areasHeader', 'Lo que viene')}
          </p>

          {AREAS.map((area) => (
            <AreaCard key={area.key} area={area} t={t} />
          ))}
        </div>

      </div>

      {/* ── Footer strip ── */}
      <footer
        className="border-t border-white/[0.05] bg-[#060606]"
        aria-label={t('hero.footerAriaLabel', 'Pie del hero')}
      >
        <div className="mx-auto flex max-w-none items-center justify-between px-8 py-3 sm:px-12 lg:px-14">
          <span className="text-[10px] tracking-[0.04em] text-surface-cream/20">
            {t('hero.footerCopy', 'Valores Sinaí — Lanzamiento próximo')}
          </span>

          <div
            className="flex items-center gap-2 motion-safe:animate-bounce"
            aria-hidden="true"
          >
            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/15">
              scroll
            </span>
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="rgba(254,196,13,0.35)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </footer>

    </section>
  );
};