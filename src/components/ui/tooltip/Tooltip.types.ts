import { ReactNode } from 'react'

export interface TooltipProps {
  content: ReactNode
  disabled?: boolean
  delayDuration?: number
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
}

export interface TooltipTriggerProps {
  children: ReactNode
  className?: string
}

export interface TooltipContentProps {
  children: ReactNode
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
}