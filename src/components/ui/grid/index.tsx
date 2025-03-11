import { cn } from '@/lib/utils';
import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  rows?: number;
  gap?: number | { x?: number; y?: number };
  minChildWidth?: string;
  autoFit?: boolean;
  autoFlow?: 'row' | 'col' | 'dense' | 'row dense' | 'col dense';
}

export function Grid({
  children,
  cols = 1,
  rows,
  gap = 4,
  className,
  minChildWidth,
  autoFit = false,
  autoFlow,
  ...props
}: GridProps) {
  const getGridCols = () => {
    if (autoFit && minChildWidth) {
      return `grid-cols-[repeat(auto-fit,minmax(${minChildWidth},1fr))]`;
    }
    if (typeof cols === 'number') {
      return `grid-cols-${cols}`;
    }
    if (typeof cols === 'object') {
      return cn(
        cols.sm && `sm:grid-cols-${cols.sm}`,
        cols.md && `md:grid-cols-${cols.md}`,
        cols.lg && `lg:grid-cols-${cols.lg}`,
        cols.xl && `xl:grid-cols-${cols.xl}`
      );
    }
    return '';
  };

  const getGap = () => {
    if (typeof gap === 'number') {
      return `gap-${gap}`;
    }
    return cn(gap?.x && `gap-x-${gap.x}`, gap?.y && `gap-y-${gap.y}`);
  };

  return (
    <div
      className={cn(
        'grid w-full',
        getGridCols(),
        rows && `grid-rows-${rows}`,
        getGap(),
        autoFlow && `grid-flow-${autoFlow}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
