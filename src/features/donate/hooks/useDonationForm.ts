// src/features/donate/hooks/useDonationForm.ts
//
// Custom hook que encapsula toda la lógica de DonationForm.
// ─────────────────────────────────────────────────────────────────────────────
// QUÉ VIVE ACÁ:
//   - 9 useState del formulario (monto, comisión, tipo de pago, mensaje, etc.)
//   - Cálculo de monto con comisión
//   - Handlers para selección de monto, monto custom, cobertura de comisión
//   - Handler de copia al portapapeles
//   - Sincronización del countryFee con el país detectado
//
// QUÉ NO VIVE ACÁ:
//   - JSX / renderizado → DonationForm.tsx
//   - Constantes de datos → constants/donationConstants.ts
//   - Tipos → types/donations.ts
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { useCountryCode } from '../../../hooks/useCountryCode';
import {
  MP_FEES,
  DEFAULT_FEE,
  MIN_DONATION_AMOUNT,
  formatARS,
} from '../constants/donationConstants';
import type { CountryFee, PaymentType } from '../types/donations';

interface UseDonationFormOptions {
  onMessage?: (msg: string) => void;
}

export interface UseDonationFormReturn {
  // — Estado del monto
  selectedAmount: number | null;
  customAmount:   string;
  customMode:     boolean;
  baseAmount:     number | null;
  // — Estado de la comisión
  coverFee:       boolean;
  paymentType:    PaymentType;
  countryFee:     CountryFee;
  loadingCountry: boolean;
  countryCode:    string | null;
  amountWithFee:  number | null;
  feeAmount:      number;
  // — Estado del formulario
  message:        string;
  mpOpened:       boolean;
  copied:         boolean;
  // — Handlers
  handleSelectPreset:    (amount: number) => void;
  handleCustomAmountChange: (raw: string) => void;
  handleEnableCustomMode: () => void;
  handleCoverFeeChange:  (checked: boolean) => void;
  handlePaymentTypeChange: (type: PaymentType) => void;
  handleMessageChange:   (msg: string) => void;
  handleMpOpen:          () => void;
  handleCopyAmount:      () => Promise<void>;
  // — Utilidades
  formatARS:             typeof formatARS;
}

export function useDonationForm({ onMessage }: UseDonationFormOptions = {}): UseDonationFormReturn {
  const { countryCode, loading: loadingCountry } = useCountryCode();

  const [countryFee,     setCountryFee]     = useState<CountryFee>(DEFAULT_FEE);
  const [coverFee,       setCoverFee]       = useState(false);
  const [paymentType,    setPaymentType]    = useState<PaymentType>('creditCard');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount,   setCustomAmount]   = useState('');
  const [customMode,     setCustomMode]     = useState(false);
  const [message,        setMessage]        = useState('');
  const [mpOpened,       setMpOpened]       = useState(false);
  const [copied,         setCopied]         = useState(false);

  // Sincronizar comisión con país detectado
  useEffect(() => {
    if (!countryCode) return;
    setCountryFee(MP_FEES[countryCode] ?? DEFAULT_FEE);
  }, [countryCode]);

  // Propagar mensaje al padre cuando cambia
  useEffect(() => {
    onMessage?.(message);
  }, [message, onMessage]);

  // ── Cálculo del monto base ─────────────────────────────────────
  const baseAmount: number | null = (() => {
    if (customMode) {
      const parsed = parseInt(customAmount.replace(/\D/g, ''), 10);
      return isNaN(parsed) || parsed < MIN_DONATION_AMOUNT ? null : parsed;
    }
    return selectedAmount;
  })();

  const feeRate = countryFee[paymentType];
  const amountWithFee = baseAmount && coverFee
    ? Math.round(baseAmount / (1 - feeRate))
    : baseAmount;
  const feeAmount = amountWithFee && baseAmount ? amountWithFee - baseAmount : 0;

  // ── Handlers ───────────────────────────────────────────────────
  const handleSelectPreset = (amount: number) => {
    setSelectedAmount(amount);
    setCustomMode(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (raw: string) => {
    setCustomAmount(raw.replace(/[^0-9]/g, ''));
  };

  const handleEnableCustomMode = () => {
    setCustomMode(true);
    setSelectedAmount(null);
    setCustomAmount('');
  };

  const handleCoverFeeChange = (checked: boolean) => {
    setCoverFee(checked);
  };

  const handlePaymentTypeChange = (type: PaymentType) => {
    setPaymentType(type);
  };

  const handleMessageChange = (msg: string) => {
    setMessage(msg);
  };

  const handleMpOpen = () => {
    setMpOpened(true);
  };

  const handleCopyAmount = async () => {
    if (!amountWithFee) return;
    await navigator.clipboard.writeText(String(amountWithFee));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return {
    selectedAmount,
    customAmount,
    customMode,
    baseAmount,
    coverFee,
    paymentType,
    countryFee,
    loadingCountry,
    countryCode,
    amountWithFee,
    feeAmount,
    message,
    mpOpened,
    copied,
    handleSelectPreset,
    handleCustomAmountChange,
    handleEnableCustomMode,
    handleCoverFeeChange,
    handlePaymentTypeChange,
    handleMessageChange,
    handleMpOpen,
    handleCopyAmount,
    formatARS,
  };
}