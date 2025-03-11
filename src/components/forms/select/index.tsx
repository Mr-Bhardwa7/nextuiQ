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

const Select: React.FC<SelectProps> = ({
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
}) => {
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
        className={`h-11 w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-11 text-sm shadow-theme-xs 
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${disabled ? 'cursor-not-allowed opacity-50' : ''}
          ${selectedValue ? 'text-gray-800 dark:text-white/90' : 'text-gray-400 dark:text-gray-400'}
          placeholder:text-gray-400 
          focus:border-brand-300 
          focus:outline-hidden 
          focus:ring-3 
          focus:ring-brand-500/10 
          dark:border-gray-700 
          dark:bg-gray-900 
          dark:text-white/90 
          dark:placeholder:text-white/30 
          dark:focus:border-brand-800
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
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
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
          className={`h-5 w-5 ${error ? 'text-red-500' : 'text-gray-400'}`}
        />
      </div>
    </div>
  );
};

Select.displayName = "Select";

export default React.memo(Select);
