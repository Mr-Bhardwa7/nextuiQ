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
    <div className="mt-4 p-6 rounded-lg border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]">
      <h2 className="text-xl font-semibold mb-3 text-[oklch(var(--theme-foreground))]">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </h2>
      <p className="text-[oklch(var(--theme-muted-foreground))]">
        Content for {value} tab goes here. This is a sample content area that demonstrates the tab panel.
      </p>
    </div>
  );
};

// Vertical Tabs Example
export const Vertical: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="flex gap-6 w-full max-w-4xl">
        <Tabs
          options={defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
          className="flex-col !w-48 h-fit"
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

// Card Style Tabs
export const CardStyle: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    return (
      <div className="w-full max-w-3xl space-y-4">
        <Tabs
          options={defaultOptions}
          value={activeTab}
          onChange={setActiveTab}
          className="p-1.5 border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]"
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

// Interactive Tabs with Counters
export const WithCounters: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const optionsWithCounters = [
      { 
        id: 'overview', 
        label: (
          <div className="flex items-center gap-2">
            Overview
            <span className="px-2 py-0.5 text-xs rounded-full bg-[oklch(var(--theme-primary)/0.1)] text-[oklch(var(--theme-primary))]">
              12
            </span>
          </div>
        ), 
        value: 'overview' 
      },
      { 
        id: 'tasks', 
        label: (
          <div className="flex items-center gap-2">
            Tasks
            <span className="px-2 py-0.5 text-xs rounded-full bg-[oklch(var(--theme-primary)/0.1)] text-[oklch(var(--theme-primary))]">
              5
            </span>
          </div>
        ), 
        value: 'tasks' 
      },
      { 
        id: 'messages', 
        label: (
          <div className="flex items-center gap-2">
            Messages
            <span className="px-2 py-0.5 text-xs rounded-full bg-[oklch(var(--theme-destructive)/0.1)] text-[oklch(var(--theme-destructive))]">
              3
            </span>
          </div>
        ), 
        value: 'messages' 
      }
    ];

    return (
      <div className="w-full max-w-3xl space-y-4">
        <Tabs
          options={optionsWithCounters}
          value={activeTab}
          onChange={setActiveTab}
        />
        <TabContent value={activeTab} />
      </div>
    );
  }
};

// Segmented Control Style
export const SegmentedControl: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('daily');
    
    const timeOptions = [
      { id: 'daily', label: 'Daily', value: 'daily' },
      { id: 'weekly', label: 'Weekly', value: 'weekly' },
      { id: 'monthly', label: 'Monthly', value: 'monthly' }
    ];

    return (
      <div className="w-full max-w-xs">
        <Tabs
          options={timeOptions}
          value={activeTab}
          onChange={setActiveTab}
          className="p-1 border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))] [&>button]:flex-1 [&>button]:justify-center"
        />
      </div>
    );
  }
};

// Icon and Label Tabs
export const IconAndLabel: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    
    const optionsWithIcons = [
      { 
        id: 'overview', 
        label: (
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            Overview
          </div>
        ), 
        value: 'overview' 
      },
      { 
        id: 'analytics', 
        label: (
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </div>
        ), 
        value: 'analytics' 
      },
      { 
        id: 'settings', 
        label: (
          <div className="flex flex-col items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </div>
        ), 
        value: 'settings' 
      }
    ];

    return (
      <div className="w-full max-w-md">
        <Tabs
          options={optionsWithIcons}
          value={activeTab}
          onChange={setActiveTab}
          className="[&>button]:py-3"
        />
      </div>
    );
  }
};