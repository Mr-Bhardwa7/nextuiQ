import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TabOption {
  id: string;
  label: string;
  value: string;
}

export interface TabsProps {
  options: TabOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ 
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
        "flex items-center gap-0.5 rounded-lg bg-slate-100 p-0.5 dark:bg-slate-900",
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
            "px-3 py-2 font-medium w-full rounded-md text-sm transition-all",
            "hover:text-slate-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 dark:focus-visible:ring-slate-600",
            value === option.value
              ? "shadow-sm text-slate-900 dark:text-white bg-white dark:bg-slate-800"
              : "text-slate-500 dark:text-slate-400"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;