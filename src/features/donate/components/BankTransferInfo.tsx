// src/features/donations/components/BankTransferInfo.tsx

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Landmark,
  Banknote,
  Mail,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface BankAccount {
  id: string;
  Icon: LucideIcon;
  countryKey: string;
  fields: { labelKey: string; value: string }[];
}

const BANK_ACCOUNTS: BankAccount[] = [
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
  },
];

function CopyButton({
  text,
  label,
}: {
  text: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('donations');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error al copiar:', error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied
          ? `${label} copiado`
          : `${t('bank.copy', 'Copiar')} ${label}`
      }
      className="rounded p-1 text-dark-soft transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:text-gray-mid"
    >
      {copied ? (
        <Check
          className="h-4 w-4 text-success"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      ) : (
        <Copy
          className="h-4 w-4"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </button>
  );
}

export const BankTransferInfo = () => {
  const { t } = useTranslation('donations');
  const [activeAccount, setActiveAccount] = useState('ar');

  const selectedAccount = BANK_ACCOUNTS.find(
    (account) => account.id === activeAccount,
  );

  return (
    <section
      id="bank-transfer-info"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('bank.kicker', 'Sin comisiones')}
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-dark dark:text-white sm:text-3xl">
            {t('bank.title', 'Transferencia bancaria')}
          </h2>

          <p className="mt-3 text-sm leading-7 text-dark-soft dark:text-gray-mid">
            {t(
              'bank.desc',
              'Si preferís transferir directamente, el 100% de tu donación llega a Valores Sinaí sin comisiones. Envianos el comprobante por email o WhatsApp para registrar tu aporte.',
            )}
          </p>
        </div>

        <div
          className="mb-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label={t('bank.title', 'Transferencia bancaria')}
        >
          {BANK_ACCOUNTS.map((account) => {
            const isActive = activeAccount === account.id;
            const Icon = account.Icon;

            return (
              <button
                key={account.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                onClick={() => setActiveAccount(account.id)}
                className={`
                  flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                  ${
                    isActive
                      ? 'bg-brand-accent text-dark shadow-sm'
                      : 'border border-black/10 bg-surface-cream text-dark-soft hover:border-brand-accent/50 dark:border-white/10 dark:bg-dark-soft dark:text-gray-mid'
                  }
                `}
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                {t(account.countryKey)}
              </button>
            );
          })}
        </div>

        {selectedAccount && (
          <div className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-surface-cream dark:divide-white/5 dark:border-white/5 dark:bg-dark-soft">
            {selectedAccount.fields.map((field) => (
              <div
                key={field.labelKey}
                className="flex items-center justify-between gap-4 px-5 py-3.5"
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                    {t(field.labelKey)}
                  </p>

                  <p className="mt-0.5 break-all font-mono text-sm font-medium text-dark dark:text-white">
                    {field.value}
                  </p>
                </div>

                <CopyButton
                  text={field.value}
                  label={t(field.labelKey)}
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-5">
          <p className="text-sm font-semibold text-dark dark:text-white">
            {t('bank.afterTransfer', 'Después de transferir')}
          </p>

          <p className="mt-1.5 text-xs leading-6 text-dark-soft dark:text-gray-mid">
            {t(
              'bank.afterTransferText',
              'Envianos el comprobante a valoressinai@gmail.com o por WhatsApp al +54 9 11 6012-2363 con tu nombre y el destino (Academia / Fondo Solidario). Tu donación quedará registrada y te enviaremos acuse de recibo.',
            )}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:valoressinai@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <Mail
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />

              {t('bank.sendEmail', 'Enviar por email')}
            </a>

            <a
              href="https://wa.me/5491160122363"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-xs font-bold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark dark:text-white"
            >
              <MessageCircle
                className="h-4 w-4"
                strokeWidth={2}
                aria-hidden="true"
              />

              {t('bank.sendWhatsapp', 'Enviar por WhatsApp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};