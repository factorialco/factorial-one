import { Input as ShadcnInput } from "@/ui/input"
import { InputFieldProps } from "@/ui/InputField"
import { ComponentProps, HTMLInputTypeAttribute } from "react"

export type InputProps<T extends string | number> = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref"
> &
  Pick<
    InputFieldProps<T>,
    | "disabled"
    | "size"
    | "onChange"
    | "value"
    | "placeholder"
    | "clearable"
    | "maxLength"
    | "label"
    | "labelIcon"
    | "icon"
    | "error"
    | "hideLabel"
  > & {
    type?: Exclude<HTMLInputTypeAttribute, "number">
  }

const Input: React.FC<InputProps<string | number>> =
  ShadcnInput as unknown as React.FC<InputProps<string | number>>

export { Input }
