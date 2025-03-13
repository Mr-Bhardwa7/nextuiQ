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
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500/50',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500/50',
    outline: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-200',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-200',
    link: 'text-blue-500 underline-offset-4 hover:underline dark:text-blue-400'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base'
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold gap-2 rounded-md transition-all ${
    sizeClasses[size]
  } ${variantClasses[variant]} ${
    (disabled || loading) ? "cursor-not-allowed opacity-50" : ""
  } ${className}`;

  const content = (
    <>
      {loading ? (
        <>
          <span className="animate-spin mr-2" aria-hidden="true">⚪</span>
          <span className="sr-only">Loading</span>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {startIcon && (
            <span className="flex items-center -ml-0.5" aria-hidden="true">
              {startIcon}
            </span>
          )}
          <span className="flex-1">{children}</span>
          {endIcon && (
            <span className="flex items-center -mr-0.5" aria-hidden="true">
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

