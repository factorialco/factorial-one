import { Component } from "@/lib/component"
import { Icon as IconComponent } from "./Icon"
import { IndicatorsList as IndicatorsListComponent } from "./IndicatorsList"
import { Link as LinkComponent } from "./Link"
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

export const Link = Component(
  {
    name: "Link",
    type: "info",
  },
  LinkComponent
)

export const IndicatorsList = Component(
  {
    name: "IndicatorsList",
    type: "info",
  },
  IndicatorsListComponent
)
