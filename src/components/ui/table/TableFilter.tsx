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
  <div className="p-4 border-b border-[oklch(var(--theme-border))] space-y-4">
    <div className="flex items-center gap-4">
      <div className="relative flex-1">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[oklch(var(--theme-muted-foreground))]" />
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full pl-10 pr-4 py-2 rounded-md 
            border border-[oklch(var(--theme-input))] 
            bg-[oklch(var(--theme-background))]
            text-[oklch(var(--theme-foreground))]
            placeholder:text-[oklch(var(--theme-muted-foreground))]
            focus-visible:outline-none
            focus-visible:ring-1
            focus-visible:ring-[oklch(var(--theme-ring))]"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select
        className="px-4 py-2 rounded-md 
          border border-[oklch(var(--theme-input))] 
          bg-[oklch(var(--theme-background))]
          text-[oklch(var(--theme-foreground))]
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-[oklch(var(--theme-ring))]"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <select
        className="px-4 py-2 rounded-md 
          border border-[oklch(var(--theme-input))] 
          bg-[oklch(var(--theme-background))]
          text-[oklch(var(--theme-foreground))]
          focus-visible:outline-none
          focus-visible:ring-1
          focus-visible:ring-[oklch(var(--theme-ring))]"
        value={roleFilter}
        onChange={(e) => onRoleChange(e.target.value)}
      >
        <option value="all">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
      </select>
    </div>
    <div className="flex items-center justify-between text-sm text-[oklch(var(--theme-muted-foreground))]">
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