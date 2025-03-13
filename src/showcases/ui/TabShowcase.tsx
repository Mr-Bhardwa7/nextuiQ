import { useState } from 'react';
import { FiGrid, FiBell, FiBarChart2, FiUsers } from 'react-icons/fi';
import {Tabs} from '@/components/ui/tabs';
import { cn } from "@/lib/utils";

const defaultOptions = [
  { id: 'overview', label: 'Overview', value: 'overview' },
  { id: 'notification', label: 'Notification', value: 'notification' },
  { id: 'analytics', label: 'Analytics', value: 'analytics' },
  { id: 'customers', label: 'Customers', value: 'customers' },
];

const optionsWithIcons = [
  { id: 'overview', label: 'Overview', value: 'overview', icon: <FiGrid className="h-4 w-4" /> },
  { id: 'notification', label: 'Notification', value: 'notification', icon: <FiBell className="h-4 w-4" /> },
  { id: 'analytics', label: 'Analytics', value: 'analytics', icon: <FiBarChart2 className="h-4 w-4" /> },
  { id: 'customers', label: 'Customers', value: 'customers', icon: <FiUsers className="h-4 w-4" /> },
];

const TabContent = ({ value }: { value: string }) => {
  return (
    <div className="mt-4 p-6 rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </h2>
      <p className="text-slate-600 dark:text-slate-300">
        {value} ipsum dolor sit amet consectetur. Non vitae facilisis urna tortor placerat egestas donec. 
        Faucibus diam gravida enim elit lacus a. Tincidunt fermentum condimentum quis et a et tempus. 
        Tristique urna nisi nulla elit sit libero scelerisque ante.
      </p>
    </div>
  );
};

export default function TabShowcase() {
  const [variant, setVariant] = useState<'default' | 'underline' | 'withIcons'>('default');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <button
          onClick={() => setVariant('default')}
          className={`px-4 py-2 rounded-md ${
            variant === 'default'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          Default
        </button>
        <button
          onClick={() => setVariant('underline')}
          className={`px-4 py-2 rounded-md ${
            variant === 'underline'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          Underline
        </button>
        <button
          onClick={() => setVariant('withIcons')}
          className={`px-4 py-2 rounded-md ${
            variant === 'withIcons'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          With Icons
        </button>
      </div>

      <div className="w-full space-y-4">
        <Tabs
          options={variant === 'withIcons' ? optionsWithIcons : defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
          className={cn(
            variant === 'underline' && "bg-transparent p-0 gap-4 [&>button]:rounded-none [&>button]:px-1 [&>button]:py-2 [&>button.active]:border-b-2 [&>button.active]:border-blue-600 [&>button.active]:bg-transparent"
          )}
        />
        <TabContent value={activeTab} />
      </div>
    </div>
  );
}