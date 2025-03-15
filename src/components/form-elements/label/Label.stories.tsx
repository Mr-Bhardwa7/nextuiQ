import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index';

const meta: Meta<typeof Label> = {
  title: 'Components/FormElements/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form label component with support for required fields and disabled states.',
      },
    },
  },
  argTypes: {
    disabled: { 
      control: 'boolean',
      description: 'Disables the label',
    },
    required: { 
      control: 'boolean',
      description: 'Shows required field indicator',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the associated form control',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: 'input-1',
    children: 'Email Address',
  },
};

export const Required: Story = {
  args: {
    htmlFor: 'input-2',
    children: 'Password',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    htmlFor: 'input-3',
    children: 'Username',
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    htmlFor: 'input-4',
    children: 'Custom Label',
    className: 'text-base font-bold',
  },
};

export const LabelGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Label htmlFor="name">Full Name</Label>
      <Label htmlFor="email" required>Email Address</Label>
      <Label htmlFor="phone" disabled>Phone Number</Label>
    </div>
  ),
};

export const WithAriaLabel: Story = {
  args: {
    htmlFor: 'input-5',
    children: 'Secret Key',
    required: true,
    'aria-label': 'Enter your secret key',
  },
};