import React from "react";
import {Button} from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {Form} from "@/components/form-elements/form";
import {Input} from "@/components/form-elements/input";
import {Label} from "@/components/form-elements/label";
import {Checkbox} from "@/components/form-elements/input/Checkbox";

export default function SignInForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
      <Card className="w-[400px] p-6 bg-white rounded-lg shadow-sm">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign in</h1>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account yet?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up here
          </a>
        </p>
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            {/* SVG paths remain the same */}
          </svg>
          Sign in with Google
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">OR</span>
          </div>
        </div>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              aria-label="Email address"
            />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              type="password"
              id="password"
              aria-label="Password"
            />
          </div>
          <div className="flex items-center">
            <Checkbox id="remember" checked={false} onChange={() => {}} />
            <Label htmlFor="remember" className="ml-2">
              Remember me
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </Form>
      </div>
    </Card>
  );
}