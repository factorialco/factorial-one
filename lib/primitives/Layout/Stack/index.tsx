import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Box, BoxProps, BoxRef } from "../Box"
import { flexItemVariants, gaps } from "../shared"

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

const stackRowVariants = cva("grid place-items-stretch", {
  variants: {
    ...flexItemVariants,
  },
  defaultVariants: {},
})

export const Stack = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof stackVariants>
>(({ className, gap, children, ...props }, ref) => (
  <Box className={cn(stackVariants({ gap }), className)} ref={ref} {...props}>
    {children}
  </Box>
))

export const StackRow = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof stackRowVariants>
>(({ className, ...props }, ref) => (
  <Box
    className={cn(stackRowVariants(props), className)}
    ref={ref}
    {...props}
  />
))
