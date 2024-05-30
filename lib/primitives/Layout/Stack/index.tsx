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

export const Stack = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof stackVariants>
>(({ className, gap, children, ...props }, ref) => (
  <Box className={cn(stackVariants({ gap }), className)} ref={ref} {...props}>
    {children}
  </Box>
))
