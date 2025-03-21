export * from "@/ui/input"
import { Input as ShadcnInput } from "@/ui/input"
import { ComponentProps, HTMLInputTypeAttribute } from "react"

export type InputProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"
> & {
  type?: Exclude<HTMLInputTypeAttribute, "number">
}

const Input: React.FC<InputProps> = ShadcnInput

export { Input }
