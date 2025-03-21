import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/FormElements/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable checkbox component with various states and accessibility features.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Accept terms and conditions"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        label="Notifications enabled"
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Checkbox
      label="Disabled option"
      checked={false}
      onChange={() => {}}
      disabled
    />
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <Checkbox
      label="Disabled checked option"
      checked={true}
      onChange={() => {}}
      disabled
    />
  ),
};

export const Required: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="I agree to the terms (required)"
        checked={checked}
        onChange={setChecked}
        required
      />
    );
  },
};

export const WithoutLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        checked={checked}
        onChange={setChecked}
        aria-label="Toggle option"
      />
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [selections, setSelections] = useState({
      option1: false,
      option2: false,
      option3: true,
    });

    return (
      <div className="space-y-3">
        <Checkbox
          label="Option 1"
          checked={selections.option1}
          onChange={(checked) => setSelections(prev => ({ ...prev, option1: checked }))}
        />
        <Checkbox
          label="Option 2"
          checked={selections.option2}
          onChange={(checked) => setSelections(prev => ({ ...prev, option2: checked }))}
        />
        <Checkbox
          label="Option 3"
          checked={selections.option3}
          onChange={(checked) => setSelections(prev => ({ ...prev, option3: checked }))}
        />
      </div>
    );
  },
};

export const WithReactElement: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={
          <span className="flex items-center gap-2">
            I agree to the{" "}
            <a href="#" className="text-[oklch(var(--theme-primary))] hover:underline">
              Terms
            </a>
            {" "}and{" "}
            <a href="#" className="text-[oklch(var(--theme-primary))] hover:underline">
              Privacy Policy
            </a>
          </span>
        }
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};