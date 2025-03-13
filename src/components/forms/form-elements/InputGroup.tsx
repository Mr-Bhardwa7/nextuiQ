
import { useCallback } from "react";
import { Card } from "../../ui/card";
import {Label}  from "@/components/forms/label";
import {Input} from "@/components/forms/input";
import {PhoneInput} from "@/components/forms/input/PhoneInput";
import { FiMail } from "react-icons/fi";

export default function InputGroup() {
  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
  ];

  const handlePhoneNumberChange = useCallback((phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  }, []);

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Input Group</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email-input">Email</Label>
          <div className="relative">
            <Input
              id="email-input"
              placeholder="info@gmail.com"
              type="email"
              className="pl-[62px]"
              aria-label="Email input with icon"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <FiMail size={20} aria-hidden="true" />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="phone-start">Phone</Label>
          <PhoneInput
            id="phone-start"
            selectPosition="start"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
            aria-label="Phone input with country code at start"
          />
        </div>

        <div>
          <Label htmlFor="phone-end">Phone</Label>
          <PhoneInput
            id="phone-end"
            selectPosition="end"
            countries={countries}
            placeholder="+1 (555) 000-0000"
            onChange={handlePhoneNumberChange}
            aria-label="Phone input with country code at end"
          />
        </div>
      </div>
    </Card>
  );
}
