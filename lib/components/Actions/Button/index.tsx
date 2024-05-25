import { Button as ShadcnButton } from "@/ui/button"
import { ComponentProps } from "react"

const Button: React.FC<
  Pick<
    ComponentProps<typeof ShadcnButton>,
    "variant" | "size" | "onClick" | "children"
  >
> = ShadcnButton

export { Button }
