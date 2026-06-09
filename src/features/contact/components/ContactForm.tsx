// src/features/contact/components/ContactForm.tsx
// Integración: FormSubmit (https://formsubmit.co)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';

// ── Mapeo: tipo de consulta → correo institucional destino ───────────────────
const DESTINATION_MAP: Record<string, string> = {
  'Información general': 'cristianovejero1891@gmail.com',
  'Retiros y campamentos': 'crisxz1891@gmail.com',
  'Eventos y salones': 'valoressinai@gmail.com',
  'REC Pilar': 'valoressinai@gmail.com',
  'Administración': 'estudioalegrevaldez@yahoo.com.ar',
  'Donaciones': 'cp.erika.contreras@gmail.com',
  'Consultas legales': 'Dra.danielaaramberri@gmail.com',
  'Otro': 'valoressinai@gmail.com',
};

// ── Schema de validación ─────────────────────────────────────────────────────
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(80, 'El nombre es demasiado largo.'),
  email: z.string().email('Ingresá un correo electrónico válido.'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+\d\s\-().]{7,20}$/.test(val),
      'Ingresá un teléfono válido.',
    ),
  organization: z
    .string()
    .max(100, 'El nombre de la organización es demasiado largo.')
    .optional(),
  queryType: z.enum(
    [
      'Información general',
      'Retiros y campamentos',
      'Eventos y salones',
      'REC Pilar',
      'Administración',
      'Donaciones',
      'Consultas legales',
      'Otro',
    ],
    { message: 'Seleccioná un tipo de consulta.' },
  ),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(1000, 'El mensaje no puede superar los 1000 caracteres.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const QUERY_TYPES = [
  'Información general',
  'Retiros y campamentos',
  'Eventos y salones',
  'REC Pilar',
  'Administración',
  'Donaciones',
  'Consultas legales',
  'Otro',
] as const;

// ── Sub-componente: Field ────────────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ id, label, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="font-sans text-sm font-semibold text-dark dark:text-white"
    >
      {label}
      {required && <span className="ml-1 text-brand-accent" aria-hidden="true">*</span>}
    </label>
    {children}
    {error && (
      <p role="alert" id={`${id}-error`} className="font-sans text-xs text-red-500">
        {error}
      </p>
    )}
  </div>
);

// ── Clases de input ──────────────────────────────────────────────────────────
const inputClass = `
  w-full rounded-xl border border-black/10 bg-white px-4 py-3
  font-sans text-sm text-dark placeholder:text-gray-mid
  transition-colors duration-150
  hover:border-brand-amber/60
  focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20
  dark:border-white/10 dark:bg-dark-soft dark:text-white dark:placeholder:text-gray-mid
  dark:hover:border-brand-amber/40 dark:focus:border-brand-accent
`;

type SubmitState = 'idle' | 'loading' | 'error';

// ── Componente principal ─────────────────────────────────────────────────────
export const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');
  const [submitState, setSubmitState] = React.useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      queryType: '' as unknown as ContactFormData['queryType'],
      message: '',
    },
  });

  const messageValue = watch('message', '');

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmitState('loading');

    try {
      const destinationEmail = DESTINATION_MAP[data.queryType];

      if (!destinationEmail) {
        throw new Error(`No hay destinatario configurado para: ${data.queryType}`);
      }

      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(destinationEmail)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Nombre completo': data.fullName,
            'Correo electrónico': data.email,
            'Teléfono': data.phone || 'No informado',
            'Organización / Empresa': data.organization || 'No informado',
            'Tipo de consulta': data.queryType,
            Mensaje: data.message,
            'Fecha de envío': new Date().toLocaleString('es-AR', {
              dateStyle: 'full',
              timeStyle: 'medium',
            }),

            _subject: `[Valores Sinaí] ${data.queryType} — ${data.fullName}`,
            _replyto: data.email,
            _captcha: 'false',
            _template: 'table',
          }),
        },
      );

      const rawResponse = await response.text();
      console.log('[ContactForm - FormSubmit] status:', response.status);
      console.log('[ContactForm - FormSubmit] raw response:', rawResponse);

      if (!response.ok) {
        throw new Error(`FormSubmit respondió con status ${response.status}`);
      }

      reset();
      setSubmitState('idle');

      toast.success(
        t(
          'form.toastSuccess',
          '¡Mensaje enviado correctamente! Valores Sinaí se va a comunicar con vos a la brevedad para responder tu consulta.',
        ),
      );
    } catch (error) {
      console.error('[ContactForm - FormSubmit] Error al enviar:', error);
      setSubmitState('error');

      toast.error(
        t(
          'form.toastError',
          'No pudimos enviar tu mensaje. Por favor intentá de nuevo.',
        ),
      );
    }
  };

  const handleResetError = () => {
    setSubmitState('idle');
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 dark:bg-surface-warm"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {t('form.kicker', 'Escribínos')}
          </p>
          <h2
            id="contact-form-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-dark"
          >
            {t('form.title', 'Contactános')}
          </h2>
          <p className="mt-4 text-base leading-7 text-dark-soft dark:text-dark">
            {t(
              'form.subtitle',
              'Queremos escucharte. Construyamos juntos un futuro con valores.',
            )}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            {submitState === 'error' && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-8 flex flex-col items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-800/30 dark:bg-red-900/10"
              >
                <p className="font-sans text-base font-bold text-dark dark:text-white">
                  ⚠️ {t('form.errorTitle', 'Algo salió mal')}
                </p>
                <p className="font-sans text-sm leading-6 text-dark-soft dark:text-gray-mid">
                  {t(
                    'form.errorText',
                    'No pudimos enviar tu mensaje. Por favor intentá de nuevo o contactanos por WhatsApp.',
                  )}
                </p>
                <button
                  type="button"
                  onClick={handleResetError}
                  className="rounded-xl border border-dark/10 px-4 py-2 font-sans text-sm font-semibold text-dark transition-colors hover:bg-dark hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                  {t('form.retry', 'Intentar de nuevo')}
                </button>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-black/5 bg-surface-cream p-6 sm:p-8 dark:border-white/5 dark:bg-dark-soft"
              noValidate
            >
              <div className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="fullName"
                    label={t('form.fields.fullName', 'Nombre Completo')}
                    required
                    error={errors.fullName?.message}
                  >
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder={t('form.placeholders.fullName', 'Tu nombre completo')}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={inputClass}
                      {...register('fullName')}
                    />
                  </Field>

                  <Field
                    id="email"
                    label={t('form.fields.email', 'Email')}
                    required
                    error={errors.email?.message}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('form.placeholders.email', 'tu@email.com')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass}
                      {...register('email')}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="phone"
                    label={t('form.fields.phone', 'Teléfono')}
                    error={errors.phone?.message}
                  >
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+54 11 1234-5678"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={inputClass}
                      {...register('phone')}
                    />
                  </Field>

                  <Field
                    id="organization"
                    label={t(
                      'form.fields.organization',
                      'Organización / Empresa (opcional)',
                    )}
                    error={errors.organization?.message}
                  >
                    <input
                      id="organization"
                      type="text"
                      autoComplete="organization"
                      placeholder={t(
                        'form.placeholders.organization',
                        'Nombre de tu organización',
                      )}
                      aria-invalid={!!errors.organization}
                      aria-describedby={errors.organization ? 'organization-error' : undefined}
                      className={inputClass}
                      {...register('organization')}
                    />
                  </Field>
                </div>

                <Field
                  id="queryType"
                  label={t('form.fields.queryType', 'Tipo de Consulta')}
                  required
                  error={errors.queryType?.message}
                >
                  <select
                    id="queryType"
                    aria-invalid={!!errors.queryType}
                    aria-describedby={errors.queryType ? 'queryType-error' : undefined}
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                    {...register('queryType')}
                  >
                    <option value="" disabled>
                      {t('form.placeholders.queryType', 'Seleccioná una opción')}
                    </option>
                    {QUERY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {t(`form.queryTypes.${type}`, type)}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="message"
                  label={t('form.fields.message', 'Mensaje')}
                  required
                  error={errors.message?.message}
                >
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      placeholder={t(
                        'form.placeholders.message',
                        'Describí tu consulta o proyecto en detalle...',
                      )}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${inputClass} resize-none`}
                      {...register('message')}
                    />
                    <span
                      aria-live="polite"
                      aria-label={`${(messageValue || '').length} de 1000 caracteres`}
                      className={`absolute bottom-3 right-3 font-sans text-xs transition-colors ${
                        (messageValue || '').length > 900
                          ? 'text-red-400'
                          : 'text-gray-mid'
                      }`}
                    >
                      {(messageValue || '').length}/1000
                    </span>
                  </div>
                </Field>

                <p className="font-sans text-xs leading-5 text-dark-soft dark:text-gray-mid">
                  {t(
                    'form.privacy',
                    'Al enviar este formulario aceptás que usemos tus datos para responder tu consulta. No compartimos tu información con terceros.',
                  )}
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting || submitState === 'loading'}
                  aria-busy={isSubmitting || submitState === 'loading'}
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl bg-brand-accent px-6 py-3.5
                    font-sans text-sm font-bold text-dark
                    transition-all duration-200
                    hover:bg-brand-amber hover:text-white
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2
                    disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  {isSubmitting || submitState === 'loading' ? (
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
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {t('form.sending', 'Enviando...')}
                    </>
                  ) : (
                    <>
                      {t('form.submit', 'Enviar Mensaje')}
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

          <div className="lg:col-span-2">
            <div className="sticky top-24 overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.00885192582!2d-58.85255979999999!3d-34.47729969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9b8caf5bdb71%3A0x54d80dea5c4c0762!2sAv.%20Pres.%20Juan%20Domingo%20Peron%203251%2C%20B1635%20Pres.%20Derqui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746035437303!5m2!1ses!2sar"
                title={t('form.mapTitle', 'Ubicación de Valores Sinaí en Google Maps')}
                className="h-72 w-full sm:h-96 lg:h-[520px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="border-t border-black/5 bg-surface-cream p-4 dark:border-white/5 dark:bg-dark-soft">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-amber">
                  {t('form.addressLabel', 'Nuestra dirección')}
                </p>
                <p className="mt-1 font-sans text-sm text-dark-soft dark:text-gray-mid">
                  {t(
                    'form.address',
                    'Av. Juan Domingo Perón 3251, Pres. Derqui, Buenos Aires',
                  )}
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Juan+Domingo+Peron+3251+Derqui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brand-amber transition-colors duration-200 hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                >
                  {t('form.openInMaps', 'Abrir en Google Maps')}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};