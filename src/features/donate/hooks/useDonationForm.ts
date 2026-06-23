import { useState, useEffect } from 'react';
import { useCountryCode } from '../../../hooks/useCountryCode';
import {
  MP_FEES,
  DEFAULT_FEE,
  MIN_DONATION_AMOUNT,
  formatARS,
} from '../constants/donationConstants';
import type { CountryFee, PaymentType, UseDonationFormOptions, UseDonationFormReturn } from '../types/donations';


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

  useEffect(() => {
    if (!countryCode) return;
    setCountryFee(MP_FEES[countryCode] ?? DEFAULT_FEE);
  }, [countryCode]);

  useEffect(() => {
    onMessage?.(message);
  }, [message, onMessage]);

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