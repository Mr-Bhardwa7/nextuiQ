import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './Dialog'
import { FiCode } from 'react-icons/fi'

const meta: Meta<typeof Dialog> = {
  title: 'Components/ui/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogDescription>
                A simple dialog with title and description.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border px-3 py-2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const WithAlert: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete Account</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={() => setOpen(false)}>Delete Account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const WithCustomContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Details</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Product Details</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-1 overflow-hidden rounded-lg bg-muted">
                  <div className="aspect-square w-full h-full flex items-center justify-center bg-muted">
                    <svg
                      className="h-8 w-8 text-muted-foreground"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                  </div>
                </div>
                <div className="col-span-3">
                  <h4 className="text-lg font-semibold">Premium Package</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Enterprise-grade solution with advanced features and priority support.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <h5 className="font-medium mb-1">Subscription</h5>
                  <p className="text-2xl font-bold">$299/mo</p>
                  <p className="text-sm text-muted-foreground">Billed annually</p>
                </div>
                <div>
                  <h5 className="font-medium mb-1">Status</h5>
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />
                    <p className="text-sm font-medium">Available Now</p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Purchase Now</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}

export const WithCodePreview: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const codeExample = `function HelloWorld() {
  return (
    <div className="p-4 rounded-lg bg-blue-100">
      <h1 className="text-xl font-bold">Hello World!</h1>
      <p className="text-gray-600">Welcome to my app.</p>
    </div>
  )
}`

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          <FiCode className="mr-2 h-4 w-4" />
           Code Example
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Code Example</DialogTitle>
              <DialogDescription>
                A simple React component example with Tailwind CSS.
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <pre className="my-4 overflow-x-auto rounded-lg bg-muted p-4">
                <code className="relative text-sm font-mono text-foreground">
                  {codeExample}
                </code>
              </pre>
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4"
                onClick={() => {
                  navigator.clipboard.writeText(codeExample)
                }}
              >
                Copy
              </Button>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    )
  },
}