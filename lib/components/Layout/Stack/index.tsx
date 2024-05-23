import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      sm: "gap-4",
      md: "gap-8",
      lg: "gap-12",
    },
  },
  defaultVariants: {
    gap: "md",
  },
})

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof stackVariants>
>(({ className, gap, ...props }, ref) => (
  <div className={cn(stackVariants({ gap }), className)} ref={ref} {...props} />
))
