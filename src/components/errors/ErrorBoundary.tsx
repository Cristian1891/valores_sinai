import { ErrorBoundary as ReactErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router';
import type { ReactNode } from 'react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center bg-dark px-4 text-center">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-amber">
        Algo salió mal
      </p>
      <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
        Error inesperado
      </h1>
      <p className="mt-4 max-w-md font-sans text-sm leading-7 text-white/60">
        Ocurrió un error al cargar esta sección. Podés intentar recargar la página o volver al inicio.
      </p>

      {import.meta.env.DEV && (
        <pre className="mt-4 max-w-lg overflow-auto rounded-xl bg-white/5 p-4 text-left font-mono text-xs text-brand-amber/80">
          {String(error)}
        </pre>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={resetErrorBoundary}
          className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-brand-amber"
        >
          Intentar de nuevo
        </button>
        <Link
          to="/"
          onClick={resetErrorBoundary}
          className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Ir al inicio
        </Link>
      </div>
    </section>
  );
}

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.error('[ErrorBoundary]', error, info.componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}