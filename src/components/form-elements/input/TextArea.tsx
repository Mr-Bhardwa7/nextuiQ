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

  let textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-sm 
      bg-[oklch(var(--theme-background))]
      text-[oklch(var(--theme-foreground))]
      placeholder:text-[oklch(var(--theme-muted-foreground))]
      focus:outline-none focus:ring-2 ${className}`;
  
  if (disabled) {
    textareaClasses += ` bg-[oklch(var(--theme-muted))] opacity-50 
      text-[oklch(var(--theme-muted-foreground))] 
      border-[oklch(var(--theme-border))] cursor-not-allowed`;
  } else if (error) {
    textareaClasses += ` border-[oklch(var(--theme-destructive))] 
      focus:ring-[oklch(var(--theme-destructive)/0.2)]`;
  } else {
    textareaClasses += ` border-[oklch(var(--theme-border))] 
      focus:ring-[oklch(var(--theme-ring))]`;
  }

  return (
    <div className="space-y-1.5">
      {label && (
        <label 
          htmlFor={textareaId}
          className={`block text-sm font-medium ${
            disabled 
              ? "text-[oklch(var(--theme-muted-foreground))]" 
              : "text-[oklch(var(--theme-foreground))]"
          }`}
        >
          {label}
          {required && <span className="text-[oklch(var(--theme-destructive))] ml-1">*</span>}
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
              error 
                ? "text-[oklch(var(--theme-destructive))]" 
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

TextAreaComponent.displayName = "TextArea";

export const TextArea = TextAreaComponent;
