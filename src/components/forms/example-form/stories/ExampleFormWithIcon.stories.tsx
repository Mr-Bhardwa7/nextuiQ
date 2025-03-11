import type { Meta, StoryObj } from '@storybook/react';
import ExampleFormWithIcon from '../ExampleFormWithIcon';

const meta = {
  title: 'Forms/Examples/ExampleFormWithIcon',
  component: ExampleFormWithIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A registration form with icon-decorated input fields and remember me option.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[500px] max-w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <ExampleFormWithIcon />,
  parameters: {
    docs: {
      description: {
        story: 'Default form with icons and checkbox.',
      },
    },
  },
};

export const Mobile: StoryObj = {
  render: () => <ExampleFormWithIcon />,
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

export const DarkMode: StoryObj = {
  render: () => <ExampleFormWithIcon />,
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

export const WithPrefilledData: StoryObj = {
  render: () => <ExampleFormWithIcon />,
  parameters: {
    docs: {
      description: {
        story: 'Form with pre-filled data example.',
      },
    },
  },
};