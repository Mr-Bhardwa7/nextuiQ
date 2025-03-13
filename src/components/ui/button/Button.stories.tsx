import type { Meta, StoryObj } from '@storybook/react';
import {Button} from '.';
import { FiArrowRight, FiDownload, FiTrash2 } from 'react-icons/fi';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    variant: 'destructive',
    startIcon: <FiTrash2 />,
  },
};

export const DestructiveOutline: Story = {
  args: {
    children: 'Cancel Subscription',
    variant: 'destructive',
    className: 'border border-red-500',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Download',
    startIcon: <FiDownload />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Next',
    endIcon: <FiArrowRight />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
    loadingText: 'Submitting...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    tag: 'a',
    href: '#',
    target: '_blank',
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </div>
  ),
};