// src/features/academy/components/FormRegister.tsx
//
// TIPOGRAFÍA — decisiones tomadas:
//
//   Badge kicker        → type-kicker   (11px, uppercase, tracking 0.22em)
//   <h2> del form       → type-h2       (serif 30px, 700) — título de sección
//   Subtítulo del form  → type-body-sm  (14px, 400) — descripción de apoyo
//   Label "área"        → type-label    (14px, 600) — consistente con Field
//   <select>            → type-body-sm  (14px, 400) — consistente con <input>
//   Error del select    → type-caption  (12px, 500) — consistente con Field
//   Texto consentimiento→ type-caption  (12px, 500) — meta-info legal
//   Botón CTA           → type-cta      (14px, 700, tracking 0.01em)

import { useTranslation } from 'react-i18next';
import { FORM_AREAS } from '../constants/areas-form';
import { useFormRegister } from '../hooks/useFormRegister';
import { Field } from './Field';
import { NetworkError } from './NetworkError';
import { SuccessState } from './SuccessState';

export const FormRegister: React.FC = () => {
  const { t } = useTranslation('academy');

  const {
    formData,
    errors,
    submitState,
    setField,
    handleBlur,
    handleSubmit,
    handleRetry,
  } = useFormRegister();

  // ── Estado de éxito ────────────────────────────────────────────────────────
  if (submitState === 'success') {
    return (
      <section
        className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="form-heading"
      >
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-3xl bg-linear-to-br from-dark to-dark-soft p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">
            <SuccessState
              title={t('form.successTitle')}
              body={t('form.successText')}
            />
          </div>
        </div>
      </section>
    );
  }

  // ── Formulario ─────────────────────────────────────────────────────────────
  return (
    <section
      className="bg-surface-cream dark:bg-dark-soft px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-dark to-dark-soft dark:from-dark dark:to-black p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">

          {/* Error de red */}
          {submitState === 'error' && (
            <NetworkError
              title={t('form.errorTitle')}
              body={t('form.errorText')}
              retryLabel={t('form.retry')}
              onRetry={handleRetry}
            />
          )}

          {/* ── Encabezado ── */}
          <header className="mb-8 text-center">

            {/* Kicker badge — type-kicker: 11px, uppercase, tracking 0.22em */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 ring-1 ring-brand-blue/30">
              <span className="type-kicker text-brand-blue">
                {t('form.badge')}
              </span>
            </div>

            {/* Título — type-h2: Merriweather serif 30px, 700.
                sm:text-3xl sobreescribe el tamaño base del utility para
                escalar levemente en pantallas más anchas — el utility
                define el mínimo mobile, el componente decide cuánto crece. */}
            <h2 
              id="form-heading"
              className="type-h2 text-white sm:text-4xl lg:text-[2.75rem]"
            >
              {t('form.title')}
            </h2>

            {/* Subtítulo — type-body-sm: 14px, 400, line-height 1.65 */}
            <p className="type-body mt-2 text-white/80 sm:text-lg">
              {t('form.subtitle')}
            </p>

          </header>

          {/* ── Campos ── */}
          <div className="flex flex-col gap-5">

            {/* Fila nombre + email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="nombre"
                label={t('form.labelNombre')}
                placeholder={t('form.placeholderNombre')}
                value={formData.nombre}
                error={errors.nombre}
                autoComplete="name"
                onChange={setField('nombre')}
                onBlur={handleBlur('nombre')}
              />
              <Field
                id="email"
                label={t('form.labelEmail')}
                placeholder={t('form.placeholderEmail')}
                value={formData.email}
                error={errors.email}
                type="email"
                autoComplete="email"
                onChange={setField('email')}
                onBlur={handleBlur('email')}
              />
            </div>

            {/* Teléfono */}
            <Field
              id="telefono"
              label={t('form.labelTelefono')}
              placeholder={t('form.placeholderTelefono')}
              value={formData.telefono}
              error={errors.telefono}
              type="tel"
              autoComplete="tel"
              onChange={setField('telefono')}
              onBlur={handleBlur('telefono')}
            />

            {/* ── Área de interés ── */}
            <div className="flex flex-col gap-1.5">

              {/* Label — type-label: 14px, 600 — idéntico a los demás campos */}
              <label htmlFor="area" className="type-label text-white">
                {t('form.labelArea')}{' '}
                <span className="text-brand-accent" aria-hidden="true">*</span>
              </label>

              {/* Select — type-body-sm: mismo tamaño que los <input> */}
              <select
                id="area"
                value={formData.area}
                onChange={(e) => setField('area')(e.target.value)}
                onBlur={handleBlur('area')}
                aria-required="true"
                aria-invalid={Boolean(errors.area)}
                aria-describedby={errors.area ? 'area-error' : undefined}
                className={[
                  'w-full rounded-xl border bg-white/5 dark:bg-dark-soft px-4 py-3',
                  'type-body-sm text-white backdrop-blur-sm outline-none',
                  'transition-all duration-200',
                  'focus:bg-white/10 focus:ring-2 focus:ring-brand-blue',
                  errors.area
                    ? 'border-red-400 focus:ring-red-400/50'
                    : 'border-white/15 hover:border-white/30',
                ].join(' ')}
              >
                <option value="" disabled className="bg-dark text-white">
                  {t('form.areaPlaceholder')}
                </option>
                {FORM_AREAS.map((areaValue) => (
                  <option key={areaValue} value={areaValue} className="bg-dark dark:bg-dark-soft text-white">
                    {t(`form.areaOptions.${areaValue}`)}
                  </option>
                ))}
              </select>

              {/* Error — type-caption: 12px, 500 — consistente con Field */}
              <p
                id="area-error"
                role={errors.area ? 'alert' : undefined}
                aria-live="polite"
                className={[
                  'type-caption font-medium text-red-400 transition-all duration-200',
                  errors.area ? 'opacity-100' : 'sr-only opacity-0',
                ].join(' ')}
              >
                {errors.area ?? ''}
              </p>

            </div>

            {/* ── Consentimiento ── */}
            <div className="flex flex-col gap-1.5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  id="consentimiento"
                  checked={formData.consentimiento}
                  onChange={(e) => setField('consentimiento')(e.target.checked)}
                  onBlur={handleBlur('consentimiento')}
                  aria-required="true"
                  aria-invalid={Boolean(errors.consentimiento)}
                  aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined}
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                />
                {/* Texto legal — type-caption: 12px es adecuado para
                    texto de consentimiento (convención establecida en forms
                    de todo el ecosistema web), sin competir con los labels. */}
                <span className="type-caption leading-5 text-white/80">
                  {t('form.consentimiento')}{' '}
                  <span className="text-brand-accent" aria-hidden="true">*</span>
                </span>
              </label>

              <p
                id="consentimiento-error"
                role={errors.consentimiento ? 'alert' : undefined}
                aria-live="polite"
                className={[
                  'type-caption font-medium text-red-400 transition-all duration-200',
                  errors.consentimiento ? 'opacity-100' : 'sr-only opacity-0',
                ].join(' ')}
              >
                {errors.consentimiento ?? ''}
              </p>
            </div>

            {/* ── Botón CTA — type-cta: 14px, 700, tracking 0.01em ── */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitState === 'loading'}
              aria-busy={submitState === 'loading'}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent px-6 py-4 type-cta text-dark transition-all duration-200 hover:bg-brand-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitState === 'loading' ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-dark/30 border-t-dark"
                    aria-hidden="true"
                  />
                  {t('form.sending')}
                </>
              ) : (
                t('form.submit')
              )}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};