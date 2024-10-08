import { Component } from "@/lib/component"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "./Forms/exports"
export * from "./Layouts/exports"
export * from "./Navigation/exports"
export * from "./Overlays/exports"
export * from "./Utilities/exports"
export * from "./Widgets/exports"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
