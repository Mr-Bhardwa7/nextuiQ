import { forwardRef, useId } from "react";

export interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = "text",
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
  label,
  required = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const uniqueId = useId();
  const inputId = id || uniqueId;
  const hintId = `${inputId}-hint`;

  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-1 [data-theme="light"]:bg-white [data-theme="dark"]:bg-gray-900 [data-theme="light"]:text-gray-900 [data-theme="dark"]:text-white/90 [data-theme="light"]:placeholder:text-gray-400 [data-theme="dark"]:placeholder:text-white/30 ${className}`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed [data-theme="light"]:bg-gray-50 [data-theme="dark"]:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` text-error-800 border-error-500 focus:ring-error-500/20 [data-theme="dark"]:text-error-400 [data-theme="dark"]:border-error-500`;
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/20 focus:border-success-300 [data-theme="dark"]:text-success-400 [data-theme="dark"]:border-success-500`;
  } else {
    inputClasses += ` [data-theme="light"]:bg-white [data-theme="dark"]:bg-gray-900 [data-theme="light"]:text-gray-800 [data-theme="dark"]:text-white/90 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 [data-theme="dark"]:border-gray-700`;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label 
          htmlFor={inputId}
          className={`text-sm font-medium ${
            disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          required={required}
          aria-invalid={error}
          aria-label={ariaLabel || label}
          aria-describedby={hint ? hintId : ariaDescribedby}
          className={inputClasses}
          {...props}
        />

        {hint && (
          <p
            id={hintId}
            className={`mt-1.5 text-xs ${
              error
                ? "text-error-500"
                : success
                ? "text-success-500"
                : "text-gray-500"
            }`}
          >
            {hint}
          </p>
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
