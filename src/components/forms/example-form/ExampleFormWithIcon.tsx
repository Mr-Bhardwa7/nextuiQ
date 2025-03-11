"use client";
import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import Form from "@/components/forms/form";
import Input from "@/components/forms/input";
import Checkbox from "@/components/forms/input/Checkbox";
import Label from "@/components/forms/label";
import Button from "@/components/ui/button";
import { 
  FiArrowRight, 
  FiMail, 
  FiLock, 
  FiUser 
} from "react-icons/fi";

export default function ExampleFormWithIcon() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
  }, []);

  return (
    <Card className="p-4 sm:p-6">
      <h2 className="mb-6 text-lg font-semibold">Example Form With Icons</h2>
      <Form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
              id="username"
              className="pl-11"
              aria-label="Username"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none left-4 top-1/2 dark:text-gray-400">
              <FiUser />
            </span>
          </div>
          <div className="relative">
            <Input
              type="email"
              placeholder="Email Address"
              id="email"
              className="pl-11"
              aria-label="Email address"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none left-4 top-1/2 dark:text-gray-400">
              <FiMail />
            </span>
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              id="password"
              className="pl-11"
              aria-label="Password"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none left-4 top-1/2 dark:text-gray-400">
              <FiLock />
            </span>
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Confirm Password"
              id="confirm-password"
              className="pl-11"
              aria-label="Confirm password"
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none left-4 top-1/2 dark:text-gray-400">
              <FiLock />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Checkbox 
                id="remember"
                checked={isChecked} 
                onChange={setIsChecked}
                aria-label="Remember me"
              />
              <Label htmlFor="remember" className="mb-0">Remember me</Label>
            </div>
            <Button size="sm" type="submit">
              Create Account
              <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
