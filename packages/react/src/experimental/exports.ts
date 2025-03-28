import { Component } from "../lib/component"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "./Charts/exports"
export * from "./Collections/exports"
export * from "./Forms/exports"
export * from "./Information/exports"
export * from "./Navigation/exports"
export * from "./OneCard"
export * from "./OnePagination"
export * from "./Overlays/exports"
export * from "./PageLayouts/exports"
export * from "./Utilities/exports"
export * from "./Widgets/exports"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
