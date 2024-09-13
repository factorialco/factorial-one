import { BoxProps, BoxRef, FlexBox } from "@/components/Layout/_FlexBox"
import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <FlexBox
      className={cn(
        className,
        "border-f1-border-neutral bg-f1-background-neutral flex place-content-center rounded-md border-2 border-dashed p-4"
      )}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      <div className="text-f1-foreground-neutral-secondary text-lg">
        {children}
      </div>
    </FlexBox>
  )
)
