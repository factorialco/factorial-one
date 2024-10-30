import React, { forwardRef } from "react"

export interface StandardLayoutProps {
  children: React.ReactNode
}

export const FullscreenLayout = forwardRef<HTMLDivElement, StandardLayoutProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="relative flex flex-1 [&>div]:flex-1">
        {children}
      </div>
    )
  }
)

FullscreenLayout.displayName = "FullscreenLayout"
