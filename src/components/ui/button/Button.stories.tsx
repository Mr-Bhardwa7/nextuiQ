import type { Meta, StoryObj } from '@storybook/react';
import {Button} from '.';
import { FiArrowRight, FiDownload, FiTrash2 } from 'react-icons/fi';
import { GoogleIcon } from './icons/google';

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
    variant: 'outline',
    className: 'text-destructive hover:bg-destructive/10 border-destructive hover:border-destructive/50',
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
    className: "!text-[oklch(var(--theme-primary))] hover:!text-[oklch(var(--theme-primary))]",
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

export const GoogleSignIn: Story = {
  args: {
    variant: 'outline',
    className: 'h-12 w-[320px]',
    startIcon: <GoogleIcon />,
    children: 'Continue with Google',
  },
};

export const GoogleSignInStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[320px]">
      <Button
        variant="outline"
        className="h-12"
      >
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="h-12"
        disabled
      >
        <GoogleIcon />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="h-12"
        loading
        loadingText="Connecting..."
      >
        Continue with Google
      </Button>
    </div>
  ),
};