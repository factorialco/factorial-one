import React, { useState } from "react"
import {
  CircleHelp,
  Home,
  Inbox,
  Search,
  Settings,
  Store,
  Target,
  UserRound,
} from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Home",
    icon: Home,
    component: "Home Component content",
    subItems: [],
  },
  {
    title: "Profile",
    icon: UserRound,
    component: "Profile Component content",
    subItems: [
      {
        title: "Profile SubMenu one",
        component: "Profile SubMenu one component content",
      },
      {
        title: "Profile SubMenu two",
        component: "Profile SubMenu two component content",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    component: "Settings Component content",
    subItems: [],
  },
]

const Navigation = ({ activeItem, setActiveItem }) => (
  <div className="flex flex-col gap-1">
    {navItems.map((item) => (
      <div
        className={cn(
          "flex justify-center items-center w-12 h-12 text-secondary-foreground rounded-2xl transition-colors hover:cursor-pointer",
          activeItem.title === item.title
            ? "bg-secondary-foreground/5 border"
            : "hover:bg-secondary"
        )}
        key={item.title}
        onClick={() => setActiveItem(item)}
      >
        <item.icon size={20} />
      </div>
    ))}
  </div>
)

const Layout = () => {
  const [activeItem, setActiveItem] = useState(
    navItems.find((item) => item.title === "Home")
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

  return (
    <div className="-m-4 bg-secondary/60 min-h-screen h-screen p-4 grid grid-cols-1 md:grid-cols-[80px_1fr]">
      <div className="flex flex-col gap-1 mx-4 pt-3">
        <div className="flex justify-center items-center w-12 h-12 text-secondary-foreground">
          <Target size="20" />
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
                      ? "bg-secondary-foreground/5 text-foreground"
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
    </div>
  )
}

export default Layout
