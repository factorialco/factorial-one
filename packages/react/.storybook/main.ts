import type { StorybookConfig } from "@storybook/react-vite"
import * as process from "node:process"

// We should add the STORYBOOK_ prefix to make sure that the environment variables are in browser mode (for example manager.ts file)
if (process.env.PUBLIC_BUILD) {
  process.env.STORYBOOK_PUBLIC_BUILD = process.env.PUBLIC_BUILD
}

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../src/components",
      titlePrefix: "Components",
    },
    {
      directory: "../src/experimental",
      titlePrefix: "Components",
    },
    ...(process.env.STORYBOOK_PUBLIC_BUILD
      ? []
      : [
          {
            directory: "../src/ui",
            titlePrefix: "🔒 Internal",
          },
        ]),
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "storybook-dark-mode",
    "@chromatic-com/storybook",
    "storybook-addon-tag-badges",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    defaultName: "Documentation",
    docsMode:
      process.env.STORYBOOK_PUBLIC_BUILD || process.env.DOCS_MODE
        ? true
        : false,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
