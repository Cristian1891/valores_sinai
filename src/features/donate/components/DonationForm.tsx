// src/features/donate/components/DonationForm.tsx
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

const IconBulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="h-4 w-4 shrink-0" aria-hidden="true">
    <path d="M9 21h6M12 3a7 7 0 0 1 4 12.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1.26A7 7 0 0 1 12 3z" />
    <path d="M9.5 18h5" />
  </svg>
);

const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="h-4 w-4 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const IconLock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconExternalLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-4 w-4 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
    className="inline h-3.5 w-3.5 shrink-0 align-middle" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
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

  const highlightText  = 'text-brand-amber';
  const ringColor      = 'focus-visible:ring-brand-amber';
  const activePreset   = 'border-brand-amber bg-brand-amber text-dark dark:text-surface-cream shadow-sm';
  const btnBase        = 'bg-brand-accent hover:bg-brand-amber text-dark';

  const paymentBtnActive   = 'border-brand-amber bg-brand-amber/10';
  const paymentBtnInactive = 'border-black/10 bg-surface-cream hover:border-brand-amber/40 dark:border-white/10 dark:bg-dark';

  const summaryBorder = 'border-brand-amber/30 bg-brand-amber/5';

  const ctaBg = accentColor === 'amber'
    ? 'bg-surface-warm dark:bg-dark'
    : 'bg-surface-warm dark:bg-dark';

  const paymentTypeOptions: { id: PaymentType; hint: string }[] = [
    { id: 'creditCard', hint: `${(countryFee.creditCard * 100).toFixed(1)}%` },
    { id: 'debitCard',  hint: `${(countryFee.debitCard  * 100).toFixed(1)}%` },
    { id: 'wallet',     hint: `${(countryFee.wallet     * 100).toFixed(1)}%` },
  ];

  const impactKey = baseAmount
    ? baseAmount >= 50000
      ? 'form.impact.event'
      : baseAmount >= 20000
        ? 'form.impact.family'
        : baseAmount >= 10000
          ? 'form.impact.materials'
          : 'form.impact.scholarship'
    : null;

  // Claves i18n para los links de categoría en el cuadro de mensaje
  const categoryKicker = category === 'academy'
    ? t('academy.kicker')
    : t('solidarity.kicker');

  const emailSubjectKey = category === 'academy'
    ? 'panel.emailSubjectAcademy'
    : 'panel.emailSubjectSolidarity';

  return (
    <div className="space-y-6">

      {/* ── Selector de monto ─────────────────────────────────── */}
      <div>
        <p className="mb-3 type-label text-dark dark:text-white">
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
                rounded-xl border px-4 py-2.5 type-caption
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 ${ringColor}
                ${selectedAmount === amount && !customMode
                  ? activePreset
                  : 'border-black/10 bg-white text-dark hover:border-brand-amber dark:border-white/10 dark:bg-dark dark:text-white'}
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
              rounded-xl border px-4 py-2.5 type-caption
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 ${ringColor}
              ${customMode
                ? activePreset
                : 'border-black/10 bg-white text-dark hover:border-brand-amber dark:border-white/10 dark:bg-dark dark:text-white'}
            `}
          >
            {t('form.customAmount')}
          </button>
        </div>

        {customMode && (
          <div className="mt-3">
            {/*
              Input group con flex: el $ y el <input> comparten el mismo
              contexto de línea → alineación vertical garantizada en cualquier
              fuente, tamaño o viewport sin depender de top/translate.
              Patrón estándar en shadcn/ui, Radix Themes y Headless UI (2024-2026).
            */}
            <div
              className={`
                flex items-center gap-1.5
                rounded-xl border border-black/10 bg-white
                px-4 py-3
                transition-colors duration-200
                focus-within:border-brand-amber focus-within:ring-2 focus-within:ring-brand-amber/30
                dark:border-white/10 dark:bg-dark
              `}
            >
              <span
                className="shrink-0 select-none type-caption text-dark-soft dark:text-gray-mid"
                aria-hidden="true"
              >
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
                  min-w-0 flex-1 bg-transparent
                  text-dark placeholder-dark-soft/40 type-caption
                  focus:outline-none
                  dark:text-white dark:placeholder-gray-mid/40
                "
              />
            </div>
            {customAmount !== '' && parseInt(customAmount, 10) < MIN_DONATION_AMOUNT && (
              <p role="alert" className="mt-1.5 type-caption text-brand-amber">
                {t('form.minAmountError', { min: formatARS(MIN_DONATION_AMOUNT) })}
              </p>
            )}
          </div>
        )}

        {/* FIX #1 — Impact hint: flex items-start para que el ícono quede
            alineado al inicio y el texto fluya en su propio bloque */}
        {baseAmount && impactKey && (
          <div className="mt-3 rounded-lg border border-black/5 bg-surface-cream px-3 py-2.5 dark:border-white/5 dark:bg-dark">
            <p className="flex items-start gap-1.5 type-caption text-dark-soft dark:text-gray-mid">
              <span className="mt-px flex-none">
                <IconBulb />
              </span>
              <span>
                {t('form.impactPrefix')}{' '}
                <span className={`font-bold type-caption ${highlightText}`}>{formatARS(baseAmount)}</span>{' '}
                {t(impactKey)}
              </span>
            </p>
          </div>
        )}
      </div>

      {/* ── Cubrir comisión ────────────────────────────────────── */}
      <div className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-dark">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={coverFee}
            onChange={(e) => handleCoverFeeChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-brand-amber"
          />
          <div className="flex-1">
            <p className="type-label text-dark dark:text-white">
              {t('form.coverFeeLabel')}
            </p>
            <p className="mt-0.5 type-caption text-dark-soft dark:text-gray-mid">
              {t('form.coverFeeDesc')}
            </p>
          </div>
        </label>

        {coverFee && (
          <div className="mt-4 border-t border-black/5 pt-4 dark:border-white/5">
            <p className="mb-2 type-label text-dark-soft dark:text-gray-mid">
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
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber
                      ${paymentType === opt.id ? paymentBtnActive : paymentBtnInactive}
                    `}
                  >
                    <span className="type-caption text-dark dark:text-white">
                      {t(PAYMENT_TYPE_I18N_KEYS[opt.id])}
                    </span>
                    <span className={`mt-0.5 type-caption font-bold ${paymentType === opt.id ? highlightText : 'text-dark-soft dark:text-gray-mid'}`}>
                      {opt.hint}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {!loadingCountry && countryCode === 'AR' && (
              <p className="mt-2 flex items-center gap-1 type-caption text-dark-soft/70 dark:text-gray-mid/70">
                <IconInfo />
                {t('form.arRateNote')}
              </p>
            )}

            {/* FIX #2 — Summary box: padding interno más generoso para
                que los textos no queden tan pegados entre sí */}
            {!loadingCountry && baseAmount && amountWithFee && (
              <div className={`mt-3 rounded-xl border p-5 ${summaryBorder}`}>
                <p className="flex items-center gap-1.5 type-label text-dark dark:text-white">
                  <IconClipboard />
                  {t('form.amountSummaryTitle')}
                </p>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className={`type-h2 ${highlightText} lg:text-3xl`}>
                      {formatARS(amountWithFee)}
                    </p>
                    <p className="type-caption text-dark-soft dark:text-gray-mid">
                      {t('form.amountBreakdown', {
                        donation: formatARS(baseAmount),
                        fee:      formatARS(feeAmount),
                      })}
                    </p>
                    {countryFee.disclaimer && (
                      <p className="type-caption text-dark-soft/60 dark:text-gray-mid/60">
                        {countryFee.disclaimer}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyAmount}
                    className="
                      flex shrink-0 items-center gap-1.5 rounded-xl border border-brand-amber
                      bg-white px-3 py-2 type-caption text-brand-amber
                      transition-colors hover:bg-brand-amber hover:text-dark
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber
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
              className="mt-2 block type-caption text-brand-amber underline hover:text-brand-accent"
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
          className="mb-1.5 block type-label text-dark dark:text-white"
        >
          {t('form.messageLabel')}{' '}
          <span className="type-caption text-dark-soft dark:text-gray-mid">
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
            type-caption text-dark placeholder-dark-soft/40
            transition-colors duration-200
            focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/30
            dark:border-white/10 dark:bg-dark dark:text-white dark:placeholder-gray-mid/40
          "
        />
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="type-caption text-dark-soft/50 dark:text-gray-mid">
            {message.length > 0 && t('form.messageHint')}
          </p>
          <p className="type-caption text-dark-soft/50 dark:text-gray-mid">
            {message.length}/300
          </p>
        </div>

        {/* FIX #3 — Cuadro de mensaje movido al form, debajo del hint.
            Antes vivía en AcademyDonationPanel / GeneralDonationPanel
            (columna izquierda), ahora vive aquí, debajo del contador,
            que es donde el usuario escribió el mensaje. */}
        {message.trim().length > 0 && (
          <div className="mt-3 rounded-xl border border-brand-accent/20 bg-surface-cream p-4 dark:border-white/10 dark:bg-dark">
            <p className="flex items-center gap-1.5 type-label text-dark dark:text-white">
              <IconMessage />
              {t('panel.sendReceiptTitle')}
            </p>
            <p className="mt-1 type-caption italic text-dark-soft dark:text-surface-cream">
              "{message}"
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/5491160122363?text=${encodeURIComponent(
                  t('panel.whatsappMessage', { message, category: categoryKicker })
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-accent px-3 py-1.5 type-label-sm text-dark transition-colors hover:bg-brand-amber"
              >
                <IconWhatsApp />
                {t('panel.sendWhatsApp')}
              </a>
              <a
                href={`mailto:valoressinai@gmail.com?subject=${encodeURIComponent(
                  t(emailSubjectKey)
                )}&body=${encodeURIComponent(
                  t('panel.emailBody', { message, category: categoryKicker })
                )}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 type-label-sm text-dark transition-colors hover:border-brand-accent dark:border-white/10 dark:bg-dark-soft dark:text-white"
              >
                <IconMail />
                {t('panel.sendEmail')}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA — MercadoPago ──────────────────────────────────── */}
      <div className={`rounded-2xl p-5 ${ctaBg}`}>
        {coverFee && amountWithFee && baseAmount && (
          <div className="mb-4 rounded-xl border border-brand-amber/20 bg-white p-4 dark:border-white/10 dark:bg-dark-soft">
            <p className="flex items-center gap-1.5 type-label text-dark dark:text-white">
              <IconPin />
              {t('form.amountReminderTitle')}
            </p>
            <p className={`mt-2 type-h2 ${highlightText} lg:text-3xl`}>
              {formatARS(amountWithFee)}
            </p>
            <p className="mt-1 type-caption text-dark-soft dark:text-gray-mid">
              {t('form.amountReminderDesc', {
                donation: formatARS(baseAmount),
              })}
            </p>
          </div>
        )}

        <div className="mb-4 rounded-xl border border-black/5 bg-white p-4 dark:border-white/5 dark:bg-dark-soft">
          <p className="flex items-center gap-1.5 type-label text-dark dark:text-white">
            <IconInfo />
            {t('form.howItWorksTitle')}
          </p>
          <ol className="mt-2 space-y-1 type-caption text-dark-soft dark:text-gray-mid">
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

        {/*
          Nota Argentina: ícono al costado (inline), no arriba.
          UX: notas de una línea siempre inline; "arriba" es para callouts
          con título + descripción. items-start + mt-px en el ícono lo
          ancla a la primera línea aunque el texto rompa en mobile.
        */}
        <p className="mb-5 flex items-start gap-1.5 type-caption text-dark-soft dark:text-gray-mid">
          <span className="mt-px shrink-0">
            <IconInfo />
          </span>
          <span>
            {t('form.mpArgentinaOnly')}{' '}
            <a
              href="#bank-transfer-info"
              className="underline underline-offset-2 transition-colors hover:text-brand-amber focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent"
            >
              {t('form.mpExternalAlt')}
            </a>
          </span>
        </p>

        <a
          href={paymentLinks.mp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleMpOpen}
          className={`
            inline-flex w-full items-center justify-center gap-2
            rounded-xl px-6 py-3.5 text-sm font-bold
            transition-all duration-200 active:scale-95
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber
            ${btnBase}
          `}
        >
          <img
            src="/img/logos/logo.svg"
            alt="Mercado Pago"
            className="h-10 w-auto object-contain"
          />
          {t('form.donateButton')}
        </a>

        {mpOpened && (
          <div className="mt-3 rounded-xl border border-brand-amber/30 bg-brand-amber/5 px-4 py-3">
            <p className="flex items-center gap-1.5 type-label text-dark dark:text-white">
              <IconExternalLink />
              {t('form.mpOpenedTitle')}
            </p>
            <p className="mt-1 type-caption text-dark-soft dark:text-gray-mid">
              {t('form.mpOpenedDesc')}
              {coverFee && amountWithFee && (
                <> {t('form.mpOpenedReminder')}{' '}
                  <span className={`type-caption ${highlightText}`}>{formatARS(amountWithFee)}</span>.
                </>
              )}
            </p>
          </div>
        )}

        <p className="mt-3 flex items-center justify-center gap-1.5 text-center type-caption text-dark-soft dark:text-gray-mid">
          <IconLock />
          {t('form.securityNote')}
        </p>
      </div>
    </div>
  );
};