import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Form} from "@/components/forms/form";
import {Label} from "@/components/forms/label";
import {Input} from "@/components/forms/input";
import {Select} from "@/components/forms/select";
import {TextArea} from "@/components/forms/input/TextArea";
import {Button} from "@/components/ui/button";
import { FiSend } from "react-icons/fi";

export default function ExampleFormOne() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
  }, []);

  const options = [
    { value: "marketing", label: "Option 1" },
    { value: "template", label: "Option 2" },
    { value: "development", label: "Option 3" },
  ];

  const handleSelectChange = useCallback((value: string) => {
    console.log("Selected value:", value);
  }, []);

  const handleTextareaChange = useCallback((value: string) => {
    setMessage(value);
    console.log("Message:", value);
  }, []);

  return (
    <Card className="p-4 sm:p-6 w-full max-w-2xl mx-auto">
      <h2 className="mb-4 sm:mb-6 text-lg font-semibold">Example Form</h2>
      <Form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                type="text" 
                placeholder="Enter first name" 
                id="firstName"
                aria-label="First name"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                type="text" 
                placeholder="Enter last name" 
                id="lastName"
                aria-label="Last name"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter email address"
              id="email"
              aria-label="Email address"
            />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select
              id="subject"
              options={options}
              placeholder="Select an option"
              onChange={handleSelectChange}
              defaultValue=""
              className="w-full bg-gray-50 dark:bg-gray-800"
              aria-label="Subject"
            />
          </div>
          <div>
            <Label htmlFor="message">Messages</Label>
            <TextArea
              id="message"
              placeholder="Type your message here..."
              rows={6}
              value={message}
              onChange={handleTextareaChange}
              className="w-full bg-gray-50 dark:bg-gray-800"
              aria-label="Message content"
            />
          </div>
          <div>
            <Button size="sm" className="w-full" type="submit">
              Send Message
              <FiSend className="ml-2" />
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
