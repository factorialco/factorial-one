import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { BoxProps, BoxRef, FlexBox } from "../_FlexBox"
import { gaps } from "../shared"

const splitVariants = cva("flex-row", {
  variants: {
    gap: {
      ...gaps,
    },
    wrap: {
      true: "flex-wrap",
    },
  },

  defaultVariants: {
    wrap: true,
  },
})

export const Split = React.forwardRef<
  BoxRef,
  BoxProps & VariantProps<typeof splitVariants>
>(({ className, gap, wrap, ...props }, ref) => (
  <FlexBox
    className={cn(splitVariants({ gap, wrap }), className)}
    ref={ref}
    {...props}
  />
))
