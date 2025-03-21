import type { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from '.';

const meta: Meta<typeof OTPInput> = {
  title: 'Components/FormElements/OTP Input',
  component: OTPInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: 'select',
      options: ['numeric', 'alphanumeric', 'any'],
      description: 'Type of characters allowed in the input'
    }
  }
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Numeric: Story = {
  args: {
    length: 6,
    label: 'Numeric Only',
    description: 'Enter 6-digit verification code',
    inputType: 'numeric'
  },
};

export const Alphanumeric: Story = {
  args: {
    length: 6,
    label: 'Letters and Numbers',
    description: 'Enter alphanumeric code',
    inputType: 'alphanumeric'
  },
};

export const AnyCharacter: Story = {
  args: {
    length: 6,
    label: 'Any Character',
    description: 'Enter code with any characters',
    inputType: 'any'
  },
};

export const WithError: Story = {
  args: {
    length: 6,
    label: 'Verification Code',
    error: true,
    hint: 'Invalid verification code',
    inputType: 'numeric'
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    label: 'Verification Code',
    disabled: true,
    value: '123456',
    inputType: 'numeric'
  },
};

export const CustomLength: Story = {
  args: {
    length: 4,
    label: 'SMS Code',
    description: 'Enter the 4-digit code',
    inputType: 'numeric'
  },
};

export const Interactive: Story = {
  args: {
    length: 6,
    label: 'Interactive Demo',
    description: 'Try typing, pasting, or using arrow keys',
    onChange: (value) => console.log('OTP Value:', value),
    inputType: 'alphanumeric'
  },
};