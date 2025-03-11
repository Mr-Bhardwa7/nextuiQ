"use client";
import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";

export default function InputStates() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = useCallback((value: string) => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    setError(!isValidEmail);
    return isValidEmail;
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  }, [validateEmail]);

  return (
    <Card className="p-6">
      <h2 className="mb-2 text-lg font-semibold">Input States</h2>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Validation styles for error, success and disabled states on form controls.
      </p>
      
      <div className="space-y-5 sm:space-y-6">
        <div>
          <Label htmlFor="error-email">Email</Label>
          <Input
            id="error-email"
            type="email"
            defaultValue={email}
            error={error}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            hint={error ? "This is an invalid email address." : ""}
            aria-invalid={error}
            aria-describedby={error ? "error-email-hint" : undefined}
          />
        </div>

        <div>
          <Label htmlFor="success-email">Email</Label>
          <Input
            id="success-email"
            type="email"
            defaultValue={email}
            success={!error}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            hint={!error ? "Valid email!" : ""}
            aria-describedby={!error ? "success-email-hint" : undefined}
          />
        </div>

        <div>
          <Label htmlFor="disabled-email">Email</Label>
          <Input
            id="disabled-email"
            type="email"
            defaultValue="disabled@example.com"
            disabled={true}
            placeholder="Disabled email"
            hint="This field is disabled."
            aria-describedby="disabled-email-hint"
          />
        </div>
      </div>
    </Card>
  );
}
