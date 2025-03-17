import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { TooltipProps, TooltipContentProps } from './Tooltip.types'

// Update context type to handle null refs
const TooltipContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLElement | null>
  contentRef: React.RefObject<HTMLDivElement | null>
  content: React.ReactNode
} | null>(null)

export function Tooltip({ 
  children, 
  content,
  disabled = false,
  delayDuration = 700,
  side = 'top', // Add side prop
  align = 'center' // Add align prop
}: TooltipProps) {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const timeoutRef = React.useRef<number | undefined>(undefined)

  const showTooltip = React.useCallback(() => {
    if (disabled) return
    timeoutRef.current = window.setTimeout(() => setOpen(true), delayDuration)
  }, [disabled, delayDuration])

  const hideTooltip = React.useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(false)
  }, [])

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <TooltipContext.Provider value={{ open, setOpen, triggerRef, contentRef, content }}>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </div>
      <TooltipContent side={side} align={align}>
        {content}
      </TooltipContent>
    </TooltipContext.Provider>
  )
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, className, side = 'top', align = 'center', ...props }, forwardedRef) => {
    const context = React.useContext(TooltipContext)
    if (!context) throw new Error('TooltipContent must be used within Tooltip')

    const { open, contentRef, triggerRef, content } = context
    const [position, setPosition] = React.useState({ top: 0, left: 0 })

    React.useEffect(() => {
      if (open && triggerRef.current) {
        const updatePosition = () => {
          const rect = triggerRef.current?.getBoundingClientRect()
          if (!rect) return

          const contentRect = contentRef.current?.getBoundingClientRect()
          if (!contentRect) return

          const viewportWidth = window.innerWidth
          const viewportHeight = window.innerHeight

          let top = 0
          let left = 0

          // Initial position calculation
          switch (side) {
            case 'top':
              top = rect.top - contentRect.height - 8
              left = rect.left + (rect.width - contentRect.width) / 2
              // If tooltip would go above viewport, show below instead
              if (top < 0) {
                top = rect.bottom + 8
              }
              break
            case 'bottom':
              top = rect.bottom + 8
              left = rect.left + (rect.width - contentRect.width) / 2
              // If tooltip would go below viewport, show above instead
              if (top + contentRect.height > viewportHeight) {
                top = rect.top - contentRect.height - 8
              }
              break
            case 'left':
              top = rect.top + (rect.height - contentRect.height) / 2
              left = rect.left - contentRect.width - 8
              // If tooltip would go off left edge, show on right instead
              if (left < 0) {
                left = rect.right + 8
              }
              break
            case 'right':
              top = rect.top + (rect.height - contentRect.height) / 2
              left = rect.right + 8
              // If tooltip would go off right edge, show on left instead
              if (left + contentRect.width > viewportWidth) {
                left = rect.left - contentRect.width - 8
              }
              break
          }

          // Prevent horizontal overflow
          left = Math.max(8, Math.min(left, viewportWidth - contentRect.width - 8))

          setPosition({
            top: top + window.scrollY,
            left: left + window.scrollX
          })
        }

        const handleScroll = () => {
          requestAnimationFrame(updatePosition)
        }

        updatePosition()
        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', handleScroll, true)

        return () => {
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', handleScroll, true)
        }
      }
    }, [open, side, align])

    if (!open || typeof document === 'undefined') return null

    return createPortal(
      <div
        ref={(node) => {
          contentRef.current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        role="tooltip"
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left
        }}
        className={cn(
          'z-[9999] max-w-xs overflow-hidden rounded-md', // Updated z-index
          'bg-[oklch(var(--theme-popover))]',
          'px-3 py-1.5',
          'text-sm text-[oklch(var(--theme-popover-foreground))]',
          'shadow-md',
          'animate-in fade-in-0 zoom-in-95',
          className
        )}
        {...props}
      >
        {children || content}
      </div>,
      document.body
    )
  }
)

TooltipContent.displayName = 'TooltipContent'
