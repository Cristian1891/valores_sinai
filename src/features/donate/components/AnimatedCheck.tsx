export function AnimatedCheck() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      {/* Anillo pulsante */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-brand-accent/30"
        style={{ animationDuration: '1.5s', animationIterationCount: 3 }}
      />
      {/* Círculo de fondo */}
      <span className="absolute inset-0 rounded-full bg-brand-accent/20" />
      {/* Check */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 h-12 w-12 text-brand-accent"
        aria-hidden="true"
        style={{
          strokeDasharray:  100,
          strokeDashoffset: 0,
          animation:        'drawCheck 0.6s 0.3s ease-out both',
        }}
      >
        <style>{`
          @keyframes drawCheck {
            from { stroke-dashoffset: 100; opacity: 0; }
            to   { stroke-dashoffset: 0;   opacity: 1; }
          }
        `}</style>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}