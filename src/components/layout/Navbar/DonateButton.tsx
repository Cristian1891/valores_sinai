// src/components/layout/Navbar/DonateButton.tsx
import { Link } from 'react-router';

type Variant = 'desktop' | 'mobile';

interface DonateButtonProps {
  variant: Variant;
  label: string;
  onClick?: () => void;
}

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