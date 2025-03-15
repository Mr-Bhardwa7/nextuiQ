import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './index';
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { useState, useCallback } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter, FiSearch } from 'react-icons/fi';

interface TableItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  priority: string;
}

interface ComplexTableItem extends TableItem {
  lastActive: string;
  projects: number;
  tasks: number;
  progress: number;
}


const sampleData: TableItem[] = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@example.com', 
    role: 'Admin',
    status: 'Active',
    priority: 'High'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    role: 'User',
    status: 'Inactive',
    priority: 'Medium'
  },
  { 
    id: 3, 
    name: 'Bob Johnson', 
    email: 'bob@example.com', 
    role: 'Editor',
    status: 'Active',
    priority: 'Low'
  },
];

const complexData: ComplexTableItem[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    priority: 'High',
    lastActive: '2 hours ago',
    projects: 8,
    tasks: 24,
    progress: 75
  },
  // ... add more items
];

const meta: Meta<typeof Table> = {
  title: 'Components/ui/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'surface',
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-[oklch(var(--theme-background))]">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const TableContent = ({ data }: { data: TableItem[] }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Priority</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.length > 0 ? (
        data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-[oklch(var(--theme-foreground))]">
              {item.name}
            </TableCell>
            <TableCell className="text-[oklch(var(--theme-muted-foreground))]">
              {item.email}
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]">
                {item.role}
              </span>
            </TableCell>
            <TableCell>
              <span className={cn(
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
                item.status === 'Active' 
                  ? "bg-[oklch(var(--theme-success)/0.1)] text-[oklch(var(--theme-success))]"
                  : "bg-[oklch(var(--theme-destructive)/0.1)] text-[oklch(var(--theme-destructive))]"
              )}>
                {item.status === 'Active' ? <FiCheck className="h-3 w-3" /> : <FiX className="h-3 w-3" />}
                {item.status}
              </span>
            </TableCell>
            <TableCell>
              <span className={cn(
                "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
                {
                  'High': "bg-[oklch(var(--theme-warning)/0.1)] text-[oklch(var(--theme-warning))]",
                  'Medium': "bg-[oklch(var(--theme-info)/0.1)] text-[oklch(var(--theme-info))]",
                  'Low': "bg-[oklch(var(--theme-muted)/0.1)] text-[oklch(var(--theme-muted-foreground))]"
                }[item.priority]
              )}>
                <FiAlertCircle className="h-3 w-3" />
                {item.priority}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-md hover:bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="p-2 rounded-md hover:bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={6} className="text-center py-8 text-[oklch(var(--theme-muted-foreground))]">
            No results found
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

// Update the container styling for all stories
export const Default: Story = {
  render: () => (
    <div className="rounded-lg border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]">
      <TableContent data={sampleData} />
    </div>
  ),
};

export const DataTable: Story = {
  render: () => {
    const [sortField, setSortField] = useState<keyof ComplexTableItem>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [filter, setFilter] = useState('');

    const handleSort = useCallback((field: keyof ComplexTableItem) => {
      if (field === sortField) {
        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    }, [sortField]);

    const filteredData = complexData.filter(item =>
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );

    const sortedData = [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      return sortDirection === 'asc' 
        ? aVal > bVal ? 1 : -1
        : aVal < bVal ? 1 : -1;
    });

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 border-b border-[oklch(var(--theme-border))]">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(var(--theme-muted-foreground))]" />
            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-background))]"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[oklch(var(--theme-border))] hover:bg-[oklch(var(--theme-muted))]">
            <FiFilter className="h-4 w-4" />
            Filter
          </button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead 
                onClick={() => handleSort('name')}
                className="cursor-pointer hover:bg-[oklch(var(--theme-muted)/0.5)]"
              >
                Name {sortField === 'name' && (
                  sortDirection === 'asc' ? <FiChevronUp className="inline" /> : <FiChevronDown className="inline" />
                )}
              </TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Projects</TableHead>
              <TableHead>Tasks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <div>
                    <div className="text-[oklch(var(--theme-foreground))]">{item.name}</div>
                    <div className="text-sm text-[oklch(var(--theme-muted-foreground))]">{item.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-full h-2 bg-[oklch(var(--theme-muted))] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[oklch(var(--theme-primary))]" 
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-[oklch(var(--theme-muted-foreground))]">{item.progress}%</span>
                </TableCell>
                <TableCell className="text-center font-medium">{item.projects}</TableCell>
                <TableCell className="text-center font-medium">{item.tasks}</TableCell>
                <TableCell>
                  <span className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium",
                    item.status === 'Active' 
                      ? "bg-[oklch(var(--theme-success)/0.1)] text-[oklch(var(--theme-success))]"
                      : "bg-[oklch(var(--theme-destructive)/0.1)] text-[oklch(var(--theme-destructive))]"
                  )}>
                    {item.status === 'Active' ? <FiCheck className="h-3 w-3" /> : <FiX className="h-3 w-3" />}
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-[oklch(var(--theme-muted-foreground))]">
                  {item.lastActive}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
};