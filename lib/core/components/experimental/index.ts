import { Component } from "@/lib/component.tsx"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "./Charts/exports.ts"
export * from "./Collections/exports.ts"
export * from "./Forms/exports.tsx"
export * from "./Information/exports.tsx"
export * from "./Navigation/exports.tsx"
export * from "./OnePagination"
export * from "./Overlays/exports.tsx"
export * from "./PageLayouts/exports.tsx"
export * from "./Utilities/exports.tsx"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
