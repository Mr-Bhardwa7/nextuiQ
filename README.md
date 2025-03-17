# NextuiQ - UI Component Library 🚀

Made with ❤️ using **TypeScript** & **Tailwind CSS**.

[![npm version](https://badge.fury.io/js/nextuiq.svg)](https://www.npmjs.com/package/nextuiq)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/Mr-Bhardwa7/nextuiQ?style=social)](https://github.com/Mr-Bhardwa7/nextuiQ)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^4.0.12-38B2AC.svg)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Mr-Bhardwa7/nextuiq/blob/main/CONTRIBUTING.md)

### ✨ Modern, Lightweight UI Library

**NextuiQ** is a **fast**, **accessible**, and **fully customizable** UI component library designed for **Next.js** and **React**. With built-in support for **dark mode**, **accessibility**, and **semantic theming**, NextuiQ helps you build modern UIs effortlessly.

## 🚀 Features

- 🎨 **Modern Design** – A consistent UI system
- 🌗 **Dark Mode** – Out-of-the-box support
- ♿ **Accessibility** – WAI-ARIA compliant (ongoing improvements)
- 📱 **Responsive Design** – Fully optimized for mobile & desktop
- 🎯 **TypeScript Support** – Ensures type safety
- ⚡ **Performance Optimized** – Minimal bundle size
- 🔌 **Next.js & React Friendly** – Seamless integration
- 🎨 **Theming & Customization** – Easy to style with Tailwind CSS
- 📚 **Comprehensive Documentation** – With interactive examples

## 📺 Demo

- **Storybook**: [View Component Library](https://nextuiq.vercel.app)

## 📦 Installation

Install NextUIQ using **npm** or **yarn**:

```bash
npm install nextuiq
# or
yarn add nextuiq
```

## 🏁 Quick Start

### 1️⃣ Import Styles

Add the following import to your global CSS file:

```css
@import "nextuiq/dist/styles.css";
```

### 2️⃣ Use Components

Example usage in a **Next.js/React** project:

```tsx
import { Button } from "nextuiq";

const MyComponent = () => {
  return <Button variant="primary">Click Me</Button>;
};

export default MyComponent;
```

## 🎨 Theming & Customization

NextUIQ supports **light** and **dark** themes out of the box. You can customize the theme using CSS variables:

### 1️⃣ Enable Dark Mode

Wrap your application with the `ThemeProvider`:

```tsx
import { ThemeProvider } from "nextuiq";

function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

### 2️⃣ Customize Theme Colors

NextUIQ uses **OKLCH color format** for better accessibility:

```css
@theme {
  --theme-primary: 0.546 0.245 262.881;
  --theme-secondary: 0.541 0.281 293.009;
  --theme-background: 1 0 0;
  --theme-foreground: 0.208 0.042 265.755;
}

[data-theme="dark"] {
  --theme-background: 0.129 0.042 264.695;
  --theme-foreground: 0.984 0.003 247.858;
}
```

### 3️⃣ Apply Theme in Components

```tsx
function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-[oklch(var(--theme-muted))] p-4 rounded-lg">
      <h1 className="text-[oklch(var(--theme-foreground))] text-xl font-semibold mb-4">
        Current Theme: {theme}
      </h1>
      <Button
        variant="primary"
        onClick={toggleTheme}
        className="flex items-center gap-2"
      >
        {theme === "dark" ? "🌞" : "🌙"} Switch to{" "}
        {theme === "dark" ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
}
```

➡️ **[Full Theming Guide](https://github.com/Mr-Bhardwa7/nextuiQ/tree/master/examples/theme-example)**

## 🛠️ Available Components

### 📌 Base Components

- Button
- Link
- Card
- Badge
- Avatar

### 🔢 Forms

- Input
- Select
- Multiselect
- Searchable select
- Checkbox
- Radio
- Toggle Switch
- Phone Input
- File Input
- Dropbox Input
- Multi-step form

### 🧭 Navigation

- Breadcrumb
- Tabs
- Dropdown

### 🏗 Overlays

- Modal
- Popover
- Dialog
- Tooltip

### 📊 Data Display

- Table
- Alert
- Loader
- Responsive Image
- Grid

## 🛠 Development & Contribution

Want to contribute? Follow these steps:

1️⃣ **Clone the repository**

```bash
git clone https://github.com/Mr-Bhardwa7/nextuiQ.git
cd nextuiQ
```

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Start the development server**

```bash
npm run dev
```

4️⃣ **Run Storybook for component testing**

```bash
npm run storybook
```

### 📌 Contribution Guidelines

- Fork the repo & create a new branch
- Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages
- Open a **Pull Request (PR)** with a detailed description

## 📜 License

[MIT License](https://github.com/Mr-Bhardwa7/nextuiQ/blob/master/LICENSE) © Animesh Bhardwaj

## 🤝 Community & Support

Join the **NextuiQ** community to get help, report issues, and contribute!

### 📖 Documentation

Find everything you need to get started and use **NextuiQ** effectively:

- 📘 **Getting Started** – [README.md](https://github.com/Mr-Bhardwa7/nextuiQ/blob/master/README.md)
- 📜 **Changelog** – [CHANGELOG.md](https://github.com/Mr-Bhardwa7/nextuiQ/blob/master/CHANGELOG.md)
- 📖 **Storybook** – [View Components Library](https://nextuiq.vercel.app)

### 💬 Community & Support

- 🐞 **Report Issues** – Found a bug or need a feature? [GitHub Issues](https://github.com/Mr-Bhardwa7/nextuiQ/issues)
- 🚀 **Contribute** – Help improve NextuiQ by submitting issues, pull requests, and feedback.
- 💬 **Community Chat** – Connect with other developers, ask questions, and get support: [Join our Discord](#) _(Coming soon!)_

\_We’d love to hear your feedback and ideas to make NextuiQ even better! 💡
