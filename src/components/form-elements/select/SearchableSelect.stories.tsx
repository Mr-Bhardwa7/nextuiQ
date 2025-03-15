import type { Meta, StoryObj } from '@storybook/react';
import { SearchableSelect } from './SearchableSelect';

const meta: Meta<typeof SearchableSelect> = {
  title: 'Components/FormElements/SearchableSelect',
  component: SearchableSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A searchable select component with keyboard navigation support.',
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
type Story = StoryObj<typeof SearchableSelect>;

const defaultOptions = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a language',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    defaultValue: 'typescript',
    placeholder: 'Select a language',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a language',
    disabled: true,
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithError: Story = {
  args: {
    options: defaultOptions,
    placeholder: 'Select a language',
    error: true,
    onChange: (value) => console.log('Selected:', value),
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'typescript', label: 'TypeScript', disabled: true },
      { value: 'python', label: 'Python' },
      { value: 'java', label: 'Java', disabled: true },
    ],
    placeholder: 'Select a language',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    placeholder: 'Select from many options',
    onChange: (value) => console.log('Selected:', value),
  },
};

export const SearchableSelectGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <SearchableSelect
        options={[
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue' },
          { value: 'angular', label: 'Angular' },
        ]}
        placeholder="Frontend Framework"
        onChange={(value) => console.log('Framework:', value)}
      />
      <SearchableSelect
        options={[
          { value: 'node', label: 'Node.js' },
          { value: 'django', label: 'Django' },
          { value: 'rails', label: 'Ruby on Rails' },
        ]}
        placeholder="Backend Framework"
        onChange={(value) => console.log('Framework:', value)}
      />
    </div>
  ),
};