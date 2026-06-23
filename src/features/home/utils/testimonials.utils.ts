const AVATAR_PALETTE = [
  'bg-brand-blue/30 text-brand-blue',
  'bg-brand-accent/25 text-brand-amber',
  'bg-success/25 text-success',
  'bg-brand-amber/25 text-brand-amber',
] as const;

export function avatarColor(name: string): string {
  const index =
    name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) %
    AVATAR_PALETTE.length;
  return AVATAR_PALETTE[index];
}

export function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}