import { forwardRef, useState, useRef, KeyboardEvent, ClipboardEvent, InputHTMLAttributes } from "react";

export interface OTPInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'type' | 'maxLength' | 'className'> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  className?: string;
  label?: string;
  description?: string;
  inputType?: 'numeric' | 'alphanumeric' | 'any';
}

export const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(({
  length = 6,
  value = "",
  onChange,
  disabled = false,
  error = false,
  hint,
  className = "",
  label = "Verification code",
  description = "Enter the verification code",
  inputType = 'numeric',
  ...props
}, ref) => {
  const [otp, setOTP] = useState(value.split(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const groupId = useRef(`otp-${Math.random().toString(36).slice(2, 11)}`);

  const handleChange = (index: number, value: string) => {
    const validationPatterns = {
      numeric: /^\d*$/,
      alphanumeric: /^[a-zA-Z0-9]*$/,
      any: /^.*$/,
    };

    if (!validationPatterns[inputType].test(value)) return;
    
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    onChange?.(newOTP.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
    
    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").slice(0, length);
        
        const validationPatterns = {
          numeric: /^\d*$/,
          alphanumeric: /^[a-zA-Z0-9]*$/,
          any: /^.*$/,
        };
    
        // Validate the entire pasted string
        if (!validationPatterns[inputType].test(pastedData)) return;
    
        const newOTP = [...otp];
        pastedData.split("").forEach((char, index) => {
          newOTP[index] = char;
          if (inputRefs.current[index]) {
            inputRefs.current[index]!.value = char;
          }
        });
    
        setOTP(newOTP);
        onChange?.(newOTP.join(""));
        inputRefs.current[Math.min(pastedData.length, length) - 1]?.focus();
      };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div ref={ref} className="space-y-2">
      <div 
        role="group"
        aria-labelledby={`${groupId.current}-label`}
        aria-describedby={`${groupId.current}-description ${error ? `${groupId.current}-error` : ''}`}
        className="space-y-2"
      >
        <label 
          id={`${groupId.current}-label`}
          className="block text-sm font-medium text-[oklch(var(--theme-foreground))]"
        >
          {label}
        </label>
        
        {description && (
          <p 
            id={`${groupId.current}-description`}
            className="text-sm text-[oklch(var(--theme-muted-foreground))]"
          >
            {description}
          </p>
        )}

        <div className={`flex gap-2 ${className}`}>
          {Array.from({ length }, (_, index) => (
            <input
              key={index}
              ref={el => {
                if (el) inputRefs.current[index] = el;
              }}
              type="text"
              inputMode={inputType === 'numeric' ? 'numeric' : 'text'}
              pattern={inputType === 'numeric' ? '\\d*' : undefined}
              maxLength={1}
              value={otp[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              disabled={disabled}
              aria-label={`Digit ${index + 1} of ${length}`}
              {...props}
              className={`h-12 w-12 text-center rounded-lg border text-lg font-semibold shadow-sm
                bg-[oklch(var(--theme-background))]
                text-[oklch(var(--theme-foreground))]
                focus:outline-none focus:ring-2
                ${disabled ? 
                  'text-[oklch(var(--theme-muted-foreground))] border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-muted))] cursor-not-allowed' :
                  error ?
                  'border-[oklch(var(--theme-destructive))] focus:ring-[oklch(var(--theme-destructive)/0.2)]' :
                  'border-[oklch(var(--theme-border))] focus:border-[oklch(var(--theme-ring))] focus:ring-[oklch(var(--theme-ring)/0.2)]'
                }`}
            />
          ))}
        </div>
      </div>
      
      {hint && (
        <p 
          id={`${groupId.current}-error`}
          className={`text-xs ${
            error ? "text-[oklch(var(--theme-destructive))]" : "text-[oklch(var(--theme-muted-foreground))]"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
});

OTPInput.displayName = "OTPInput";

export default OTPInput;