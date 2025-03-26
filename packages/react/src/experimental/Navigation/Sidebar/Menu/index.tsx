import { Collapsible, CollapsibleContent } from "@/ui/collapsible"
import { AnimatePresence, motion, Reorder } from "framer-motion"
import React, { useRef } from "react"
import { Icon, IconType } from "../../../../components/Utilities/Icon"
import { ChevronDown } from "../../../../icons/app"
import { useReducedMotion } from "../../../../lib/a11y"
import { Link, useNavigation } from "../../../../lib/linkHandler"
import { cn, focusRing } from "../../../../lib/utils"
import { Counter } from "../../../Information/Counter"
import { NavigationItem } from "../../utils"
import { DragProvider, useDragContext } from "./DragContext"

export interface MenuItem extends NavigationItem {
  icon: IconType
  badge?: number
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
  isSortable?: boolean
}

interface MenuProps {
  tree: MenuCategory[]
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
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

interface CategoryItemProps {
  category: MenuCategory
  isSortable?: boolean
  dragConstraints?: React.RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
}

const CategoryItem = ({
  category,
  isSortable = false,
  dragConstraints,
  onCollapse,
}: CategoryItemProps) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen !== false)
  const shouldReduceMotion = useReducedMotion()
  const wasDragging = useRef(false)
  const { isDragging, setIsDragging } = useDragContext()

  const handleClick = () => {
    if (!isDragging && !wasDragging.current) {
      const newIsOpen = !isOpen
      setIsOpen(newIsOpen)
      onCollapse?.(category, newIsOpen)
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
    wasDragging.current = true
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setTimeout(() => {
      wasDragging.current = false
    }, 0)
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        opacity: { duration: 0.3 },
        translateY: { duration: 0.2, ease: "easeInOut" },
      }}
    >
      <Collapsible open={isOpen}>
        <div className="group relative flex items-center">
          <div
            className={cn(
              "group relative flex w-full items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
              isDragging && "hover:cursor-grabbing",
              isDragging && wasDragging.current && "bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset"),
              category.isRoot && "hidden"
            )}
            onClick={!isDragging ? handleClick : undefined}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick()
              }
            }}
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
          </div>
        </div>
        <CollapsibleContent
          forceMount
          className={cn(
            "flex flex-col gap-1 overflow-hidden",
            isDragging && "pointer-events-none"
          )}
        >
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen ? "auto" : 0,
              opacity: isOpen ? 1 : 0,
              visibility: isOpen ? "visible" : "hidden",
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1],
            }}
          >
            <div
              className={cn(
                "flex flex-col gap-0.5",
                isDragging && !wasDragging.current && "pointer-events-none"
              )}
            >
              {category.items.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  )

  if (!isSortable) return content

  return (
    <Reorder.Item
      id={category.title}
      value={category}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)",
      }}
      transition={{
        opacity: { duration: 0.2, ease: "easeInOut" },
        filter: { duration: 0.1, ease: "easeInOut" },
        scale: {
          duration: 0.2,
          ease: [0.175, 0.885, 0.32, 1.275],
        },
      }}
      whileDrag={{
        scale: 1.04,
        cursor: "grabbing",
      }}
      className={cn("relative backdrop-blur-sm")}
    >
      {content}
    </Reorder.Item>
  )
}

export function Menu({ tree, onCollapse }: MenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nonSortableItems = tree.filter(
    (category) => category.isSortable === false
  )
  const [sortableItems, setSortableItems] = React.useState(
    tree.filter((category) => category.isSortable !== false)
  )

  return (
    <DragProvider>
      <MenuContent
        nonSortableItems={nonSortableItems}
        sortableItems={sortableItems}
        setSortableItems={setSortableItems}
        containerRef={containerRef}
        onCollapse={onCollapse}
      />
    </DragProvider>
  )
}

function MenuContent({
  nonSortableItems,
  sortableItems,
  setSortableItems,
  containerRef,
  onCollapse,
}: {
  nonSortableItems: MenuCategory[]
  sortableItems: MenuCategory[]
  setSortableItems: (items: MenuCategory[]) => void
  containerRef: React.RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
}) {
  const { isDragging } = useDragContext()
  const hasRoot = nonSortableItems.some((category) => category.isRoot)
  const hasNonSortableItems =
    nonSortableItems.filter((category) => !category.isRoot).length > 0
  const hasSortableItems = sortableItems.length > 0

  return (
    <div
      className={cn(
        "relative",
        isDragging && "cursor-grabbing [&_*]:cursor-grabbing"
      )}
    >
      {hasRoot && (
        <div className="flex w-full flex-col gap-3 bg-transparent px-3">
          {nonSortableItems
            .filter((category) => category.isRoot)
            .map((category, index) => (
              <CategoryItem
                key={`fixed-${index}`}
                category={category}
                onCollapse={onCollapse}
              />
            ))}
        </div>
      )}

      {hasNonSortableItems && (
        <div className="mt-3 flex w-full flex-col gap-3 bg-transparent px-3">
          {nonSortableItems
            .filter((category) => !category.isRoot)
            .map((category, index) => (
              <CategoryItem
                key={`fixed-${index}`}
                category={category}
                onCollapse={onCollapse}
              />
            ))}
        </div>
      )}

      {hasSortableItems && (
        <div
          className={cn(
            "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
          )}
          ref={containerRef}
        >
          <Reorder.Group
            axis="y"
            values={sortableItems}
            onReorder={setSortableItems}
            className="flex flex-col gap-3"
          >
            <AnimatePresence>
              {sortableItems.map((category) => (
                <CategoryItem
                  key={category.title}
                  category={category}
                  isSortable={true}
                  dragConstraints={containerRef}
                  onCollapse={onCollapse}
                />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </div>
      )}
    </div>
  )
}
