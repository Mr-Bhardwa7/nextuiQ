import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  sidebar: {
    showRoots: false,
  },
  toolbar: {
    zoom: { hidden: true },
    backgrounds: { hidden: true },
    viewport: { hidden: true },
  },
  theme: create({
    base: 'light',
    brandTitle: 'NextuiQ - UI Component Library',
    brandTarget: '_self',
    colorPrimary: '#0066FF',
    colorSecondary: '#6366F1',
  }),
});