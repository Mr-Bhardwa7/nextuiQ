import type { Meta, StoryObj } from '@storybook/react';
import ExampleFormOne from '../ExampleFormOne';

const meta = {
  title: 'Examples/Form/ExampleFormOne',
  component: ExampleFormOne,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive form example with various input types including text fields, select, and textarea.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <ExampleFormOne />,
  parameters: {
    docs: {
      description: {
        story: 'Default form layout with responsive grid.',
      },
    },
  },
};

export const Mobile: StoryObj = {
  render: () => <ExampleFormOne />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view with single column layout.',
      },
    },
  },
};

export const Tablet: StoryObj = {
  render: () => <ExampleFormOne />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view with adaptive grid layout.',
      },
    },
  },
};

export const WithPrefilledData: StoryObj = {
  render: () => <ExampleFormOne />,
  parameters: {
    docs: {
      description: {
        story: 'Form with pre-filled data example.',
      },
    },
  },
};