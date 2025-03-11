import type { Meta, StoryObj } from '@storybook/react';
import SignInForm from '../SignInForm';

const meta = {
  title: 'Forms/Examples/SignInForm',
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <SignInForm />,
};