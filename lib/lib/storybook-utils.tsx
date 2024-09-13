import { BoxProps, BoxRef, FlexBox } from "@/components/Layout/_FlexBox"
import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <FlexBox
      className={cn(
        className,
        "flex place-content-center rounded-md border-2 border-dashed border-f1-border bg-f1-background p-4"
      )}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      <div className="text-lg text-f1-foreground-secondary">{children}</div>
    </FlexBox>
  )
)
