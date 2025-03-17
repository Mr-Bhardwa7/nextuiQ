import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverContent, PopoverTrigger } from './Popover'
import { Button } from '../button'

const meta: Meta<typeof Popover> = {
  title: 'Components/ui/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A floating popover component that displays content relative to a trigger element.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Popover>

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4 p-4">
          <div className="space-y-2">
            <h4 className="font-medium">Basic Popover</h4>
            <p className="text-sm text-[oklch(var(--theme-muted-foreground))]">
              This is a basic popover example.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export const CustomTrigger: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 rounded-full p-0">
          ?
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4">
          <p>Help content goes here</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button>Edit Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="grid gap-4 p-4">
          <div className="space-y-2">
            <h4 className="font-medium">Dimensions</h4>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 rounded-md border p-2"
              />
            </div>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}