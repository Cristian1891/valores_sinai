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

      <label htmlFor={inputId} className="type-label text-white">
        {label}{' '}
        <span className="text-brand-accent" aria-hidden="true">*</span>
      </label>

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