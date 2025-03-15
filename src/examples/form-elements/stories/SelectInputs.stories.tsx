import type { Meta, StoryObj } from '@storybook/react';
import SelectInputs from '../SelectInputs';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/SelectInputs',
  component: SelectInputs,
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
} satisfies Meta<typeof SelectInputs>;

export default meta;
type Story = StoryObj<typeof SelectInputs>;

export const Default: Story = {
  render: () => <SelectInputs />
};

export const Dark: Story = {
  render: () => <SelectInputs />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};