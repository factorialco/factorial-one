import { useState } from "react"

import { LayoutTypeContext } from "./layout-type"

import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"

import { Skeleton } from "@/ui/skeleton"

import { Employees } from "./employees"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { Icon } from "@/components/Utilities/Icons"
import { Page, Pages, SubItem } from "./pages"

const Navigation: React.FC<{
  activeItem: Page
  setActiveItem: (activeItem: Page) => void
  setLayoutType: React.Dispatch<React.SetStateAction<string>>
}> = ({ activeItem, setActiveItem, setLayoutType }) => (
  <div className="flex flex-col gap-1">
    {Pages.map((item, index) => (
      <Tooltip key={index} delayDuration={200}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "relative flex h-12 w-12 items-center justify-center rounded-2xl text-secondary-foreground transition-colors hover:cursor-pointer",
              activeItem.title === item.title
                ? "bg-layout-intermediate/20 text-layout-foreground"
                : "hover:bg-layout-intermediate/10"
            )}
            key={item.title}
            onClick={() => {
              setActiveItem(item)
              setLayoutType!("Regular")
            }}
          >
            <Icon size="medium" name={item.icon} />
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

  const [layoutType, setLayoutType] = useState("Regular")
  const [employeeId, setEmployeeId] = useState<number>(0)

  if (!activeItem) return null

  return (
    <LayoutTypeContext.Provider
      value={{ layoutType, setLayoutType, employeeId, setEmployeeId }}
    >
      <TooltipProvider>
        <div
          className={cn(
            "-m-4 grid h-screen grid-cols-1 gap-4 bg-layout py-4 pr-4",
            layoutType === "Regular"
              ? "md:grid-cols-[64px_1fr]"
              : "md:grid-cols-[64px_1fr_1fr]"
          )}
        >
          <div className="ml-4 flex w-12 flex-col gap-1 pt-3">
            <div className="flex h-12 w-12 items-center justify-center text-secondary-foreground">
              A
            </div>
            <Navigation
              activeItem={activeItem}
              setActiveItem={handleSetActiveItem}
              setLayoutType={setLayoutType}
            />
          </div>
          <div
            className={cn(
              "grid h-[calc(100vh-2rem)] grid-cols-1 overflow-hidden rounded-2xl border bg-card/40 shadow-sm",
              hasSubItems(activeItem)
                ? "md:grid-cols-[270px_minmax(200px,_1fr)]"
                : ""
            )}
          >
            {hasSubItems(activeItem) && (
              <div>
                <div className="flex h-[72px] w-full items-center px-6 text-xl text-secondary-foreground">
                  {activeItem.title}
                </div>
                <ScrollArea className="flex flex-col gap-1 px-4">
                  {activeItem.subItems.map((subItem) => (
                    <div
                      className={cn(
                        "flex h-10 items-center rounded-xl px-4 py-2 text-secondary-foreground transition-colors hover:cursor-pointer",
                        subItem === activeSubItem
                          ? "bg-layout-intermediate/20 text-layout-foreground"
                          : "hover:bg-layout-intermediate/10"
                      )}
                      key={subItem.title}
                      onClick={() => {
                        setActiveSubItem(subItem)
                        setLayoutType!("Regular")
                      }}
                    >
                      {subItem.title}
                    </div>
                  ))}
                </ScrollArea>
              </div>
            )}
            <div className="h-[calc(100vh-2rem)] w-full rounded-2xl bg-card">
              <div className="flex h-[72px] w-full items-center px-6 text-xl text-secondary-foreground">
                {activeSubItem?.title || activeItem?.title}
              </div>
              <ScrollArea className="h-[calc(100vh-106px)]">
                {activeSubItem?.component || activeItem?.component}
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          <ScrollArea
            className={cn(
              "rounded-2xl border bg-card shadow-sm",
              layoutType === "Split" ? "opacity-100" : "hidden opacity-0"
            )}
          >
            <div>
              <div className="h-32 w-full bg-primary-intermediate/10"></div>
              <div className="-mt-16 flex flex-col gap-4 px-6">
                <Avatar size="xxlarge" className="border-8 border-card">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${Employees[employeeId].avatar}`}
                  />
                  <AvatarFallback>
                    {Employees[employeeId].avatarFallback}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-medium text-foreground">
                    {Employees[employeeId].firstName}{" "}
                    {Employees[employeeId].lastName}
                  </h1>
                  <h2 className="text-lg text-secondary-foreground">
                    {Employees[employeeId].job}
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-6 pt-6">
              {Array.from({ length: 30 }, (_, index) => (
                <Skeleton
                  key={index}
                  className={`mb-5 h-[20px] rounded-full ${["w-96", "w-80", "w-72", "w-64", "w-60", "w-56"][Math.floor(Math.random() * 6)]}`}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </TooltipProvider>
    </LayoutTypeContext.Provider>
  )
}

export default Layout
