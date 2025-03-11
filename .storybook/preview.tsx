import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";

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
    darkMode: {
      current: 'light',
      darkClass: ['dark'],
      lightClass: ['light'],
      classTarget: 'html',
      stylePreview: true
    }
  },
  decorators: [
    (Story) => (
      <div className="light min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default preview;