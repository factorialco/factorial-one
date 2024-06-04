import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Box, BoxProps, BoxRef } from "../Box"
import { gaps } from "../shared"

const splitVariants = cva("relative flex-row", {
  variants: {
    gap: {
      ...gaps,
    },
    wrap: {
      true: "flex-wrap",
    },
    verticalAlign: {
      center: "items-center",
      stretch: "items-stretch",
    },
  },

  defaultVariants: {
    verticalAlign: "stretch",
    wrap: true,
  },
})

export const Split = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof splitVariants>
>(({ className, gap, verticalAlign, wrap, ...props }, ref) => (
  <Box
    className={cn(splitVariants({ gap, verticalAlign, wrap }), className)}
    ref={ref}
    {...props}
  />
))

export const SplitCol = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <Box className={cn(className)} ref={ref} {...props}>
      {children}
    </Box>
  )
)
