// organize-imports-ignore
import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"

import "../styles.css"

import { ThemeProvider } from "../lib/lib/theme-provider"
import { FactorialOneProvider } from "../lib/lib/one-provider"
import lightTheme, { darkTheme } from "./FactorialOne"
import { DocsContainer } from "./DocsContainer"
import { useDarkMode } from "storybook-dark-mode"
import { action } from "@storybook/addon-actions"

export const withTheme = () => {
  return (Story) => {
    return (
      <ThemeProvider theme={useDarkMode() ? "dark" : "light"}>
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
      link={{
        component: (props, ref) => (
          <a
            ref={ref}
            {...props}
            onClick={(event, ...args) => {
              action("Link clicked")(event, ...args)
              props?.onClick?.(event, ...args)
              event.preventDefault()
            }}
          />
        ),
      }}
      image={{
        src: ({ src, width, height }) => ({
          src: src?.startsWith("data:") ? src : `${src}?w=${width}&h=${height}`,
        }),
      }}
    >
      <Story />
    </FactorialOneProvider>
  )
}

const preview: Preview = {
  decorators: [FactorialOne, withTheme()],

  parameters: {
    html: {
      root: "#factorial-one-layout",
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: true, // default: true
      },
    },
    backgrounds: {
      default: "content",
      values: [
        { name: "content", value: "hsl(var(--background))" },
        { name: "page", value: "hsl(var(--page-background))" },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
      },
    },
    docs: {
      container: DocsContainer,
      toc: true,
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      stylePreview: true,
    },
  },

  tags: ["autodocs"],
}

export default preview
