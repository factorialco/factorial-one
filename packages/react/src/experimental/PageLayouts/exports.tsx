import { Component } from "../../lib/component"
import { HomeLayout as HomeLayoutComponent } from "./HomeLayout"
import {
  TwoColumnLayout as TwoColumnLayoutComponent,
  TwoColumnLayoutProps,
} from "./TwoColumnLayout"

export * from "./StandardLayout"

export type { TwoColumnLayoutProps }

export * from "./Utils/exports"

export const TwoColumnLayout = Component(
  {
    name: "TwoColumnLayout",
    type: "layout",
  },
  TwoColumnLayoutComponent
)

export const HomeLayout = Component(
  {
    name: "HomeLayout",
    type: "layout",
  },
  HomeLayoutComponent
)
