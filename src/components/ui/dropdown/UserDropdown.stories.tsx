import type { Meta, StoryObj } from '@storybook/react';
import UserDropdown from './UserDropdown';

const meta: Meta<typeof UserDropdown> = {
  title: 'Components/ui/UserDropdown',
  component: UserDropdown,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[400px] w-[400px] flex items-start justify-center pt-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserDropdown>;

const mockUsers = {
  default: {
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  designer: {
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  developer: {
    name: "Mike Johnson",
    email: "mike.johnson@company.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  },
  longName: {
    name: "Alexandra Christina Thompson-Williams",
    email: "alexandra.thompson-williams@very-long-domain-name.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  }
};

export const Default: Story = {
  args: {
    userData: mockUsers.default,
  },
};

export const Designer: Story = {
  args: {
    userData: mockUsers.designer,
  },
};

export const Developer: Story = {
  args: {
    userData: mockUsers.developer,
  },
};

export const LongContent: Story = {
  args: {
    userData: mockUsers.longName,
  },
};

export const WithActions: Story = {
  args: {
    userData: mockUsers.default,
    onAction: (action) => {
      console.log(`Action triggered: ${action}`);
      alert(`Action triggered: ${action}`);
    },
  },
};

export const DarkMode: Story = {
  args: {
    userData: mockUsers.default,
    onAction: (action) => console.log(`Action triggered: ${action}`),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark h-[400px] w-[400px] flex items-start justify-center pt-20">
        <Story />
      </div>
    ),
  ],
};