import { Box, BoxProps, BoxRef } from "@/primitives/Layout/Box"
import React from "react"
import { cn } from "./utils"

export const Placeholder = React.forwardRef<BoxRef, BoxProps>(
  ({ className, children, ...props }, ref) => (
    <Box
      className={cn(
        className,
        "flex place-content-center rounded-md border-2 border-dashed border-border bg-background p-4"
      )}
      ref={ref}
      {...props}
    >
      <div className="text-lg text-muted-foreground">{children}</div>
    </Box>
  )
)
