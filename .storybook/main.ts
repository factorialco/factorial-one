import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../lib/core",
      titlePrefix: "Core",
    },
    {
      directory: "../lib/domain",
      titlePrefix: "Domain",
    },
    ...(process.env.PUBLIC_BUILD
      ? []
      : [
          {
            directory: "../src/playground",
            titlePrefix: "Playground",
          },
          {
            directory: "../lib/internal",
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
    docsMode: process.env.PUBLIC_BUILD || process.env.DOCS_MODE ? true : false,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
