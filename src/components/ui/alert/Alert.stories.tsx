import type { Meta, StoryObj } from '@storybook/react';
import Alert from '.';

const meta: Meta<typeof Alert> = {
  title: 'Components/ui/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    showLink: { control: 'boolean' },
    linkText: { control: 'text' },
    linkHref: { control: 'text' },
    onClose: { action: 'closed' }
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
    showLink: false,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'There was an error processing your request.',
    showLink: false,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review your information before proceeding.',
    showLink: false,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'A new version is available for download.',
    showLink: false,
  },
};

export const WithLink: Story = {
  args: {
    variant: 'info',
    title: 'New Feature',
    message: 'Check out our latest features and improvements.',
    showLink: true,
    linkText: 'View changelog',
    linkHref: '#',
  },
};

export const WithCloseButton: Story = {
  args: {
    variant: 'success',
    title: 'Dismissible Alert',
    message: 'This alert can be closed.',
    onClose: () => console.log('Alert closed'),
  },
};

export const LongMessage: Story = {
  args: {
    variant: 'info',
    title: 'Long Message Example',
    message: 'This is a longer alert message that demonstrates how the component handles extended content. It might contain more detailed information or instructions for the user.',
    showLink: true,
    linkText: 'Learn more',
  },
};