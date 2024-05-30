import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const boxVariants = cva("block", {
  variants: {
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16",
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16",
    },
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
  },
})

export type BoxRef = HTMLDivElement
export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof boxVariants>

export const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>
>(({ className, paddingX, paddingY, ...props }, ref) => (
  <div
    className={cn(boxVariants({ paddingX, paddingY }), className)}
    ref={ref}
    {...props}
  />
))
