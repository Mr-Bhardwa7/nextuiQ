import React, { useState, useCallback, useId, useRef, useEffect } from "react";
import { HTMLAttributes } from "react";

// Define the Option type for the options array
export interface Option {
  value: string;
  text: string;
  selected: boolean;
}

// Extend MultiSelectProps with HTMLAttributes for div and input but omit conflicting props
export interface MultiSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'id' | 'aria-label' | 'aria-describedby'> {
  label: string;
  options: Option[];
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  name?: string;
  id?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const MultiSelectComponent = React.forwardRef<HTMLDivElement, MultiSelectProps>(({
  label,
  options,
  defaultSelected = [],
  onChange,
  disabled = false,
  required = false,
  error = false,
  name,
  id: externalId,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props // Spread additional props
}, ref) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(defaultSelected);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();
  const id = externalId || uniqueId;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Only add the event listener if the dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when the component unmounts or when dropdown state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  }, [disabled]);

  const handleSelect = useCallback((optionValue: string) => {
    setSelectedOptions((prev) => {
      const newSelected = prev.includes(optionValue)
        ? prev.filter((value) => value !== optionValue)
        : [...prev, optionValue];
      onChange?.(newSelected);
      return newSelected;
    });
  }, [onChange]);

  const removeOption = useCallback((value: string) => {
    setSelectedOptions((prev) => {
      const newSelected = prev.filter((opt) => opt !== value);
      onChange?.(newSelected);
      return newSelected;
    });
  }, [onChange]);

  const selectedValuesText = options
    .filter((option) => selectedOptions.includes(option.value))
    .map((option) => option.text);

  return (
    <div className="w-full" ref={ref} {...props}>
      <label
        id={`${id}-label`}
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-[oklch(var(--theme-foreground))]"
      >
        {label}
        {required && (
          <span
            aria-hidden="true"
            className="text-[oklch(var(--theme-destructive))] ml-1"
          >
            *
          </span>
        )}
      </label>

      <div
        className="relative z-20 inline-block w-full"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={`${id}-label`}
      >
        <div className="relative flex flex-col items-center">
          <div
            onClick={toggleDropdown}
            className="w-full"
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
          >
            <div
              className={`mb-2 flex h-11 rounded-lg border ${
                error
                  ? "border-[oklch(var(--theme-destructive))]"
                  : "border-[oklch(var(--theme-border))]"
              } py-1.5 pl-3 pr-3 shadow-sm outline-none transition 
              focus-within:border-[oklch(var(--theme-ring))] focus-within:ring-2 focus-within:ring-[oklch(var(--theme-ring))]
              bg-[oklch(var(--theme-background))]`}
            >
              <div className="flex flex-wrap flex-auto gap-2">
                {selectedValuesText.length > 0 ? (
                  selectedValuesText.map((text, index) => (
                    <div
                      key={`${text}-${index}`}
                      className="group flex items-center justify-center rounded-full border-[0.7px] border-[oklch(var(--theme-border))] 
                        bg-[oklch(var(--theme-muted))] py-1 pl-2.5 pr-2 text-sm text-[oklch(var(--theme-foreground))]
                        hover:border-[oklch(var(--theme-border))]"
                    >
                      <span className="flex-initial max-w-full">{text}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeOption(selectedOptions[index]);
                        }}
                        aria-label={`Remove ${text}`}
                        className="pl-2 text-[oklch(var(--theme-muted-foreground))] cursor-pointer 
                          hover:text-[oklch(var(--theme-foreground))]"
                      >
                        <svg
                          className="fill-current"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z"
                          />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <input
                    id={id}
                    name={name}
                    placeholder="Select option"
                    className="w-full h-full p-1 pr-2 text-sm bg-transparent border-0 outline-none appearance-none 
                      placeholder:text-[oklch(var(--theme-muted-foreground))] 
                      text-[oklch(var(--theme-foreground))]"
                    readOnly
                    disabled={disabled}
                    aria-readonly="true"
                    value="Select option"
                  />
                )}
              </div>
              <div className="flex items-center py-1 pl-1 pr-1 w-7">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  aria-label={isOpen ? "Close options" : "Open options"}
                  className="w-5 h-5 text-[oklch(var(--theme-muted-foreground))] outline-none cursor-pointer"
                  disabled={disabled}
                >
                  <svg
                    className={`stroke-current ${isOpen ? "rotate-180" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.79175 7.39551L10.0001 12.6038L15.2084 7.39551"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div
              ref={dropdownRef}
              role="listbox"
              aria-multiselectable="true"
              aria-label={ariaLabel || label}
              aria-describedby={ariaDescribedby}
              className="absolute left-0 z-40 w-full overflow-y-auto bg-[oklch(var(--theme-background))] 
                rounded-lg shadow-md top-full max-h-select border border-[oklch(var(--theme-border))]"
              onClick={(e) => e.stopPropagation()} // Prevent click propagation
            >
              <div className="flex flex-col">
                {options.map((option) => (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={selectedOptions.includes(option.value)}
                    onClick={() => handleSelect(option.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelect(option.value);
                      }
                    }}
                    tabIndex={0}
                    className="w-full cursor-pointer border-b border-[oklch(var(--theme-border))] hover:bg-[oklch(var(--theme-muted))]"
                  >
                    <div
                      className={`relative flex w-full items-center p-2 pl-2 ${
                        selectedOptions.includes(option.value)
                          ? "bg-[oklch(var(--theme-primary)/0.1)]"
                          : ""
                      }`}
                    >
                      <div className="mx-2 leading-6 text-[oklch(var(--theme-foreground))]">
                        {option.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

MultiSelectComponent.displayName = "MultiSelect";

export const MultiSelect = React.memo(MultiSelectComponent);
