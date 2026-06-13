// src/features/academy/components/Field.tsx
//
// TIPOGRAFÍA — decisiones tomadas:
//
//   <label>          → type-label    (14px, 600) — label de formulario,
//                       uso exacto documentado en el sistema tipográfico.
//   <input>          → type-body-sm  (14px, 400) — texto que el usuario escribe;
//                       mismo tamaño que el label pero weight normal,
//                       crea jerarquía sin cambiar tamaño.
//   Mensaje de error → type-caption  (12px, 500) — meta-info de estado,
//                       menor que el campo para no competir visualmente.

import type { FieldProps } from '../types/academy';

export const Field: React.FC<FieldProps & { onBlur?: () => void }> = ({
  id,
  label,
  placeholder,
  value,
  error,
  type = 'text',
  autoComplete,
  onChange,
  onBlur,
}) => {
  const inputId  = String(id);
  const errorId  = `${inputId}-error`;
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5">

      {/* Label — type-label: 14px, sans, 600 */}
      <label htmlFor={inputId} className="type-label text-white">
        {label}{' '}
        <span className="text-brand-accent" aria-hidden="true">*</span>
      </label>

      {/* Input — type-body-sm: 14px, sans, 400, line-height 1.65 */}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-required="true"
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={[
          'w-full rounded-xl border bg-white/5 dark:bg-dark-soft dark:placeholder-white/60 px-4 py-3',
          'type-body-sm text-white placeholder-white/35',
          'backdrop-blur-sm outline-none transition-all duration-200',
          'focus:bg-white/10 focus:ring-2 focus:ring-brand-blue focus:ring-offset-0',
          hasError
            ? 'border-red-400 focus:ring-red-400/50'
            : 'border-white/15 hover:border-white/30',
        ].join(' ')}
      />

      {/* Error — type-caption: 12px, 500.
          Siempre en el DOM para evitar layout shifts — se oculta con sr-only
          cuando no hay error activo. */}
      <p
        id={errorId}
        role={hasError ? 'alert' : undefined}
        aria-live="polite"
        className={[
          'type-caption font-medium text-red-400 transition-all duration-200',
          hasError ? 'opacity-100' : 'sr-only opacity-0',
        ].join(' ')}
      >
        {error ?? ''}
      </p>

    </div>
  );
};