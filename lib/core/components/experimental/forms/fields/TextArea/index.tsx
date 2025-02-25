export * from "@/core/internal/textarea.tsx"
import { Component } from "@/lib/component.tsx"
import { Textarea as ShadcnTextarea } from "@/core/internal/textarea.tsx"
import { ComponentProps } from "react"

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
