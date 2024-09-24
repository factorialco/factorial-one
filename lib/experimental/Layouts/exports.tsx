import { Component } from "@/lib/component"
import {
  InfoPaneLayout as InfoPaneLayoutComponent,
  InfoPaneLayoutProps,
} from "./InfoPaneLayout"

export type { InfoPaneLayoutProps }

export const InfoPaneLayout = Component(
  {
    name: "InfoPaneLayout",
    type: "layout",
  },
  InfoPaneLayoutComponent
)
