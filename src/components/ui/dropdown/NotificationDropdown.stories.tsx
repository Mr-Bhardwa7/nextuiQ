import type { Meta, StoryObj } from '@storybook/react';
import NotificationDropdown from './NotificationDropdown';
import { getRelativeTime } from '@/lib/utils';

const meta: Meta<typeof NotificationDropdown> = {
  title: 'Components/ui/NotificationDropdown',
  component: NotificationDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotificationDropdown>;



const mockNotifications = [
  {
    id: 1,
    avatar: {
      src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      fallback: 'JD',
      status: 'online' as const,
    },
    userName: 'John Doe',
    projectName: 'Project Alpha',
    time: getRelativeTime(5),
    type: 'success' as const,
    message: 'completed task in',
  },
  {
    id: 2,
    avatar: {
      fallback: 'JS',
      status: 'busy' as const,
    },
    userName: 'Jane Smith',
    projectName: 'Project Beta',
    time: getRelativeTime(60),
    type: 'warning' as const,
    message: 'flagged an issue in',
  },
  {
    id: 3,
    avatar: {
      src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      fallback: 'MW',
      status: 'away' as const,
    },
    userName: 'Mike Wilson',
    projectName: 'Project Gamma',
    time: getRelativeTime(120),
    type: 'error' as const,
    message: 'reported a bug in',
  }
];

export const Default: Story = {
  args: {
    notifications: mockNotifications,
  },
};

export const Empty: Story = {
  args: {
    notifications: [],
  },
};

export const SingleNotification: Story = {
  args: {
    notifications: [mockNotifications[0]],
  },
};

export const WithViewAll: Story = {
  args: {
    notifications: mockNotifications,
    onViewAll: () => alert('View all clicked'),
  },
};