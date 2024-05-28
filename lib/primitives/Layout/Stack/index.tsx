import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { flexItemVariants, gaps } from "../shared"

const stackVariants = cva("flex h-full w-full flex-col", {
  variants: {
    gap: {
      ...gaps,
    },
  },
  defaultVariants: {
    gap: "md",
  },
})

const stackRowVariants = cva("grid place-items-stretch", {
  variants: {
    ...flexItemVariants,
  },
  defaultVariants: {},
})

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof stackVariants>
>(({ className, gap, children, ...props }, ref) => (
  <div className={cn(stackVariants({ gap }), className)} ref={ref} {...props}>
    {children}
  </div>
))

export const StackRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof stackRowVariants>
>(({ className, ...props }, ref) => (
  <div
    className={cn(stackRowVariants(props), className)}
    ref={ref}
    {...props}
  />
))
