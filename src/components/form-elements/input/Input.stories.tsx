import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/FormElements/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component supporting various types and states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password', 'date', 'time'],
    },
    disabled: { control: 'boolean' },
    success: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
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
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Password',
    type: 'password',
    hint: 'Must be at least 8 characters',
    placeholder: 'Enter your password',
  },
};

export const Success: Story = {
  args: {
    label: 'Email',
    type: 'email',
    success: true,
    hint: 'Email is valid',
    defaultValue: 'user@example.com',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: true,
    hint: 'Please enter a valid email',
    defaultValue: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    disabled: true,
    defaultValue: 'johndoe',
    hint: 'This field cannot be edited',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    label: 'Age',
    min: '0',
    max: '120',
    placeholder: 'Enter your age',
  },
};

export const DateInput: Story = {
  args: {
    type: 'date',
    label: 'Birth Date',
  },
};

export const InputGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Input
        label="First Name"
        placeholder="Enter first name"
        required
      />
      <Input
        label="Last Name"
        placeholder="Enter last name"
        required
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter email"
        required
      />
    </div>
  ),
};