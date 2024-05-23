// organize-imports-ignore
import React from "react"
import { DecoratorHelpers } from "@storybook/addon-themes"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"

import DocumentationTemplate from "./DocumentationTemplate.mdx"

import "../styles.css"

import { Theme, ThemeProvider } from "../lib/lib/theme-provider"
import { FactorialOneProvider } from "../lib/lib/one-provider"

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

export const FactorialOne = (Story) => {
  return (
    <FactorialOneProvider>
      <Story />
    </FactorialOneProvider>
  )
}

const preview: Preview = {
  decorators: [FactorialOne, withTheme(["light", "dark"], "light")],
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
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
