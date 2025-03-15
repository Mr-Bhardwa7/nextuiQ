import { cn } from '@/lib/utils';

export interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export const TablePagination = ({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalItems,
  onPageChange,
}: TablePaginationProps) => (
  <div className="px-4 py-4 border-t border-[oklch(var(--theme-border))] flex items-center justify-between">
    <div className="text-sm text-[oklch(var(--theme-muted-foreground))]">
      Showing {startIndex + 1} to {endIndex} of {totalItems} entries
    </div>
    <div className="flex gap-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md border transition-colors",
          currentPage === 1
            ? "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))] cursor-not-allowed"
            : "bg-[oklch(var(--theme-background))] text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))] border-[oklch(var(--theme-border))]"
        )}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md border transition-colors",
            currentPage === page
              ? "bg-[oklch(var(--theme-primary))] text-[oklch(var(--theme-primary-foreground))] border-[oklch(var(--theme-primary))]"
              : "bg-[oklch(var(--theme-background))] text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))] border-[oklch(var(--theme-border))]"
          )}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={cn(
          "px-3 py-2 text-sm font-medium rounded-md border transition-colors",
          currentPage === totalPages
            ? "bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))] cursor-not-allowed"
            : "bg-[oklch(var(--theme-background))] text-[oklch(var(--theme-foreground))] hover:bg-[oklch(var(--theme-muted))] border-[oklch(var(--theme-border))]"
        )}
      >
        Next
      </button>
    </div>
  </div>
);