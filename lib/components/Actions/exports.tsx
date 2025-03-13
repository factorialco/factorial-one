import { Component } from "@/lib/component"
import { removeInternalProps } from "@/lib/internal-props.tsx"
import { Link as LinkComponent } from "./Link"

// Button
import { Button as ButtonComponent } from "./Button"

export const Button = removeInternalProps(ButtonComponent)
export * from "./Button"
//

export type { LinkProps } from "./Link"
export const Link = Component(
  {
    name: "Link",
    type: "info",
  },
  LinkComponent
)
