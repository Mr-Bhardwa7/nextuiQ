import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FormElements/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable file input component with support for multiple file types.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    multiple: { control: 'boolean' },
    label: { control: 'text' },
    accept: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    label: 'Upload File',
    onChange: (e) => console.log('Selected files:', e.target.files),
  },
};

export const WithAcceptedTypes: Story = {
  args: {
    label: 'Upload Images',
    accept: 'image/*',
    onChange: (e) => console.log('Selected images:', e.target.files),
  },
};

export const MultipleFiles: Story = {
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    onChange: (e) => console.log('Selected files:', e.target.files),
  },
};

export const Required: Story = {
  args: {
    label: 'Required Document',
    required: true,
    accept: '.pdf,.doc,.docx',
    onChange: (e) => console.log('Selected document:', e.target.files),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Upload Disabled',
    disabled: true,
  },
};

export const FileInputGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <FileInput
        label="Profile Picture"
        accept="image/*"
        onChange={(e) => console.log('Profile picture:', e.target.files)}
      />
      <FileInput
        label="Resume"
        accept=".pdf,.doc,.docx"
        onChange={(e) => console.log('Resume:', e.target.files)}
      />
      <FileInput
        label="Additional Documents"
        multiple
        onChange={(e) => console.log('Documents:', e.target.files)}
      />
    </div>
  ),
};