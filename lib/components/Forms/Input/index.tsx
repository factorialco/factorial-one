export * from "@/ui/input"
import { Input as ShadcnInput } from "@/ui/input"
import { ComponentProps } from "react"

const Input: React.FC<
  Pick<
    ComponentProps<typeof ShadcnInput>,
    "ref" | "type" | "disabled" | "size" | "onChange" | "value" | "placeholder"
  >
> = ShadcnInput

export { Input }
