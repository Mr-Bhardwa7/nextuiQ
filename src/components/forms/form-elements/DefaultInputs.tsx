import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Label} from "@/components/forms/label";
import {Input} from "@/components/forms/input";
import {Select} from "@/components/forms/select";
import { 
  FiCalendar, 
  FiChevronDown, 
  FiEye, 
  FiEyeOff, 
  FiClock, 
  FiCreditCard 
} from "react-icons/fi";

const selectOptions = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSelectChange = useCallback((value: string) => {
    console.log("Selected value:", value);
  }, []);

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, []);

  const togglePassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Default Inputs</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="default-input">Input</Label>
          <Input type="text" id="default-input" aria-label="Default input" />
        </div>

        <div>
          <Label htmlFor="email-input">Input with Placeholder</Label>
          <Input 
            type="text" 
            id="email-input"
            placeholder="info@gmail.com" 
            aria-label="Email input"
          />
        </div>

        <div>
          <Label htmlFor="select-input">Select Input</Label>
          <div className="relative">
            <Select
              id="select-input"
              options={selectOptions}
              placeholder="Select an option"
              onChange={handleSelectChange}
              className="dark:bg-dark-900"
            />
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none dark:text-gray-400" />
          </div>
        </div>

        <div>
          <Label htmlFor="password-input">Password Input</Label>
          <div className="relative">
            <Input
              id="password-input"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              aria-label="Password input"
            />
            <button
              onClick={togglePassword}
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute z-30 right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
            >
              {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="datePicker">Date Picker Input</Label>
          <div className="relative">
            <Input
              type="date"
              id="datePicker"
              name="datePicker"
              onChange={handleDateChange}
            />
            <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none dark:text-gray-400" />
          </div>
        </div>

        <div>
          <Label htmlFor="tm">Time Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={handleDateChange}
            />
            <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none dark:text-gray-400" />
          </div>
        </div>

        <div>
          <Label htmlFor="payment">Input with Payment</Label>
          <div className="relative">
            <Input
              type="text"
              id="payment"
              placeholder="Card number"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
              <FiCreditCard className="text-[#E80B26]" size={20} />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
