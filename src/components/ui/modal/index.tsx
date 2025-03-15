import React, { useRef, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { cn } from '@/lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  position?: 'center' | 'top';
  title?: string;
  description?: string;
  initialFocus?: React.RefObject<HTMLElement>;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  showCloseButton = true,
  isFullscreen = false,
  size = 'md',
  position = 'center',
  title,
  description,
  initialFocus,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      if (initialFocus?.current) {
        initialFocus.current.focus();
      } else {
        modalRef.current?.focus();
      }
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      previousActiveElement.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialFocus]);

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full'
  };

  const positionClasses = {
    center: 'items-center',
    top: 'items-start mt-16'
  };

  return (
    <div 
      className={cn(
        "fixed inset-0 flex justify-center",
        positionClasses[position],
        "overflow-y-auto z-50",
        "animate-in fade-in duration-200"
      )}
      role="presentation"
    >
      <div
        className="fixed inset-0 bg-[oklch(var(--theme-background)/0.8)] backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className={cn(
          "relative w-full m-4",
          !isFullscreen && [
            sizeClasses[size],
            "rounded-lg bg-[oklch(var(--theme-background))]",
            "shadow-lg",
            "border border-[oklch(var(--theme-border))]"
          ],
          isFullscreen && "w-full h-full bg-[oklch(var(--theme-background))]",
          "animate-in zoom-in-95 duration-200",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
        tabIndex={-1}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className={cn(
              "absolute right-4 top-4 z-10 rounded-sm p-2",
              "text-[oklch(var(--theme-muted-foreground))] hover:text-[oklch(var(--theme-foreground))]",
              "transition-colors hover:bg-[oklch(var(--theme-muted))]"
            )}
            aria-label="Close modal"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <div className="p-6">
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold mb-2 text-[oklch(var(--theme-foreground))]">
              {title}
            </h2>
          )}
          {description && (
            <p id="modal-description" className="text-[oklch(var(--theme-muted-foreground))] mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
