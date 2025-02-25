export * from "@/core/internal/input.tsx"
import { Input as ShadcnInput } from "@/core/internal/input.tsx"
import { ComponentProps, HTMLInputTypeAttribute } from "react"

export type InputProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"
> & {
  type?: Exclude<HTMLInputTypeAttribute, "number">
}

const Input: React.FC<InputProps> = ShadcnInput

export { Input }
