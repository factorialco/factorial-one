import { cn } from "@/lib/utils.ts"
import { ReactNode, forwardRef } from "react"

export interface TwoColumnLayoutProps {
  children: ReactNode
  sideContent: ReactNode
  mainColumnPosition?: "left" | "right"
}

export const TwoColumnLayout = forwardRef<HTMLDivElement, TwoColumnLayoutProps>(
  function TwoColumnLayout(
    { children: mainContent, sideContent, mainColumnPosition = "left" },
    ref
  ) {
    return (
      <div ref={ref} className="h-full overflow-auto">
        <div
          className={cn(
            "flex h-full overflow-auto text-f1-foreground sm:flex-row",
            mainColumnPosition === "right" ? "flex-col" : "flex-col-reverse"
          )}
        >
          {mainColumnPosition === "right" && <Aside>{sideContent}</Aside>}
          <main
            className={cn(
              "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
              mainColumnPosition === "right"
                ? "sm:border-l sm:border-l-f1-border-secondary"
                : "sm:border-r sm:border-r-f1-border-secondary"
            )}
          >
            {mainContent}
          </main>
          {mainColumnPosition === "left" && <Aside>{sideContent}</Aside>}
        </div>
      </div>
    )
  }
)

const Aside = ({ children }: { children: ReactNode }) => (
  <aside className="py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6">{children}</aside>
)
