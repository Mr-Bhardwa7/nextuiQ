import type { Meta, StoryObj } from '@storybook/react';
import InputStates from '../InputStates';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/InputStates',
  component: InputStates,
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
} satisfies Meta<typeof InputStates>;

export default meta;
type Story = StoryObj<typeof InputStates>;

export const Default: Story = {
  render: () => <InputStates />
};

export const Dark: Story = {
  render: () => <InputStates />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};