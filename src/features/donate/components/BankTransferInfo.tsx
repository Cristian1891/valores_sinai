// src/features/donations/components/BankTransferInfo.tsx
//
// Instrucciones de transferencia bancaria.
// Siempre visible al pie de la página de donaciones.
// También se usa como target del scroll cuando el usuario elige "Transferencia bancaria".

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BankAccount {
  id: string;
  countryEmoji: string;
  countryKey: string;
  fields: { labelKey: string; value: string }[];
}

// Completar con los datos reales de las cuentas bancarias de la asociación
const BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'ar',
    countryEmoji: '🇦🇷',
    countryKey: 'bank.argentina',
    fields: [
      { labelKey: 'bank.alias', value: 'valores.sinai' },
      { labelKey: 'bank.cbu', value: '0270246110058404770028' },
      { labelKey: 'bank.cuit', value: '30-71871290-0' },
      { labelKey: 'bank.bank', value: 'Banco Supervielle' },
      { labelKey: 'bank.account', value: 'VALORES SINAI ASOCIACION CIVIL' },
    ],
  },
  // {
  //   id: 'intl',
  //   countryEmoji: '🌎',
  //   countryKey: 'bank.international',
  //   fields: [
  //     { labelKey: 'bank.beneficiary', value: 'Asociación Civil Valores Sinaí' },
  //     { labelKey: 'bank.swift', value: 'XXXXXXXX' },
  //     { labelKey: 'bank.iban', value: 'XX0000000000000000000000' },
  //     { labelKey: 'bank.bank', value: 'Nombre del Banco' },
  //   ],
  // },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('donations');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? t('bank.copied', 'Copiado') : t('bank.copy', 'Copiar')}
      className="rounded p-1 text-dark-soft transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent dark:text-gray-mid"
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-green-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
          <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
        </svg>
      )}
    </button>
  );
}

export const BankTransferInfo = () => {
  const { t } = useTranslation('donations');
  const [activeAccount, setActiveAccount] = useState<string>('ar');
 
  return (
    <section
      id="bank-transfer-info"
      className="border-t border-black/5 bg-white px-4 py-14 dark:border-white/5 dark:bg-dark sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        {/* Encabezado */}
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
              'Si preferís transferir directamente, el 100% de tu donación llega a Valores Sinaí sin comisiones de plataforma. Envianos el comprobante por email o WhatsApp para registrar tu aporte.',
            )}
          </p>
        </div>

        {/* Selector de cuenta */}
        <div className="mb-6 flex gap-2">
          {BANK_ACCOUNTS.map((account) => (
            <button
              key={account.id}
              type="button"
              onClick={() => setActiveAccount(account.id)}
              aria-pressed={activeAccount === account.id}
              className={`
                flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                ${
                  activeAccount === account.id
                    ? 'bg-brand-accent text-dark shadow-sm'
                    : 'border border-black/10 bg-surface-cream text-dark-soft hover:border-brand-accent/50 dark:border-white/10 dark:bg-dark-soft dark:text-gray-mid'
                }
              `}
            >
              <span aria-hidden="true">{account.countryEmoji}</span>
              {t(account.countryKey)}
            </button>
          ))}
        </div>

        {/* Datos de la cuenta activa */}
        {BANK_ACCOUNTS.filter((a) => a.id === activeAccount).map((account) => (
          <div
            key={account.id}
            className="divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-surface-cream dark:divide-white/5 dark:border-white/5 dark:bg-dark-soft"
          >
            {account.fields.map((field) => (
              <div
                key={field.labelKey}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber">
                    {t(field.labelKey)}
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-medium text-dark dark:text-white">
                    {field.value}
                  </p>
                </div>
                <CopyButton text={field.value} />
              </div>
            ))}
          </div>
        ))}

        {/* Instrucción post-transferencia */}
        <div className="mt-6 rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-5">
          <p className="text-sm font-semibold text-dark dark:text-white">
            {t('bank.afterTransfer', 'Después de transferir')}
          </p>
          <p className="mt-1.5 text-xs leading-6 text-dark-soft dark:text-gray-mid">
            {t(
              'bank.afterTransferText',
              'Envianos el comprobante a valoressinai@gmail.com o por WhatsApp al +54 9 11 6012-2363 con tu nombre y el destino (Academia / Fondo Solidario). Tu donación quedará registrada y te enviaremos un acuse de recibo.',
            )}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:valoressinai@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-accent px-4 py-2 text-xs font-bold text-dark transition-colors hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              ✉️ {t('bank.sendEmail', 'Enviar por email')}
            </a>
            <a
              href="https://wa.me/5491160122363"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-4 py-2 text-xs font-bold text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark dark:text-white"
            >
              💬 {t('bank.sendWhatsapp', 'Enviar por WhatsApp')}
            </a>
          </div> 
        </div>
      </div>
    </section>
  );
};