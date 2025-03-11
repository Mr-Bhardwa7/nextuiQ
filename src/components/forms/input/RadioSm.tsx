import { forwardRef, useId } from "react";

export interface RadioSmProps {
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

const RadioSm = forwardRef<HTMLInputElement, RadioSmProps>(({
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
      className={`flex cursor-pointer select-none items-center text-sm text-gray-500 dark:text-gray-400 ${
        disabled ? "cursor-not-allowed opacity-60" : ""
      } ${className}`}
    >
      <span className="relative">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          name={name}
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
          className={`mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${
            checked
              ? "border-brand-500 bg-brand-500"
              : "bg-transparent border-gray-300 dark:border-gray-700"
          }`}
          aria-hidden="true"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              checked ? "bg-white" : "bg-white dark:bg-[#1e2636]"
            }`}
            aria-hidden="true"
          ></span>
        </span>
      </span>
      <span className="select-none">{label}</span>
    </label>
  );
});

RadioSm.displayName = "RadioSm";

export default RadioSm;
