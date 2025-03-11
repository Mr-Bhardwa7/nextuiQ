import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'UI Component Library',
    brandUrl: 'https://your-website.com',
    brandTarget: '_self',
    colorPrimary: '#0066FF',
    colorSecondary: '#6366F1',
  }),
});