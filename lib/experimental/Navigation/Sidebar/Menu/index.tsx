import { Counter } from "@/experimental/Information/Counter"
import * as Icons from "@/icons"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

type IconName = keyof typeof Icons

interface MenuItem {
  label: string
  icon: IconName
  badge?: number
  href: string
  isActive?: boolean
}

interface MenuCategory {
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
}

interface MenuProps {
  tree: MenuCategory[]
}

const MenuItemContent = ({ item }: { item: MenuItem }) => {
  const IconComponent = Icons[item.icon]

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
        <IconComponent
          className={cn(
            "h-5 w-5",
            item.isActive ? "text-f1-foreground" : "text-f1-icon"
          )}
        />
        <span>{item.label}</span>
      </div>
      {item.badge && <Counter value={item.badge} size="sm" type="bold" />}
    </div>
  )
}

const MenuItem = ({ item }: { item: MenuItem }) => (
  <a
    href={item.href}
    className={cn(
      "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
      focusRing(),
      item.isActive
        ? "bg-f1-background-secondary-hover text-f1-foreground"
        : "hover:bg-f1-background-secondary-hover"
    )}
  >
    <MenuItemContent item={item} />
  </a>
)

const CategoryItem = ({ category }: { category: MenuCategory }) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen !== false)

  if (category.isRoot) {
    return (
      <div className="flex flex-col gap-1 pb-3">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          focusRing("focus-visible:rounded-md")
        )}
      >
        {category.title}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <Icons.ChevronDown className="h-4 w-4" />
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent
        forceMount
        className="flex flex-col gap-1 overflow-hidden pb-3"
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="flex flex-col gap-1 pb-3"
            >
              {category.items.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function Menu({ tree }: MenuProps) {
  return (
    <div className="min-h-screen w-full bg-transparent">
      {tree.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  )
}
