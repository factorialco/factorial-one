export * from "@/ui/input"
import { Component } from "@/lib/component"
import { Textarea as ShadcnTextarea } from "@/ui/textarea"
import { ComponentProps } from "react"

const Textarea: React.FC<
  Pick<
    ComponentProps<typeof ShadcnTextarea>,
    "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols"
  >
> = Component(
  {
    name: "Textarea",
    type: "form",
  },
  ShadcnTextarea
)

export { Textarea }
