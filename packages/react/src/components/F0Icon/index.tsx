import { Component } from "../../lib/component"

export type { IconType as IconType } from "./F0Icon"

import { F0Icon as IconComponent } from "./F0Icon"
export const Icon = Component(
  {
    name: "Icon",
    type: "info",
  },
  IconComponent
)
