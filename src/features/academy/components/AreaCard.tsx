import type { AreaCardProps } from '../types/academy';

export const AreaCard: React.FC<AreaCardProps> = ({ area, t }) => {
  const Icon = area.icon;

  return (
    <div
      className="group flex items-center gap-4 rounded-md border border-white/5 bg-white/2 px-4 py-3.5 transition-all duration-200 hover:border-brand-accent/40 hover:bg-brand-accent/8 hover:shadow-[inset_0_0_0_1px_rgba(254,196,13,0.06)]"
      role="listitem"
    >
      <span
        className="w-5 shrink-0 font-serif text-[11px] font-bold tracking-wider text-brand-accent/30 transition-colors duration-200 group-hover:text-brand-accent/70"
        aria-hidden="true"
      >
        {area.index}
      </span>

      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-gray-mid/50 transition-all duration-200 group-hover:text-brand-accent/80"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-snug text-surface-cream/75 transition-colors duration-200 group-hover:text-surface-cream">
          {t(area.nameKey)}
        </p>
        <p className="mt-0.5 text-[10px] font-normal text-surface-cream/25 transition-colors duration-200 group-hover:text-surface-cream/50">
          {t(area.tagKey)}
        </p>
      </div>
    </div>
  );
};