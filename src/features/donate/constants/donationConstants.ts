import type { CountryFee, PaymentType } from '../types/donations';

export const MIN_DONATION_AMOUNT = 100;

export const PRESET_AMOUNTS = [5000, 10000, 20000, 50000] as const;

export const MP_FEES: Record<string, CountryFee> = {
  AR: {
    creditCard: 0.07986,
    debitCard:  0.07986,
    wallet:     0.07986,
    label: 'Argentina',
    disclaimer: 'Incluye 6,60% de comisión + IVA. Puede variar levemente según tu provincia.',
  }
};

export const DEFAULT_FEE: CountryFee = {
  creditCard: 0.07986,
  debitCard:  0.07986,
  wallet:     0.07986,
  label:      'internacional',
  disclaimer: 'Estimación orientativa. El costo real puede variar según tu país.',
};


export const PAYMENT_TYPE_I18N_KEYS: Record<PaymentType, string> = {
  creditCard: 'form.paymentType.creditCard',
  debitCard:  'form.paymentType.debitCard',
  wallet:     'form.paymentType.wallet',
};

export function formatARS(n: number): string {
  return new Intl.NumberFormat('es-AR', {
    style:                 'currency',
    currency:              'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

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

export const IMPACT_ITEMS = [
  { id: 'student', emoji: '🎓', amountKey: 'impact.student.amount', descKey: 'impact.student.desc' },
  { id: 'family',  emoji: '🏠', amountKey: 'impact.family.amount',  descKey: 'impact.family.desc'  },
  { id: 'event',   emoji: '🎪', amountKey: 'impact.event.amount',   descKey: 'impact.event.desc'   },
] as const;


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


export const CONFETTI_COLORS = ['#FEC40D', '#D28A2B', '#FFFFFF', '#010101'] as const;
export const CONFETTI_COUNT  = 48;