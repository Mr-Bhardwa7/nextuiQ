import * as React from 'react'
import { cn } from '@/lib/utils'
import { StepIndicatorProps } from './types'

export function StepIndicator({
  currentStep,
  totalSteps,
  completedSteps,
  titles,
  onStepClick
}: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-[oklch(var(--theme-border))]" />
      <div className="relative flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = completedSteps.includes(index)
          const isCurrent = currentStep === index
          
          return (
            <button
              key={index}
              onClick={() => onStepClick?.(index)}
              className={cn(
                'flex flex-col items-center space-y-2',
                'relative z-10 cursor-pointer'
              )}
              disabled={!isCompleted && !isCurrent}
            >
              <div
                className={cn(
                  'h-8 w-8 rounded-full',
                  'flex items-center justify-center',
                  'border-2 transition-colors',
                  isCompleted && 'bg-[oklch(var(--theme-primary))] border-[oklch(var(--theme-primary))]',
                  isCurrent && 'border-[oklch(var(--theme-primary))]',
                  !isCompleted && !isCurrent && 'border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]'
                )}
              >
                {isCompleted ? (
                  <CheckIcon className="h-4 w-4 text-[oklch(var(--theme-primary-foreground))]" />
                ) : (
                  <span className={cn(
                    'text-sm font-medium',
                    isCurrent && 'text-[oklch(var(--theme-primary))]',
                    !isCurrent && 'text-[oklch(var(--theme-muted-foreground))]'
                  )}>
                    {index + 1}
                  </span>
                )}
              </div>
              <span className={cn(
                'text-sm font-medium',
                (isCompleted || isCurrent) && 'text-[oklch(var(--theme-foreground))]',
                !isCompleted && !isCurrent && 'text-[oklch(var(--theme-muted-foreground))]'
              )}>
                {titles[index]}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}