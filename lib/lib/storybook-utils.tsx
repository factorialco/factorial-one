import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      className,
      "flex place-content-center rounded-md border-2 border-dashed border-border bg-background p-16"
    )}
    ref={ref}
    {...props}
  >
    <div className="text-lg text-muted-foreground">{children}</div>
  </div>
))
