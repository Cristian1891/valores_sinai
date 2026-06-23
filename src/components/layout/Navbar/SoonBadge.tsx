import type { Variant } from '../../../types/global';

export const SoonBadge = ({ variant }: { variant: Variant }) => (
  <span className={[
    'type-caption font-bold uppercase tracking-wider text-brand-amber bg-brand-accent/20',
    variant === 'desktop' ? 'rounded-full px-1.5 py-0.5' : 'rounded-md px-2 py-0.5',
  ].join(' ')}>
    Pronto
  </span>
);