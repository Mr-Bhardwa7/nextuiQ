import type { Meta, StoryObj } from '@storybook/react';
import DefaultInputs from '../DefaultInputs';
import CheckboxComponents from '../CheckboxComponents';
import {Dropzone} from '../../input/DropZone';
import FileInputExample from '../FileInputExample';
import InputGroup from '../InputGroup';
import InputStates from '../InputStates';
import RadioButtons from '../RadioButtons';
import SelectInputs from '../SelectInputs';
import TextAreaInput from '../TextAreaInput';
import ToggleSwitch from '../ToggleSwitch';

const meta = {
  title: 'Components/Forms/Elements',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Collection of form elements including inputs, checkboxes, radio buttons, and more.',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] min-h-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <DefaultInputs />,
  parameters: {
    docs: {
      description: {
        story: 'Various input types including text, email, password, and date inputs.',
      },
    },
  },
};

export const Checkboxes: StoryObj = {
  render: () => <CheckboxComponents />,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox components with different states including default, checked, and disabled.',
      },
    },
  },
};

export const FileUpload: StoryObj = {
  render: () => <Dropzone />,
  parameters: {
    docs: {
      description: {
        story: 'Drag and drop file upload component with support for multiple file types.',
      },
    },
  },
};

export const FileInput: StoryObj = {
  render: () => <FileInputExample />,
  parameters: {
    docs: {
      description: {
        story: 'Standard file input component with custom styling.',
      },
    },
  },
};

export const InputGroups: StoryObj = {
  render: () => <InputGroup />,
  parameters: {
    docs: {
      description: {
        story: 'Input groups with icons and additional elements.',
      },
    },
  },
};

export const ValidationStates: StoryObj = {
  render: () => <InputStates />,
  parameters: {
    docs: {
      description: {
        story: 'Input states showing validation feedback including success and error states.',
      },
    },
  },
};

export const Radio: StoryObj = {
  render: () => <RadioButtons />,
  parameters: {
    docs: {
      description: {
        story: 'Radio button components with different states.',
      },
    },
  },
};

export const Select: StoryObj = {
  render: () => <SelectInputs />,
  parameters: {
    docs: {
      description: {
        story: 'Select components including single and multi-select options.',
      },
    },
  },
};

export const TextArea: StoryObj = {
  render: () => <TextAreaInput />,
  parameters: {
    docs: {
      description: {
        story: 'Textarea components with different states and validation.',
      },
    },
  },
};

export const Toggle: StoryObj = {
  render: () => <ToggleSwitch />,
  parameters: {
    docs: {
      description: {
        story: 'Toggle switch components with different states and colors.',
      },
    },
  },
};