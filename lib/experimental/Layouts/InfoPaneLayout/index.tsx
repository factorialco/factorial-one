import React, { forwardRef } from "react"
import { VerticalSeparator } from "../Utils/VerticalSeparator"

export interface InfoPaneLayoutProps {
  mainContent: React.ReactNode
  sideContent: React.ReactNode
}

export const InfoPaneLayout = forwardRef<HTMLDivElement, InfoPaneLayoutProps>(
  ({ mainContent, sideContent }, ref) => {
    return (
      <div
        ref={ref}
        className="flex h-full flex-col-reverse gap-4 sm:flex-row sm:gap-0"
      >
        <div className="sm:my-6 sm:ms-6 sm:basis-3/4">{mainContent}</div>
        <VerticalSeparator />
        <div className="sm:my-6 sm:me-6 sm:basis-1/4">{sideContent}</div>
      </div>
    )
  }
)

InfoPaneLayout.displayName = "InfoPaneLayout"
