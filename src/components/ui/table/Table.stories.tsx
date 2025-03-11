import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './index';
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';
import { TableFilter } from './TableFilter';
import { TablePagination } from './TablePagination';
import { useTable } from '@/hooks/useTable';

interface TableItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  priority: string;
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

const extendedSampleData: TableItem[] = [
  ...sampleData,
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', priority: 'Medium' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Inactive', priority: 'Low' },
  { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Admin', status: 'Active', priority: 'High' },
  { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', status: 'Active', priority: 'Medium' },
  { id: 8, name: 'Fiona Clark', email: 'fiona@example.com', role: 'Editor', status: 'Inactive', priority: 'Low' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/ui/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-white dark:bg-slate-900">
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
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.length > 0 ? (
        data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-slate-900 dark:text-white">
              {item.name}
            </TableCell>
            <TableCell className="text-slate-600 dark:text-slate-300">
              {item.email}
            </TableCell>
            <TableCell>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                {item.role}
              </span>
            </TableCell>
            <TableCell>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                item.status === 'Active' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {item.status === 'Active' ? <FiCheck className="h-3 w-3" /> : <FiX className="h-3 w-3" />}
                {item.status}
              </span>
            </TableCell>
            <TableCell>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                item.priority === 'High' 
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                  : item.priority === 'Medium'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                <FiAlertCircle className="h-3 w-3" />
                {item.priority}
              </span>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={5} className="text-center py-8 text-slate-500 dark:text-slate-400">
            No results found
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export const Default: Story = {
  render: () => (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700">
      <TableContent data={sampleData} />
    </div>
  ),
};

export const Striped: Story = {
  render: () => (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((item, index) => (
            <TableRow 
              key={item.id}
              className={index % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-800/50' : ''}
            >
              <TableCell className="font-medium text-slate-900 dark:text-white">
                {item.name}
              </TableCell>
              <TableCell className="text-slate-600 dark:text-slate-300">
                {item.email}
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                  {item.role}
                </span>
              </TableCell>
              <TableCell>
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === 'Active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {item.status === 'Active' ? <FiCheck className="h-3 w-3" /> : <FiX className="h-3 w-3" />}
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

export const PaginatedTable: Story = {
  render: () => {
    const {
      searchTerm,
      setSearchTerm,
      statusFilter,
      setStatusFilter,
      roleFilter,
      setRoleFilter,
      currentPage,
      setCurrentPage,
      paginatedData,
      totalPages,
      startIndex,
      endIndex,
      totalItems,
    } = useTable<TableItem>({
      data: extendedSampleData,
      searchFields: ['name', 'email'],
    });

    return (
      <div className="rounded-lg border border-slate-200 dark:border-slate-700">
        <TableFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          roleFilter={roleFilter}
          onRoleChange={setRoleFilter}
          totalResults={extendedSampleData.length}
          filteredResults={totalItems}
        />
        <TableContent data={paginatedData} />
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={totalItems}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};