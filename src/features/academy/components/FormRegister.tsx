// src/features/academia/components/FormRegister.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  area: string;
  consentimiento: boolean;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  area?: string;
  consentimiento?: string;
}

// ── Opciones del select ───────────────────────────────────────────────────────
const AREAS = [
  { value: 'produccion-audiovisual', label: 'Producción Audiovisual' },
  { value: 'audio-sonido',           label: 'Audio y Sonido' },
  { value: 'fotografia-digital',     label: 'Fotografía Digital' },
  { value: 'marketing-digital',      label: 'Marketing Digital' },
  { value: 'streaming-medios',       label: 'Streaming y Medios' },
  { value: 'gestion-cultural',       label: 'Gestión Cultural' },
  { value: 'no-seguro',              label: 'Todavía no estoy seguro/a' },
];

// ── Utilidad de validación ────────────────────────────────────────────────────
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim())       errors.nombre        = 'El nombre es requerido';
  if (!data.email.trim())        errors.email         = 'El email es requerido';
  else if (!validateEmail(data.email)) errors.email   = 'Ingresá un email válido';
  if (!data.telefono.trim())     errors.telefono      = 'El teléfono es requerido';
  if (!data.area)                errors.area          = 'Elegí un área de interés';
  if (!data.consentimiento)      errors.consentimiento = 'Necesitamos tu consentimiento para continuar';
  return errors;
}

// ── Subcomponente: campo de texto ─────────────────────────────────────────────
interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (val: string) => void;
}

const Field: React.FC<FieldProps> = ({
  id, label, placeholder, value, error, type = 'text', onChange,
}) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-sm font-semibold text-white">
      {label} <span className="text-brand-accent" aria-hidden="true">*</span>
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-required="true"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`
        w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40
        backdrop-blur-sm outline-none transition-all duration-200
        focus:bg-white/10 focus:ring-2 focus:ring-brand-blue
        ${error ? 'border-red-400' : 'border-white/15 hover:border-white/30'}
      `}
    />
    {error && (
      <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-400">
        {error}
      </p>
    )}
  </div>
);

// ── Componente principal ──────────────────────────────────────────────────────
export const FormRegister: React.FC = () => {
  const { t } = useTranslation('academia');

  const [data, setData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    area: '',
    consentimiento: false,
  });

  const [errors, setErrors]   = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = (field: keyof FormData) => (val: string | boolean) =>
    setData((prev) => ({ ...prev, [field]: val }));

  const handleSubmit = async () => {
    const newErrors = validate(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorId = Object.keys(newErrors)[0];
      document.getElementById(firstErrorId)?.focus();
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await new Promise((res) => setTimeout(res, 1200));
      setSuccess(true);
    } catch {
      setErrors({ nombre: 'Ocurrió un error al enviar. Intentá de nuevo.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-surface-cream px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto max-w-2xl">
        
        {/* Tarjeta con colores del sistema de diseño */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-dark to-dark-soft p-8 sm:p-10 shadow-2xl ring-1 ring-white/10">
          
          {success ? (
            // ── Estado de éxito ──
            <div className="flex flex-col items-center gap-5 py-10 text-center animate-fade-in">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20 ring-1 ring-success/50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-success">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                {t('form.successTitle', '¡Listo! Ya estás en la lista')}
              </h2>
              <p className="max-w-sm text-sm leading-7 text-white/80">
                {t(
                  'form.successText',
                  'Te contactamos apenas tengamos novedades sobre nuestros cursos. ¡Gracias por sumarte a Academia Valores Sinaí!'
                )}
              </p>
            </div>
          ) : (
            // ── Formulario ──
            <>
              {/* Encabezado */}
              <div className="mb-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 ring-1 ring-brand-blue/30">
                  <span className="text-xs font-semibold tracking-[0.15em] text-brand-blue uppercase">
                    {t('form.badge', 'Enterate antes que nadie')}
                  </span>
                </div>
                <h2
                  id="form-heading"
                  className="text-2xl font-bold text-white sm:text-3xl"
                >
                  {t('form.title', 'Formá parte de nuestra academia')}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {t('form.subtitle', 'Dejanos tus datos y te avisamos cuando lancemos nuestros cursos')}
                </p>
              </div>

              {/* Campos */}
              <div className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    id="nombre"
                    label={t('form.labelNombre', 'Nombre completo')}
                    placeholder={t('form.placeholderNombre', 'Tu nombre')}
                    value={data.nombre}
                    error={errors.nombre}
                    onChange={setField('nombre')}
                  />
                  <Field
                    id="email"
                    label={t('form.labelEmail', 'Email')}
                    placeholder={t('form.placeholderEmail', 'tu@email.com')}
                    value={data.email}
                    error={errors.email}
                    type="email"
                    onChange={setField('email')}
                  />
                </div>

                <Field
                  id="telefono"
                  label={t('form.labelTelefono', 'Teléfono / WhatsApp')}
                  placeholder={t('form.placeholderTelefono', '+54 11 1234-5678')}
                  value={data.telefono}
                  error={errors.telefono}
                  type="tel"
                  onChange={setField('telefono')}
                />

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="area" className="text-sm font-semibold text-white">
                    {t('form.labelArea', '¿Qué te gustaría aprender?')}{' '}
                    <span className="text-brand-accent" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="area"
                    value={data.area}
                    onChange={(e) => setField('area')(e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.area}
                    aria-describedby={errors.area ? 'area-error' : undefined}
                    className={`
                      w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white
                      backdrop-blur-sm outline-none transition-all duration-200
                      focus:bg-white/10 focus:ring-2 focus:ring-brand-blue
                      ${errors.area ? 'border-red-400' : 'border-white/15 hover:border-white/30'}
                    `}
                  >
                    <option value="" disabled className="bg-dark text-white">
                      {t('form.areaPlaceholder', 'Elegí un área...')}
                    </option>
                    {AREAS.map((area) => (
                      <option key={area.value} value={area.value} className="bg-dark text-white">
                        {area.label}
                      </option>
                    ))}
                  </select>
                  {errors.area && (
                    <p id="area-error" role="alert" className="text-xs font-medium text-red-400">
                      {errors.area}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      id="consentimiento"
                      checked={data.consentimiento}
                      onChange={(e) => setField('consentimiento')(e.target.checked)}
                      aria-required="true"
                      aria-invalid={!!errors.consentimiento}
                      aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-brand-accent"
                    />
                    <span className="text-xs leading-5 text-white/80">
                      {t(
                        'form.consentimiento',
                        'Acepto recibir información sobre los cursos y autorizo el uso de mis datos.'
                      )}{' '}
                      <span className="text-brand-accent" aria-hidden="true">*</span>
                    </span>
                  </label>
                  {errors.consentimiento && (
                    <p id="consentimiento-error" role="alert" className="text-xs font-medium text-red-400">
                      {errors.consentimiento}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    mt-4 flex w-full items-center justify-center gap-2
                    rounded-xl bg-brand-accent px-6 py-4
                    text-sm font-bold text-dark
                    transition-all duration-200
                    hover:bg-brand-amber
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue
                    disabled:cursor-not-allowed disabled:opacity-60
                  "
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-dark/30 border-t-dark"
                        aria-hidden="true"
                      />
                      {t('form.sending', 'Enviando...')}
                    </>
                  ) : (
                    t('form.submit', 'Quiero recibir información')
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};