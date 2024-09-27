import { ChevronDown } from "@/icons"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface MenuItem {
  label: string
  icon: React.ElementType
  badge?: number | boolean
  href: string
}

interface MenuCategory {
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
}

interface MenuProps {
  categories: MenuCategory[]
}

const MenuItemContent: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex w-full items-center justify-between">
    <div className="flex items-center font-medium text-f1-foreground">
      <item.icon className="mr-1.5 h-4 w-4 text-f1-icon" />
      <span>{item.label}</span>
    </div>
    {item.badge && (
      <div className="h-2 w-2 rounded-full bg-f1-background-critical-bold" />
    )}
  </div>
)

const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => (
  <a
    href={item.href}
    className="flex cursor-pointer items-center rounded-lg py-1.5 pl-1.5 pr-2 no-underline transition-colors hover:bg-f1-background-secondary-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1"
  >
    <MenuItemContent item={item} />
  </a>
)

const CategoryItem: React.FC<{ category: MenuCategory }> = ({ category }) => {
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
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary focus-visible:rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1">
        {category.title}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <ChevronDown className="h-4 w-4" />
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

export function Menu({ categories }: MenuProps) {
  return (
    <div className="min-h-screen w-full bg-transparent">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  )
}
