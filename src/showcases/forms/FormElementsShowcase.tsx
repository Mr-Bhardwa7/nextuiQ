import DefaultInputs from '@/examples/form-elements/DefaultInputs';
import CheckboxComponents from '@/examples/form-elements/CheckboxComponents';
import {Dropzone} from '@/components/form-elements/input/Dropzone';
import FileInputExample from '@/examples/form-elements/FileInputExample';
import InputGroup from '@/examples/form-elements/InputGroup';
import InputStates from '@/examples/form-elements/InputStates';
import RadioButtons from '@/examples/form-elements/RadioButtons';
import SelectInputs from '@/examples/form-elements/SelectInputs';
import TextAreaInput from '@/examples/form-elements/TextAreaInput';
import ToggleSwitch from '@/examples/form-elements/ToggleSwitch';

export default function FormElementsShowcase() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Form Elements</h2>
        <p className="text-gray-500 dark:text-gray-400">Complete collection of form components</p>
      </div>

      <section className="grid gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Text Inputs</h3>
          <DefaultInputs />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Input States</h3>
          <InputStates />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Selection Controls</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <CheckboxComponents />
            <RadioButtons />
          </div>
          <ToggleSwitch />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dropdowns</h3>
          <SelectInputs />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Text Areas</h3>
          <TextAreaInput />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">File Uploads</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <FileInputExample />
            <Dropzone />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Input Groups</h3>
          <InputGroup />
        </div>
      </section>
    </div>
  );
}