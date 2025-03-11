import { useState, useCallback } from 'react';

interface UseModalProps {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useModal = ({ defaultOpen = false, onOpenChange }: UseModalProps = {}): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange]);

  const close = useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      onOpenChange?.(newState);
      return newState;
    });
  }, [onOpenChange]);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};