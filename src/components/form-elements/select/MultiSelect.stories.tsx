import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/FormElements/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
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
type Story = StoryObj<typeof MultiSelect>;

const defaultOptions = [
  { value: '1', text: 'JavaScript', selected: false },
  { value: '2', text: 'TypeScript', selected: false },
  { value: '3', text: 'Python', selected: false },
  { value: '4', text: 'Java', selected: false },
  { value: '5', text: 'C++', selected: false },
  { value: '6', text: 'Ruby', selected: false },
];

export const Default: Story = {
  args: {
    label: 'Programming Languages',
    options: defaultOptions,
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const WithPreselected: Story = {
  args: {
    label: 'Programming Languages',
    options: defaultOptions,
    defaultSelected: ['1', '3'],
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Programming Languages',
    options: defaultOptions,
    disabled: true,
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const WithError: Story = {
  args: {
    label: 'Programming Languages',
    options: defaultOptions,
    error: true,
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const Required: Story = {
  args: {
    label: 'Programming Languages',
    options: defaultOptions,
    required: true,
    onChange: (selected) => console.log('Selected:', selected),
  },
};

export const MultiSelectGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <MultiSelect
        label="Frontend Skills"
        options={[
          { value: 'html', text: 'HTML', selected: false },
          { value: 'css', text: 'CSS', selected: false },
          { value: 'js', text: 'JavaScript', selected: false },
        ]}
        onChange={(selected) => console.log('Frontend:', selected)}
      />
      <MultiSelect
        label="Backend Skills"
        options={[
          { value: 'node', text: 'Node.js', selected: false },
          { value: 'python', text: 'Python', selected: false },
          { value: 'java', text: 'Java', selected: false },
        ]}
        onChange={(selected) => console.log('Backend:', selected)}
      />
    </div>
  ),
};