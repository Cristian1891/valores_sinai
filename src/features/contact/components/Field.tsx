import type { FieldProps } from "../types/contact";

 export const Field: React.FC<FieldProps> = ({ id, label, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="type-label font-semibold text-dark dark:text-white"
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