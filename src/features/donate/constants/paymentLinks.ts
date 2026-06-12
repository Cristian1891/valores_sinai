// src/features/donate/constants/paymentLinks.ts
//
// ═══════════════════════════════════════════════════════════════
//  LINKS DE PAGO — Variables de entorno
//  Vive en constants/ (no en config/) para mantener una sola
//  carpeta de constantes/configuración en la feature.
// ═══════════════════════════════════════════════════════════════
//
//  Archivo .env (NO subir a git):
//    VITE_MP_ACADEMY=https://mpago.la/TU_LINK_ACADEMY
//    VITE_MP_SOLIDARITY=https://mpago.la/TU_LINK_SOLIDARITY
//
// ═══════════════════════════════════════════════════════════════

export const PAYMENT_LINKS = {
  academy: {
    mp: import.meta.env.VITE_MP_ACADEMY ?? 'https://link.mercadopago.com.ar/valoressinai',
  },
  solidarity: {
    mp: import.meta.env.VITE_MP_SOLIDARITY ?? 'https://link.mercadopago.com.ar/valoressinai',
  },
} as const;