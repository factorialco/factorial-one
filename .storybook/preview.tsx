// organize-imports-ignore
import React from "react"
import { DecoratorHelpers } from "@storybook/addon-themes"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"

import DocumentationTemplate from "./DocumentationTemplate.mdx"

import "../lib/styles.css"

import { Theme, ThemeProvider } from "../lib/lib/theme-provider"

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } =
  DecoratorHelpers

export const withTheme = (themes: string[], defaultTheme: string) => {
  initializeThemeState(themes, defaultTheme)

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context)
    const { themeOverride } = useThemeParameters()

    const selected = themeOverride || selectedTheme || defaultTheme

    return (
      <ThemeProvider defaultTheme={selected as Theme}>
        <Story />
      </ThemeProvider>
    )
  }
}

const preview: Preview = {
  decorators: [withTheme(["light", "dark"], "light")],
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      page: DocumentationTemplate,
    },
    actions: { argTypesRegex: "^on.*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
