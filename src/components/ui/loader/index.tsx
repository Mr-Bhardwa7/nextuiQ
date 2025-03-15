export interface LoaderProps {
  className?: string;
  variant?: 'pulse' | 'circular';
}

export const Loader = ({ className = '', variant = 'pulse' }: LoaderProps) => {
  if (variant === 'circular') {
    return (
      <div className={`animate-[var(--loader-spin-animation)] ${className}`}>
        <svg 
          className="size-full text-[oklch(var(--theme-primary))]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <circle 
            className="opacity-[var(--loader-track-opacity)]" 
            cx="12" 
            cy="12" 
            r="10" 
            strokeWidth="4" 
          />
          <path 
            className="opacity-[var(--loader-indicator-opacity)]" 
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`animate-[var(--loader-pulse-animation)] rounded-lg bg-[oklch(var(--theme-muted))] ${className}`} />
  );
};
