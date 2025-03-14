import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "@/components/ui/link";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ReactNode;
}

export interface ActionButton {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  icon?: React.ReactNode;
  className?: string;
}

export interface HeaderProps {
  logo?: React.ReactNode | string;
  altText?: string;
  title?: string;
  navLinks?: NavLink[];
  actions?: ActionButton[];
  className?: string;
}

export const Header = ({
  logo,
  altText = "Logo",
  title,
  navLinks = [],
  actions = [],
  className,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn(
      "w-full bg-[oklch(var(--theme-background))] border-b border-[oklch(var(--theme-border))]",
      className
    )}>
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <div className="flex items-center gap-[var(--header-gap)]">
          {typeof logo === 'string' ? (
            <img src={logo} alt={altText} className="h-[var(--header-logo-size)] w-[var(--header-logo-size)]" />
          ) : logo}
          {title && <span className="text-xl font-semibold text-[oklch(var(--theme-foreground))]">{title}</span>}
        </div>

        <nav className="hidden md:flex items-center gap-[var(--header-nav-gap)]" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              variant={link.isActive ? "default" : "ghost"}
              className={cn(
                "flex items-center gap-2",
                link.isActive && "text-[oklch(var(--theme-primary))]"
              )}
              aria-current={link.isActive ? 'page' : undefined}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "primary"}
                onClick={action.onClick}
                className={cn("flex items-center gap-2", action.className)}
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "container md:hidden py-[var(--header-mobile-padding)] space-y-[var(--header-mobile-gap)]",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              variant={link.isActive ? "default" : "ghost"}
              className="flex items-center gap-2"
              aria-current={link.isActive ? 'page' : undefined}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "primary"}
              onClick={action.onClick}
              className={cn("flex items-center gap-2 w-full justify-center", action.className)}
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

