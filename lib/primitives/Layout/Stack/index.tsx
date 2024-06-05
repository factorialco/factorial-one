import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
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

export const Stack = forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof stackVariants>
>(({ className, gap, children, ...props }, ref) => (
  <Box className={cn(stackVariants({ gap }), className)} ref={ref} {...props}>
    {children}
  </Box>
))

export const StackRow = forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <Box className={cn(className)} ref={ref} {...props}>
      {children}
    </Box>
  )
)
