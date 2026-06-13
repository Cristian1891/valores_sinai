// src/features/academy/components/AreaCard.tsx
//
// TIPOGRAFÍA — decisiones tomadas:
//
//   Número índice  → type-caption  (12px, 500) con font-serif override —
//                    el serif en el número le da carácter editorial.
//                    El componente original usaba font-serif inline,
//                    se mantiene sobreescribiendo solo la familia.
//   Nombre área    → type-label    (14px sans, 600, line-height 1.4) —
//                    es texto interactivo (el usuario lo escanea para elegir),
//                    necesita el peso y tamaño de un label navegable.
//   Tag / subtag   → type-caption  (12px, 500) — meta-info de la card,
//                    menor jerarquía visual que el nombre.

import type { AreaCardProps } from '../types/academy';

export const AreaCard: React.FC<AreaCardProps> = ({ area, t }) => {
  const Icon = area.icon;

  return (
    <div
      className="group flex items-center gap-4 rounded-md border border-white/5 bg-white/2 px-4 py-3.5 transition-all duration-200 hover:border-brand-accent/40 hover:bg-brand-accent/8 hover:shadow-[inset_0_0_0_1px_rgba(254,196,13,0.06)]"
      role="listitem"
    >
      {/* Número índice — type-caption base + font-serif para sabor editorial */}
      <span
        className="type-caption w-5 shrink-0 font-serif font-bold tracking-wider text-brand-accent/70 transition-colors duration-200 group-hover:text-brand-accent/70"
        aria-hidden="true"
      >
        {area.index}
      </span>

      {/* Ícono */}
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-gray-mid/50 transition-all duration-200 group-hover:text-brand-accent/80"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        {/* Nombre del área — type-label: texto interactivo, peso 600 */}
        <p className="type-label text-white transition-colors duration-200 group-hover:text-surface-cream">
          {t(area.nameKey)}
        </p>

        {/* Tag / descripción corta — type-caption: meta-info secundaria */}
        <p className="type-caption mt-0.5 text-surface-cream transition-colors duration-200 group-hover:text-surface-cream/50">
          {t(area.tagKey)}
        </p>
      </div>
    </div>
  );
};