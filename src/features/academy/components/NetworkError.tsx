// src/features/academy/components/NetworkError.tsx
//
// TIPOGRAFÍA — decisiones tomadas:
//
//   Título del error  → type-label    (14px, 600) — necesita peso para
//                        captar atención sin gritar; es un aviso, no un H1.
//   Cuerpo del error  → type-body-sm  (14px, 400) — explicación secundaria,
//                        mismo tamaño que el título pero weight normal crea
//                        jerarquía clara dentro del bloque de error.
//   Botón "Reintentar"→ type-cta      (14px, 700, tracking 0.01em) —
//                        es una acción primaria dentro del estado de error.

export const NetworkError: React.FC<{
  title: string;
  body: string;
  retryLabel: string;
  onRetry: () => void;
}> = ({ title, body, retryLabel, onRetry }) => (
  <div
    role="alert"
    aria-live="assertive"
    className="mb-6 flex flex-col items-start gap-3 rounded-2xl border border-red-800/30 bg-red-900/10 p-5"
  >
    {/* Título — type-label: peso 600, sans */}
    <p className="type-label text-white">⚠️ {title}</p>

    {/* Cuerpo — type-body-sm: 14px, 400, lectura cómoda */}
    <p className="type-body-sm text-white/70">{body}</p>

    {/* CTA secundario — type-cta: 700, tracking leve */}
    <button
      type="button"
      onClick={onRetry}
      className="type-cta rounded-xl border border-white/10 px-4 py-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {retryLabel}
    </button>
  </div>
);