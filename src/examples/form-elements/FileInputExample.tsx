import React, { useCallback } from "react";
import { Card } from "../../components/ui/card";
import {Input} from "@/components/form-elements/input";
import {Label} from "@/components/form-elements/label";

export default function FileInputExample() {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">File Input</h2>
      <div>
        <Label htmlFor="file-upload">Upload file</Label>
        <Input
          type="file" 
          id="file-upload"
          onChange={handleFileChange} 
          className="custom-class"
          aria-label="File upload input"
        />
      </div>
    </Card>
  );
}
