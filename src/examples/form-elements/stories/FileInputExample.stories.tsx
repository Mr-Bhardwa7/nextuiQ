import type { Meta, StoryObj } from '@storybook/react';
import FileInputExample from '../FileInputExample';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/FileInput',
  component: FileInputExample,
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
} satisfies Meta<typeof FileInputExample>;

export default meta;
type Story = StoryObj<typeof FileInputExample>;

export const Default: Story = {
  render: () => <FileInputExample />
};