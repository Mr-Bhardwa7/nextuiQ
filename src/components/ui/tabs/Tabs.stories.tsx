import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {Tabs} from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Components/ui/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultOptions = [
  { id: 'overview', label: 'Overview', value: 'overview' },
  { id: 'notification', label: 'Notification', value: 'notification' },
  { id: 'analytics', label: 'Analytics', value: 'analytics' },
  { id: 'customers', label: 'Customers', value: 'customers' },
];

const TabContent = ({ value }: { value: string }) => {
  return (
    <div className="mt-4 p-4 rounded-lg bg-white dark:bg-slate-800">
      <h2 className="text-xl font-semibold mb-2">{value.charAt(0).toUpperCase() + value.slice(1)}</h2>
      <p className="text-slate-600 dark:text-slate-300">
        {value} ipsum dolor sit amet consectetur. Non vitae facilisis urna tortor placerat egestas donec. 
        Faucibus diam gravida enim elit lacus a. Tincidunt fermentum condimentum quis et a et tempus. 
        Tristique urna nisi nulla elit sit libero scelerisque ante.
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="w-full max-w-3xl space-y-4">
        <Tabs
          options={defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

export const WithUnderline: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="w-full max-w-3xl space-y-4">
        <Tabs
          options={defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
          className="bg-transparent p-0 gap-4 [&>button]:rounded-none [&>button]:px-1 [&>button]:py-2 [&>button.active]:border-b-2 [&>button.active]:border-blue-600 [&>button.active]:bg-transparent"
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const optionsWithIcons = [
      { 
        id: 'overview', 
        label: 'Overview', 
        value: 'overview',
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
      },
      { 
        id: 'notification', 
        label: 'Notification', 
        value: 'notification',
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        )
      },
      { 
        id: 'analytics', 
        label: 'Analytics', 
        value: 'analytics',
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      { 
        id: 'customers', 
        label: 'Customers', 
        value: 'customers',
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      },
    ];

    return (
      <div className="w-full max-w-3xl space-y-4">
        <Tabs
          options={optionsWithIcons}
          value={activeTab}
          onChange={setActiveTab}
          className="bg-transparent p-0 gap-4 [&>button]:rounded-none [&>button]:px-1 [&>button]:py-2 [&>button.active]:border-b-2 [&>button.active]:border-blue-600 [&>button.active]:bg-transparent"
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

export const WithBadges: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const optionsWithBadges = [
      { 
        id: 'overview', 
        label: 'Overview (4)', 
        value: 'overview' 
      },
      { 
        id: 'notification', 
        label: 'Notification', 
        value: 'notification' 
      },
      { 
        id: 'analytics', 
        label: 'Analytics', 
        value: 'analytics' 
      },
      { 
        id: 'customers', 
        label: 'Customers (2)', 
        value: 'customers' 
      },
    ];

    return (
      <Tabs
        options={optionsWithBadges}
        value={activeTab}
        onChange={setActiveTab}
      />
    );
  }
};

export const CustomStyles: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <Tabs
        options={defaultOptions}
        value={activeTab}
        onChange={setActiveTab}
        className="bg-white dark:bg-slate-800 shadow-sm"
      />
    );
  }
};

export const Compact: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <Tabs
        options={defaultOptions}
        value={activeTab}
        onChange={setActiveTab}
        className="p-0.5 gap-0.5 [&>button]:px-2.5 [&>button]:py-1.5 text-xs"
      />
    );
  }
};

export const FullWidth: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="w-full max-w-2xl">
        <Tabs
          options={defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
          className="w-full"
        />
      </div>
    );
  }
};