import React, { forwardRef } from "react"

export interface InfoPaneLayoutProps {
  children: React.ReactNode
  sideContent: React.ReactNode
}

export const InfoPaneLayout = forwardRef<HTMLDivElement, InfoPaneLayoutProps>(
  function InfoPaneLayout({ children: mainContent, sideContent }, ref) {
    return (
      <div ref={ref} className="h-full overflow-auto">
        <div className="flex h-full flex-col-reverse overflow-auto text-f1-foreground sm:flex-row">
          <main className="h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-r sm:border-solid sm:border-r-f1-border-secondary">
            {mainContent}
          </main>
          <aside className="py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6">
            {sideContent}
          </aside>
        </div>
      </div>
    )
  }
)
