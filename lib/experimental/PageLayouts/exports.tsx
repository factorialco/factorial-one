import { Component } from "@/lib/component"
import { FullscreenLayout as FullscreenLayoutComponent } from "./FullscreenLayout"
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
