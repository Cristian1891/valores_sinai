export const MercadoPagoIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {/* Círculo de fondo azul Mercado Pago */}
    <circle cx="16" cy="16" r="16" fill="#009EE3" />

    {/* Mano izquierda (dedos) */}
    <path
      d="M13.5 19.5C13.5 19.5 12 20.5 11 21C10 21.5 9 22 8.5 21.5C8 21 8.5 19.5 9.5 18.5C10.5 17.5 12 17 12 17L13.5 19.5Z"
      fill="white"
    />
    {/* Mano derecha (dedos) */}
    <path
      d="M18.5 19.5C18.5 19.5 20 20.5 21 21C22 21.5 23 22 23.5 21.5C24 21 23.5 19.5 22.5 18.5C21.5 17.5 20 17 20 17L18.5 19.5Z"
      fill="white"
    />
    {/* Corazón / centro de las manos */}
    <path
      d="M16 14C16 14 13.5 11 11 12C8.5 13 9 16 10 17.5C11 19 13.5 20.5 16 22C18.5 20.5 21 19 22 17.5C23 16 23.5 13 21 12C18.5 11 16 14 16 14Z"
      fill="white"
    />
  </svg>
);