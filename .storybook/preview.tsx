import type { Preview } from "@storybook/react";

import { DecoratorHelpers } from "@storybook/addon-themes";
const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
  DecoratorHelpers;

import "../src/index.css";
import { Theme, ThemeProvider } from "../src/lib/theme-provider";
import React from "react";

export const withTheme = (themes: string[], defaultTheme: string) => {
  initializeThemeState(themes, defaultTheme);

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();

    const selected = themeOverride || selectedTheme || defaultTheme;

    return (
      <ThemeProvider defaultTheme={selected as Theme}>
        <Story />
      </ThemeProvider>
    );
  };
};

const preview: Preview = {
  decorators: [withTheme(["light", "dark", "system"], "system")],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
