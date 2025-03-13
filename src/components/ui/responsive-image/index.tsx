import React from 'react';
import { cn } from '@/lib/utils';

export interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  aspectRatio?: string;
  containerClassName?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImageComponent = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  ({
    src,
    alt,
    fallback = '/images/placeholder.png',
    aspectRatio = '16/9',
    className,
    containerClassName,
    loading = 'lazy',
    objectFit = 'cover',
    ...props
  }, ref) => {
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const handleError = () => {
      setError(true);
      setIsLoading(false);
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    return (
      <div
        className={cn(
          'relative overflow-hidden bg-slate-100 dark:bg-slate-800',
          containerClassName
        )}
        style={{ aspectRatio }}
      >
        <img
          ref={ref}
          src={error ? fallback : src}
          alt={alt}
          className={cn(
            'h-full w-full transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            objectFit === 'contain' && 'object-contain',
            objectFit === 'cover' && 'object-cover',
            objectFit === 'fill' && 'object-fill',
            objectFit === 'none' && 'object-none',
            objectFit === 'scale-down' && 'object-scale-down',
            className
          )}
          onError={handleError}
          onLoad={handleLoad}
          loading={loading}
          {...props}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-500" />
          </div>
        )}
      </div>
    );
  }
);

ResponsiveImageComponent.displayName = 'ResponsiveImage';

export const ResponsiveImage = ResponsiveImageComponent;