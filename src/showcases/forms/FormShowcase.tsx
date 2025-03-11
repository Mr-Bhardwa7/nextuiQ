import Form from '@/components/forms/form';
import Button from '@/components/ui/button';

const FormShowcase = () => {
  return (
    <section className="space-y-12 max-w-4xl mx-auto p-8 bg-slate-50 dark:bg-slate-900">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Sign In Form</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="border-b border-slate-200 dark:border-slate-700 px-4 py-3">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white">Default</h3>
          </div>
          <div className="p-6">
            <Form onSubmit={(e) => console.log('Sign in submitted', e)}>
              <div className="w-full max-w-md mx-auto space-y-4">
                <h1 className="text-2xl font-semibold text-center">Sign in</h1>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account yet? <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Sign up here</a>
                </p>
                <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign in with Google
                </button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500 dark:bg-slate-900 dark:text-gray-400">OR</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email address</label>
                    <input type="email" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="block text-sm font-medium">Password</label>
                      <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">Forgot password?</a>
                    </div>
                    <input type="password" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="rounded border-gray-300 dark:border-gray-700" />
                    <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
                  </div>
                  <Button type="submit" className="w-full">Sign in</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact Form</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="border-b border-slate-200 dark:border-slate-700 px-4 py-3">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white">Default</h3>
          </div>
          <div className="p-6">
            <Form onSubmit={(e) => console.log('Contact form submitted', e)}>
              <div className="w-full max-w-2xl mx-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Work Email</label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input type="text" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Company Website</label>
                    <input type="url" className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-700 dark:bg-gray-900" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Details</label>
                  <textarea className="w-full rounded-lg border border-gray-300 p-2.5 h-24 dark:border-gray-700 dark:bg-gray-900"></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-1 rounded border-gray-300 dark:border-gray-700" />
                  <label htmlFor="privacy" className="text-sm">
                    By submitting this form I have read and acknowledged the Privacy policy
                  </label>
                </div>
                <Button type="submit" className="w-full">Send inquiry</Button>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">We'll get back to you in 1-2 business days.</p>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Form with Validation</h2>
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="border-b border-slate-200 dark:border-slate-700 px-4 py-3">
            <h3 className="text-sm font-medium text-slate-900 dark:text-white">Default</h3>
          </div>
          <div className="p-6">
            <Form onSubmit={(e) => console.log('Validation form submitted', e)}>
              <div className="w-full max-w-md mx-auto space-y-4">
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
                    className="w-full rounded-lg border border-green-500 p-2.5 focus:ring-green-500 focus:border-green-500" 
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
                <Button type="submit" className="w-full">Register</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormShowcase;