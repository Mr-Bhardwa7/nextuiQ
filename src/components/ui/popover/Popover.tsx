import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { PopoverProps, PopoverTriggerProps, PopoverContentProps } from './types'

const PopoverContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  contentRef: React.RefObject<HTMLDivElement | null>
} | null>(null)

export const Popover = ({ children, open: controlledOpen, onOpenChange }: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen
  
  const triggerRef = React.useRef<HTMLElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        triggerRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, setOpen])

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      {children}
    </PopoverContext.Provider>
  )
}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, className, asChild, ...props }, forwardedRef) => {
    const context = React.useContext(PopoverContext)
    if (!context) throw new Error('PopoverTrigger must be used within Popover')

    const { open, setOpen, triggerRef } = context

    const ref = React.useCallback(
      (node: HTMLButtonElement | null) => {
        if (node) {
          (triggerRef as React.MutableRefObject<HTMLElement | null>).current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }
      },
      [forwardedRef, triggerRef]
    )

    const Element = asChild ? (React.Fragment as any) : 'button'
    const elementProps = asChild ? {} : {
      ref,
      className: cn('inline-flex items-center justify-center', className),
      onClick: () => setOpen(!open),
      'aria-expanded': open,
      'aria-haspopup': true,
      ...props
    }

    return <Element {...elementProps}>{children}</Element>
  }
)

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const context = React.useContext(PopoverContext)
    if (!context) throw new Error('PopoverContent must be used within Popover')

    const { open, contentRef, triggerRef } = context
    const [position, setPosition] = React.useState({ top: 0, left: 0 })

    React.useEffect(() => {
      if (open && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect()
        setPosition({
          top: rect.bottom + window.scrollY + 8,
          left: rect.left + window.scrollX
        })
      }
    }, [open])

    if (!open || typeof document === 'undefined') return null

    return createPortal(
      <div
        ref={(node) => {
          contentRef.current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left
        }}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md',
          'border border-[oklch(var(--theme-border))]',
          'bg-[oklch(var(--theme-background))]',
          'text-[oklch(var(--theme-foreground))]',
          'shadow-md outline-none',
          'animate-in fade-in-0 zoom-in-95',
          className
        )}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        {...props}
      >
        {children}
      </div>,
      document.body
    )
  }
)

PopoverTrigger.displayName = 'PopoverTrigger'
PopoverContent.displayName = 'PopoverContent'