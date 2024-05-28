import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { flexItemVariants, gaps } from "../shared"

const splitVariants = cva("flex h-full w-full flex-row", {
  variants: {
    gap: {
      ...gaps,
    },
    wrap: {
      true: "flex-wrap",
    },
  },

  defaultVariants: {
    gap: "md",
  },
})

const splitColumnVariants = cva("grid", {
  variants: {
    ...flexItemVariants,
    verticalAlign: {
      center: "items-center justify-start",
      stretch: "place-items-stretch",
    },
  },
  defaultVariants: {
    verticalAlign: "stretch",
  },
})

export const Split = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof splitVariants>
>(({ className, gap, wrap, ...props }, ref) => (
  <div
    className={cn(splitVariants({ gap, wrap }), className)}
    ref={ref}
    {...props}
  />
))

export const SplitColumn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof splitColumnVariants>
>(({ className, ...props }, ref) => (
  <div
    className={cn(splitColumnVariants(props), className)}
    ref={ref}
    {...props}
  />
))
