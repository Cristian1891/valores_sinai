// src/components/layout/Navbar/NavLogo.tsx
import { Link } from 'react-router';

export const NavLogo = () => (
  <Link
    to="/"
    className="shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    aria-label="Ir al inicio — Valores Sinaí"
  >
    <img
      src="/img/logo_sinai.png"
      alt="Logo Valores Sinaí"
      className="h-18 w-auto object-contain lg:h-28"
    />
  </Link>
);