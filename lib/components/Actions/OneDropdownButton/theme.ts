import { cva } from "cva"

export const internalButtonVariants = cva({
  base: "border-0 border-solid",
  variants: {
    variant: {
      default: "border-(hsl(var(--accent-60)) border-l",
      outline: "border-l-(--neutral-30)",
      neutral: "border-l-(--neutral-30)",
    },
    size: {
      sm: "-mr-2 ml-1 w-6 px-1",
      md: "-mr-3 ml-2 w-9 px-1",
      lg: "-mr-4 ml-3 w-12 px-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})
