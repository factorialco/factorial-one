import { addons } from "@storybook/manager-api"
import {
  defaultConfig,
  renderLabel,
  type TagBadgeParameters,
} from "storybook-addon-tag-badges"

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: ["playground"],
    renderLabel,
  },
  tagBadges: [
    {
      tags: "desi",
      badge: {
        text: "Desi 🐸",
        bgColor: "#001c13",
        fgColor: "#e0eb0b",
        tooltip: "This component can catch flies!",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})
