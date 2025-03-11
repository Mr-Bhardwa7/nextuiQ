import type { Meta, StoryObj } from '@storybook/react';
import AvatarText from '.';

const meta: Meta<typeof AvatarText> = {
  title: 'Components/ui/AvatarText',
  component: AvatarText,
  parameters: {
      layout: 'centered',
      backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1e293b' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away', undefined],
    },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    src: { control: 'text' },
    fallback: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarText>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'John Smith',
    subtitle: 'Software Engineer',
  },
};

export const WithStatus: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'John Smith',
    subtitle: 'Online',
    status: 'online',
  },
};

export const WithFallback: Story = {
  args: {
    fallback: 'John Smith',
    title: 'John Smith',
    subtitle: 'Product Manager',
  },
};

export const Small: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'John Smith',
    subtitle: 'Developer',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'John Smith',
    subtitle: 'Lead Developer',
    size: 'lg',
  },
};

export const WithoutSubtitle: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'John Smith',
  },
};