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
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  readOnly?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  value?: string | number;
  size?: number;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(({
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
  maxLength,
  minLength,
  pattern,
  readOnly = false,
  autoComplete = "off",
  autoFocus = false,
  value,
  size,
  ...props
}, ref) => {
  const uniqueId = useId();
  const inputId = id || uniqueId;
  const hintId = `${inputId}-hint`;

  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-sm 
      bg-[oklch(var(--theme-background))] 
      text-[oklch(var(--theme-foreground))]
      placeholder:text-[oklch(var(--theme-muted-foreground))]
      focus:outline-none focus:ring-2 focus:ring-[oklch(var(--theme-ring))] ${className}`;
  
  if (disabled) {
    inputClasses += ` text-[oklch(var(--theme-muted-foreground))] border-[oklch(var(--theme-border))] 
      bg-[oklch(var(--theme-muted))] cursor-not-allowed`;
  } else if (error) {
    inputClasses += ` text-[oklch(var(--theme-destructive))] border-[oklch(var(--theme-destructive))] 
      focus:ring-[oklch(var(--theme-destructive)/0.2)]`;
  } else if (success) {
    inputClasses += ` text-[oklch(var(--theme-success))] border-[oklch(var(--theme-success))] 
      focus:ring-[oklch(var(--theme-success)/0.2)]`;
  } else {
    inputClasses += ` border-[oklch(var(--theme-border))] 
      focus:border-[oklch(var(--theme-ring))]`;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label 
          htmlFor={inputId}
          className={`text-sm font-medium ${
            disabled ? "text-[oklch(var(--theme-muted-foreground))]" : "text-[oklch(var(--theme-foreground))]"
          }`}
        >
          {label}
          {required && <span className="text-[oklch(var(--theme-destructive))] ml-1">*</span>}
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
                ? "text-[oklch(var(--theme-destructive))]"
                : success
                ? "text-[oklch(var(--theme-success))]"
                : "text-[oklch(var(--theme-muted-foreground))]"
            }`}
          >
            {hint}
          </p>
        )}
      </div>
    </div>
  );
});

InputComponent.displayName = "Input";

export const Input = InputComponent;

export default Input;
