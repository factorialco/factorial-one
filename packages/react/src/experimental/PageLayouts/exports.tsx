import { Component } from "../../lib/component"
import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
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
