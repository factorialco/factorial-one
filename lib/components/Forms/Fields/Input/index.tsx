export * from "@/ui/input"
import { Input as ShadcnInput } from "@/ui/input"
import { ComponentProps } from "react"

type InputProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "type" | "disabled" | "size" | "onChange" | "value" | "placeholder"
>

const Input: React.FC<InputProps> = ShadcnInput

export { Input }
