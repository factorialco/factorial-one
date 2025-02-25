import { Component } from "@/lib/component.tsx"
import { Icon as IconComponent } from "./Icon"
export type { IconType } from "./Icon"

export const Icon = Component(
  {
    name: "Icon",
    type: "info",
  },
  IconComponent
)
