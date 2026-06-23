import { Banknote, Landmark } from "lucide-react";
import type { BankAccount } from "../types/donations";

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'ar',
    Icon: Landmark,
    countryKey: 'bank.argentina',
    fields: [
      { labelKey: 'bank.alias', value: 'valores.sinai' },
      { labelKey: 'bank.cbu', value: '0270246110058404770028' },
      { labelKey: 'bank.cuit', value: '30-71871290-0' },
      { labelKey: 'bank.bank', value: 'Banco Supervielle' },
      {
        labelKey: 'bank.account',
        value: 'VALORES SINAI ASOCIACION CIVIL',
      },
    ],
  },
  {
    id: 'usd',
    Icon: Banknote,
    countryKey: 'bank.usd',
    fields: [
      { labelKey: 'bank.alias', value: 'valores.sinai.usd' },
      { labelKey: 'bank.cbu', value: '0270246140058404770012' },
      { labelKey: 'bank.cuit', value: '30-71871290-0' },
      { labelKey: 'bank.bank', value: 'Banco Supervielle' },
      {
        labelKey: 'bank.account',
        value: 'VALORES SINAI ASOCIACION CIVIL',
      },
    ],
  }
];