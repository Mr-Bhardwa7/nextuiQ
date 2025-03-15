import type { Meta, StoryObj } from '@storybook/react';
import ExampleFormTwo from '../ExampleFormTwo';

const meta = {
  title: 'Examples/Form/ExampleFormTwo',
  component: ExampleFormTwo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive registration form with personal info, address details, and membership selection.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] max-w-full p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <ExampleFormTwo />,
  parameters: {
    docs: {
      description: {
        story: 'Default form layout with all fields.',
      },
    },
  },
};

export const Mobile: StoryObj = {
  render: () => <ExampleFormTwo />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view with stacked layout.',
      },
    },
  },
};

export const Tablet: StoryObj = {
  render: () => <ExampleFormTwo />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view with responsive grid.',
      },
    },
  },
};

export const FilledForm: StoryObj = {
  render: () => <ExampleFormTwo />,
  parameters: {
    docs: {
      description: {
        story: 'Form with pre-filled data example.',
      },
    },
  },
};

export const DarkMode: StoryObj = {
  render: () => <ExampleFormTwo />,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Form in dark mode theme.',
      },
    },
  },
};