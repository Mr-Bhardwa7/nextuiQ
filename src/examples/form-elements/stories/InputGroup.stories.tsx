import type { Meta, StoryObj } from '@storybook/react';
import InputGroup from '../InputGroup';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/InputGroup',
  component: InputGroup,
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
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => <InputGroup />
};

export const Dark: Story = {
  render: () => <InputGroup />,
  parameters: {
    themes: {
      default: 'dark'
    }
  }
};