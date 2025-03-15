import { cn } from '@/lib/utils';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'elevated' | 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
  draggable?: boolean;
  fullWidth?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
}

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  image?: string;
  alt?: string;
  height?: string;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  position?: 'start' | 'end';
}

export function Card({
  children,
  className,
  variant = 'elevated',
  size = 'md',
  clickable = false,
  draggable = false,
  fullWidth = false,
  orientation = 'vertical',
  ...props
}: CardProps) {
  const variantClasses = {
    elevated: 'bg-[oklch(var(--theme-background))] shadow-md hover:shadow-lg transition-shadow',
    filled: 'bg-[oklch(var(--theme-muted))]',
    outlined: 'border border-[oklch(var(--theme-border))] bg-transparent'
  };

  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden',
        variantClasses[variant],
        sizeClasses[size],
        clickable && 'cursor-pointer hover:scale-[1.02] transition-transform',
        draggable && 'cursor-move',
        fullWidth && 'w-full',
        orientation === 'horizontal' && 'flex',
        className
      )}
      role="article"
      tabIndex={clickable ? 0 : undefined}
      aria-orientation={orientation}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ 
  className,
  title,
  subtitle,
  avatar,
  action,
  ...props
}: CardHeaderProps) {
  const headerId = React.useId();
  
  return (
    <div
      className={cn('flex items-start gap-4 p-4', className)}
      role="heading"
      aria-level={2}
      {...props}
    >
      {avatar && <div className="flex-shrink-0" aria-hidden="true">{avatar}</div>}
      <div className="flex-grow">
        // In CardHeader
        {title && (
          <div id={headerId} className="text-lg font-semibold text-[oklch(var(--theme-foreground))]">
            {title}
          </div>
        )}
        {subtitle && (
          <div className="text-sm text-[oklch(var(--theme-muted-foreground))]" aria-describedby={headerId}>
            {subtitle}
          </div>
        )}
      </div>
      {action && <div className="flex-shrink-0 ml-auto">{action}</div>}
    </div>
  );
}

export function CardMedia({ 
  children,
  className,
  image,
  alt = '',
  height = 'h-48',
  ...props
}: CardMediaProps) {
  return (
    <div
      className={cn(height, 'relative overflow-hidden', className)}
      role="img"
      aria-label={alt}
      {...props}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      className={cn('p-4 text-[oklch(var(--theme-muted-foreground))]', className)}
      role="region"
      {...props}
    >
      {children}
    </div>
  );
}

export function CardActions({
  children,
  className,
  position = 'end',
  ...props
}: CardActionsProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 p-4',
        position === 'end' ? 'justify-end' : 'justify-start',
        className
      )}
      role="group"
      aria-label="Card actions"
      {...props}
    >
      {children}
    </div>
  );
}