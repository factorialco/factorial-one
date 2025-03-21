import { OneDropdownButtonVariant } from "./types.ts"
import { cva } from "cva"

export const internalButtonVariants = cva({
  base: "border-0 border-l border-solid",
  variants: {
    size: {
      sm: "-mr-2 ml-1 w-6 px-1",
      md: "-mr-3 ml-2 w-9 px-1",
      lg: "-mr-4 ml-3 w-12 px-1",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const internalButtonVariantsStyles = (
  variant?: OneDropdownButtonVariant
) => {
  const variants = {
    default: { borderColor: "hsl(var(--accent-60))" },
    outline: { borderColor: "hsl(var(--neutral-30))" },
    neutral: { borderColor: "hsl(var(--neutral-30))" },
  }
  return variants[variant || "default"]
}
