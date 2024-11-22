// organize-imports-ignore
import React, { useState } from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import type { Preview } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MotionGlobalConfig } from "framer-motion"
import isChromatic from "chromatic/isChromatic"

import "../styles.css"

import { ThemeProvider } from "../lib/lib/theme-provider"
import { FactorialOneProvider } from "../lib/lib/one-provider"
import { DocsContainer } from "./DocsContainer"

MotionGlobalConfig.skipAnimations = isChromatic()

export const withTheme = () => {
  // eslint-disable-next-line react/display-name
  return (Story) => {
    return (
      <ThemeProvider theme="light">
        <Story />
      </ThemeProvider>
    )
  }
}

export const FactorialOne = (Story, { parameters }) => {
  const [currentPath, setCurrentPath] = useState(parameters.currentPath ?? "/")

  return (
    <FactorialOneProvider
      layout={{
        fullScreen: parameters.layout === "fullscreen",
      }}
      link={{
        currentPath,
        component: (props, ref) => (
          <a
            ref={ref}
            {...props}
            onClick={(event, ...args) => {
              action("Link clicked")(event, ...args)
              props?.onClick?.(event, ...args)
              event.preventDefault()
              if (props.href) setCurrentPath(props.href)
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
    chromatic: { diffThreshold: 0.2 },
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
      toc: {
        headingSelector: "h2, h3",
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "How to contribute?",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Borders", "Shadows"],
          "Components",
          "Experimental",
          "Playground",
        ],
      },
    },
    darkMode: {
      stylePreview: true,
      current: "light",
      disable: true,
    },
  },
  tags: ["autodocs"],
}

export default preview
