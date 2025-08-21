import { Component } from "@/lib/component"
import {
  TwoColumnLayout as TwoColumnLayoutComponent,
  TwoColumnLayoutProps,
} from "./TwoColumnLayout"

import {
  StandardLayout as StandardLayoutComponent,
  StandardLayoutProps,
} from "./StandardLayout"

export type { StandardLayoutProps, TwoColumnLayoutProps }

export const StandardLayout = Component(
  {
    name: "StandardLayout",
    type: "layout",
  },
  StandardLayoutComponent
)

export const TwoColumnLayout = Component(
  {
    name: "TwoColumnLayout",
    type: "layout",
  },
  TwoColumnLayoutComponent
)
