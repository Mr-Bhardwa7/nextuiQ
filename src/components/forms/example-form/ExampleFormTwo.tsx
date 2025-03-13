"use client";
import React, { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import {Label} from "@/components/forms/label";
import {Input} from "@/components/forms/input";
import {Select} from "@/components/forms/select";
import {Radio} from "@/components/forms/input/Radio";
import {Form} from "@/components/forms/form";
import {Button} from "@/components/ui/button";
import { FiCalendar } from "react-icons/fi";

export default function ExampleFormTwo() {
  const [selectedOption, setSelectedOption] = useState<string>("Free");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(e.target.value);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:");
  }, []);

  const optionsGender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Others" },
  ];

  const categoryOptions = [
    { value: "cate1", label: "Category 1" },
    { value: "cate2", label: "Category 2" },
    { value: "cate3", label: "Category 3" },
  ];

  const country = [
    { value: "bd", label: "Bangladesh" },
    { value: "usa", label: "United States" },
    { value: "canada", label: "Canada" },
  ];

  const handleSelectGender = useCallback((value: string) => {
    console.log("Selected value:", value);
  }, []);

  const handleRadioChange = useCallback((value: string) => {
    setSelectedOption(value);
    console.log("Selected:", value);
  }, []);

  return (
    <Card className="p-4 sm:p-6 w-full max-w-3xl mx-auto">
      <h2 className="mb-6 text-lg font-semibold">Example Form</h2>
      <Form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:gap-6">
          <div>
            <h4 className="pb-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">
              Personal Info
            </h4>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
            <Label htmlFor="gender">Gender</Label>
            <Select
              id="gender"
              options={optionsGender}
              placeholder="Select an option"
              onChange={handleSelectGender}
              defaultValue=""
              className="w-full bg-gray-50 dark:bg-gray-800"
              aria-label="Select gender"
            />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <div className="relative w-full">
              <Input
                type="date"
                id="dob"
                defaultValue={dateOfBirth}
                onChange={handleDateChange}
                className="w-full"
                aria-label="Date of birth"
              />
              <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                <FiCalendar />
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              id="category"
              options={categoryOptions}
              placeholder="Select an option"
              onChange={handleSelectGender}
              defaultValue=""
              className="w-full bg-gray-50 dark:bg-gray-800"
              aria-label="Select category"
            />
          </div>

          <div>
            <h4 className="pb-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">
              Address
            </h4>
          </div>

          <div>
            <Label htmlFor="street">Street</Label>
            <Input type="text" id="street" aria-label="Street address" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="city">City</Label>
              <Input type="text" id="city" aria-label="City" />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input type="text" id="state" aria-label="State" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="postCode">Post Code</Label>
              <Input type="text" id="postCode" aria-label="Post code" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select
                id="country"
                options={country}
                placeholder="--Select Country--"
                onChange={handleSelectGender}
                defaultValue=""
                className="w-full bg-gray-50 dark:bg-gray-800"
                aria-label="Select country"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Label htmlFor="membership" className="m-0">Membership:</Label>
            <div className="flex flex-wrap items-center gap-4">
              <Radio
                id="Free"
                name="roleSelect"
                value="Free"
                label="Free"
                checked={selectedOption === "Free"}
                onChange={handleRadioChange}
              />
              <Radio
                id="Premium"
                name="roleSelect"
                value="Premium"
                label="Premium"
                checked={selectedOption === "Premium"}
                onChange={handleRadioChange}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button size="sm" type="submit">Save Changes</Button>
            <Button size="sm" variant="outline" type="button">Cancel</Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
