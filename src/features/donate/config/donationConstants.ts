// src/features/donations/config/donationConstants.ts
//
// ═══════════════════════════════════════════════════════════════
//  FUENTE DE VERDAD ÚNICA — Configuración de donaciones
//  Todos los componentes leen desde aquí. Cambiar aquí = cambia en
//  toda la feature sin riesgo de desincronización.
// ═══════════════════════════════════════════════════════════════

// ── Monto mínimo de donación (ARS) ─────────────────────────────
// Por debajo de este monto el redondeo de la comisión distorsiona
// el cálculo. Con $100 el error máximo es < $1.
// MP también tiene sus propios mínimos operativos (~$50 ARS).
export const MIN_DONATION_AMOUNT = 500;

// ── Montos sugeridos (ARS) ──────────────────────────────────────
// Una sola lista usada por DonationForm en ambas categorías.
export const PRESET_AMOUNTS = [5000, 10000, 20000, 50000] as const;

// ── Comisiones de MercadoPago por Link de pago ──────────────────
//
//  IMPORTANTE: Para "Link de pago" (mpago.la / link.mercadopago.com.ar)
//  MercadoPago cobra en Argentina:
//    → 6,60% de comisión base, acreditación al instante
//    → + 21% de IVA sobre esa comisión (IVA sobre servicios financieros)
//    → Tasa efectiva real: 6,60% × 1,21 = 7,986% ≈ 7,99%
//
//  Verificado con el Simulador de costos del panel MP (jun 2026):
//    $10.000 cobrados → $799 de costo → efectivo recibido $9.196
//    ($9.196 + $799 = $9.995 ≈ $10.000, diferencia de $5 por retención provincial)
//
//  La tasa es igual para TODOS los medios en Link de pago (débito,
//  crédito y dinero en cuenta). Las diferencias entre medios aplican
//  a Checkout Pro con SDK, no al Link de pago estático.
//
//  La retención adicional de ~$5 varía por provincia e información
//  fiscal de la cuenta. No se modela aquí por ser impredecible y menor.
//
//  Si en el futuro activás cuotas sin interés, los costos adicionales
//  son absorbidos por vos. No modelar aquí; advertir en la UI.

export type PaymentType = 'creditCard' | 'debitCard' | 'wallet';

export interface CountryFee {
  creditCard: number;
  debitCard:  number;
  wallet:     number;
  label:      string;
  disclaimer: string;
}

export const MP_FEES: Record<string, CountryFee> = {
  // ✅ Tasa efectiva real: 6,60% base + 21% IVA sobre la comisión = 7,986%
  // Verificado con simulador MP: $10.000 → costo $799 → recibís $9.196
  AR: {
    creditCard: 0.07986,
    debitCard:  0.07986,
    wallet:     0.07986,
    label: 'Argentina',
    disclaimer: 'Incluye 6,60% de comisión + IVA. Puede variar levemente según tu provincia.',
  },
  // Brasil: Pix sin comisión para el pagador; tarjeta ~4,99%
  BR: {
    creditCard: 0.0499,
    debitCard:  0.0,
    wallet:     0.0,
    label: 'Brasil',
    disclaimer: 'Pix no tiene comisión para quien paga.',
  },
  MX: {
    creditCard: 0.0399,
    debitCard:  0.0399,
    wallet:     0.0,
    label: 'México',
    disclaimer: 'Más IVA según corresponda.',
  },
  CO: {
    creditCard: 0.0499,
    debitCard:  0.0299,
    wallet:     0.0,
    label: 'Colombia',
    disclaimer: '',
  },
  CL: {
    creditCard: 0.0399,
    debitCard:  0.0399,
    wallet:     0.0,
    label: 'Chile',
    disclaimer: '',
  },
  UY: {
    creditCard: 0.0499,
    debitCard:  0.0299,
    wallet:     0.0,
    label: 'Uruguay',
    disclaimer: '',
  },
  PE: {
    creditCard: 0.0499,
    debitCard:  0.0299,
    wallet:     0.0,
    label: 'Perú',
    disclaimer: '',
  },
};

// DEFAULT_FEE: se usa cuando no se puede detectar el país del visitante.
// Se usa la tasa AR (7,986%) como fallback ya que el 99% de los donantes
// son argentinos y es mejor sobreestimar levemente que subestimar.
export const DEFAULT_FEE: CountryFee = {
  creditCard: 0.07986,
  debitCard:  0.07986,
  wallet:     0.07986,
  label:      'internacional',
  disclaimer: 'Estimación orientativa. El costo real puede variar según tu país.',
};

export const PAYMENT_TYPE_LABELS: Record<PaymentType, string> = {
  creditCard: 'Tarjeta de crédito',
  debitCard:  'Tarjeta de débito',
  wallet:     'Dinero en cuenta',
};

// ── Formateador ARS ─────────────────────────────────────────────
export function formatARS(n: number): string {
  return new Intl.NumberFormat('es-AR', {
    style:                 'currency',
    currency:              'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}