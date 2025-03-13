# NextuiQ - UI Component Library

Made with ❤️ using TypeScript & Tailwind CSS.

[![npm version](https://badge.fury.io/js/nextuiq.svg)](https://www.npmjs.com/package/nextuiq) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![GitHub Stars](https://img.shields.io/github/stars/Mr-Bhardwa7/nextuiQ?style=social)](https://github.com/Mr-Bhardwa7/nextuiQ)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.3-38B2AC.svg)](https://tailwindcss.com/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/t7ean/nextuiq/blob/main/CONTRIBUTING.md)

**NextUIQ** is a modern, lightweight UI component library built for rapid development. It is designed with **TypeScript** and **Tailwind CSS**, offering prebuilt, customizable components that help developers build sleek and responsive user interfaces efficiently.

## Demo

- **Storybook**: [View Storybook Documentation](https://nextuiq.vercel.app)

## Features

- 🎨 Modern design system with consistent UI
- 🌗 Dark mode support out of the box
- ♿ Accessibility features following WAI-ARIA guidelines (light implementation, ongoing improvements)
- 📱 Responsive design ensuring mobile-friendliness
- 🎯 TypeScript support for type safety
- 🎨 Tailwind CSS for easy styling and theme customization
- 📚 Comprehensive documentation with examples
- ⚡ Optimized for performance with minimal bundle size
- 🔌 Seamless integration with Next.js and React projects
- 🛠️ Built-in support for theming and customization

## Installation

You can install NextuiQ via npm or yarn:

## 📚 Quick Start

1. Install the package:

   ```bash
   npm install nextuiq
   ```

2. Import the styles in your global CSS file:

   ```bash
   @import 'nextuiq/dist/styles.css';
   ```

3. Use components in your Next.js or React application:

   ```tsx
   import { Button } from "nextuiq";

   const MyComponent = () => {
     return <Button variant="primary">Click Me</Button>;
   };

   export default MyComponent;
   ```

## 🎨 Styling and Theming

NextUIQ supports both light and dark modes out of the box. To enable dark mode:

1. Add the following to your global CSS:

   ```css
   @import "nextuiq/dist/styles.css";

   :root {
     color-scheme: light;
   }

   .dark {
     color-scheme: dark;
   }
   ```

2. Wrap your app with the ThemeProvider:

   ```tsx
   import { ThemeProvider } from "nextuiq";

   function App({ children }) {
     return (
       <ThemeProvider>
         {children}
       </ThemeProvider>
     );
   }-
   ```

## 🔧 Customization

Since NextUIQ is built with Tailwind CSS, you can easily extend and override styles using Tailwind utility classes:

```tsx
<Button className="bg-green-500 hover:bg-green-600">Custom Button</Button>
```

## Available Components

- **Base Components:**
  - Button
  - Card
  - Badge
  - Avatar
- **Forms:**
  - Input
  - Select
  - Checkbox
  - Radio
  - Toggle Switch
  - Phone Input
  - File Input
  - Dropbox Input
- **Navigation:**
  - Breadcrumb
  - Tabs
  - Dropdown
- **Overlays:**
  - Modal
  - Popover
- **Data Display:**
  - Table
  - Alert
  - Loader

## Development

If you want to contribute or modify the library, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Mr-Bhardwa7/nextuiQ.git
   cd nextuiQ
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Run Storybook for component testing:
   ```bash
   npm run storybook
   ```

## Contribution

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new bug/feature branch.
3. Make your changes and commit them with clear messages.  
   Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to ensure consistency and clarity in commit history.
4. Submit a pull request with a detailed description of your changes.

## License

MIT © Animesh Bhardwaj

## Support & Community

- **Documentation**: [Read the Docs](https://nextuiq-docs.vercel.app)
- **GitHub Issues**: [Report a Bug](https://github.com/Mr-Bhardwa7/nextuiQ/issues)
- **Community**: Join our Discord for discussions and support.

We appreciate your feedback and contributions to improve NextUIQ!
