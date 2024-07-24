import { Component } from "@/lib/component"
import { ScrollArea as ScrollAreaComponent } from "./ScrollArea"
export * from "./Icons"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
