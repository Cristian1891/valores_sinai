// src/features/donate/types/donations.ts
//
// Tipos centralizados de la feature Donate.
// ─────────────────────────────────────────────────────────────────────────────
// Regla: ningún componente define sus propios tipos de dominio inline.
// Si un tipo lo usan ≥2 archivos, vive aquí.
// ─────────────────────────────────────────────────────────────────────────────

// ── Categorías de donación ────────────────────────────────────────────────────
export type DonationCategory = 'academy' | 'solidarity' | null;

// ── Métodos de pago ───────────────────────────────────────────────────────────
export type PaymentMethod = 'mercadopago' | 'paypal' | 'bank';

// ── Tipos de pago (para cálculo de comisiones) ────────────────────────────────
export type PaymentType = 'creditCard' | 'debitCard' | 'wallet';

// ── Estructura de comisión por país ───────────────────────────────────────────
export interface CountryFee {
  creditCard:  number;
  debitCard:   number;
  wallet:      number;
  label:       string;
  disclaimer:  string;
}

// ── Cuenta bancaria ───────────────────────────────────────────────────────────
export interface BankAccountField {
  labelKey: string;
  value:    string;
}

export interface BankAccount {
  id:         string;
  iconName:   'landmark' | 'banknote'; // nombre para lookup en el componente
  countryKey: string;
  fields:     BankAccountField[];
}

// ── Props compartidas ─────────────────────────────────────────────────────────
export interface DonationFormProps {
  category:     Exclude<DonationCategory, null>;
  accentColor?: 'yellow' | 'amber';
  paymentLinks: { mp: string };
  /** Propaga el mensaje del donante al panel padre para el CTA post-pago */
  onMessage?:   (msg: string) => void;
}