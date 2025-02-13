import { Icon, IconType } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/Information/Counter"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { ChevronDown, Menu as MenuIcon } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { Link, useNavigation } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { NavigationItem } from "../../utils"

export interface MenuItem extends NavigationItem {
  icon: IconType
  badge?: number
}

export interface MenuCategory {
  id?: string
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
}

interface MenuProps {
  tree: MenuCategory[]
  dropdownItems?: DropdownItem[]
  isLarge?: boolean
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

const CategoryItem = ({
  category,
  dropdownItems,
}: {
  category: MenuCategory
  dropdownItems?: DropdownItem[]
}) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen !== false)
  const shouldReduceMotion = useReducedMotion()
  const [openDropdown, setOpenDropdown] = React.useState(false)

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
    <AnimatePresence>
      <motion.div
        id={category.id}
        key={category.id}
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          translateY: { duration: 0.2, ease: "easeInOut" },
        }}
      >
        <Collapsible open={isOpen} onOpenChange={setIsOpen} key={category.id}>
          <CollapsibleTrigger
            className={cn(
              "group relative flex w-full cursor-pointer items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary hover:bg-f1-background-secondary",
              openDropdown && "bg-f1-background-secondary",
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
            {category.id !== "personal" && dropdownItems && (
              <div onClick={(e) => e.stopPropagation()}>
                <Dropdown
                  items={dropdownItems}
                  title="Group by"
                  open={openDropdown}
                  onOpenChange={setOpenDropdown}
                  key={category.id}
                >
                  <div
                    className={cn(
                      "absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-sm text-f1-icon opacity-0 transition-all hover:bg-f1-background-secondary hover:text-f1-icon-bold group-hover:opacity-100",
                      openDropdown &&
                        "bg-f1-background-secondary text-f1-icon-bold opacity-100"
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <Icon icon={MenuIcon} size="sm" />
                  </div>
                </Dropdown>
              </div>
            )}
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
      </motion.div>
    </AnimatePresence>
  )
}

export function Menu({ tree, dropdownItems }: MenuProps) {
  return (
    <div className="flex w-full flex-col gap-3 bg-transparent px-3">
      {tree.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          dropdownItems={dropdownItems}
        />
      ))}
    </div>
  )
}
