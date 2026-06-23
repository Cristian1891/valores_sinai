import { Link, useLocation } from 'react-router';

export const NotFound = () => {

  const location = useLocation();

  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-dark px-4 text-center">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
        Error 404
      </p>
      <h1 className="mt-4 font-serif text-5xl font-bold text-white sm:text-6xl">
        Página no encontrada
      </h1>
      <p className="mt-5 max-w-md font-sans text-base leading-7 text-white/60">
        La ruta{' '}
        <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-brand-accent">
          {location.pathname}
        </code>{' '}
        no existe. Puede que haya sido movida o el enlace esté roto.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-brand-amber"
        >
          Volver al inicio
        </Link>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          Contactarnos
        </Link>
      </div>
    </section>
  );
};