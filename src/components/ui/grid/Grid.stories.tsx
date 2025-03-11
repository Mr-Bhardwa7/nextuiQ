import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '.';

const meta: Meta<typeof Grid> = {
  title: 'Components/ui/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'object',
      description: 'Number of columns or responsive column configuration (e.g., { sm: 2, md: 3 })',
    },
    rows: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      description: 'Number of rows for the grid.',
    },
    gap: {
      control: 'object',
      description: 'Gap between grid items, can be a number or an object (e.g., { x: 4, y: 2 })',
    },
    autoFlow: {
      control: 'select',
      options: ['row', 'col', 'dense', 'row dense', 'col dense'],
      description: 'Grid auto-flow behavior.',
    },
    autoFit: {
      control: 'boolean',
      description: 'Enable auto-fit grid.',
    },
    minChildWidth: {
      control: 'text',
      description: 'Minimum width for auto-fit grid items (e.g., "150px").',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for customization.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ children, height = 'h-16' }: { children: React.ReactNode; height?: string }) => (
  <div
    className={`${height} w-full bg-blue-100 dark:bg-blue-800 border-2 border-blue-300 dark:border-blue-600 p-3 rounded-md flex items-center justify-center`}
  >
    <div className="font-medium text-sm">{children}</div>
  </div>
);

export const Default: Story = {
  args: {
    cols: 3,
    gap: 4,
    className: 'max-w-3xl border border-dashed border-slate-300 p-4 rounded-lg',
    children: Array.from({ length: 9 }, (_, i) => <GridItem key={i}>Item {i + 1}</GridItem>),
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic grid layout with fixed columns and customizable gap.',
      },
    },
  },
};

export const WithRows: Story = {
  args: {
    cols: 2,
    rows: 3,
    gap: 4,
    className: 'max-w-2xl border border-dashed border-slate-300 p-4 rounded-lg',
    children: Array.from({ length: 6 }, (_, i) => <GridItem key={i}>Item {i + 1}</GridItem>),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid layout with a fixed number of rows.',
      },
    },
  },
};

export const AutoFit: Story = {
  args: {
    autoFit: true,
    minChildWidth: '150px',
    gap: 4,
    className: 'max-w-4xl border border-dashed border-slate-300 p-4 rounded-lg',
    children: Array.from({ length: 8 }, (_, i) => <GridItem key={i}>Auto {i + 1}</GridItem>),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with auto-fit and minimum child width.',
      },
    },
  },
};

export const DenseFlow: Story = {
  args: {
    cols: 3,
    autoFlow: 'dense',
    gap: 4,
    className: 'max-w-3xl border border-dashed border-slate-300 p-4 rounded-lg',
    children: Array.from({ length: 8 }, (_, i) => (
      <GridItem key={i} height={i % 3 === 0 ? 'h-32' : 'h-16'}>
        Item {i + 1}
      </GridItem>
    )),
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid with dense flow to fill gaps efficiently.',
      },
    },
  },
};

export const ResponsiveCols: Story = {
  args: {
    cols: { sm: 2, md: 3, lg: 4 },
    gap: { x: 4, y: 2 },
    className: 'max-w-4xl border border-dashed border-slate-300 p-4 rounded-lg',
    children: Array.from({ length: 12 }, (_, i) => <GridItem key={i}>Item {i + 1}</GridItem>),
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive grid layout with different column counts for different screen sizes.',
      },
    },
  },
};
