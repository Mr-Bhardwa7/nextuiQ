import type { Meta, StoryObj } from '@storybook/react';
import ToggleSwitch from '../ToggleSwitch';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/ToggleSwitch',
  component: ToggleSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="p-6 bg-[oklch(var(--theme-background))]">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  render: () => <ToggleSwitch />
};

export const Dark: Story = {
  render: () => <ToggleSwitch />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};