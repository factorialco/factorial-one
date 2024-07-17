// organize-imports-ignore
import React from "react"
import { DecoratorHelpers } from "@storybook/addon-themes"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"

import DocumentationTemplate from "./DocumentationTemplate.mdx"

import "../styles.css"

import {
  availableThemes,
  Theme,
  ThemeProvider,
} from "../lib/lib/theme-provider"
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

export const FactorialOne = (Story, { parameters }) => {
  return (
    <FactorialOneProvider
      layout={{
        fullScreen: parameters.layout === "fullscreen",
      }}
    >
      <Story />
    </FactorialOneProvider>
  )
}

const preview: Preview = {
  decorators: [FactorialOne, withTheme(availableThemes, "light")],

  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "hsl(var(--background))" },
        { name: "dark", value: "hsl(var(--background))" },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      page: DocumentationTemplate,
      toc: true,
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
}

export default preview
