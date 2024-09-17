import { Component } from "@/lib/component"
import { Input as RawInput } from "./Input"
import { NumberInput as RawNumberInput } from "./NumberInput"
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

export const NumberInput = Component(
  {
    name: "NumberInput",
    type: "form",
  },
  RawNumberInput
)
