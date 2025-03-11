import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import Switch from "@/components/forms/switch";

export default function ToggleSwitch() {
  const handleSwitchChange = useCallback((checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Toggle switch input</h2>
      <div className="space-y-4">
        <div className="flex gap-4" role="group" aria-label="Primary toggle switches">
          <Switch
            id="default-switch"
            label="Default"
            defaultChecked={true}
            onChange={handleSwitchChange}
          />
          <Switch
            id="checked-switch"
            label="Checked"
            defaultChecked={true}
            onChange={handleSwitchChange}
          />
          <Switch
            id="disabled-switch"
            label="Disabled"
            disabled={true}
          />
        </div>

        <div className="flex gap-4" role="group" aria-label="Gray toggle switches">
          <Switch
            id="default-gray-switch"
            label="Default"
            defaultChecked={true}
            onChange={handleSwitchChange}
            color="gray"
          />
          <Switch
            id="checked-gray-switch"
            label="Checked"
            defaultChecked={true}
            onChange={handleSwitchChange}
            color="gray"
          />
          <Switch
            id="disabled-gray-switch"
            label="Disabled"
            disabled={true}
            color="gray"
          />
        </div>
      </div>
    </Card>
  );
}
