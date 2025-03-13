import React from "react";

type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor = "primary" | "success" | "error" | "warning" | "info" | "light" | "dark";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  color?: BadgeColor;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  role?: 'status' | 'badge';
  ariaLabel?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
  id = `badge-${Math.random().toString(36).substr(2, 9)}`,
  role = 'status',
  ariaLabel,
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-1.5 rounded-full font-medium whitespace-nowrap";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  const variants = {
    light: {
      primary: "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
      success: "bg-green-50 text-green-700 dark:bg-green-500/20 dark:text-green-400",
      error: "bg-red-50 text-red-700 dark:bg-red-500/20 dark:text-red-400",
      warning: "bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
      info: "bg-sky-50 text-sky-700 dark:bg-sky-500/20 dark:text-sky-400",
      light: "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300",
      dark: "bg-slate-200 text-slate-800 dark:bg-slate-500/40 dark:text-slate-200",
    },
    solid: {
      primary: "bg-blue-500 text-white dark:bg-blue-600",
      success: "bg-green-500 text-white dark:bg-green-600",
      error: "bg-red-500 text-white dark:bg-red-600",
      warning: "bg-amber-500 text-white dark:bg-amber-600",
      info: "bg-sky-500 text-white dark:bg-sky-600",
      light: "bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100",
      dark: "bg-slate-800 text-white dark:bg-slate-700",
    },
  };

  const sizeClass = sizeStyles[size];
  const colorStyles = variants[variant][color];

  return (
    <span 
      className={`${baseStyles} ${sizeClass} ${colorStyles}`}
      id={id}
      role={role}
      aria-label={ariaLabel}
    >
      {startIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </span>
  );
};
