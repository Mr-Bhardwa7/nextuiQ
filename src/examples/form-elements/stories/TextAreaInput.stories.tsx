import type { Meta, StoryObj } from '@storybook/react';
import TextAreaInput from '../TextAreaInput';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/TextAreaInput',
  component: TextAreaInput,
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
} satisfies Meta<typeof TextAreaInput>;

export default meta;
type Story = StoryObj<typeof TextAreaInput>;

export const Default: Story = {
  render: () => <TextAreaInput />
};

export const Dark: Story = {
  render: () => <TextAreaInput />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};