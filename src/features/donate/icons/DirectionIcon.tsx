export const DirectionIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 3h16l-2 6H6L4 3z" />
    <path d="M2 9h20v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z" />
    <line x1="8" y1="14" x2="16" y2="14" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);