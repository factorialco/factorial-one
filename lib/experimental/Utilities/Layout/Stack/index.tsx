import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { BoxProps, BoxRef, FlexBox } from "../_FlexBox"
import { gaps } from "../shared"

const stackVariants = cva("flex-col", {
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
  <FlexBox
    className={cn(stackVariants({ gap }), className)}
    ref={ref}
    {...props}
  >
    {children}
  </FlexBox>
))

Stack.displayName = "Stack"
