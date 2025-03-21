import React, { useState, useCallback, useRef, useEffect } from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import type { Option } from "./index";
import { HTMLAttributes } from "react";

// Extend SearchableSelectProps with HTMLAttributes for div and button
interface SearchableSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'id' | 'aria-label' | 'aria-describedby'> {
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

export const SearchableSelect = ({
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
  ...props // Spread any extra props onto the outermost div
}: SearchableSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find(opt => opt.value === defaultValue) || null
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleSelect(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setSearchTerm("");
        break;
    }
  }, [isOpen, filteredOptions, focusedIndex]);

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const element = listRef.current.children[focusedIndex] as HTMLElement;
      element.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex]);

  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchTerm]);

  const handleSelect = useCallback((option: Option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm("");
  }, [onChange]);

  const handleClear = useCallback(() => {
    setSelectedOption(null);
    onChange("");
    setSearchTerm("");
  }, [onChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div 
      ref={containerRef} 
      className="relative"
      onKeyDown={handleKeyDown}
      {...props} // Spread additional props
    >
      <button
        type="button"
        id={id}
        name={name}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedby}
        aria-invalid={error}
        aria-required={required}
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-lg border px-4 py-2.5 text-sm shadow-sm",
          error ? "border-[oklch(var(--theme-destructive))]" : "border-[oklch(var(--theme-border))]",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
          "bg-[oklch(var(--theme-background))]",
          "focus:outline-none focus:ring-2 focus:ring-[oklch(var(--theme-ring))]",
          className
        )}
      >
        <span className={selectedOption ? "text-[oklch(var(--theme-foreground))]" : "text-[oklch(var(--theme-muted-foreground))]"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <div className="flex items-center gap-2">
          {selectedOption && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="p-1 hover:bg-[oklch(var(--theme-muted))] rounded-md"
            >
              <FiX className="h-4 w-4 text-[oklch(var(--theme-muted-foreground))]" />
            </button>
          )}
          <FiChevronDown className={cn(
            "h-5 w-5 transition-transform",
            error ? "text-[oklch(var(--theme-destructive))]" : "text-[oklch(var(--theme-muted-foreground))]",
            isOpen && "rotate-180"
          )} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] shadow-lg">
          <div className="relative p-2">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(var(--theme-muted-foreground))]" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-md border border-[oklch(var(--theme-border))] pl-9 pr-4 py-2 text-sm bg-[oklch(var(--theme-background))] focus:outline-none focus:ring-2 focus:ring-[oklch(var(--theme-ring))]"
            />
          </div>
          <ul
            ref={listRef}
            role="listbox"
            className="max-h-60 overflow-auto p-2 space-y-1"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={selectedOption?.value === option.value}
                  onClick={() => !option.disabled && handleSelect(option)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm cursor-pointer",
                    option.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[oklch(var(--theme-muted))]",
                    (selectedOption?.value === option.value || focusedIndex === index) && "bg-[oklch(var(--theme-muted))]",
                    "text-[oklch(var(--theme-foreground))]"
                  )}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-[oklch(var(--theme-muted-foreground))]">
                No options found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
