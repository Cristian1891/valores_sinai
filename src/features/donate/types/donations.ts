import type { LucideIcon } from "lucide-react";
import type { formatARS } from "../constants/donationConstants";

export type DonationCategory = 'academy' | 'solidarity' | null;

export type PaymentMethod = 'mercadopago' | 'paypal' | 'bank';

export type PaymentType = 'creditCard' | 'debitCard' | 'wallet';
export interface CountryFee {
  creditCard:  number;
  debitCard:   number;
  wallet:      number;
  label:       string;
  disclaimer:  string;
}

export interface BankAccountField {
  labelKey: string;
  value:    string;
}

export interface BankAccount {
  id:         string;
  Icon:   LucideIcon;
  countryKey: string;
  fields:     BankAccountField[];
}

export interface DonationFormProps {
  category:     Exclude<DonationCategory, null>;
  accentColor?: 'yellow' | 'amber';
  paymentLinks: { mp: string };
  onMessage?:   (msg: string) => void;
}

export interface UseDonationFormOptions {
  onMessage?: (msg: string) => void;
}

export interface UseDonationFormReturn {
  selectedAmount: number | null;
  customAmount:   string;
  customMode:     boolean;
  baseAmount:     number | null;
  coverFee:       boolean;
  paymentType:    PaymentType;
  countryFee:     CountryFee;
  loadingCountry: boolean;
  countryCode:    string | null;
  amountWithFee:  number | null;
  feeAmount:      number;
  message:        string;
  mpOpened:       boolean;
  copied:         boolean;
  handleSelectPreset:    (amount: number) => void;
  handleCustomAmountChange: (raw: string) => void;
  handleEnableCustomMode: () => void;
  handleCoverFeeChange:  (checked: boolean) => void;
  handlePaymentTypeChange: (type: PaymentType) => void;
  handleMessageChange:   (msg: string) => void;
  handleMpOpen:          () => void;
  handleCopyAmount:      () => Promise<void>;
  formatARS:             typeof formatARS;
}

export interface Props {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export interface Props {
  selected: DonationCategory;
  onSelect: (category: DonationCategory) => void;
}

export type IconProps = { className?: string }


