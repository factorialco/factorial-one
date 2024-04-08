import { useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/foundations/tooltip"
import { cn } from "@/lib/utils"

import { Page, Pages, SubItem } from "./pages"

const Navigation: React.FC<{
  activeItem: Page
  setActiveItem: (activeItem: Page) => void
}> = ({ activeItem, setActiveItem }) => (
  <div className="flex flex-col gap-1">
    {Pages.map((item, index) => (
      <Tooltip key={index} delayDuration={200}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-2xl text-secondary-foreground transition-colors hover:cursor-pointer",
              activeItem.title === item.title
                ? "bg-secondary-foreground/5"
                : "hover:bg-secondary"
            )}
            key={item.title}
            onClick={() => setActiveItem(item)}
          >
            <item.icon size={20} />
            {item.title === "Inbox" && (
              <div className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-md bg-destructive-intermediate px-1 text-xs text-background">
                3
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="rounded-lg bg-secondary-foreground text-background"
        >
          {item.title}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
)

const Layout = () => {
  const [activeItem, setActiveItem] = useState<Page | null>(
    Pages.find((item) => item.title === "Home") || null
  )
  const [activeSubItem, setActiveSubItem] = useState<SubItem | null>(null)

  const hasSubItems = (item: Page) => {
    return item.subItems && item.subItems.length !== 0
  }

  const handleSetActiveItem = (item: Page) => {
    setActiveItem(item)
    if (hasSubItems(item)) {
      setActiveSubItem(item.subItems[0])
    } else {
      setActiveSubItem(null)
    }
  }

  const [layoutType] = useState("Regular")

  if (!activeItem) return null

  return (
    <TooltipProvider>
      <div
        className={cn(
          "-m-4 grid h-screen min-h-screen grid-cols-1 gap-4 bg-secondary/60 py-4 pr-4",
          layoutType === "Regular"
            ? "md:grid-cols-[64px_1fr]"
            : "md:grid-cols-[64px_1fr_2fr]"
        )}
      >
        <div className="ml-4 flex w-12 flex-col gap-1 pt-3">
          <div className="flex h-12 w-12 items-center justify-center text-secondary-foreground">
            A
          </div>
          <Navigation
            activeItem={activeItem}
            setActiveItem={handleSetActiveItem}
          />
        </div>
        <div
          className={cn(
            "grid grid-cols-1 rounded-2xl border bg-card/40 shadow-sm",
            hasSubItems(activeItem) ? "md:grid-cols-[270px_1fr]" : ""
          )}
        >
          {hasSubItems(activeItem) && (
            <div>
              <div className="flex h-[72px] w-full items-center px-6 text-xl text-secondary-foreground">
                {activeItem.title}
              </div>
              <div className="flex flex-col gap-1 px-4">
                {activeItem.subItems.map((subItem) => (
                  <div
                    className={cn(
                      "flex h-10 items-center rounded-xl px-4 py-2 text-secondary-foreground transition-colors hover:cursor-pointer",
                      subItem === activeSubItem
                        ? "bg-secondary-foreground/10 text-foreground"
                        : "hover:bg-secondary"
                    )}
                    key={subItem.title}
                    onClick={() => setActiveSubItem(subItem)}
                  >
                    {subItem.title}
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="rounded-2xl bg-card">
            {activeSubItem?.component || activeItem?.component}
          </div>
        </div>
        {layoutType === "Split" && (
          <div className="rounded-2xl border bg-card shadow-sm">
            Here it is a split layout.
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export default Layout
