import type { Meta, StoryObj } from '@storybook/react';
import {Breadcrumb} from './index';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/ui/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Categories' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Settings' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Profile' },
    ],
  },
};