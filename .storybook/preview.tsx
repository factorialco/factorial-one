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
import { buildTranslations } from "../lib/lib/i18n-provider"
import { defaultTranslations } from "../lib/lib/i18n-provider-defaults"

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
      i18n={{
        translations: buildTranslations(defaultTranslations),
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
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
            selector: "*:not([data-a11y-color-contrast-ignore])",
          },
        ],
      },
    },
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
        { name: "content", value: "hsl(var(--neutral-0))" },
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
      exclude: import.meta.env["STORYBOOK_PUBLIC_BUILD"]
        ? /^internal.*/
        : undefined,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      /*
       * Sort all the components and experimental stories in an aplhabetical order, but keep
       * Introduction, How to contribute, Foundations, and Playground in specific order
       */
      storySort: (a, b) => {
        const topLevelOrder = [
          "introduction",
          "how-to-contribute",
          "foundations",
          "playground",
        ]

        const aId = a.title.toLowerCase()
        const bId = b.title.toLowerCase()

        const aIndex = topLevelOrder.indexOf(aId)
        const bIndex = topLevelOrder.indexOf(bId)

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
        if (aIndex !== -1) return -1
        if (bIndex !== -1) return 1

        const isAFoundation = aId.startsWith("foundations/")
        const isBFoundation = bId.startsWith("foundations/")

        if (isAFoundation || isBFoundation) {
          if (isAFoundation && isBFoundation) {
            const foundationOrder = [
              "colors",
              "typography",
              "spacing",
              "borders",
              "shadows",
              "icons",
            ]
            const aFoundationIndex = foundationOrder.indexOf(aId.split("/")[1])
            const bFoundationIndex = foundationOrder.indexOf(bId.split("/")[1])
            if (aFoundationIndex !== -1 && bFoundationIndex !== -1) {
              return aFoundationIndex - bFoundationIndex
            }
          }
          return isAFoundation ? -1 : 1
        }

        return a.title.localeCompare(b.title)
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
  tags: ["autodocs"],
}

export default preview
