import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
  id?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  fallback,
  className = '',
  status,
  id = `avatar-${Math.random().toString(36).substr(2, 9)}`,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  const statusClasses = {
    online: 'bg-emerald-500',
    offline: 'bg-gray-400',
    busy: 'bg-rose-500',
    away: 'bg-amber-500'
  };

  const getFallbackInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const statusText = status ? `Status: ${status}` : '';
  const ariaLabel = `${alt || fallback || 'User avatar'} ${statusText}`.trim();

  return (
    <div 
      className="relative inline-block"
      role="img"
      aria-label={ariaLabel}
      id={id}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
          role="presentation"
        />
      ) : (
        <div
          className={`rounded-full flex items-center justify-center bg-slate-200 text-slate-600 font-medium ${
            sizeClasses[size]
          } ${className}`}
          aria-hidden="true"
        >
          {fallback ? getFallbackInitials(fallback) : '?'}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-slate-900 ${
            statusClasses[status]
          } ${size === 'sm' ? 'w-2 h-2' : 'w-3 h-3'}`}
          aria-hidden="true"
          role="status"
          title={`User is ${status}`}
        />
      )}
    </div>
  );
};
