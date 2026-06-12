// src/features/donate/components/DonationForm.tsx
//
// Este componente es puramente declarativo: solo renderiza.
// Toda la lógica de estado vive en hooks/useDonationForm.ts
// Todas las constantes de datos viven en constants/donationConstants.ts

import { useTranslation } from 'react-i18next';

import { useDonationForm }          from '../hooks/useDonationForm';
import { PRESET_AMOUNTS, MIN_DONATION_AMOUNT, PAYMENT_TYPE_I18N_KEYS } from '../constants/donationConstants';
import type { DonationFormProps, PaymentType } from '../types/donations';

// ── Íconos inline ─────────────────────────────────────────────────────────────
const IconCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
    <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
  </svg>
);

const IconCheck = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const IconMercadoPago = () => (
  <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
    <circle cx="16" cy="16" r="16" fill="#009EE3" />
    <path d="M16 7C10.477 7 6 11.477 6 17c0 5.523 4.477 10 10 10 2.394 0 4.595-.843 6.325-2.244l-2.42-2.42A6.474 6.474 0 0 1 16 23.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5c2.19 0 4.127 1.086 5.301 2.75L24.5 10.5A9.956 9.956 0 0 0 16 7z" fill="white" />
    <path d="M24.5 17c0 .51-.046 1.01-.133 1.494l3.463 1.006A10 10 0 0 0 26 17c0-1.116-.182-2.19-.518-3.194l-3.3 1.914A6.515 6.515 0 0 1 22.5 17z" fill="white" />
  </svg>
);

// ── Componente principal ──────────────────────────────────────────────────────
export const DonationForm = ({ category, accentColor = 'yellow', paymentLinks, onMessage }: DonationFormProps) => {
  const { t } = useTranslation('donations');

  const {
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
  } = useDonationForm({ onMessage });

  // ── Estilos derivados del accentColor ─────────────────────────
  const isAmber       = accentColor === 'amber';
  const btnBase       = isAmber ? 'bg-brand-amber hover:bg-brand-accent text-dark' : 'bg-brand-accent hover:bg-brand-amber text-dark';
  const ringColor     = isAmber ? 'focus-visible:ring-brand-amber' : 'focus-visible:ring-brand-accent';
  const activePreset  = isAmber ? 'border-brand-amber bg-brand-amber text-dark shadow-sm' : 'border-brand-accent bg-brand-accent text-dark shadow-sm';
  const highlightText = isAmber ? 'text-brand-amber' : 'text-brand-accent';

  const paymentTypeOptions: { id: PaymentType; hint: string }[] = [
    { id: 'creditCard', hint: `~${(countryFee.creditCard * 100).toFixed(1)}%` },
    { id: 'debitCard',  hint: `~${(countryFee.debitCard  * 100).toFixed(1)}%` },
    { id: 'wallet',     hint: `~${(countryFee.wallet     * 100).toFixed(1)}%` },
  ];

  // Clave de impacto según el monto seleccionado
  const impactKey = baseAmount
    ? baseAmount >= 50000
      ? 'form.impact.event'
      : baseAmount >= 20000
        ? 'form.impact.family'
        : baseAmount >= 10000
          ? 'form.impact.materials'
          : 'form.impact.scholarship'
    : null;

  return (
    <div className="space-y-6">

      {/* ── Selector de monto ─────────────────────────────────── */}
      <div>
        <p className="mb-3 text-sm font-semibold text-dark dark:text-white">
          {t('form.amountLabel')}
        </p>

        <div className="flex flex-wrap gap-2">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleSelectPreset(amount)}
              aria-pressed={selectedAmount === amount && !customMode}
              className={`
                rounded-xl border px-4 py-2.5 text-sm font-semibold
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 ${ringColor}
                ${selectedAmount === amount && !customMode
                  ? activePreset
                  : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white'}
              `}
            >
              {formatARS(amount)}
            </button>
          ))}

          <button
            type="button"
            onClick={handleEnableCustomMode}
            aria-pressed={customMode}
            className={`
              rounded-xl border px-4 py-2.5 text-sm font-semibold
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 ${ringColor}
              ${customMode
                ? activePreset
                : 'border-black/10 bg-white text-dark hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white'}
            `}
          >
            {t('form.customAmount')}
          </button>
        </div>

        {customMode && (
          <div className="relative mt-3">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-dark-soft dark:text-gray-mid">
              $
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              placeholder={String(MIN_DONATION_AMOUNT)}
              aria-label={t('form.customAmountLabel')}
              className="
                w-full rounded-xl border border-black/10 bg-white py-3 pl-8 pr-4
                text-sm text-dark placeholder-dark-soft/40
                transition-colors duration-200
                focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
                dark:border-white/10 dark:bg-dark-soft dark:text-white
              "
            />
            {customAmount !== '' && parseInt(customAmount, 10) < MIN_DONATION_AMOUNT && (
              <p role="alert" className="mt-1.5 text-xs text-brand-amber">
                {t('form.minAmountError', { min: formatARS(MIN_DONATION_AMOUNT) })}
              </p>
            )}
          </div>
        )}

        {/* Referencia de impacto */}
        {baseAmount && impactKey && (
          <div className="mt-3 rounded-lg border border-black/5 bg-surface-cream px-3 py-2 dark:border-white/5 dark:bg-dark">
            <p className="text-xs text-dark-soft dark:text-gray-mid">
              💡 {t('form.impactPrefix')}{' '}
              <span className={`font-bold ${highlightText}`}>{formatARS(baseAmount)}</span>{' '}
              {t(impactKey)}
            </p>
          </div>
        )}
      </div>

      {/* ── Cubrir comisión ────────────────────────────────────── */}
      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-dark-soft">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={coverFee}
            onChange={(e) => handleCoverFeeChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-accent"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-dark dark:text-white">
              {t('form.coverFeeLabel')}
            </p>
            <p className="mt-0.5 text-xs leading-5 text-dark-soft dark:text-gray-mid">
              {t('form.coverFeeDesc')}
            </p>
          </div>
        </label>

        {coverFee && (
          <div className="mt-4 border-t border-black/5 pt-4 dark:border-white/5">
            <p className="mb-2 text-xs font-semibold text-dark-soft dark:text-gray-mid">
              {t('form.paymentTypeQuestion')}
            </p>

            {loadingCountry ? (
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-14 flex-1 animate-pulse rounded-xl bg-surface-cream dark:bg-dark" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row">
                {paymentTypeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handlePaymentTypeChange(opt.id)}
                    aria-pressed={paymentType === opt.id}
                    className={`
                      flex flex-1 flex-col items-center rounded-xl border px-3 py-2.5 text-center
                      transition-all duration-150
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                      ${paymentType === opt.id
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-black/10 bg-surface-cream hover:border-brand-accent/40 dark:border-white/10 dark:bg-dark'}
                    `}
                  >
                    <span className="text-xs font-semibold text-dark dark:text-white">
                      {t(PAYMENT_TYPE_I18N_KEYS[opt.id])}
                    </span>
                    <span className={`mt-0.5 text-xs font-bold ${paymentType === opt.id ? highlightText : 'text-dark-soft dark:text-gray-mid'}`}>
                      {opt.hint}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {!loadingCountry && countryCode === 'AR' && (
              <p className="mt-2 text-[10px] leading-4 text-dark-soft/70 dark:text-gray-mid/70">
                ℹ️ {t('form.arRateNote')}
              </p>
            )}

            {!loadingCountry && baseAmount && amountWithFee && (
              <div className="mt-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-4">
                <p className="text-xs font-semibold text-dark dark:text-white">
                  📋 {t('form.amountSummaryTitle')}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <p className={`text-2xl font-bold ${highlightText}`}>
                      {formatARS(amountWithFee)}
                    </p>
                    <p className="mt-0.5 text-xs text-dark-soft dark:text-gray-mid">
                      {t('form.amountBreakdown', {
                        donation: formatARS(baseAmount),
                        fee:      formatARS(feeAmount),
                      })}
                    </p>
                    {countryFee.disclaimer && (
                      <p className="mt-0.5 text-[10px] text-dark-soft/60 dark:text-gray-mid/60">
                        {countryFee.disclaimer}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAmount}
                    className="
                      flex shrink-0 items-center gap-1.5 rounded-xl border border-brand-accent
                      bg-white px-3 py-2 text-xs font-bold text-brand-accent
                      transition-colors hover:bg-brand-accent hover:text-dark
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
                      dark:bg-dark
                    "
                  >
                    {copied
                      ? <><IconCheck /> {t('form.copied')}</>
                      : <><IconCopy /> {t('form.copyAmount')}</>
                    }
                  </button>
                </div>
              </div>
            )}

            <a
              href="https://www.mercadopago.com.ar/costs-section"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[10px] text-brand-amber underline hover:text-brand-accent"
            >
              {t('form.mpFeesLink')}
            </a>
          </div>
        )}
      </div>

      {/* ── Mensaje / dedicatoria ──────────────────────────────── */}
      <div>
        <label
          htmlFor={`message-${category}`}
          className="mb-1.5 block text-sm font-semibold text-dark dark:text-white"
        >
          {t('form.messageLabel')}{' '}
          <span className="font-normal text-dark-soft dark:text-gray-mid">
            ({t('form.optional')})
          </span>
        </label>
        <textarea
          id={`message-${category}`}
          value={message}
          onChange={(e) => handleMessageChange(e.target.value)}
          rows={3}
          maxLength={300}
          placeholder={t('form.messagePlaceholder')}
          className="
            w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3
            text-sm text-dark placeholder-dark-soft/40
            transition-colors duration-200
            focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30
            dark:border-white/10 dark:bg-dark-soft dark:text-white dark:placeholder-gray-mid/40
          "
        />
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xs text-dark-soft dark:text-gray-mid">
            {message.length > 0 && t('form.messageHint')}
          </p>
          <p className="text-xs text-dark-soft dark:text-gray-mid">
            {message.length}/300
          </p>
        </div>
      </div>

      {/* ── CTA — MercadoPago ──────────────────────────────────── */}
      <div className="rounded-2xl bg-surface-cream p-5 dark:bg-dark">
        {coverFee && amountWithFee && baseAmount && (
          <div className="mb-4 rounded-xl border border-brand-accent/20 bg-white p-3 dark:border-white/10 dark:bg-dark-soft">
            <p className="text-xs font-semibold text-dark dark:text-white">
              📌 {t('form.amountReminderTitle')}
            </p>
            <p className={`mt-1 text-lg font-bold ${highlightText}`}>
              {formatARS(amountWithFee)}
            </p>
            <p className="text-xs text-dark-soft dark:text-gray-mid">
              {t('form.amountReminderDesc', {
                donation: formatARS(baseAmount),
              })}
            </p>
          </div>
        )}

        <div className="mb-4 rounded-xl border border-black/5 bg-white p-3 dark:border-white/5 dark:bg-dark-soft">
          <p className="text-xs font-semibold text-dark dark:text-white">
            {t('form.howItWorksTitle')}
          </p>
          <ol className="mt-1.5 space-y-1 text-xs leading-5 text-dark-soft dark:text-gray-mid">
            <li>{t('form.step1')}</li>
            <li>
              {t('form.step2Prefix')}{' '}
              {coverFee && amountWithFee
                ? <span className={`font-bold ${highlightText}`}>{formatARS(amountWithFee)}</span>
                : t('form.step2Amount')
              }.
            </li>
            <li>{t('form.step3')}</li>
            <li>{t('form.step4')}</li>
          </ol>
        </div>

        <a
          href={paymentLinks.mp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMpOpen}
          className={`
            inline-flex w-full items-center justify-center gap-2
            rounded-xl px-6 py-3.5 text-sm font-bold
            transition-all duration-200 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent
            ${btnBase}
          `}
        >
          <IconMercadoPago />
          {t('form.donateButton')}
        </a>

        {mpOpened && (
          <div className="mt-3 rounded-xl border border-brand-accent/30 bg-brand-accent/5 px-4 py-3">
            <p className="text-xs font-semibold text-dark dark:text-white">
              🔗 {t('form.mpOpenedTitle')}
            </p>
            <p className="mt-0.5 text-xs leading-5 text-dark-soft dark:text-gray-mid">
              {t('form.mpOpenedDesc')}
              {coverFee && amountWithFee && (
                <> {t('form.mpOpenedReminder')}{' '}
                  <span className={`font-bold ${highlightText}`}>{formatARS(amountWithFee)}</span>.
                </>
              )}
            </p>
          </div>
        )}

        <p className="mt-3 text-center text-xs text-dark-soft dark:text-gray-mid">
          🔒 {t('form.securityNote')}
        </p>
      </div>
    </div>
  );
};