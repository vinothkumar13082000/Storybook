import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/stories/theme/ThemeProvider";
import React from "react";
import "../src/index.css";
import "../src/stories/theme/global-outline-fix.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#111827',
        },
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <div style={{ minHeight: '100vh', padding: '20px', background: 'var(--bg-primary)' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

