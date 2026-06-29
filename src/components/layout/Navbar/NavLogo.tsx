import { Link } from 'react-router';

export const NavLogo = () => (
  <Link
    to="/"
    className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    aria-label="Ir al inicio — Valores Sinaí"
  >
    <img
      src="/favicon-96x96.png"
      alt="Logo Valores Sinaí"
      className="h-12 w-auto object-contain lg:h-16"
    />
  </Link>
);