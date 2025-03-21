export * from "@/ui/textarea"
import { Textarea as ShadcnTextarea } from "@/ui/textarea"
import { ComponentProps } from "react"
import { Component } from "../../../../lib/component"

export type TextareaProps = Pick<
  ComponentProps<typeof ShadcnTextarea>,
  "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols"
>

const Textarea: React.FC<TextareaProps> = Component(
  {
    name: "Textarea",
    type: "form",
  },
  ShadcnTextarea
)

export { Textarea }
