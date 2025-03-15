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
      primary: "bg-[oklch(var(--theme-primary)/0.1)] text-[oklch(var(--theme-primary))]",
      success: "bg-[oklch(var(--theme-success)/0.1)] text-[oklch(var(--theme-success))]",
      error: "bg-[oklch(var(--theme-error)/0.1)] text-[oklch(var(--theme-error))]",
      warning: "bg-[oklch(var(--theme-warning)/0.1)] text-[oklch(var(--theme-warning))]",
      info: "bg-[oklch(var(--theme-info)/0.1)] text-[oklch(var(--theme-info))]",
      light: "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]",
      dark: "bg-[oklch(var(--theme-muted-foreground))] text-[oklch(var(--theme-foreground))]",
    },
    solid: {
      primary: "bg-[oklch(var(--theme-primary))] text-white",
      success: "bg-[oklch(var(--theme-success))] text-white",
      error: "bg-[oklch(var(--theme-error))] text-white",
      warning: "bg-[oklch(var(--theme-warning))] text-white",
      info: "bg-[oklch(var(--theme-info))] text-white",
      light: "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-foreground))]",
      dark: "bg-[oklch(var(--theme-foreground))] text-white",
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
