// src/features/donations/config/paymentLinks.ts
//
// ═══════════════════════════════════════════════════════════════
//  CONFIGURACIÓN DE LINKS DE PAGO — Valores Sinaí
// ═══════════════════════════════════════════════════════════════
//
//  Pasarelas activas:
//    ① MercadoPago  → Argentina (tarjetas locales) + Brasil (Pix) + LATAM
//    ② PayPal       → Internacional (USA, Europa, resto del mundo)
//    ③ Transferencia bancaria → instrucciones manuales en BankTransferInfo
//
//  Stripe fue removido: no opera directamente en Argentina sin LLC en EE.UU.
//
// ───────────────────────────────────────────────────────────────
//  MERCADO PAGO — Cómo generar los links (sin backend):
//
//  1. Ir a https://www.mercadopago.com.ar
//  2. Iniciar sesión con la cuenta empresarial de Valores Sinaí
//  3. Panel → "Herramientas para vender" → "Link de pago" → "Crear link"
//  4. Completar:
//       Nombre: "Donación Academia Valores Sinaí"
//       Precio: activar "el pagador define el monto" (ideal para donaciones)
//       Descripción: breve descripción del destino
//  5. En "Configuración avanzada":
//       URL de éxito: https://TU-DOMINIO.com/donaciones?success=true&category=academy
//       URL de error:  https://TU-DOMINIO.com/donaciones
//  6. Guardar → copiar la URL generada (ej: https://mpago.la/xxxxxx)
//  7. Repetir para "Fondo Solidario"
//
//  ⚠️  MercadoPago NO soporta suscripciones recurrentes vía Payment Link
//      sin backend. Para donaciones mensuales con MP, el donante
//      deberá repetir el proceso cada mes. El formulario muestra este aviso.
//
// ───────────────────────────────────────────────────────────────
//  PAYPAL — Cómo generar los links (sin backend):
//
//  1. Ir a https://www.paypal.com → iniciar sesión con la cuenta
//     comercial de Valores Sinaí
//  2. Panel → "Herramientas de pago" → "Botones de pago" →
//     seleccionar "Donación"
//  3. Configurar:
//       Nombre de la organización: "Valores Sinaí"
//       Descripción: "Donación Academia Valores Sinaí"
//       Moneda: USD (recomendado para internacionales) o ARS
//       Retorno exitoso: https://TU-DOMINIO.com/donaciones?success=true&category=academy
//  4. Guardar → copiar la URL del botón generado
//       Formato: https://www.paypal.com/donate/?hosted_button_id=XXXXXXXX
//  5. Para donaciones MENSUALES (suscripción):
//       Panel → "Pagos recurrentes" → "Crear plan" →
//       frecuencia mensual, monto libre si es posible → copiar link
//       Formato: https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=XXXXXXX
//  6. Repetir para "Fondo Solidario"
//
//  ✅ PayPal SÍ soporta suscripciones recurrentes vía Payment Button
//     sin necesitar backend.
//
//  💡 Tarifa reducida para ONGs:
//     PayPal ofrece tarifa preferencial (~1.99% + $0.49 USD) para
//     organizaciones sin fines de lucro registradas. Solicitarla en:
//     https://www.paypal.com/us/webapps/mpp/charitable-giving-fund
//
// ═══════════════════════════════════════════════════════════════

export const PAYMENT_LINKS = {
  academy: {
    // MercadoPago — link único para la Academia (AR + BR + LATAM)
    mp: import.meta.env.VITE_MP_ACADEMY ?? '#',

    // PayPal — donación única para la Academia (internacional)
    paypal_once: import.meta.env.VITE_PAYPAL_ACADEMY_ONCE ?? '#',

    // PayPal — suscripción mensual para la Academia (internacional)
    paypal_monthly: import.meta.env.VITE_PAYPAL_ACADEMY_MONTHLY ?? '#',
  },
  solidarity: {
    // MercadoPago — link único para el Fondo Solidario
    mp: import.meta.env.VITE_MP_SOLIDARITY ?? '#',

    // PayPal — donación única para el Fondo Solidario
    paypal_once: import.meta.env.VITE_PAYPAL_SOLIDARITY_ONCE ?? '#',

    // PayPal — suscripción mensual para el Fondo Solidario
    paypal_monthly: import.meta.env.VITE_PAYPAL_SOLIDARITY_MONTHLY ?? '#',
  },
} as const;

// ═══════════════════════════════════════════════════════════════
//  ARCHIVO .env — variables de entorno (NO subir a git)
//  Crear en la raíz del proyecto: .env
// ═══════════════════════════════════════════════════════════════
//
//  # MercadoPago
//  VITE_MP_ACADEMY=https://mpago.la/TU_LINK_ACADEMY
//  VITE_MP_SOLIDARITY=https://mpago.la/TU_LINK_SOLIDARITY
//
//  # PayPal — donación única
//  VITE_PAYPAL_ACADEMY_ONCE=https://www.paypal.com/donate/?hosted_button_id=XXXXXXXX
//  VITE_PAYPAL_SOLIDARITY_ONCE=https://www.paypal.com/donate/?hosted_button_id=XXXXXXXX
//
//  # PayPal — suscripción mensual
//  VITE_PAYPAL_ACADEMY_MONTHLY=https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=XXXXXXX
//  VITE_PAYPAL_SOLIDARITY_MONTHLY=https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=XXXXXXX
//
//  Asegurarse de tener en .gitignore:
//    .env
//    .env.local
//    .env.production
//
// ═══════════════════════════════════════════════════════════════