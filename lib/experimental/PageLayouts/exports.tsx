import { Component } from "@/lib/component"
import { FullscreenLayout as FullscreenLayoutComponent } from "./FullscreenLayout"
import { OverviewLayout as OverviewLayoutComponent } from "./OverviewLayout"
import {
  InfoPaneLayout as InfoPaneLayoutComponent,
  InfoPaneLayoutProps,
} from "./Utils/InfoPaneLayout"
export * from "./StandardLayout"

export type { InfoPaneLayoutProps }

export * from "./Utils/exports"

export const InfoPaneLayout = Component(
  {
    name: "InfoPaneLayout",
    type: "layout",
  },
  InfoPaneLayoutComponent
)

export const FullscreenLayout = Component(
  {
    name: "FullscreenLayout",
    type: "layout",
  },
  FullscreenLayoutComponent
)

export const OverviewLayout = Component(
  {
    name: "OverviewLayout",
    type: "layout",
  },
  OverviewLayoutComponent
)
