import { Component } from "@/lib/component.tsx"
import { FullscreenLayout as FullscreenLayoutComponent } from "./FullscreenLayout"
import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
import { OverviewLayout as OverviewLayoutComponent } from "./OverviewLayout"
import {
  InfoPaneLayout as InfoPaneLayoutComponent,
  InfoPaneLayoutProps,
} from "./Utils/InfoPaneLayout"
export * from "./StandardLayout"

export type { InfoPaneLayoutProps }

export * from "./Utils/exports.tsx"

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

export const HomeLayout = Component(
  {
    name: "HomeLayout",
    type: "layout",
  },
  HomeLayoutComponent
)
