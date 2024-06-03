import { Component } from "@/lib/component"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Box, BoxProps, BoxRef } from "../Box"
import { gaps } from "../shared"

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      ...gaps,
    },
  },
  defaultVariants: {},
})

export const Stack = Component(
  {
    name: "Stack",
    type: "layout",
  },
  React.forwardRef<BoxRef, BoxProps & VariantProps<typeof stackVariants>>(
    ({ className, gap, children, ...props }, ref) => (
      <Box
        className={cn(stackVariants({ gap }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Box>
    )
  )
)

export const StackRow = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <Box className={cn(className)} ref={ref} {...props}>
      {children}
    </Box>
  )
)
