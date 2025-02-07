import { addons } from "@storybook/manager-api"
import {
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
      tags: "alpha",
      badge: {
        text: "🚧",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Experimental",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
    {
      tags: "stable",
      badge: {
        text: "✅",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Stable",
      },
      display: {
        sidebar: false,
        toolbar: true,
      },
    },
    {
      tags: "deprecated",
      badge: {
        text: "⛔",
        bgColor: "transparent",
        fgColor: "#000000",
        borderColor: "transparent",
        tooltip: "Deprecated",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
  ] satisfies TagBadgeParameters,
})
