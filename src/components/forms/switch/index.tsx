import { forwardRef, useId, useState } from "react";

export interface SwitchProps {
  label: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  color?: "blue" | "gray";
  id?: string;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const SwitchComponent = forwardRef<HTMLInputElement, SwitchProps>(({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
  color = "blue",
  id,
  name,
  required = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const uniqueId = useId();
  const switchId = id || uniqueId;

  const handleToggle = () => {
    if (disabled) return;
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  const switchColors = color === "blue"
    ? {
        background: isChecked
          ? "bg-brand-500"
          : "bg-gray-200 dark:bg-white/10",
        knob: isChecked
          ? "translate-x-full bg-white"
          : "translate-x-0 bg-white",
      }
    : {
        background: isChecked
          ? "bg-gray-800 dark:bg-white/10"
          : "bg-gray-200 dark:bg-white/10",
        knob: isChecked
          ? "translate-x-full bg-white"
          : "translate-x-0 bg-white",
      };

  return (
    <label
      htmlFor={switchId}
      className={`flex cursor-pointer select-none items-center gap-3 text-sm font-medium ${
        disabled ? "text-gray-400 cursor-not-allowed" : "text-gray-700 dark:text-gray-400"
      }`}
    >
      <div className="relative">
        <input
          ref={ref}
          type="checkbox"
          id={switchId}
          name={name}
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          required={required}
          aria-label={ariaLabel || label}
          aria-describedby={ariaDescribedby}
          aria-checked={isChecked}
          className="sr-only"
          {...props}
        />
        <div
          className={`block transition duration-150 ease-linear h-6 w-11 rounded-full ${
            disabled
              ? "bg-gray-100 pointer-events-none dark:bg-gray-800"
              : switchColors.background
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full shadow-theme-sm duration-150 ease-linear transform ${switchColors.knob}`}
          aria-hidden="true"
        />
      </div>
      <span className="select-none">{label}</span>
    </label>
  );
});

SwitchComponent.displayName = "Switch";

export const Switch = SwitchComponent;