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

const Modal = ({
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
        "overflow-y-auto z-[100]",
        "animate-in fade-in duration-200"
      )}
      role="presentation"
    >
      <div
        className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className={cn(
          "relative w-full",
          !isFullscreen && [
            sizeClasses[size],
            "rounded-2xl bg-white dark:bg-slate-900",
            "shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04)]",
            "dark:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.25)]",
            "border border-slate-200/50 dark:border-slate-700/50"
          ],
          isFullscreen && "w-full h-full bg-white dark:bg-slate-900",
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
              "absolute right-4 top-4 z-10 rounded-full p-2",
              "text-slate-500 hover:text-slate-700 hover:bg-slate-100",
              "dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-800",
              "transition-colors"
            )}
            aria-label="Close modal"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <div className="p-6">
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p id="modal-description" className="text-slate-500 dark:text-slate-400 mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;