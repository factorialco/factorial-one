import React, { forwardRef } from "react"

export interface InfoPaneLayoutProps {
  children: React.ReactNode
  sideContent: React.ReactNode
}

export const InfoPaneLayout = forwardRef<HTMLDivElement, InfoPaneLayoutProps>(
  function InfoPaneLayout({ children: mainContent, sideContent }, ref) {
    return (
      <div ref={ref} className="overflow-auto">
        <div className="flex flex-col-reverse gap-4 overflow-auto text-f1-foreground sm:flex-row sm:gap-0">
          <div className="p-6 sm:basis-3/4">{mainContent}</div>
          <div className="border-0 p-6 sm:basis-1/4 sm:border-l sm:border-solid sm:border-l-f1-border-secondary">
            {sideContent}
          </div>
        </div>
      </div>
    )
  }
)
