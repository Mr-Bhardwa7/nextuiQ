import { forwardRef, useId } from "react";

export interface FileInputProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

const FileInputComponent = forwardRef<HTMLInputElement, FileInputProps>(({
  className,
  onChange,
  label,
  accept,
  multiple,
  required = false,
  disabled = false,
  id,
  name,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedby,
  ...props
}, ref) => {
  const uniqueId = useId();
  const inputId = id || uniqueId;

  return (
    <div>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[oklch(var(--theme-foreground))] mb-1"
        >
          {label}
          {required && <span className="text-[oklch(var(--theme-destructive))] ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type="file"
        id={inputId}
        name={name}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        required={required}
        disabled={disabled}
        aria-label={ariaLabel || label}
        aria-describedby={ariaDescribedby}
        aria-required={required}
        className={`h-11 w-full overflow-hidden rounded-lg border text-sm shadow-sm transition-colors
          border-[oklch(var(--theme-border))]
          bg-[oklch(var(--theme-background))]
          text-[oklch(var(--theme-muted-foreground))]
          file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg 
          file:border-0 file:border-r file:border-solid 
          file:border-[oklch(var(--theme-border))]
          file:bg-[oklch(var(--theme-muted))]
          file:py-3 file:pl-3.5 file:pr-3 file:text-sm
          file:text-[oklch(var(--theme-foreground))]
          hover:file:bg-[oklch(var(--theme-muted/0.8))]
          focus:outline-none focus:ring-2
          focus:ring-[oklch(var(--theme-ring))]
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}`}
        {...props}
      />
    </div>
  );
});

FileInputComponent.displayName = "FileInput";

export const FileInput = FileInputComponent;
