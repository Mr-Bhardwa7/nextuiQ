import { useState } from 'react';
import { FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { TableFilter } from '@/components/ui/table/TableFilter';
import { TablePagination } from '@/components/ui/table/TablePagination';
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
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', priority: 'High' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', priority: 'Medium' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active', priority: 'Low' },
];

const extendedSampleData: TableItem[] = [
  ...sampleData,
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User', status: 'Active', priority: 'Medium' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Inactive', priority: 'Low' },
  { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Admin', status: 'Active', priority: 'High' },
  { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'User', status: 'Active', priority: 'Medium' },
  { id: 8, name: 'Fiona Clark', email: 'fiona@example.com', role: 'Editor', status: 'Inactive', priority: 'Low' },
];

const TableContent = ({ data, striped = false }: { data: TableItem[]; striped?: boolean }) => (
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
        data.map((item, index) => (
          <TableRow 
            key={item.id}
            className={striped && index % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-800/50' : ''}
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

export default function TableShowcase() {
  const [variant, setVariant] = useState<'default' | 'striped' | 'paginated'>('default');
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
          onClick={() => setVariant('striped')}
          className={`px-4 py-2 rounded-md ${
            variant === 'striped'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          Striped
        </button>
        <button
          onClick={() => setVariant('paginated')}
          className={`px-4 py-2 rounded-md ${
            variant === 'paginated'
              ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
          }`}
        >
          Paginated
        </button>
      </div>

      <div className="rounded-lg border border-slate-200 dark:border-slate-700">
        {variant === 'paginated' && (
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
        )}

        <TableContent 
          data={variant === 'paginated' ? paginatedData : sampleData} 
          striped={variant === 'striped'} 
        />

        {variant === 'paginated' && (
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            endIndex={endIndex}
            totalItems={totalItems}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}