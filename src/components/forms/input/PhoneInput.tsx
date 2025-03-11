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

const PhoneInput: React.FC<PhoneInputProps> = ({
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
}) => {
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
        } border-0 border-gray-200 bg-transparent py-3 pl-3.5 pr-8 leading-tight text-gray-700 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:text-gray-400`}
      >
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code}
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {country.code}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 flex items-center text-gray-700 pointer-events-none right-3 dark:text-gray-400" aria-hidden="true">
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
        className={`dark:bg-dark-900 h-11 w-full ${
          selectPosition === "start" ? "pl-[84px]" : "pr-[84px]"
        } rounded-lg border border-gray-300 bg-transparent py-3 px-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800`}
      />
      {selectPosition === "end" && <SelectComponent position="end" />}
    </div>
  );
};

export default React.memo(PhoneInput);
