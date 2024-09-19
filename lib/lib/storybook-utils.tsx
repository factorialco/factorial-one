import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      className,
      "flex place-content-center rounded-md border-2 border-dashed border-f1-border bg-f1-background p-4"
    )}
    tabIndex={0}
    ref={ref}
    {...props}
  >
    <div className="text-lg text-f1-foreground-secondary">{children}</div>
  </div>
))
