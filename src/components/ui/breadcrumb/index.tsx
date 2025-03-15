import React from "react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav 
      className={cn("flex", className)} 
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2" role="list">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center"
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {item.href ? (
              <>
                <a
                  href={item.href}
                  className="text-sm text-[oklch(var(--theme-muted-foreground))] hover:text-[oklch(var(--theme-foreground))]"
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </a>
                {index < items.length - 1 && (
                  <ChevronIcon 
                    className="mx-2 h-4 w-4 text-[oklch(var(--theme-muted-foreground))]" 
                    aria-hidden="true"
                  />
                )}
              </>
            ) : (
              <span 
                className="text-sm font-medium text-[oklch(var(--theme-foreground))]"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    aria-hidden="true"
  >
    <path
      d="M6 12L10 8L6 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
