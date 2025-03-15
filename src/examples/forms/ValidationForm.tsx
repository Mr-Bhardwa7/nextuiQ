import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Form} from "@/components/form-elements/form";
import {Input} from "@/components/form-elements/input";
import {Label} from "@/components/form-elements/label";
import {Button} from "@/components/ui/button";

export default function ValidationForm() {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formData, setFormData] = useState({
    username: 'jo',
    email: 'john.doe@example.com',
    password: 'pass',
    confirmPassword: 'password123'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = (data: typeof formData) => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    if (data.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!data.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }

    if (data.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (!Object.values(validationErrors).some(error => error !== '')) {
      console.log('Form submitted:', formData);
    }
  }, [formData]);

  return (
    <Card className="w-[400px] p-6">
      <h2 className="text-2xl font-semibold mb-4">Registration</h2>
      <Form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="username">
              Username <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="username"
              defaultValue={formData.username}
              onChange={handleChange}
              aria-label="Username"
              className={errors.username ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              defaultValue={formData.email}
              onChange={handleChange}
              aria-label="Email"
              className={errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            ) : (
              <p className="mt-1 text-sm text-green-600">Email is valid</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              id="password"
              defaultValue={formData.password}
              onChange={handleChange}
              aria-label="Password"
              className={errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              defaultValue={formData.confirmPassword}
              onChange={handleChange}
              aria-label="Confirm password"
              className={errors.confirmPassword ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
      </Form>
    </Card>
  );
}