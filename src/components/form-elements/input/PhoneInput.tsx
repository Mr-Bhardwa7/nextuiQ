import React, { useState, useCallback, useMemo, useId } from "react";

interface CountryCode {
  code: string;
  label: string;
}

export interface PhoneInputProps {
  countries: CountryCode[];
  placeholder?: string;
  onChange?: (phoneNumber: string) => void;
  selectPosition?: "start" | "end";
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const PhoneInputComponent = ({
  countries,
  placeholder = "+1 (555) 000-0000",
  onChange,
  selectPosition = "start",
  id,
  name,
  required = false,
  disabled = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
}: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [phoneNumber, setPhoneNumber] = useState<string>("+1");

  // Update the countryCodes to include the full country object
  const countryMap = useMemo(() => 
    countries.reduce((acc, country) => ({ 
      ...acc, 
      [country.code]: country 
    }), {} as Record<string, CountryCode>),
    [countries]
  );

  const handleCountryChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    const country = countryMap[newCountry];
    setPhoneNumber(country?.code || "+1");
    onChange?.(country?.code || "+1");
  }, [countryMap, onChange]);

  const uniqueId = useId();
  const inputId = id || uniqueId;
  const selectId = `${inputId}-country`;

  const handlePhoneNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    onChange?.(newPhoneNumber);
  }, [onChange]);

  const SelectComponent = useCallback(({ position }: { position: "start" | "end" }) => (
    <div className={`absolute ${position === "end" ? "right-0" : ""}`}>
      <select
        id={selectId}
        value={selectedCountry}
        onChange={handleCountryChange}
        disabled={disabled}
        required={required}
        aria-label="Select country code"
        className={`appearance-none bg-none ${
          position === "start" 
            ? "rounded-l-lg border-r" 
            : "rounded-r-lg border-l"
        } border-0 border-[oklch(var(--theme-border))] bg-transparent py-3 pl-3.5 pr-8 
          text-[oklch(var(--theme-foreground))] 
          focus:border-[oklch(var(--theme-ring))] 
          focus:outline-none focus:ring-2 
          focus:ring-[oklch(var(--theme-ring))]`}
      >
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code}
            className="text-[oklch(var(--theme-foreground))] bg-[oklch(var(--theme-background))]"
          >
            {country.code}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 flex items-center text-[oklch(var(--theme-muted-foreground))] pointer-events-none right-3" aria-hidden="true">
        <svg
          className="stroke-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  ), [selectId, selectedCountry, handleCountryChange, disabled, required, countries]);

  return (
    <div 
      className="relative flex" 
      role="group"
      aria-labelledby={ariaLabel ? undefined : inputId}
    >
      {selectPosition === "start" && <SelectComponent position="start" />}
      <input
        type="tel"
        id={inputId}
        name={name}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-label={ariaLabel || "Phone number"}
        aria-describedby={ariaDescribedby}
        inputMode="tel"
        autoComplete="tel"
        className={`h-11 w-full ${
          selectPosition === "start" ? "pl-[84px]" : "pr-[84px]"
        } rounded-lg border border-[oklch(var(--theme-border))] 
          bg-[oklch(var(--theme-background))] py-3 px-4 text-sm 
          text-[oklch(var(--theme-foreground))] shadow-sm 
          placeholder:text-[oklch(var(--theme-muted-foreground))] 
          focus:border-[oklch(var(--theme-ring))] 
          focus:outline-none focus:ring-2 
          focus:ring-[oklch(var(--theme-ring))]
          disabled:cursor-not-allowed disabled:opacity-50`}
      />
      {selectPosition === "end" && <SelectComponent position="end" />}
    </div>
  );
};

const MemoizedPhoneInput = React.memo(PhoneInputComponent);
MemoizedPhoneInput.displayName = "PhoneInput";

export const PhoneInput = MemoizedPhoneInput;
