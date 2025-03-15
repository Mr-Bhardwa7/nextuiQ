import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';
import { Button } from '../button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/ui/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Base Modal Example
const BasicModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome Back!"
        description="Enter your credentials to access your account"
      >
        <div className="space-y-4">
          <p className="text-[oklch(var(--theme-foreground))]">
            This is a basic modal with a title and description.
          </p>
          <div className="flex justify-end">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

// Alert Modal Example
const AlertModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(true)}>Open Alert</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="sm"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[oklch(var(--theme-destructive)/0.1)]">
              <svg className="w-6 h-6 text-[oklch(var(--theme-destructive))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[oklch(var(--theme-foreground))]">Delete Account</h3>
              <p className="text-sm text-[oklch(var(--theme-muted-foreground))]">Are you sure you want to delete your account? This action cannot be undone.</p>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>Delete</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

// Form Modal Example
const FormModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>Open Form</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create Project"
        size="lg"
      >
        <div className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[oklch(var(--theme-foreground))]">Project Name</label>
              <input 
                type="text" 
                className="mt-1 w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] px-3 py-2 text-sm"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[oklch(var(--theme-foreground))]">Description</label>
              <textarea 
                className="mt-1 w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] px-3 py-2 text-sm"
                rows={3}
                placeholder="Enter project description"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsOpen(false)}>Create</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const GalleryModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>Open Gallery</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="xl"
        title="Photo Gallery"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square rounded-lg bg-[oklch(var(--theme-muted))] p-2 hover:bg-[oklch(var(--theme-muted)/0.8)] transition-colors">
              <div className="w-full h-full rounded-md bg-[oklch(var(--theme-background))] flex items-center justify-center">
                <span className="text-[oklch(var(--theme-muted-foreground))]">Image {item}</span>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

// Multi-Step Modal
const MultiStepModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleClose = () => {
    setIsOpen(false);
    setStep(1);
  };

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>Multi-Step Form</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="lg"
      >
        <div className="space-y-6">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:bg-[oklch(var(--theme-border))] after:-translate-y-1/2">
            <ol className="relative z-10 flex justify-between">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs
                    ${step >= item ? 'bg-[oklch(var(--theme-primary))] text-[oklch(var(--theme-primary-foreground))]' 
                    : 'bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]'}`}>
                    {item}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="min-h-[200px]">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[oklch(var(--theme-foreground))]">Personal Information</h3>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] px-3 py-2"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] px-3 py-2"
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[oklch(var(--theme-foreground))]">Preferences</h3>
                <div className="space-y-2">
                  <select className="w-full rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] px-3 py-2">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[oklch(var(--theme-foreground))]">Confirmation</h3>
                <p className="text-[oklch(var(--theme-muted-foreground))]">Please review your information before submitting.</p>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button 
              onClick={() => step < 3 ? setStep(step + 1) : handleClose()}
            >
              {step === 3 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

// Success Modal with Animation
const SuccessModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>Show Success</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="sm"
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 rounded-full bg-[oklch(var(--theme-primary)/0.1)] mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 text-[oklch(var(--theme-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[oklch(var(--theme-foreground))]">Success!</h3>
          <p className="text-[oklch(var(--theme-muted-foreground))]">Your action has been completed successfully.</p>
          <Button onClick={() => setIsOpen(false)} className="w-full">
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export const Basic: Story = {
  render: () => <BasicModalDemo />
};

export const Alert: Story = {
  render: () => <AlertModalDemo />
};

export const Form: Story = {
  render: () => <FormModalDemo />
};

export const Gallery: Story = {
  render: () => <GalleryModalDemo />
};

export const MultiStep: Story = {
  render: () => <MultiStepModalDemo />
};

export const Success: Story = {
  render: () => <SuccessModalDemo />
};


export const Fullscreen: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          isFullscreen
          title="Fullscreen Modal"
        >
          <div className="h-full space-y-4">
            <p className="text-[oklch(var(--theme-foreground))]">This is a fullscreen modal.</p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  }
};