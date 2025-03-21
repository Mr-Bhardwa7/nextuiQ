import { useState, useId } from 'react';
import {Dropdown} from "@/components/ui/dropdown";
import {Avatar} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

export interface UserData {
  name: string;
  email: string;
  avatar: string;
}

export interface UserDropdownProps {
  userData?: UserData;
  onAction?: (action: 'profile' | 'settings' | 'signout') => void;
}

const defaultUserData: UserData = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
};

export const UserDropdown = ({ userData = defaultUserData, onAction }: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const trigger = (
    <Button 
      variant="ghost"
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center gap-2 rounded-full 
        border border-[oklch(var(--theme-border))] 
        bg-[oklch(var(--theme-background))] p-1 
        text-sm text-[oklch(var(--theme-muted-foreground))] 
        hover:bg-[oklch(var(--theme-muted))]"
      aria-label={`User menu for ${userData.name}`}
      aria-expanded={isOpen}
      aria-controls={menuId}
      aria-haspopup="menu"
    >
      <Avatar src={userData.avatar} alt={userData.name} size="sm" />
      <span className="pr-2">{userData.name}</span>
    </Button>
  );

  return (
    <Dropdown 
      trigger={trigger}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      align="end"
      className="w-64"
      id={menuId}
      role="menu"
      aria-label={`${userData.name}'s account menu`}
    >
      <div className="p-3 space-y-3">
        <div className="border-b border-[oklch(var(--theme-border))] pb-3">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
            <Avatar src={userData.avatar} alt={userData.name} size="md" />
            <div className="flex-1 truncate">
              <div className="font-semibold text-[oklch(var(--theme-foreground))]">
                {userData.name}
              </div>
              <div className="truncate text-sm text-[oklch(var(--theme-muted-foreground))]">
                {userData.email}
              </div>
            </div>
          </div>
        </div>

        <div className="py-1 space-y-1" role="group" aria-label="User actions">
          <Button
            variant="ghost"
            className="flex w-full items-center gap-3 justify-start rounded-lg px-3 py-2.5 
              text-[oklch(var(--theme-muted-foreground))] transition-colors 
              hover:bg-[oklch(var(--theme-muted))]"
            onClick={() => onAction?.('profile')}
            role="menuitem"
          >
            <svg className="h-5 w-5 text-[oklch(var(--theme-muted-foreground))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profile</span>
          </Button>

          <Button
            variant="ghost"
            className="flex w-full items-center gap-3 justify-start rounded-lg px-3 py-2.5 
              text-[oklch(var(--theme-muted-foreground))] transition-colors 
              hover:bg-[oklch(var(--theme-muted))]"
            onClick={() => onAction?.('settings')}
            role="menuitem"
          >
            <svg className="h-5 w-5 text-[oklch(var(--theme-muted-foreground))]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </Button>
        </div>

        <div className="border-t border-[oklch(var(--theme-border))] pt-2">
          <Button
            variant="ghost"
            className="flex w-full items-center gap-3 justify-start rounded-lg px-3 py-2.5 
              text-[oklch(var(--theme-error))] transition-colors 
              hover:bg-[oklch(var(--theme-error)/0.1)]"
            onClick={() => onAction?.('signout')}
            role="menuitem"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign out</span>
          </Button>
        </div>
      </div>
    </Dropdown>
  );
};
