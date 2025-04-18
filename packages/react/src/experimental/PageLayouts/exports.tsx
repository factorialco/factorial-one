import { Component } from "../../lib/component"
import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
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

export const HomeLayout = Component(
  {
    name: "HomeLayout",
    type: "layout",
  },
  HomeLayoutComponent
)
