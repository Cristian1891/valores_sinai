// ── Estado de éxito ───────────────────────────────────────────────────────────

export const SuccessState: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="flex flex-col items-center gap-5 py-10 text-center">
    <div
      className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20 ring-1 ring-success/50"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 text-success"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    </div>

    <div>
      <h2 className="type-h2 text-white">{title}</h2>
      <p className="type-body-sm mt-2 max-w-sm text-white/80">{body}</p>
    </div>
  </div>
)