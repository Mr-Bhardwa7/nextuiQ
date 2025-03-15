import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';

const meta: Meta<typeof Switch> = {
  title: 'Components/FormElements/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'gray'],
    },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="p-4 space-y-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Notifications',
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Notifications',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Notifications',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Notifications',
    disabled: true,
    defaultChecked: true,
  },
};

export const GrayVariant: Story = {
  args: {
    label: 'Notifications',
    color: 'gray',
    defaultChecked: true,
  },
};

export const SwitchGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch 
        label="Email notifications" 
        defaultChecked={true}
      />
      <Switch 
        label="SMS notifications" 
        color="gray"
      />
      <Switch 
        label="Push notifications" 
        defaultChecked={true}
      />
      <Switch 
        label="Weekly digest" 
        disabled={true}
      />
    </div>
  ),
};