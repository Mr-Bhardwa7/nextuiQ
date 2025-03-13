import { forwardRef, useId } from "react";

export interface TextareaProps {
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  required?: boolean;
  id?: string;
  name?: string;
  maxLength?: number;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const TextAreaComponent = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  placeholder = "Enter your message",
  rows = 3,
  value = "",
  onChange,
  className = "",
  disabled = false,
  error = false,
  hint = "",
  label,
  required = false,
  id,
  name,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const uniqueId = useId();
  const textareaId = id || uniqueId;
  const hintId = `${textareaId}-hint`;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  let textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden ${className}`;

  if (disabled) {
    textareaClasses += ` bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    textareaClasses += ` bg-transparent text-gray-400 border-gray-300 focus:border-error-300 focus:ring-3 focus:ring-error-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800`;
  } else {
    textareaClasses += ` bg-transparent text-gray-400 border-gray-300 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label 
          htmlFor={textareaId}
          className={`block text-sm font-medium ${
            disabled ? "text-gray-400" : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          ref={ref}
          id={textareaId}
          name={name}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={error}
          aria-label={ariaLabel || label}
          aria-describedby={hint ? hintId : ariaDescribedby}
          className={textareaClasses}
          {...props}
        />
        {hint && (
          <p
            id={hintId}
            className={`mt-2 text-sm ${
              error ? "text-error-500" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {hint}
          </p>
        )}
      </div>
    </div>
  );
});

TextAreaComponent.displayName = "TextArea";

export const TextArea = TextAreaComponent;
