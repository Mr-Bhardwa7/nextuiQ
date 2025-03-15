import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Components/FormElements/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A phone input component with country code selection.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    selectPosition: {
      control: 'radio',
      options: ['start', 'end'],
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
type Story = StoryObj<typeof PhoneInput>;

const defaultCountries = [
  { code: '+1', label: 'United States' },
  { code: '+44', label: 'United Kingdom' },
  { code: '+81', label: 'Japan' },
  { code: '+86', label: 'China' },
  { code: '+49', label: 'Germany' },
  { code: '+33', label: 'France' },
];

export const Default: Story = {
  args: {
    countries: defaultCountries,
    onChange: (value) => console.log('Phone number:', value),
  },
};

export const WithEndSelect: Story = {
  args: {
    countries: defaultCountries,
    selectPosition: 'end',
    onChange: (value) => console.log('Phone number:', value),
  },
};

export const Required: Story = {
  args: {
    countries: defaultCountries,
    required: true,
    onChange: (value) => console.log('Phone number:', value),
  },
};

export const Disabled: Story = {
  args: {
    countries: defaultCountries,
    disabled: true,
    onChange: (value) => console.log('Phone number:', value),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    countries: defaultCountries,
    placeholder: 'Enter phone number',
    onChange: (value) => console.log('Phone number:', value),
  },
};

export const PhoneInputGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <PhoneInput
        countries={defaultCountries}
        placeholder="Work Phone"
        onChange={(value) => console.log('Work:', value)}
      />
      <PhoneInput
        countries={defaultCountries}
        placeholder="Home Phone"
        selectPosition="end"
        onChange={(value) => console.log('Home:', value)}
      />
    </div>
  ),
};