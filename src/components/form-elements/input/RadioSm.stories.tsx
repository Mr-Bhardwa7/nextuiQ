import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioSm } from './RadioSm';

const meta: Meta<typeof RadioSm> = {
  title: 'Components/FormElements/RadioSm',
  component: RadioSm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A small radio button component with minimal styling.',
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
type Story = StoryObj<typeof RadioSm>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    return (
      <RadioSm
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
    <RadioSm
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
    <RadioSm
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
    <RadioSm
      name="disabled-checked"
      value="disabled-checked"
      checked={true}
      onChange={() => {}}
      label="Disabled Checked Option"
      disabled
    />
  ),
};

export const RadioSmGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('small');
    
    return (
      <div className="space-y-2">
        <RadioSm
          name="size"
          value="small"
          checked={selected === 'small'}
          onChange={setSelected}
          label="Small"
        />
        <RadioSm
          name="size"
          value="medium"
          checked={selected === 'medium'}
          onChange={setSelected}
          label="Medium"
        />
        <RadioSm
          name="size"
          value="large"
          checked={selected === 'large'}
          onChange={setSelected}
          label="Large"
        />
      </div>
    );
  },
};

export const InlineGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('yes');
    
    return (
      <div className="flex space-x-4">
        <RadioSm
          name="answer"
          value="yes"
          checked={selected === 'yes'}
          onChange={setSelected}
          label="Yes"
        />
        <RadioSm
          name="answer"
          value="no"
          checked={selected === 'no'}
          onChange={setSelected}
          label="No"
        />
      </div>
    );
  },
};