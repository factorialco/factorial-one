import { DecoratorHelpers } from "@storybook/addon-themes"
import type { Preview } from "@storybook/react"

import DocumentationTemplate from "./DocumentationTemplate.mdx"

import "../src/index.css"

import React from "react"

import { Theme, ThemeProvider } from "../src/lib/theme-provider"

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
  decorators: [withTheme(["light", "dark", "system"], "system")],
  parameters: {
    docs: {
      page: DocumentationTemplate,
      canvas: {
        sourceState: "shown",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
