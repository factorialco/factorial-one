import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const stackVariants = cva("grid", {
  variants: {
    size: {
      sm: "grid-cols-[repeat(auto-fill,minmax(theme(spacing.48),_1fr))]",
      md: "grid-cols-[repeat(auto-fill,minmax(theme(spacing.64),_1fr))]",
      lg: "grid-cols-[repeat(auto-fill,minmax(theme(spacing.96),_1fr))]",
    },
    gap: {
      sm: "gap-4",
      md: "gap-8",
      lg: "gap-12",
    },
  },
  defaultVariants: {
    size: "md",
    gap: "md",
  },
})

export const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof stackVariants>
>(({ className, gap, size, ...props }, ref) => (
  <div
    className={cn(stackVariants({ gap, size }), className)}
    ref={ref}
    {...props}
  />
))
