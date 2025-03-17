import * as React from 'react'
import { MultiStepProps } from './types'
import { StepIndicator } from './StepIndicator'
import { Button } from '../button'

export function MultiStep({
  steps,
  onComplete,
  onStepChange,
  defaultData = {},
  autoSave = false
}: MultiStepProps) {
  // Update state types
  const [currentStep, setCurrentStep] = React.useState<number>(0)
  const [formData, setFormData] = React.useState<Record<string, any>>(defaultData)
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([])
  const [isValidating, setIsValidating] = React.useState(false)

  React.useEffect(() => {
    if (autoSave) {
      localStorage.setItem('multistep-data', JSON.stringify(formData))
    }
  }, [formData, autoSave])

  const handleNext = async () => {
    const currentStepData = steps[currentStep]
    if (currentStepData.validation) {
      setIsValidating(true)
      try {
        const isValid = await currentStepData.validation(formData)
        if (!isValid) return
      } finally {
        setIsValidating(false)
      }
    }

    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep])
      setCurrentStep(current => current + 1)
      onStepChange?.(currentStep + 1, formData)
    } else {
      onComplete?.(formData)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1)
      onStepChange?.(currentStep - 1, formData)
    }
  }

  const handleStepClick = (step: number) => {
    if (completedSteps.includes(step - 1) || step <= currentStep) {
      setCurrentStep(step)
      onStepChange?.(step, formData)
    }
  }

  const updateFormData = (data: Record<string, any>) => {
    setFormData(current => ({ ...current, ...data }))
  }

  return (
    <div className="space-y-8">
      <StepIndicator
        currentStep={currentStep}
        totalSteps={steps.length}
        completedSteps={completedSteps}
        titles={steps.map(step => step.title)}
        onStepClick={handleStepClick}
      />

      <div className="min-h-[200px]">
        {React.cloneElement(steps[currentStep].content as React.ReactElement, {
          data: formData,
          updateData: updateFormData,
        } as React.HTMLAttributes<HTMLElement>)}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={isValidating}
        >
          {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
        </Button>
      </div>
    </div>
  )
}