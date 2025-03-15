import type { Meta, StoryObj } from '@storybook/react';
import ValidationForm from '../ValidationForm';

const meta = {
  title: 'Examples/Form/ValidationForm',
  component: ValidationForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A registration form with field validation and error states.',
      },
    },
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <ValidationForm />,
  parameters: {
    docs: {
      description: {
        story: 'Form with validation errors and success states.',
      },
    },
  },
};

export const DarkMode: StoryObj = {
  render: () => <ValidationForm />,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Validation form in dark mode theme.',
      },
    },
  },
};

export const Mobile: StoryObj = {
  render: () => <ValidationForm />,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view of the validation form.',
      },
    },
  },
};