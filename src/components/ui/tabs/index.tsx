import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TabOption {
  id: string;
  label: string | React.ReactNode;  // Update to accept both string and ReactNode
  value: string;
}

export interface TabsProps {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ 
  options, 
  value, 
  onChange,
  className 
}) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, option: TabOption) => {
    const currentIndex = options.findIndex(opt => opt.value === value);
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        onChange(options[prevIndex].value);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        onChange(options[nextIndex].value);
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        onChange(option.value);
        break;
    }
  }, [options, value, onChange]);

  return (
    <div
      ref={tabsRef}
      role="tablist"
      aria-orientation="horizontal"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-[oklch(var(--theme-muted))] p-1",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.id}
          role="tab"
          aria-selected={value === option.value}
          aria-controls={`panel-${option.id}`}
          id={`tab-${option.id}`}
          tabIndex={value === option.value ? 0 : -1}
          onClick={() => onChange(option.value)}
          onKeyDown={(e) => handleKeyDown(e, option)}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(var(--theme-ring))] focus-visible:ring-offset-2",
            "hover:text-[oklch(var(--theme-foreground))]",
            value === option.value
              ? "bg-[oklch(var(--theme-background))] text-[oklch(var(--theme-foreground))] shadow-sm"
              : "text-[oklch(var(--theme-muted-foreground)] hover:bg-[oklch(var(--theme-muted)/0.8)]"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
