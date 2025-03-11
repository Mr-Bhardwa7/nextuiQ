import type { Meta, StoryObj } from '@storybook/react';
import Link from './index';

const meta: Meta<typeof Link> = {
  title: 'Components/ui/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const ColoredLinks: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold mb-4">Colored Links</h3>
      <div className="space-y-2">
        <Link href="#" className="text-slate-900 dark:text-slate-100">
          Primary link
        </Link>
        <br />
        <Link href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
          Secondary link
        </Link>
        <br />
        <Link href="#" className="text-green-600 hover:text-green-700 dark:text-green-400">
          Success link
        </Link>
        <br />
        <Link href="#" className="text-red-600 hover:text-red-700 dark:text-red-400">
          Danger link
        </Link>
        <br />
        <Link href="#" className="text-amber-600 hover:text-amber-700 dark:text-amber-400">
          Warning link
        </Link>
      </div>
    </div>
  ),
};

export const ColoredLinksWithUnderline: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold mb-4">Colored links with Underline</h3>
      <div className="space-y-2">
        <Link href="#" className="text-slate-900 dark:text-slate-100 underline underline-offset-4">
          Primary link
        </Link>
        <br />
        <Link href="#" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 underline underline-offset-4">
          Secondary link
        </Link>
        <br />
        <Link href="#" className="text-green-600 hover:text-green-700 dark:text-green-400 underline underline-offset-4">
          Success link
        </Link>
        <br />
        <Link href="#" className="text-red-600 hover:text-red-700 dark:text-red-400 underline underline-offset-4">
          Danger link
        </Link>
        <br />
        <Link href="#" className="text-amber-600 hover:text-amber-700 dark:text-amber-400 underline underline-offset-4">
          Warning link
        </Link>
      </div>
    </div>
  ),
};

export const LinkOpacity: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold mb-4">Link Opacity</h3>
      <div className="space-y-2">
        <Link href="#" className="text-blue-600 dark:text-blue-400 opacity-10">
          Link opacity 10
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 opacity-25">
          Link opacity 25
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 opacity-50">
          Link opacity 50
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 opacity-75">
          Link opacity 75
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 opacity-100">
          Link opacity 100
        </Link>
      </div>
    </div>
  ),
};

export const LinkOpacityHover: Story = {
  render: () => (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold mb-4">Link Opacity Hover</h3>
      <div className="space-y-2">
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:opacity-10">
          Link opacity 10
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:opacity-25">
          Link opacity 25
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:opacity-50">
          Link opacity 50
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:opacity-75">
          Link opacity 75
        </Link>
        <br />
        <Link href="#" className="text-blue-600 dark:text-blue-400 hover:opacity-100">
          Link opacity 100
        </Link>
      </div>
    </div>
  ),
};