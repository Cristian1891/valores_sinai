import { CONFETTI_COLORS, CONFETTI_COUNT } from '../constants/donationConstants';

export function Confetti() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
        const color    = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
        const left     = `${Math.random() * 100}%`;
        const delay    = `${Math.random() * 3}s`;
        const duration = `${3 + Math.random() * 4}s`;
        const size     = `${6 + Math.random() * 8}px`;
        const rotate   = `${Math.random() * 360}deg`;

        return (
          <span
            key={i}
            style={{
              position:        'absolute',
              top:             '-20px',
              left,
              width:           size,
              height:          size,
              backgroundColor: color,
              borderRadius:    Math.random() > 0.5 ? '50%' : '2px',
              opacity:         0,
              transform:       `rotate(${rotate})`,
              animation:       `confettiFall ${duration} ${delay} ease-in forwards`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0)   rotate(0deg)   scaleX(1); opacity: 1; }
          50%  { opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg) scaleX(0.5); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
}