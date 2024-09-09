import { BoxProps, BoxRef, FlexBox } from "@/components/Layout/_FlexBox"
import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <FlexBox
      className={cn(
        className,
        "border-neutral-20 bg-neutral-0 flex place-content-center rounded-md border-2 border-dashed p-4"
      )}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      <div className="text-lg text-neutral-50">{children}</div>
    </FlexBox>
  )
)
