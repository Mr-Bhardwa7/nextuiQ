import React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const linkVariants = cva(
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(var(--theme-ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-[oklch(var(--theme-primary))] hover:text-[oklch(var(--theme-primary)/0.8)]",
        ghost: "text-[oklch(var(--theme-muted-foreground))] hover:text-[oklch(var(--theme-foreground))]",
        destructive: "text-[oklch(var(--theme-destructive))] hover:text-[oklch(var(--theme-destructive)/0.8)]",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
}

const LinkComponent = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    const externalProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": `${props["aria-label"] || children} (opens in new tab)`,
        }
      : {};

    return (
      <a
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size, className }))}
        {...externalProps}
        {...props}
      >
        {children}
        {external && (
          <svg
            className="ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </a>
    );
  }
);

LinkComponent.displayName = "Link";

export const Link = LinkComponent;
