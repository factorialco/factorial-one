export * from "@/ui/input"
import { Component } from "@/lib/component"
import { Input as ShadcnInput } from "@/ui/input"
import { ComponentProps } from "react"

const Input: React.FC<
  Pick<
    ComponentProps<typeof ShadcnInput>,
    "type" | "disabled" | "size" | "onChange" | "value" | "placeholder"
  >
> = Component(
  {
    name: "Input",
    type: "form",
  },
  ShadcnInput
)

export { Input }
