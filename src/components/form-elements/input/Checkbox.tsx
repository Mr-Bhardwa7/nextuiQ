import React, { forwardRef, useId } from "react";

export interface CheckboxProps {
  label?: string | React.ReactNode;
  checked: boolean;
  className?: string;
  id?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  checked,
  id,
  onChange,
  className = "",
  disabled = false,
  required = false,
  name,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const uniqueId = useId();
  const checkboxId = id || uniqueId;

  return (
    <label
      htmlFor={checkboxId}
      className={`flex items-center space-x-3 group ${
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      }`}
    >
      <div className="relative w-5 h-5">
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          name={name}
          className={`w-5 h-5 appearance-none border rounded-md
            border-[oklch(var(--theme-border))]
            checked:border-transparent
            checked:bg-[oklch(var(--theme-primary))]
            disabled:opacity-60 
            focus-visible:outline-none 
            focus-visible:ring-2 
            focus-visible:ring-[oklch(var(--theme-ring))]
            ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            ${className}`}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || (typeof label === 'string' ? label : undefined)}
          aria-describedby={ariaDescribedby}
          aria-checked={checked}
          {...props}
        />
        {checked && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="oklch(var(--theme-primary-foreground))"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {disabled && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="oklch(var(--theme-muted-foreground))"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-[oklch(var(--theme-foreground))]">
          {label}
        </span>
      )}
    </label>
  );
});

CheckboxComponent.displayName = "Checkbox";

export const Checkbox = CheckboxComponent;
