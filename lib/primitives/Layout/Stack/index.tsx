import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { gaps } from "../shared"

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      ...gaps,
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
