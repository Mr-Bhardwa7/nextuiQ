import type { Meta, StoryObj } from '@storybook/react';
import DefaultInputs from '../DefaultInputs';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/DefaultInputs',
  component: DefaultInputs,
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
} satisfies Meta<typeof DefaultInputs>;

export default meta;
type Story = StoryObj<typeof DefaultInputs>;

export const Default: Story = {
  render: () => <DefaultInputs />
};

export const Dark: Story = {
  render: () => <DefaultInputs />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};