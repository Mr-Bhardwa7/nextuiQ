import { ReactNode } from 'react'

export interface PopoverProps {
  /** Whether the popover is open */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export interface PopoverTriggerProps {
  children: ReactNode
  className?: string
  asChild?: boolean
}

export interface PopoverContentProps {
  children: ReactNode
  className?: string
}