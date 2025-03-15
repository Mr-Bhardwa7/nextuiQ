import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/FormElements/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A textarea component with support for various states and features.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    rows: { control: 'number' },
    label: { control: 'text' },
    hint: { control: 'text' },
    placeholder: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
    onChange: (value) => console.log('Input:', value),
  },
};

export const WithHint: Story = {
  args: {
    label: 'Bio',
    hint: 'Brief description about yourself',
    placeholder: 'Tell us about yourself...',
    onChange: (value) => console.log('Input:', value),
  },
};

export const WithError: Story = {
  args: {
    label: 'Comments',
    error: true,
    hint: 'Comments cannot be empty',
    placeholder: 'Enter your comments',
    onChange: (value) => console.log('Input:', value),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Readonly Content',
    disabled: true,
    value: 'This content cannot be edited',
    onChange: (value) => console.log('Input:', value),
  },
};

export const Required: Story = {
  args: {
    label: 'Feedback',
    required: true,
    placeholder: 'Please provide your feedback',
    onChange: (value) => console.log('Input:', value),
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Long Description',
    rows: 6,
    placeholder: 'Enter detailed description...',
    onChange: (value) => console.log('Input:', value),
  },
};

export const WithCharacterCount: Story = {
  render: () => {
    const maxLength = 200;
    const [value, setValue] = useState('');
    
    return (
      <div className="space-y-1">
        <TextArea
          label="Limited Input"
          value={value}
          onChange={setValue}
          maxLength={maxLength}
          hint={`${value.length}/${maxLength} characters`}
          placeholder="Start typing..."
        />
      </div>
    );
  },
};