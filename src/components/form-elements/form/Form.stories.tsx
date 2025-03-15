import type { Meta, StoryObj } from '@storybook/react';
import {Form} from './index';
import {Button} from '@/components/ui/button';

const meta: Meta<typeof Form> = {
  title: 'Components/FormElements/Form',  // Changed from 'Components/Forms/Form'
  component: Form,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const SignIn: Story = {
  args: {
    children: (
      <div className="w-[400px] space-y-4 p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign in</h1>
        <p className="text-center text-sm text-gray-600">
          Don't have an account yet? <a href="#" className="text-blue-600 hover:underline">Sign up here</a>
        </p>
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input type="email" className="w-full rounded-lg border p-2.5" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium">Password</label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <input type="password" className="w-full rounded-lg border p-2.5" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="rounded border-gray-300" />
            <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
        </div>
      </div>
    ),
    onSubmit: (e) => console.log('Sign in submitted', e),
  },
};

export const ContactForm: Story = {
  args: {
    children: (
      <div className="w-[500px] space-y-4 p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Fill in the form</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input type="text" className="w-full rounded-lg border p-2.5" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input type="text" className="w-full rounded-lg border p-2.5" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Work Email</label>
          <input type="email" className="w-full rounded-lg border p-2.5" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input type="text" className="w-full rounded-lg border p-2.5" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company Website</label>
            <input type="url" className="w-full rounded-lg border p-2.5" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Details</label>
          <textarea className="w-full rounded-lg border p-2.5 h-24"></textarea>
        </div>
        <div className="flex items-start gap-2">
          <input type="checkbox" id="privacy" className="mt-1 rounded border-gray-300" />
          <label htmlFor="privacy" className="text-sm">
            By submitting this form I have read and acknowledged the Privacy policy
          </label>
        </div>
        <Button type="submit" className="w-full">Send inquiry</Button>
        <p className="text-sm text-center text-gray-500">We'll get back to you in 1-2 business days.</p>
      </div>
    ),
    onSubmit: (e) => console.log('Contact form submitted', e),
  },
};

export const ValidationForm: Story = {
  args: {
    children: (
      <div className="w-[400px] space-y-4 p-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <div>
          <label className="block text-sm font-medium mb-1">
            Username
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="text" 
            className="w-full rounded-lg border border-red-500 p-2.5 focus:ring-red-500 focus:border-red-500" 
            defaultValue="jo"
          />
          <p className="mt-1 text-sm text-red-500">Username must be at least 3 characters</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="email" 
            className="w-full rounded-lg border border-gray-300 p-2.5 focus:ring-blue-500 focus:border-blue-500" 
            defaultValue="john.doe@example.com"
          />
          <p className="mt-1 text-sm text-green-600">Email is valid</p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Password
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="password" 
            className="w-full rounded-lg border border-red-500 p-2.5 focus:ring-red-500 focus:border-red-500" 
            defaultValue="pass"
          />
          <div className="mt-1 space-y-1">
            <p className="text-sm text-red-500">Password must:</p>
            <ul className="text-sm space-y-1 ml-5 list-disc">
              <li className="text-green-600">Include at least 8 characters</li>
              <li className="text-red-500">Include at least one uppercase letter</li>
              <li className="text-red-500">Include at least one number</li>
              <li className="text-red-500">Include at least one special character</li>
            </ul>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input 
            type="password" 
            className="w-full rounded-lg border border-red-500 p-2.5 focus:ring-red-500 focus:border-red-500" 
            defaultValue="password"
          />
          <p className="mt-1 text-sm text-red-500">Passwords do not match</p>
        </div>
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="terms" 
            className="mt-1 rounded border-red-500 text-blue-600" 
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the Terms of Service and Privacy Policy
            <span className="text-red-500 ml-1">*</span>
          </label>
        </div>
        <p className="text-sm text-red-500">Please accept the terms and conditions</p>
        <Button type="submit" className="w-full">Register</Button>
      </div>
    ),
    onSubmit: (e) => console.log('Validation form submitted', e),
  },
};