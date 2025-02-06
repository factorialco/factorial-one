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
        text: "Alpha",
        bgColor: "#FEF2EA",
        fgColor: "#AC5820",
        borderColor: "#FFD19A",
      },
      display: {
        sidebar: ["component", "docs", "group"],
        toolbar: true,
      },
    },
  ] satisfies TagBadgeParameters,
})
