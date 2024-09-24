import { Component } from "@/lib/component"
import { AutoGrid as AutoGridComponent } from "./AutoGrid"
import {
  InfoPaneLayout as InfoPaneLayoutComponent,
  InfoPaneLayoutProps,
} from "./InfoPaneLayout"
import { Split as SplitComponent } from "./Split"
import { Stack as StackComponent } from "./Stack"

export type { InfoPaneLayoutProps }

export const Stack = Component(
  {
    name: "Stack",
    type: "layout",
  },
  StackComponent
)

export const Split = Component(
  {
    name: "Split",
    type: "layout",
  },
  SplitComponent
)

export const AutoGrid = Component(
  {
    name: "AutoGrid",
    type: "layout",
  },

  AutoGridComponent
)

export const InfoPaneLayout = Component(
  {
    name: "InfoPaneLayout",
    type: "layout",
  },
  InfoPaneLayoutComponent
)
