import React from 'react';
import {Avatar} from '@/components/ui/avatar';

export interface AvatarTextProps {
  src?: string;
  fallback?: string;
  title: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
  id?: string;
  titleId?: string;
  subtitleId?: string;
}

export const AvatarText: React.FC<AvatarTextProps> = ({
  src,
  fallback,
  title,
  subtitle,
  size = 'md',
  status,
  className = '',
  id = `avatar-text-${Math.random().toString(36).substr(2, 9)}`,
  titleId = `title-${id}`,
  subtitleId = `subtitle-${id}`,
}) => {
  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const statusText = status ? `User is ${status}` : undefined;

  return (
    <div 
      className={`flex items-center gap-3 ${className}`}
      role="group"
      aria-labelledby={titleId}
      aria-describedby={subtitle ? subtitleId : undefined}
    >
      <Avatar 
        src={src} 
        fallback={fallback} 
        size={size} 
        status={status}
        aria-hidden="true"
        alt={statusText}
      />
      <div>
        <h4 
          id={titleId}
          className={`font-medium text-[oklch(var(--theme-foreground))] ${textSizeClasses[size]}`}
        >
          {title}
        </h4>
        {subtitle && (
          <p 
            id={subtitleId}
            className={`text-[oklch(var(--theme-muted-foreground))] ${size === 'lg' ? 'text-base' : 'text-sm'}`}
          >
            {subtitle}
          </p>
        )}
        {status && (
          <span className="sr-only">{statusText}</span>
        )}
      </div>
    </div>
  );
};
