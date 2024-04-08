import React, { useState } from "react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/foundations/tooltip"

import { Pages } from "./pages"

const Navigation = ({ activeItem, setActiveItem }) => (
  <div className="flex flex-col gap-1">
    {Pages.map((item, index) => (
      <Tooltip key={index} delayDuration={200}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative flex justify-center items-center w-12 h-12 text-secondary-foreground rounded-2xl transition-colors hover:cursor-pointer",
              activeItem.title === item.title
                ? "bg-secondary-foreground/5"
                : "hover:bg-secondary"
            )}
            key={item.title}
            onClick={() => setActiveItem(item)}
          >
            <item.icon size={20} />
            {item.title === "Inbox" && (
              <div className="absolute text-xs bg-destructive-intermediate text-background flex justify-center items-center min-w-5 h-5 top-0 right-0 rounded-md px-1">
                3
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-secondary-foreground text-background rounded-lg"
        >
          {item.title}
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
)

const Layout = () => {
  const [activeItem, setActiveItem] = useState(
    Pages.find((item) => item.title === "Home")
  )
  const [activeSubItem, setActiveSubItem] = useState(null)

  const hasSubItems = (item) => {
    return item.subItems && item.subItems.length !== 0
  }

  const handleSetActiveItem = (item) => {
    setActiveItem(item)
    if (hasSubItems(item)) {
      setActiveSubItem(item.subItems[0])
    } else {
      setActiveSubItem(null)
    }
  }

  const [layoutType, setLayoutType] = useState("Regular")

  return (
    <TooltipProvider>
      <div
        className={cn(
          "-m-4 bg-secondary/60 min-h-screen h-screen py-4 pr-4 grid grid-cols-1 gap-4",
          layoutType === "Regular"
            ? "md:grid-cols-[64px_1fr]"
            : "md:grid-cols-[64px_1fr_2fr]"
        )}
      >
        <div className="w-12 flex flex-col gap-1 ml-4 pt-3">
          <div className="flex justify-center items-center w-12 h-12 text-secondary-foreground">
            A
          </div>
          <Navigation
            activeItem={activeItem}
            setActiveItem={handleSetActiveItem}
          />
        </div>
        <div
          className={cn(
            "bg-card/40 rounded-2xl grid grid-cols-1 shadow-sm border",
            hasSubItems(activeItem) ? "md:grid-cols-[270px_1fr]" : ""
          )}
        >
          {hasSubItems(activeItem) && (
            <div>
              <div className="w-full h-[72px] flex items-center px-6 text-xl text-secondary-foreground">
                {activeItem.title}
              </div>
              <div className="flex flex-col gap-1 px-4">
                {activeItem.subItems.map((subItem) => (
                  <div
                    className={cn(
                      "h-10 flex items-center px-4 py-2 text-secondary-foreground rounded-xl transition-colors hover:cursor-pointer",
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
          <div className="bg-card rounded-2xl">
            {activeSubItem?.component || activeItem?.component}
          </div>
        </div>
        {layoutType === "Split" && (
          <div className="bg-card rounded-2xl shadow-sm border">
            Here it is a split layout.
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export default Layout
