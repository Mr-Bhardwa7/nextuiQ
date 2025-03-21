import React from 'react';

// ButtonProps with Omit to avoid passing certain props directly to the native button element
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'aria-describedby'> {
  variant?: 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  tag?: 'button' | 'a';
  href?: string;
  loading?: boolean;
  loadingText?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  disabled?: boolean;  
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  disabled = false,  // Default to false
  tag = 'button',
  href,
  loading = false,
  loadingText = 'Loading...',
  target,
  rel,
  ariaLabel,
  ariaDescribedBy,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-[oklch(var(--theme-primary))] text-white hover:bg-[oklch(var(--theme-primary-dark))] focus:ring-[oklch(var(--theme-primary)/50)]',
    destructive: 'bg-[oklch(var(--theme-error))] text-white hover:bg-[oklch(var(--theme-error)/90)] focus:ring-[oklch(var(--theme-error)/50)]',
    outline: 'border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))]',
    secondary: 'bg-[oklch(var(--theme-secondary))] text-white hover:bg-[oklch(var(--theme-secondary-dark))]',
    ghost: 'text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))]',
    link: 'underline-offset-4 hover:underline p-0 h-auto font-normal [&:not([class*="text-"])]:text-[oklch(var(--theme-primary))]'
  };

  const sizeClasses = {
    sm: 'text-[var(--text-sm)] px-[var(--spacing)] py-[calc(var(--spacing)*0.5)]',
    md: 'text-[var(--text-base)] px-[calc(var(--spacing)*1.5)] py-[var(--spacing)]'
  };

  const baseClasses = `inline-flex items-center justify-center font-[var(--font-weight-semibold)] gap-[var(--spacing)] rounded-[var(--radius-md)] transition-all duration-[var(--ease-in-out)] whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${(disabled || loading) ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${className}`;

  const content = (
    <>
      {loading ? (
        <>
          <span className="animate-[var(--animate-spin)] mr-[var(--spacing)]" aria-hidden="true">⚪</span>
          <span className="sr-only">Loading</span>
          <span>{loadingText}</span>
        </>
      ) : (
        <div className="inline-flex items-center gap-[var(--spacing)]">
          {startIcon && (
            <span className="flex items-center" aria-hidden="true">
              {startIcon}
            </span>
          )}
          {typeof children === 'string' ? (
            <span>{children}</span>
          ) : (
            <div className="inline-flex items-center gap-3">
              {children}
            </div>
          )}
          {endIcon && (
            <span className="flex items-center" aria-hidden="true">
              {endIcon}
            </span>
          )}
        </div>
      )}
    </>
  );

  const commonProps = {
    className: baseClasses,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-disabled': disabled || loading,
    'aria-busy': loading,
  };

  if (tag === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? `${rel || ''} noopener noreferrer`.trim() : rel}
        role="button"
        tabIndex={disabled || loading ? -1 : 0}
        {...commonProps} // Spread commonProps here
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} // Explicitly cast to anchor attributes
      >
        {content}
      </a>
    );
  }

  // Default to 'button' tag if tag is not 'a'
  return (
    <button
      type={props.type || 'button'}
      disabled={disabled || loading} // Apply disabled to the button
      {...commonProps} // Spread commonProps here
      {...props} // Spread the rest of the props
    >
      {content}
    </button>
  );
};
