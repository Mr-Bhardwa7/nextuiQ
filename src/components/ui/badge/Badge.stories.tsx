import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';
import { FiCheck, FiX } from 'react-icons/fi';

const meta: Meta<typeof Badge> = {
  title: 'Components/ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'error', 'warning', 'info', 'light', 'dark'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'Success',
    color: 'success',
    startIcon: <FiCheck />,
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'Error',
    color: 'error',
    endIcon: <FiX />,
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Badge',
    variant: 'solid',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Badge',
    size: 'sm',
  },
};