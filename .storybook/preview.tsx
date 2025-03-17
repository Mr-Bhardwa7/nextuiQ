import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/context/ThemeContext";
import "../src/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      source: {
        transform: (code: string) => code,
        language: 'tsx',
        format: true,
        type: 'dynamic',
      },
      story: {
        inline: true,
        height: '100px',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;