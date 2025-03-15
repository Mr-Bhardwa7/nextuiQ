import type { Meta, StoryObj } from '@storybook/react';
import CheckboxComponents from '../CheckboxComponents';
import { ThemeProvider } from '@/context/ThemeContext';

const meta = {
  title: 'Examples/FormElements/Checkbox',
  component: CheckboxComponents,
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
} satisfies Meta<typeof CheckboxComponents>;

export default meta;
type Story = StoryObj<typeof CheckboxComponents>;

export const Default: Story = {
  render: () => <CheckboxComponents />
};