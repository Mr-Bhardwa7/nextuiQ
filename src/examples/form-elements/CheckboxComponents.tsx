import { useState, useCallback } from "react";
import {Card as ComponentCard} from "@/components/ui/card";
import {Checkbox} from "../../components/form-elements/input/Checkbox";

export default function CheckboxComponents() {
  const [checkboxStates, setCheckboxStates] = useState({
    default: false,
    checked: true,
    disabled: false
  });

  const handleCheckboxChange = useCallback((key: keyof typeof checkboxStates) => (value: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [key]: value }));
  }, []);

  return (
    <ComponentCard title="Checkbox">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Checkbox 
            checked={checkboxStates.default} 
            onChange={handleCheckboxChange('default')}
            aria-label="Default checkbox"
          />
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-400">
            Default
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={checkboxStates.checked}
            onChange={handleCheckboxChange('checked')}
            label="Checked"
          />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={checkboxStates.disabled}
            onChange={handleCheckboxChange('disabled')}
            disabled
            label="Disabled"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
