import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/FormElements/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable radio button component with various states.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    return (
      <Radio
        name="default"
        value="option1"
        checked={selected === 'option1'}
        onChange={setSelected}
        label="Default Option"
      />
    );
  },
};

export const Checked: Story = {
  render: () => (
    <Radio
      name="checked"
      value="checked"
      checked={true}
      onChange={() => {}}
      label="Checked Option"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Radio
      name="disabled"
      value="disabled"
      checked={false}
      onChange={() => {}}
      label="Disabled Option"
      disabled
    />
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <Radio
      name="disabled-checked"
      value="disabled-checked"
      checked={true}
      onChange={() => {}}
      label="Disabled Checked Option"
      disabled
    />
  ),
};

export const Required: Story = {
  render: () => (
    <Radio
      name="required"
      value="required"
      checked={false}
      onChange={() => {}}
      label="Required Option"
      required
    />
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('apple');
    
    return (
      <div className="space-y-2">
        <Radio
          name="fruits"
          value="apple"
          checked={selected === 'apple'}
          onChange={setSelected}
          label="Apple"
        />
        <Radio
          name="fruits"
          value="banana"
          checked={selected === 'banana'}
          onChange={setSelected}
          label="Banana"
        />
        <Radio
          name="fruits"
          value="orange"
          checked={selected === 'orange'}
          onChange={setSelected}
          label="Orange"
        />
      </div>
    );
  },
};