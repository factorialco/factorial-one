import React, { forwardRef } from "react"

export interface InfoPaneLayoutProps {
  children: React.ReactNode
  sideContent: React.ReactNode
}

export const InfoPaneLayout = forwardRef<HTMLDivElement, InfoPaneLayoutProps>(
  function InfoPaneLayout({ children: mainContent, sideContent }, ref) {
    return (
      <div
        ref={ref}
        className="flex h-full flex-col-reverse gap-4 overflow-auto text-f1-foreground sm:flex-row sm:gap-0"
      >
        <div className="sm:basis-3/4 sm:overflow-auto sm:p-6">
          {mainContent}
        </div>
        <div className="border-0 sm:basis-1/4 sm:overflow-auto sm:border-l sm:border-solid sm:border-l-f1-border-secondary sm:p-6">
          {sideContent}
        </div>
      </div>
    )
  }
)
