import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';
import Button from '../button';
import { FiUser, FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/ui/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: (
      <Button endIcon={<FiChevronDown />}>
        Menu
      </Button>
    ),
    items: [
      { label: 'Profile', value: 'profile', icon: <FiUser /> },
      { label: 'Settings', value: 'settings', icon: <FiSettings /> },
      { label: 'Sign out', value: 'signout', icon: <FiLogOut /> },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    trigger: (
      <Button variant="outline" endIcon={<FiChevronDown />}>
        Actions
      </Button>
    ),
    items: [
      { label: 'Edit', value: 'edit', icon: <FiSettings /> },
      { label: 'Delete', value: 'delete', icon: <FiLogOut />, disabled: true },
    ],
  },
};

export const AlignStart: Story = {
  args: {
    align: 'start',
    trigger: (
      <Button variant="ghost" endIcon={<FiChevronDown />}>
        Left Aligned
      </Button>
    ),
    items: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: (
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
          alt="User avatar"
          className="w-8 h-8 rounded-full"
        />
        <FiChevronDown />
      </div>
    ),
    items: [
      { label: 'View Profile', value: 'profile' },
      { label: 'Account Settings', value: 'settings' },
      { label: 'Sign Out', value: 'signout' },
    ],
  },
};