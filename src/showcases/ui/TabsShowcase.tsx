import { useState } from 'react';
import Tabs from '@/components/ui/tabs';
import Button from '@/components/ui/button';
import { FiGrid, FiBell, FiBarChart2, FiUsers } from 'react-icons/fi';

const TabsShowcase = () => {
  const [variant, setVariant] = useState<'default' | 'underline' | 'withIcons' | 'withBadges'>('default');
  const [activeTab, setActiveTab] = useState('overview');

  const defaultOptions = [
    { id: 'overview', label: 'Overview', value: 'overview' },
    { id: 'notification', label: 'Notification', value: 'notification' },
    { id: 'analytics', label: 'Analytics', value: 'analytics' },
    { id: 'customers', label: 'Customers', value: 'customers' },
  ];

  const optionsWithIcons = [
    { id: 'overview', label: 'Overview', value: 'overview' },
    { id: 'notification', label: 'Notification', value: 'notification' },
    { id: 'analytics', label: 'Analytics', value: 'analytics' },
    { id: 'customers', label: 'Customers', value: 'customers' },
  ];

  const optionsWithBadges = [
    { id: 'overview', label: 'Overview (4)', value: 'overview' },
    { id: 'notification', label: 'Notification', value: 'notification' },
    { id: 'analytics', label: 'Analytics', value: 'analytics' },
    { id: 'customers', label: 'Customers (2)', value: 'customers' },
  ];

  const TabContent = () => (
    <div className="p-4 mt-4 rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <h3 className="text-lg font-medium mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
      <p className="text-slate-600 dark:text-slate-300">
        {activeTab} ipsum dolor sit amet consectetur. Non vitae facilisis urna tortor placerat egestas donec. 
        Faucibus diam gravida enim elit lacus a. Tincidunt fermentum condimentum quis et a et tempus.
      </p>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => setVariant('default')}
          className={variant === 'default' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('underline')}
          className={variant === 'underline' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          Underline
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('withIcons')}
          className={variant === 'withIcons' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          With Icons
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('withBadges')}
          className={variant === 'withBadges' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          With Badges
        </Button>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-2">
          {variant === 'withIcons' && (
            <div className="flex gap-2 items-center">
              {activeTab === 'overview' && <FiGrid className="h-4 w-4" />}
              {activeTab === 'notification' && <FiBell className="h-4 w-4" />}
              {activeTab === 'analytics' && <FiBarChart2 className="h-4 w-4" />}
              {activeTab === 'customers' && <FiUsers className="h-4 w-4" />}
            </div>
          )}
          <Tabs
            options={
              variant === 'withIcons' ? optionsWithIcons :
              variant === 'withBadges' ? optionsWithBadges :
              defaultOptions
            }
            value={activeTab}
            onChange={setActiveTab}
            className={variant === 'underline' ? 'bg-transparent p-0 gap-4' : ''}
          />
        </div>
        <TabContent />
      </div>
    </div>
  );
};

export default TabsShowcase;