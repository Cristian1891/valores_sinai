import { Link } from 'react-router';
import type { DonateButtonProps } from '../../../types/global';

export const DonateButton = ({ variant, label, onClick }: DonateButtonProps) => (
  <Link
    to="/donar"
    onClick={onClick}
    className={[
      'type-label text-dark transition-colors duration-200 bg-brand-accent hover:bg-brand-amber',
      variant === 'desktop'
        ? 'ml-1.5 rounded-md px-4 py-2'
        : 'mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3',
    ].join(' ')}
  >
    {label}
  </Link>
);