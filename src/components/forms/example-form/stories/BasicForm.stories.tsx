import type { Meta, StoryObj } from '@storybook/react';
import BasicForm from '../BasicForm';

const meta = {
  title: 'Forms/Examples/BasicForm',
  component: BasicForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A basic form component with name, email, and password fields.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <BasicForm />,
  parameters: {
    docs: {
      description: {
        story: 'Default basic form with responsive grid layout.',
      },
    },
  },
};

export const Mobile: StoryObj = {
  render: () => <BasicForm />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Basic form in mobile view with single column layout.',
      },
    },
  },
};

export const Tablet: StoryObj = {
  render: () => <BasicForm />,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Basic form in tablet view with two column layout.',
      },
    },
  },
};