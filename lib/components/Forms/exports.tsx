import { Component } from "@/lib/component"
import { Input as RawInput } from "./Input"
export * from "./Calendar"
export * from "./Select"

export { Textarea } from "./TextArea"

export const Input = Component(
  {
    name: "Input",
    type: "form",
  },
  RawInput
)
