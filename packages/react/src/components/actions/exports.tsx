import { Component } from "../../lib/component"
import { F0Link as LinkComponent } from "./F0Link"

export * from "./F0Button"

export type { F0LinkProps as LinkProps } from "./F0Link"
export const Link = Component(
  {
    name: "Link",
    type: "info",
  },
  LinkComponent
)
