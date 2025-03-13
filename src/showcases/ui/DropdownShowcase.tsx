import { useState } from 'react';
import {Dropdown} from '@/components/ui/dropdown';
import {Button} from '@/components/ui/button';
import { FiUser, FiSettings, FiLogOut, FiChevronDown, FiEdit, FiTrash2 } from 'react-icons/fi';

const DropdownShowcase = () => {
  const [variant, setVariant] = useState<'default' | 'withDisabled' | 'alignStart' | 'customTrigger'>('default');

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => setVariant('default')}
          className={variant === 'default' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('withDisabled')}
          className={variant === 'withDisabled' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          With Disabled
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('alignStart')}
          className={variant === 'alignStart' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          Align Start
        </Button>
        <Button
          variant="outline"
          onClick={() => setVariant('customTrigger')}
          className={variant === 'customTrigger' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : ''}
        >
          Custom Trigger
        </Button>
      </div>

      <div className="w-full max-w-xs">
        {variant === 'default' && (
          <Dropdown
            trigger={
              <Button endIcon={<FiChevronDown />}>
                Menu
              </Button>
            }
            items={[
              { label: 'Profile', value: 'profile', icon: <FiUser /> },
              { label: 'Settings', value: 'settings', icon: <FiSettings /> },
              { label: 'Sign out', value: 'signout', icon: <FiLogOut /> },
            ]}
          />
        )}

        {variant === 'withDisabled' && (
          <Dropdown
            trigger={
              <Button variant="outline" endIcon={<FiChevronDown />}>
                Actions
              </Button>
            }
            items={[
              { label: 'Edit', value: 'edit', icon: <FiEdit /> },
              { label: 'Delete', value: 'delete', icon: <FiTrash2 />, disabled: true },
            ]}
          />
        )}

        {variant === 'alignStart' && (
          <Dropdown
            align="start"
            trigger={
              <Button variant="ghost" endIcon={<FiChevronDown />}>
                Left Aligned
              </Button>
            }
            items={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
          />
        )}

        {variant === 'customTrigger' && (
          <Dropdown
            trigger={
              <div className="flex items-center gap-2 cursor-pointer">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                  alt="User avatar"
                  className="w-8 h-8 rounded-full"
                />
                <FiChevronDown />
              </div>
            }
            items={[
              { label: 'View Profile', value: 'profile' },
              { label: 'Account Settings', value: 'settings' },
              { label: 'Sign Out', value: 'signout' },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default DropdownShowcase;