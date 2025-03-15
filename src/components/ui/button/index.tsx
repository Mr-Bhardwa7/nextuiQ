import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  startIcon,
  endIcon,
  disabled,
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
    link: 'text-[oklch(var(--theme-primary))] underline-offset-4 hover:underline'
  };

  const sizeClasses = {
    sm: 'text-[var(--text-sm)] px-[var(--spacing)] py-[calc(var(--spacing)*0.5)]',
    md: 'text-[var(--text-base)] px-[calc(var(--spacing)*1.5)] py-[var(--spacing)]'
  };

  const baseClasses = `inline-flex items-center justify-center font-[var(--font-weight-semibold)] gap-[var(--spacing)] rounded-[var(--radius-md)] transition-all duration-[var(--ease-in-out)] ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${
    (disabled || loading) ? "cursor-not-allowed opacity-50" : ""
  } ${className}`;

  const content = (
    <>
      {loading ? (
        <>
          <span className="animate-[var(--animate-spin)] mr-[var(--spacing)]" aria-hidden="true">⚪</span>
          <span className="sr-only">Loading</span>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {startIcon && (
            <span className="flex items-center -ml-[calc(var(--spacing)*0.125)]" aria-hidden="true">
              {startIcon}
            </span>
          )}
          <span className="flex-1">{children}</span>
          {endIcon && (
            <span className="flex items-center -mr-[calc(var(--spacing)*0.125)]" aria-hidden="true">
              {endIcon}
            </span>
          )}
        </>
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
        {...commonProps}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={disabled || loading}
      {...commonProps}
      {...props}
    >
      {content}
    </button>
  );
};

