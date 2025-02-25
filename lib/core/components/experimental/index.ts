import { Component } from "@/lib/component.tsx"
import { ScrollArea as ScrollAreaComponent } from "./utilities/ScrollArea"

export * from "./charts"
export * from "./Collections/exports.ts"
export * from "./forms"
export * from "./information"
export * from "./navigation"
export * from "./OnePagination"
export * from "./overlays"
export * from "./pageLayouts"
export * from "./utilities"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
