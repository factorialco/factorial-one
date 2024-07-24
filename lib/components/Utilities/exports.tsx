import { Component } from "@/lib/component"
import { Icon as IconComponent } from "./Icon"

import { ScrollArea as ScrollAreaComponent } from "./ScrollArea"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)

export const Icon = Component(
  {
    name: "Icon",
    type: "info",
  },
  IconComponent
)
