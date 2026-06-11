// ── Estado de error de red ────────────────────────────────────────────────────

export const NetworkError: React.FC<{
  title: string
  body: string
  retryLabel: string
  onRetry: () => void
}> = ({ title, body, retryLabel, onRetry }) => (
  <div
    role="alert"
    aria-live="assertive"
    className="mb-6 flex flex-col items-start gap-3 rounded-2xl border border-red-800/30 bg-red-900/10 p-5"
  >
    <p className="type-label text-white">⚠️ {title}</p>
    <p className="type-body-sm text-white/70">{body}</p>
    <button
      type="button"
      onClick={onRetry}
      className="rounded-xl border border-white/10 px-4 py-2 type-label text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
    >
      {retryLabel}
    </button>
  </div>
)