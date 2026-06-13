// src/features/contact/components/ContactForm.tsx
//
// Lógica de formulario → hooks/useContactForm.ts
// Schema de validación → utils/contactSchema.ts
// Constantes (QUERY_TYPE_VALUES, INPUT_CLASS) → types/contact.ts / constants/contact.ts
// Este componente solo renderiza.

import React from 'react'
import { useTranslation } from 'react-i18next'

import { useContactForm } from '../hooks/useContactForm'
import { INPUT_CLASS } from '../constants/contact'
import { QUERY_TYPE_VALUES } from '../types/contact'

// ── Sub-componente Field ──────────────────────────────────────────────────────

interface FieldProps {
  id:        string
  label:     string
  required?: boolean
  error?:    string
  children:  React.ReactNode
}

const Field: React.FC<FieldProps> = ({ id, label, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="font-sans text-sm font-semibold text-dark dark:text-white"
    >
      {label}
      {required && (
        <span className="ml-1 text-brand-accent" aria-hidden="true">*</span>
      )}
    </label>
    {children}
    {error && (
      <p role="alert" id={`${id}-error`} className="font-sans text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
)

// ── Componente principal ──────────────────────────────────────────────────────

const MESSAGE_MAX_LENGTH = 1000

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact')

  const {
    register,
    errors,
    isSubmitting,
    messageValue,
    submitState,
    onSubmit,
    handleResetError,
    handleNameChange,
    handlePhoneChange,
  } = useContactForm()

  const isLoading = isSubmitting || submitState === 'loading'

  // Desacoplamos onChange de RHF para fullName y phone para usar nuestros
  // handlers con lógica de trigger condicional. El resto del registration
  // (ref, name, onBlur) se conserva íntegro mediante el spread.
  const { onChange: _nameOnChange,  ...nameReg }  = register('fullName')
  const { onChange: _phoneOnChange, ...phoneReg } = register('phone')

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="bg-white px-4 py-16 dark:bg-dark sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-10 max-w-2xl">
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">
            {t('form.kicker')}
          </p>
          <h2
            id="contact-form-heading"
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-dark dark:text-white sm:text-4xl"
          >
            {t('form.title')}
          </h2>
          <p className="mt-4 font-sans text-base leading-7 text-dark-soft dark:text-surface-cream">
            {t('form.subtitle')}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">

          {/* Columna principal: formulario */}
          <div className="lg:col-span-3">

            {/* Banner de error global */}
            {submitState === 'error' && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-8 flex flex-col items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800/30 dark:bg-red-900/10"
              >
                <p className="font-sans text-base font-bold text-dark dark:text-white">
                  ⚠️ {t('form.errorTitle')}
                </p>
                <p className="font-sans text-sm leading-6 text-dark-soft dark:text-gray-mid">
                  {t('form.errorText')}
                </p>
                <button
                  type="button"
                  onClick={handleResetError}
                  className="rounded-xl border border-dark/10 px-4 py-2 font-sans text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                  {t('form.retry')}
                </button>
              </div>
            )}

            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-black/5 bg-surface-cream p-6 dark:border-white/5 dark:bg-dark-soft sm:p-8"
              noValidate
            >
              <div className="flex flex-col gap-5">

                {/* Fila 1: nombre + email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="fullName"
                    label={t('form.fields.fullName')}
                    required
                    error={errors.fullName?.message}
                  >
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder={t('form.placeholders.fullName')}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={INPUT_CLASS}
                      // onChange propio: trigger condicional por contenido.
                      // onBlur, ref y name vienen del spread de nameReg.
                      onChange={handleNameChange}
                      {...nameReg}
                    />
                  </Field>

                  <Field
                    id="email"
                    label={t('form.fields.email')}
                    required
                    error={errors.email?.message}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('form.placeholders.email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={INPUT_CLASS}
                      {...register('email')}
                    />
                  </Field>
                </div>

                {/* Fila 2: teléfono + organización */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="phone"
                    label={t('form.fields.phone')}
                    required                          // ← ahora obligatorio
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t('form.placeholders.phone')}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={INPUT_CLASS}
                      // onChange propio: trigger condicional por contenido.
                      onChange={handlePhoneChange}
                      {...phoneReg}
                    />
                  </Field>

                  <Field
                    id="organization"
                    label={t('form.fields.organization')}
                    error={errors.organization?.message}
                  >
                    <input
                      id="organization"
                      type="text"
                      autoComplete="organization"
                      placeholder={t('form.placeholders.organization')}
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? 'organization-error' : undefined}
                      className={INPUT_CLASS}
                      {...register('organization')}
                    />
                  </Field>
                </div>

                {/* Tipo de consulta */}
                <Field
                  id="queryType"
                  label={t('form.fields.queryType')}
                  required
                  error={errors.queryType?.message}
                >
                  <select
                    id="queryType"
                    aria-invalid={!!errors.queryType}
                    aria-describedby={errors.queryType ? 'queryType-error' : undefined}
                    defaultValue=""
                    className={`${INPUT_CLASS} cursor-pointer`}
                    {...register('queryType')}
                  >
                    <option value="" disabled>
                      {t('form.placeholders.queryType')}
                    </option>
                    {QUERY_TYPE_VALUES.map((type) => (
                      <option key={type} value={type}>
                        {t(`form.queryTypes.${type}`, type)}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Mensaje con contador de caracteres */}
                <Field
                  id="message"
                  label={t('form.fields.message')}
                  required
                  error={errors.message?.message}
                >
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={t('form.placeholders.message')}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${INPUT_CLASS} resize-none`}
                      {...register('message')}
                    />
                    <span
                      aria-live="polite"
                      aria-label={t('form.charCount', {
                        current: messageValue.length,
                        max: MESSAGE_MAX_LENGTH,
                      })}
                      className={`absolute bottom-3 right-3 font-sans text-xs transition-colors ${
                        messageValue.length > 900 ? 'text-red-400' : 'text-gray-mid'
                      }`}
                    >
                      {messageValue.length}/{MESSAGE_MAX_LENGTH}
                    </span>
                  </div>
                </Field>

                {/* Aviso de privacidad */}
                <p className="font-sans text-xs leading-5 text-dark-soft dark:text-gray-mid">
                  {t('form.privacy')}
                </p>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-3.5 font-sans text-sm font-bold text-dark transition-all duration-200 hover:bg-brand-amber hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12" cy="12" r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {t('form.sending')}
                    </>
                  ) : (
                    <>
                      {t('form.submit')}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                      </svg>
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>

          {/* Columna lateral: mapa */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.00885192582!2d-58.85255979999999!3d-34.47729969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b8caf5bdb71%3A0x54d80dea5c4c0762!2sAv.%20Pres.%20Juan%20Domingo%20Peron%203251%2C%20B1635%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746035437303!5m2!1ses!2sar"
                title={t('form.mapTitle')}
                className="h-72 w-full sm:h-96 lg:h-130"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-black/5 bg-surface-cream p-4 dark:border-white/5 dark:bg-dark-soft">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-amber">
                  {t('form.addressLabel')}
                </p>
                <p className="mt-1 font-sans text-sm text-dark-soft dark:text-gray-mid">
                  {t('form.address')}
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brand-amber transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {t('form.openInMaps')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}