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
          <main className="px-6 py-5 sm:basis-3/4">{mainContent}</main>
          <aside className="border-0 py-5 pl-2 pr-4 sm:basis-1/4 sm:border-l sm:border-solid sm:border-l-f1-border-secondary sm:pb-6">
            {sideContent}
          </aside>
        </div>
      </div>
    )
  }
)
