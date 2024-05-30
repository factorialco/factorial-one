import { Component } from "@/lib/component"
import { Button as ShadcnButton } from "@/ui/button"
import { ComponentProps } from "react"

const Button: React.FC<
  Pick<
    ComponentProps<typeof ShadcnButton>,
    "variant" | "size" | "onClick" | "children"
  >
> = Component(
  {
    name: "Button",
    type: "layout",
  },
  ShadcnButton
)

export { Button }
