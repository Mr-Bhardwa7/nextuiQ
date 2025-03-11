import { FiSearch, FiFilter } from 'react-icons/fi';

export interface TableFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  roleFilter: string;
  onRoleChange: (value: string) => void;
  totalResults: number;
  filteredResults: number;
}

export const TableFilter = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  roleFilter,
  onRoleChange,
  totalResults,
  filteredResults,
}: TableFilterProps) => (
  <div className="p-4 border-b border-slate-200 dark:border-slate-700 space-y-4">
    <div className="flex items-center gap-4">
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <select
        className="px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        value={roleFilter}
        onChange={(e) => onRoleChange(e.target.value)}
      >
        <option value="all">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
      </select>
    </div>
    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
      <span>
        Showing {filteredResults} of {totalResults} entries
      </span>
      <div className="flex items-center gap-2">
        <FiFilter className="h-4 w-4" />
        <span>
          Filtered by: {statusFilter !== 'all' && `Status: ${statusFilter}`} {roleFilter !== 'all' && `Role: ${roleFilter}`}
        </span>
      </div>
    </div>
  </div>
);