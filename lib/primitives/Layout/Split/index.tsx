import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { Box, BoxProps, BoxRef } from "../Box"
import { gaps } from "../shared"

const splitVariants = cva("flex flex-row", {
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
  },
})

export const Split = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof splitVariants>
>(({ className, gap, wrap, verticalAlign, ...props }, ref) => (
  <Box
    className={cn(splitVariants({ gap, wrap, verticalAlign }), className)}
    ref={ref}
    {...props}
  />
))
