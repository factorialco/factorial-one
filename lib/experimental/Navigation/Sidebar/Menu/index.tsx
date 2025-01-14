import { Icon, IconType } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/Information/Counter"
import { ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { Link, useNavigation } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { motion } from "framer-motion"
import React from "react"
import { NavigationItem } from "../../utils"

export interface MenuItem extends NavigationItem {
  icon: IconType
  badge?: number
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
}

interface MenuProps {
  tree: MenuCategory[]
}

const MenuItemContent = ({
  item,
  active,
}: {
  item: MenuItem
  active: boolean
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
        <Icon
          icon={item.icon}
          size="md"
          className={cn(
            "transition-colors",
            active ? "text-f1-icon-bold" : "text-f1-icon"
          )}
        />
        <span>{item.label}</span>
      </div>
      {item.badge && <Counter value={item.badge} size="sm" type="bold" />}
    </div>
  )
}

const MenuItem = ({ item }: { item: MenuItem }) => {
  const { isActive } = useNavigation()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, ...props } = item

  const active = isActive(props.href, { exact: props.exactMatch })

  return (
    <Link
      {...props}
      className={cn(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        focusRing("focus-visible:ring-inset"),
        active
          ? "bg-f1-background-secondary text-f1-foreground"
          : "hover:bg-f1-background-secondary"
      )}
    >
      <MenuItemContent item={item} active={active} />
    </Link>
  )
}

const CategoryItem = ({ category }: { category: MenuCategory }) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen !== false)
  const shouldReduceMotion = useReducedMotion()

  if (category.isRoot) {
    return (
      <div className="flex flex-col gap-0.5">
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
          "flex w-full cursor-pointer items-center gap-1 rounded px-1.5 py-2 text-sm font-medium tracking-wide text-f1-foreground-secondary hover:bg-f1-background-secondary",
          focusRing("focus-visible:ring-inset")
        )}
      >
        {category.title}
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.1 }}
          className="h-3 w-3"
        >
          <Icon
            icon={ChevronDown}
            size="xs"
            className="text-f1-icon-secondary"
          />
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent
        forceMount
        className="flex flex-col gap-1 overflow-hidden"
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            pointerEvents: isOpen ? "auto" : "none",
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1],
          }}
        >
          <div className="flex flex-col gap-0.5">
            {category.items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function Menu({ tree }: MenuProps) {
  return (
    <div className="flex w-full flex-col gap-3 bg-transparent px-3">
      {tree.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  )
}
