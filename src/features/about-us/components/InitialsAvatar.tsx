import type { InitialsAvatarProps } from "../types/about";

export const InitialsAvatar: React.FC<InitialsAvatarProps> = ({
  initials,
  size = 'md',
  className = 'bg-brand-accent text-dark',
}) => {
  const sizeClass =
    size === 'lg'
      ? 'h-20 w-20 text-2xl sm:h-24 sm:w-24 sm:text-3xl'
      : 'h-14 w-14 text-base';
 
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-bold leading-none ring-4 ring-white/20 ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};
