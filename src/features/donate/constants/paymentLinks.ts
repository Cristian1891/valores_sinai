export const PAYMENT_LINKS = {
  academy: {
    mp: import.meta.env.VITE_MP_ACADEMY ?? 'https://link.mercadopago.com.ar/valoressinai',
  },
  solidarity: {
    mp: import.meta.env.VITE_MP_SOLIDARITY ?? 'https://link.mercadopago.com.ar/valoressinai',
  },
} as const;