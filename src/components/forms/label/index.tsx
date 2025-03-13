import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
  disabled?: boolean;
  "aria-label"?: string;
}

const LabelComponent = forwardRef<HTMLLabelElement, LabelProps>(({
  htmlFor,
  children,
  className,
  required = false,
  disabled = false,
  "aria-label": ariaLabel,
  ...props
}, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={twMerge(
        "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
    </label>
  );
});

LabelComponent.displayName = "Label";

export const Label = LabelComponent;
