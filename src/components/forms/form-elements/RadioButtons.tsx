import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Radio} from "@/components/forms/input/Radio";

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState<string>("option2");

  const handleRadioChange = useCallback((value: string) => {
    setSelectedValue(value);
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Radio Buttons</h2>
      <div className="flex flex-wrap items-center gap-8" role="radiogroup" aria-label="Radio button options">
        <Radio
          id="radio1"
          name="group1"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={handleRadioChange}
          label="Default"
        />
        <Radio
          id="radio2"
          name="group1"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={handleRadioChange}
          label="Selected"
        />
        <Radio
          id="radio3"
          name="group1"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={handleRadioChange}
          label="Disabled"
          disabled={true}
        />
      </div>
    </Card>
  );
}
