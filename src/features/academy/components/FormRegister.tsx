// src/features/academy/components/FormRegister.tsx
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

  return (
    <section
      className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-dark to-dark-soft p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">
          {submitState === 'error' && (
            <NetworkError
              title={t('form.errorTitle')}
              body={t('form.errorText')}
              retryLabel={t('form.retry')}
              onRetry={handleRetry}
            />
          )}

          <header className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 ring-1 ring-brand-blue/30">
              <span className="type-kicker text-brand-blue">
                {t('form.badge')}
              </span>
            </div>

            <h2 id="form-heading" className="type-h2 text-white sm:text-3xl">
              {t('form.title')}
            </h2>

            <p className="type-body-sm mt-2 text-white/80">
              {t('form.subtitle')}
            </p>
          </header>

          <div className="flex flex-col gap-5">
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

            {/* Área de interés */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="area" className="type-label text-white">
                {t('form.labelArea')}{' '}
                <span className="text-brand-accent" aria-hidden="true">*</span>
              </label>

              <select
                id="area"
                value={formData.area}
                onChange={(e) => setField('area')(e.target.value)}
                onBlur={handleBlur('area')}
                aria-required="true"
                aria-invalid={Boolean(errors.area)}
                aria-describedby={errors.area ? 'area-error' : undefined}
                className={[
                  'w-full rounded-xl border bg-white/5 px-4 py-3',
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
                  <option key={areaValue} value={areaValue} className="bg-dark text-white">
                    {t(`form.areaOptions.${areaValue}`)}
                  </option>
                ))}
              </select>

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

            {/* Consentimiento */}
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