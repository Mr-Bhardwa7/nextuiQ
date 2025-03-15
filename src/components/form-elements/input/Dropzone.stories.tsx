import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './Dropzone';

const meta: Meta<typeof Dropzone> = {
  title: 'Components/FormElements/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A file upload component with drag and drop support.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[600px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
  args: {
    onFileUpload: (files) => {
      console.log('Uploaded files:', files);
    },
  },
};

export const WithCustomHandler: Story = {
  render: () => (
    <Dropzone
      onFileUpload={(files) => {
        alert(`Selected ${files.length} file(s):\n${files.map(f => f.name).join('\n')}`);
      }}
    />
  ),
};

export const WithSizeConstraints: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-full">
        <Dropzone
          onFileUpload={(files) => {
            console.log('Files:', files);
          }}
        />
      </div>
      <div className="w-[300px]">
        <Dropzone
          onFileUpload={(files) => {
            console.log('Files:', files);
          }}
        />
      </div>
    </div>
  ),
};

export const MultipleDropzones: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Dropzone
        onFileUpload={(files) => {
          console.log('Dropzone 1:', files);
        }}
      />
      <Dropzone
        onFileUpload={(files) => {
          console.log('Dropzone 2:', files);
        }}
      />
    </div>
  ),
};