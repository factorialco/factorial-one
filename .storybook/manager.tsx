import { addons } from "@storybook/manager-api"

import factorialOne from "./FactorialOne"

addons.setConfig({
  theme: factorialOne,
  sidebar: {
    collapsedRoots: ["foundations", "examples", "experiments"],
  },
})
