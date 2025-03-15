import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';

const meta: Meta<typeof Select> = {
  title: 'Components/FormElements/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable select component that supports various states and options.',
      },
    },
  },
  argTypes: {
    disabled: { 
      control: 'boolean',
      description: 'Disables the select input',
    },
    error: { 
      control: 'boolean',
      description: 'Shows error state',
    },
    required: { 
      control: 'boolean',
      description: 'Makes the select required',
    },
    placeholder: { 
      control: 'text',
      description: 'Placeholder text when no option is selected',
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
type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a framework',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'react',
    placeholder: 'Select a framework',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a framework',
    disabled: true,
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a framework',
    error: true,
    onChange: (value) => console.log('Selected:', value),
  },
};

export const Required: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a framework',
    required: true,
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue', disabled: true },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte', disabled: true },
    ],
    placeholder: 'Select a framework',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const SelectGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Select
        options={[
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ]}
        placeholder="Size"
        onChange={(value) => console.log('Size:', value)}
      />
      <Select
        options={[
          { value: 'red', label: 'Red' },
          { value: 'blue', label: 'Blue' },
          { value: 'green', label: 'Green' },
        ]}
        placeholder="Color"
        onChange={(value) => console.log('Color:', value)}
      />
    </div>
  ),
};

// Add documentation to existing stories
Default.parameters = {
  docs: {
    description: {
      story: 'Basic select component with default configuration.',
    },
  },
};

WithDefaultValue.parameters = {
  docs: {
    description: {
      story: 'Select component with a pre-selected value.',
    },
  },
};

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disabled state of the select component.',
    },
  },
};

WithError.parameters = {
  docs: {
    description: {
      story: 'Select component showing error state.',
    },
  },
};

Required.parameters = {
  docs: {
    description: {
      story: 'Required select field with validation.',
    },
  },
};

WithDisabledOptions.parameters = {
  docs: {
    description: {
      story: 'Select with some options disabled.',
    },
  },
};

SelectGroup.parameters = {
  docs: {
    description: {
      story: 'Multiple select components grouped together.',
    },
  },
};