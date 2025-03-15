import type { Meta, StoryObj } from '@storybook/react';
import RadioButtons from '../RadioButtons';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/RadioButtons',
  component: RadioButtons,
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
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof RadioButtons>;

export const Default: Story = {
  render: () => <RadioButtons />
};

export const Dark: Story = {
  render: () => <RadioButtons />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};