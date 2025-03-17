import { ReactNode } from 'react'

export interface Step {
  id: string
  title: string
  description?: string
  content: ReactNode
  validation?: (data: any) => Promise<boolean> | boolean
}

export interface MultiStepProps {
  steps: Step[]
  onComplete?: (data: any) => void
  onStepChange?: (currentStep: number, data: any) => void
  defaultData?: any
  autoSave?: boolean
}

export interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
  completedSteps: number[]
  titles: string[]
  onStepClick?: (step: number) => void
}