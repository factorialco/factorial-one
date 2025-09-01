import { Component } from "../../lib/component"
import { F0Icon as IconComponent } from "../F0Icon"
export type { F0IconType as IconType } from "../F0Icon"

export const Icon = Component(
  {
    name: "Icon",
    type: "info",
  },
  IconComponent
)
