import React, { useState, useRef, useEffect, useId } from 'react';
import { cn } from '@/lib/utils';

export interface DropdownItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  selected?: boolean;
}

export interface DropdownProps {
  trigger?: React.ReactNode;
  items?: DropdownItemProps[];
  align?: 'start' | 'end';
  className?: string;
  onSelect?: (value: string) => void;
  // New props
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  'aria-modal'?: boolean;
  'aria-label'?: string;
}

export const Dropdown = ({
  trigger,
  items = [],
  align = 'end',
  className,
  onSelect,
  isOpen: controlledIsOpen,
  onClose,
  children,
  id,
  role = 'menu',
  'aria-modal': ariaModal,
  'aria-label': ariaLabel,
}: DropdownProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  // Use controlled or uncontrolled open state
  const isOpen = controlledIsOpen ?? internalIsOpen;
  const setIsOpen = (value: boolean) => {
    setInternalIsOpen(value);
    if (!value && onClose) {
      onClose();
    }
  };

  const handleItemClick = (item: DropdownItemProps) => {
    if (!item.disabled) {
      item.onClick?.();
      onSelect?.(item.value);
      setIsOpen(false);
      setActiveIndex(-1); // Reset active index when closing
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          setActiveIndex(prev => (prev < items.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          event.preventDefault();
          setActiveIndex(prev => (prev > 0 ? prev - 1 : items.length - 1));
          break;
        case 'Enter':
        case 'Space':
          event.preventDefault();
          if (activeIndex >= 0) {
            handleItemClick(items[activeIndex]);
          }
          break;
        case 'Escape':
          event.preventDefault();
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, items, activeIndex]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {trigger && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          role="button"
          tabIndex={0}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={id || menuId}
        >
          {trigger}
        </div>
      )}

      {isOpen && (
        <div
          id={id || menuId}
          className={cn(
            "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border",
            "border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]",
            "shadow-md animate-in fade-in-0 zoom-in-95",
            align === 'end' ? 'right-0' : 'left-0',
            className
          )}
          role={role}
          aria-modal={ariaModal}
          aria-label={ariaLabel}
        >
          {children || (
            <div className="py-1" role="menu" aria-orientation="vertical">
              {items?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={cn(
                    "relative flex w-full cursor-pointer select-none items-center px-3 py-2 text-sm outline-none transition-colors",
                    "text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))] hover:text-[oklch(var(--theme-foreground))]",
                    "focus:bg-[oklch(var(--theme-muted))] focus:text-[oklch(var(--theme-foreground))]",
                    item.disabled && "cursor-not-allowed opacity-50",
                    item.selected && "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-foreground))]",
                    activeIndex === index && "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-foreground))]"
                  )}
                  disabled={item.disabled}
                  role="menuitem"
                  tabIndex={-1}
                  aria-selected={item.selected}
                  aria-disabled={item.disabled}
                >
                  {item.icon && (
                    <span className="mr-2 h-4 w-4" aria-hidden="true">{item.icon}</span>
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
