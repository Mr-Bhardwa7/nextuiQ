import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveImage } from '.';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Components/ui/ResponsiveImage',
  component: ResponsiveImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['16/9', '4/3', '1/1', '9/16'],
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: 'radio',
      options: ['lazy', 'eager'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Sample image',
    aspectRatio: '16/9',
    objectFit: 'cover',
    className: 'rounded-lg',
    containerClassName: 'w-[400px]',
  },
};

export const Square: Story = {
  args: {
    ...Default.args,
    aspectRatio: '1/1',
    containerClassName: 'w-[300px]',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    src: 'https://invalid-image-url.com/not-found.jpg',
    fallback: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225"%3E%3Crect width="400" height="225" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="system-ui" font-size="16" fill="%2394a3b8"%3EImage not found%3C/text%3E%3C/svg%3E',
    containerClassName: 'w-[400px] shadow-sm',
  },
};

export const Portrait: Story = {
  args: {
    ...Default.args,
    aspectRatio: '9/16',
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?fit=crop&w=600&h=800',
    containerClassName: 'w-[300px]',
  },
};

export const Contain: Story = {
  args: {
    ...Default.args,
    objectFit: 'contain',
    containerClassName: 'w-[400px] bg-slate-200 dark:bg-slate-700',
  },
};