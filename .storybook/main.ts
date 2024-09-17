import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../lib/components",
      titlePrefix: "Components",
    },
    {
      directory: "../lib/experimental",
      titlePrefix: "Experimental",
    },
    {
      directory: "../src/playground",
      titlePrefix: "Playground",
    },
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
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
