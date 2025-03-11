import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import TextArea from "@/components/forms/input/TextArea";
import Label from "@/components/forms/label";

export default function TextAreaInput() {
  const [message, setMessage] = useState("");
  const [messageTwo, setMessageTwo] = useState("");

  const handleMessageChange = useCallback((value: string) => {
    setMessage(value);
  }, []);

  const handleMessageTwoChange = useCallback((value: string) => {
    setMessageTwo(value);
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Textarea input field</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            value={message}
            onChange={handleMessageChange}
            rows={6}
            aria-label="Default textarea"
          />
        </div>

        <div>
          <Label htmlFor="disabled-description">Description</Label>
          <TextArea
            id="disabled-description"
            rows={6}
            disabled
            aria-label="Disabled textarea"
          />
        </div>

        <div>
          <Label htmlFor="error-description">Description</Label>
          <TextArea
            id="error-description"
            rows={6}
            value={messageTwo}
            error
            onChange={handleMessageTwoChange}
            hint="Please enter a valid message."
            aria-invalid={true}
            aria-describedby="error-description-hint"
          />
        </div>
      </div>
    </Card>
  );
}
