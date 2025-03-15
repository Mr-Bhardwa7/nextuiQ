import { forwardRef, useId } from "react";

export interface RadioProps {
  id?: string;
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const RadioComponent = forwardRef<HTMLInputElement, RadioProps>(({
  id,
  name,
  value,
  checked,
  label,
  onChange,
  className = "",
  disabled = false,
  required = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const uniqueId = useId();
  const radioId = id || uniqueId;

  return (
    <label
      htmlFor={radioId}
      className={`relative flex cursor-pointer select-none items-center gap-3 text-sm font-medium ${
        disabled
          ? "text-[oklch(var(--theme-muted-foreground))] cursor-not-allowed"
          : "text-[oklch(var(--theme-foreground))]"
      } ${className}`}
    >
      <input
        ref={ref}
        id={radioId}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={() => !disabled && onChange(value)}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel || label}
        aria-describedby={ariaDescribedby}
        aria-checked={checked}
        className="sr-only"
        {...props}
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-[1.25px] ${
          checked
            ? "border-[oklch(var(--theme-primary))] bg-[oklch(var(--theme-primary))]"
            : "bg-transparent border-[oklch(var(--theme-border))]"
        } ${
          disabled
            ? "bg-[oklch(var(--theme-muted))] border-[oklch(var(--theme-border))]"
            : ""
        }`}
        aria-hidden="true"
      >
        <span
          className={`h-2 w-2 rounded-full bg-[oklch(var(--theme-primary-foreground))] ${
            checked ? "block" : "hidden"
          }`}
          aria-hidden="true"
        ></span>
      </span>
      <span className="select-none">{label}</span>
    </label>
  );
});

RadioComponent.displayName = "Radio";

export const Radio = RadioComponent;
