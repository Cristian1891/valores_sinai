// src/features/donate/constants/donationConstants.ts
//
// ═══════════════════════════════════════════════════════════════
//  FUENTE DE VERDAD ÚNICA — Configuración de donaciones
//  Todos los componentes leen desde aquí. Cambiar aquí = cambia en
//  toda la feature sin riesgo de desincronización.
// ═══════════════════════════════════════════════════════════════
//
// NOTA SOBRE CARPETAS:
//   Este archivo vive en constants/ (no en config/) porque contiene
//   lógica de negocio y constantes que no son configuración de entorno.
//   La configuración de entorno (links de pago) vive en constants/paymentLinks.ts
// ═══════════════════════════════════════════════════════════════

import type { CountryFee, PaymentType } from '../types/donations';

// ── Monto mínimo de donación (ARS) ─────────────────────────────
export const MIN_DONATION_AMOUNT = 500;

// ── Montos sugeridos (ARS) ──────────────────────────────────────
export const PRESET_AMOUNTS = [5000, 10000, 20000, 50000] as const;

// ── Comisiones de MercadoPago por Link de pago ──────────────────
//
//  IMPORTANTE: Para "Link de pago" en Argentina:
//    → 6,60% de comisión base + 21% IVA = 7,986% efectivo real
//    → Igual para TODOS los medios en Link de pago estático
//  Verificado con simulador MP (jun 2026):
//    $10.000 → costo $799 → recibís $9.196
//
export const MP_FEES: Record<string, CountryFee> = {
  AR: {
    creditCard: 0.07986,
    debitCard:  0.07986,
    wallet:     0.07986,
    label: 'Argentina',
    disclaimer: 'Incluye 6,60% de comisión + IVA. Puede variar levemente según tu provincia.',
  }
  // BR: {
  //   creditCard: 0.0499,
  //   debitCard:  0.0,
  //   wallet:     0.0,
  //   label: 'Brasil',
  //   disclaimer: 'Pix no tiene comisión para quien paga.',
  // },
  // MX: {
  //   creditCard: 0.0399,
  //   debitCard:  0.0399,
  //   wallet:     0.0,
  //   label: 'México',
  //   disclaimer: 'Más IVA según corresponda.',
  // },
  // CO: {
  //   creditCard: 0.0499,
  //   debitCard:  0.0299,
  //   wallet:     0.0,
  //   label: 'Colombia',
  //   disclaimer: '',
  // },
  // CL: {
  //   creditCard: 0.0399,
  //   debitCard:  0.0399,
  //   wallet:     0.0,
  //   label: 'Chile',
  //   disclaimer: '',
  // },
  // UY: {
  //   creditCard: 0.0499,
  //   debitCard:  0.0299,
  //   wallet:     0.0,
  //   label: 'Uruguay',
  //   disclaimer: '',
  // },
  // PE: {
  //   creditCard: 0.0499,
  //   debitCard:  0.0299,
  //   wallet:     0.0,
  //   label: 'Perú',
  //   disclaimer: '',
  // },
};

// Fallback para países no detectados (usa tasa AR por ser el 99% de donantes)
export const DEFAULT_FEE: CountryFee = {
  creditCard: 0.07986,
  debitCard:  0.07986,
  wallet:     0.07986,
  label:      'internacional',
  disclaimer: 'Estimación orientativa. El costo real puede variar según tu país.',
};

// ── Claves i18n para tipos de pago ─────────────────────────────
// Los labels en español se resuelven en el JSON de traducciones.
export const PAYMENT_TYPE_I18N_KEYS: Record<PaymentType, string> = {
  creditCard: 'form.paymentType.creditCard',
  debitCard:  'form.paymentType.debitCard',
  wallet:     'form.paymentType.wallet',
};

// ── Formateo de moneda ──────────────────────────────────────────
export function formatARS(n: number): string {
  return new Intl.NumberFormat('es-AR', {
    style:                 'currency',
    currency:              'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

// ── Cursos de la Academia ───────────────────────────────────────
export const ACADEMY_COURSES = [
  { id: 'video',      nameKey: 'academy.courses.video' },
  { id: 'photo',      nameKey: 'academy.courses.photo' },
  { id: 'audio',      nameKey: 'academy.courses.audio' },
  { id: 'direction',  nameKey: 'academy.courses.direction' },
  { id: 'marketing',  nameKey: 'academy.courses.marketing' },
  { id: 'streaming',  nameKey: 'academy.courses.streaming' },
  { id: 'photo_cine', nameKey: 'academy.courses.photoCine' },
  { id: 'production', nameKey: 'academy.courses.production' },
] as const;

// ── Destinos del Fondo Solidario ────────────────────────────────
export const SOLIDARITY_DESTINATIONS = [
  {
    id:       'events',
    iconName: 'calendar' as const,
    titleKey: 'solidarity.dest.events.title',
    descKey:  'solidarity.dest.events.desc',
  },
  {
    id:       'maintenance',
    iconName: 'wrench' as const,
    titleKey: 'solidarity.dest.maintenance.title',
    descKey:  'solidarity.dest.maintenance.desc',
  },
  {
    id:       'infrastructure',
    iconName: 'home' as const,
    titleKey: 'solidarity.dest.infrastructure.title',
    descKey:  'solidarity.dest.infrastructure.desc',
  },
] as const;

// ── Categorías de donación con metadata de UI ───────────────────
export const DONATION_CATEGORIES = [
  {
    id:           'academy' as const,
    iconName:     'graduationCap' as const,
    titleKey:     'category.academy.title',
    descKey:      'category.academy.desc',
    impactKeys:   [
      'category.academy.impact1',
      'category.academy.impact2',
      'category.academy.impact3',
    ],
    colorClass:   'text-brand-amber',
    borderActive: 'border-brand-amber',
    bgActive:     'bg-brand-amber/10',
  },
  {
    id:           'solidarity' as const,
    iconName:     'handHeart' as const,
    titleKey:     'category.solidarity.title',
    descKey:      'category.solidarity.desc',
    impactKeys:   [
      'category.solidarity.impact1',
      'category.solidarity.impact2',
      'category.solidarity.impact3',
    ],
    colorClass:   'text-brand-amber',
    borderActive: 'border-brand-amber',
    bgActive:     'bg-brand-amber/10',
  },
] as const;

// ── Items del resumen de impacto ────────────────────────────────
export const IMPACT_ITEMS = [
  { id: 'student', emoji: '🎓', amountKey: 'impact.student.amount', descKey: 'impact.student.desc' },
  { id: 'family',  emoji: '🏠', amountKey: 'impact.family.amount',  descKey: 'impact.family.desc'  },
  { id: 'event',   emoji: '🎪', amountKey: 'impact.event.amount',   descKey: 'impact.event.desc'   },
] as const;

// ── Cuentas bancarias ───────────────────────────────────────────
export const BANK_ACCOUNTS = [
  {
    id:         'ar',
    iconName:   'landmark' as const,
    countryKey: 'bank.argentina',
    fields: [
      { labelKey: 'bank.alias',   value: 'valores.sinai' },
      { labelKey: 'bank.cbu',     value: '0270246110058404770028' },
      { labelKey: 'bank.cuit',    value: '30-71871290-0' },
      { labelKey: 'bank.bank',    value: 'Banco Supervielle' },
      { labelKey: 'bank.account', value: 'VALORES SINAI ASOCIACION CIVIL' },
    ],
  },
  {
    id:         'usd',
    iconName:   'banknote' as const,
    countryKey: 'bank.usd',
    fields: [
      { labelKey: 'bank.alias',   value: 'valores.sinai.usd' },
      { labelKey: 'bank.cbu',     value: '0270246140058404770012' },
      { labelKey: 'bank.cuit',    value: '30-71871290-0' },
      { labelKey: 'bank.bank',    value: 'Banco Supervielle' },
      { labelKey: 'bank.account', value: 'VALORES SINAI ASOCIACION CIVIL' },
    ],
  },
] as const;

// ── Próximos pasos de la página de éxito ───────────────────────
export const SUCCESS_NEXT_STEPS = [
  {
    id:       'email',
    emoji:    '✉️',
    titleKey: 'success.step1Title',
    descKey:  'success.step1Desc',
  },
  {
    id:       'registered',
    emoji:    '📋',
    titleKey: 'success.step2Title',
    descKey:  'success.step2Desc',
  },
  {
    id:       'impact',
    emoji:    '💬',
    titleKey: 'success.step3Title',
    descKey:  'success.step3Desc',
  },
] as const;

// ── Colores del confetti ────────────────────────────────────────
export const CONFETTI_COLORS = ['#FEC40D', '#D28A2B', '#FFFFFF', '#010101'] as const;
export const CONFETTI_COUNT  = 48;