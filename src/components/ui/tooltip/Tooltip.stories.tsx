import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that appears on hover or focus.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {
  render: () => (
    <div className="p-20"> 
      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  )
}

export const Positioned: Story = {
  render: () => (
    <div className="flex gap-4 p-20">
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  )
}

export const CustomContent: Story = {
  render: () => (
    <div className="p-20">
      <Tooltip
        content={
          <div className="flex flex-col gap-2">
            <p className="font-medium">Custom Tooltip</p>
            <p className="text-xs">With multiple lines of content</p>
          </div>
        }
      >
        <Button>Complex Content</Button>
      </Tooltip>
    </div>
  )
}