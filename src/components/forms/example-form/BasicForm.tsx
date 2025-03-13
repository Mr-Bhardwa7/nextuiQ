"use client";
import React, { useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Form} from "@/components/forms/form";
import {Input} from "@/components/forms/input";
import {Button} from "@/components/ui/button";

export default function BasicForm() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Basic Form</h2>
      <Form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Input 
              type="text" 
              placeholder="Name" 
              aria-label="Name"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email address" 
              aria-label="Email address"
            />
          </div>
          <div className="col-span-full">
            <Input 
              type="password" 
              placeholder="Password" 
              aria-label="Password"
            />
          </div>
          <div className="col-span-full">
            <Input 
              type="password" 
              placeholder="Confirm Password" 
              aria-label="Confirm password"
            />
          </div>
          <div className="col-span-full">
            <Button className="w-full" size="sm" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
