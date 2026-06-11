import type { TFunction } from 'i18next';
import type { ComponentType } from 'react';

type IconProps = { className?: string; };

export interface AreaItem {
  key: string;
  index: string;
  nameKey: string;
  tagKey: string;
  icon: ComponentType<IconProps>;
}

export type AreaCardProps = {
  area: AreaItem;
  t: TFunction;
};

// ── FormRegister types (sin cambios) ──
export interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  area: string;
  consentimiento: boolean;
}

export type FormErrors = Partial<Record<keyof FormData, string>>;
export type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export interface SelectOption {
  value: string;
  labelKey: string;
}

export interface FieldProps {
  id: keyof FormData;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  onChange: (val: string) => void;
}