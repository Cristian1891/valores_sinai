export interface InitialsAvatarProps {
  initials: string;
  size?: 'md' | 'lg';
  /** Clases extra de color de fondo/texto. Por defecto: brand-accent / dark */
  className?: string;
}

export interface Valor {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}