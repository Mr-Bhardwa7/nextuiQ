import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardMedia, CardActions } from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Avatar} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import { FiTrendingUp, FiStar, FiMoreVertical } from 'react-icons/fi';

const meta: Meta<typeof Card> = {
  title: 'Components/ui/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const BasicInfoCard: Story = {
  args: {
    className: 'w-[350px]',
    children: (
      <>
        <CardHeader
          title="Welcome Back"
          subtitle="Continue where you left off"
        />
        <CardContent>
          <p className="text-sm text-slate-500">Your last login was 2 hours ago from London, UK.</p>
        </CardContent>
        <CardActions>
          <Button>View Details</Button>
        </CardActions>
      </>
    ),
  },
};

export const ImageCard: Story = {
  args: {
    className: 'w-[380px]',
    clickable: true,
    children: (
      <>
        <CardMedia
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
          alt="Mountain landscape"
          height="h-48"
        />
        <CardHeader
          title="Discover Nature"
          subtitle="Explore the wilderness"
        />
        <CardContent>
          <p className="text-sm text-slate-500">Experience the beauty of untouched landscapes and breathtaking views.</p>
        </CardContent>
        <CardActions>
          <Button variant="outline">Share</Button>
          <Button>Learn More</Button>
        </CardActions>
      </>
    ),
  },
};

export const StatsCard: Story = {
  args: {
    className: 'w-[300px]',
    variant: 'filled',
    children: (
      <>
        <CardHeader
          title="Monthly Stats"
          action={<Button variant="ghost" size="sm"><FiMoreVertical /></Button>}
        />
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-500">Total Views</p>
              <p className="text-2xl font-semibold">24.5K</p>
            </div>
            <FiTrendingUp className="w-8 h-8 text-green-500" />
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
            <div className="h-full w-3/4 bg-blue-500 rounded-full" />
          </div>
        </CardContent>
      </>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    className: 'w-[320px]',
    children: (
      <>
        <div className="p-6 text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4" fallback="JD" />
          <CardHeader
            title="John Doe"
            subtitle="Senior Developer"
          />
          <CardContent>
            <p className="text-sm text-slate-500">Building amazing user experiences with React and TypeScript.</p>
          </CardContent>
          <CardActions>
            <Button variant="outline" className="w-full">View Profile</Button>
          </CardActions>
        </div>
      </>
    ),
  },
};

export const SimpleCard: Story = {
  args: {
    className: 'w-[300px]',
    variant: 'outlined',
    children: (
      <>
        <CardHeader
          title="Card Title"
          subtitle="Card Subtitle"
        />
        <CardContent>
          <p className="text-sm text-slate-500">This is a simple card with basic content and an action button.</p>
        </CardContent>
        <CardActions>
          <Button>Action</Button>
        </CardActions>
      </>
    ),
  },
};

export const ECommerceCard: Story = {
  args: {
    className: 'w-[300px]',
    clickable: true,
    children: (
      <>
        <CardMedia
          image="https://source.unsplash.com/random/400x400?product"
          alt="Product"
          height="h-[200px]"
        />
        <CardContent className="space-y-2">
          <Badge>New</Badge>
          <h3 className="font-semibold">Premium Headphones</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">$299.99</span>
            <span className="text-sm text-slate-500 line-through">$399.99</span>
          </div>
          <div className="flex items-center gap-1">
            {Array(5).fill(null).map((_, i) => (
              <FiStar key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-slate-300'}`} />
            ))}
            <span className="text-sm text-slate-500">(4.0)</span>
          </div>
        </CardContent>
        <CardActions>
          <Button className="w-full">Add to Cart</Button>
        </CardActions>
      </>
    ),
  },
};

// Add more card variations as needed...