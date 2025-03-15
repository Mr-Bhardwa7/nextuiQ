import React, { useState, useCallback, useId } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const SelectComponent = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
  disabled = false,
  error = false,
  required = false,
  name,
  id,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const uniqueId = useId();
  const selectId = id || uniqueId;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  }, [onChange]);

  return (
    <div className="relative">
      <select
        id={selectId}
        name={name}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={error}
        className={`h-11 w-full appearance-none rounded-lg border px-4 py-2.5 pr-11 text-sm shadow-sm 
          ${error ? 'border-[oklch(var(--theme-destructive))]' : 'border-[oklch(var(--theme-border))]'}
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          ${selectedValue ? 'text-[oklch(var(--theme-foreground))]' : 'text-[oklch(var(--theme-muted-foreground))]'}
          bg-[oklch(var(--theme-background))]
          placeholder:text-[oklch(var(--theme-muted-foreground))]
          focus:border-[oklch(var(--theme-primary))]
          focus:outline-none
          focus:ring-2
          focus:ring-[oklch(var(--theme-ring))]
          ${className}`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className="text-[oklch(var(--theme-foreground))] bg-[oklch(var(--theme-background))]"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div 
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <FiChevronDown 
          className={`h-5 w-5 ${error ? 'text-[oklch(var(--theme-destructive))]' : 'text-[oklch(var(--theme-muted-foreground))]'}`}
        />
      </div>
    </div>
  );
};

SelectComponent.displayName = "Select";

export const Select = React.memo(SelectComponent);
