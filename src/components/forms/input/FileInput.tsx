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

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({
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
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
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
        className={`focus:border-ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:file:ring-brand-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
});

FileInput.displayName = "FileInput";

export default FileInput;
