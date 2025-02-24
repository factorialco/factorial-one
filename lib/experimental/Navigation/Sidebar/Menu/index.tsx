import { Icon, IconType } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatars/exports"
import { Counter } from "@/experimental/Information/Counter"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import * as Icons from "@/icons/app"
import { ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { Link, useNavigation } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { Collapsible, CollapsibleContent } from "@/ui/collapsible"
import { AnimatePresence, motion, Reorder } from "framer-motion"
import React, { useRef, useState } from "react"
import { NavigationItem } from "../../utils"
import { DragProvider, useDragContext } from "./DragContext"

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
  isSortable?: boolean
}

interface MenuProps {
  tree: MenuCategory[]
  isLarge?: boolean
  isFinal?: boolean
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
}

const CategoryItem = ({
  category,
  isSortable,
  dragConstraints,
}: CategoryItemProps) => {
  const [isOpen, setIsOpen] = React.useState(category.isOpen !== false)
  const shouldReduceMotion = useReducedMotion()
  const wasDragging = useRef(false)
  const { isDragging, setIsDragging } = useDragContext()

  const handleClick = () => {
    if (!isDragging && !wasDragging.current) {
      setIsOpen(!isOpen)
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
      id={category.id}
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

export function Menu({ tree, isFinal }: MenuProps) {
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
        isFinal={isFinal}
      />
    </DragProvider>
  )
}

type FavoriteItemProps = {
  label: string
  icon?: {
    icon: IconType
    className?: string
  }
  avatar?:
    | {
        type: "person"
        firstName: string
        lastName: string
        src?: string
      }
    | {
        type: "team" | "company"
        name: string
        src?: string
      }
}

const FavoriteItem = ({
  label,
  icon,
  avatar,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: FavoriteItemProps & {
  onRemove: (label: string) => void
  onMoveUp: (label: string) => void
  onMoveDown: (label: string) => void
  isFirst: boolean
  isLast: boolean
}) => {
  const dropdownItems = [
    ...(isFirst
      ? []
      : [
          {
            label: "Move up",
            icon: Icons.ArrowUp,
            onClick: () => onMoveUp(label),
          },
        ]),
    ...(isLast
      ? []
      : [
          {
            label: "Move down",
            icon: Icons.ArrowDown,
            onClick: () => onMoveDown(label),
          },
        ]),
    ...(!isFirst || !isLast ? ["separator" as const] : []),
    {
      label: "Remove favorite",
      icon: Icons.Delete,
      critical: true,
      onClick: () => onRemove(label),
    },
  ]

  return (
    <div className="group flex w-full items-center justify-between">
      <div className="flex w-full items-center justify-between gap-1.5 font-medium text-f1-foreground">
        <div className="flex gap-1.5">
          {icon && (
            <Icon
              icon={icon.icon}
              size="md"
              className={cn("transition-colors", icon.className)}
            />
          )}
          {avatar && <Avatar avatar={avatar} size="xsmall" />}
          <span>{label}</span>
        </div>
        <Dropdown items={dropdownItems}>
          <div className="flex size-6 items-center justify-center rounded-xs text-f1-icon opacity-0 transition-all hover:bg-f1-background-secondary hover:text-f1-icon-bold group-hover:opacity-100 data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-icon-bold data-[state=open]:opacity-100">
            <Icon icon={Icons.EllipsisHorizontal} size="md" />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

function MenuContent({
  nonSortableItems,
  sortableItems,
  setSortableItems,
  containerRef,
  isFinal,
}: {
  nonSortableItems: MenuCategory[]
  sortableItems: MenuCategory[]
  setSortableItems: (items: MenuCategory[]) => void
  containerRef: React.RefObject<HTMLDivElement>
  isFinal?: boolean
}) {
  const { isDragging } = useDragContext()

  const FavoriteList: FavoriteItemProps[] = [
    {
      label: "Product designer",
      icon: { icon: Icons.SearchPerson },
    },
    {
      label: "René Galindo",
      avatar: {
        type: "person",
        firstName: "René",
        lastName: "Galindo",
        src: "https://github.com/renegalindo.png",
      },
    },
    {
      label: "Dani Moreno",
      avatar: {
        type: "person",
        firstName: "Dani",
        lastName: "Moreno",
        src: "https://github.com/dani-moreno.png",
      },
    },
    {
      label: "Design Team",
      avatar: {
        type: "team",
        name: "Design team",
      },
    },
  ]
  const [favorites, setFavorites] = useState(FavoriteList)

  const removeFavorite = (label: string) => {
    setFavorites(favorites.filter((favorite) => favorite.label !== label))
  }

  const moveFavorite = (label: string, direction: "up" | "down") => {
    const index = favorites.findIndex((favorite) => favorite.label === label)
    const offset = direction === "up" ? -1 : 1

    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < favorites.length - 1)
    ) {
      const newFavorites = [...favorites]
      ;[newFavorites[index], newFavorites[index + offset]] = [
        newFavorites[index + offset],
        newFavorites[index],
      ]
      setFavorites(newFavorites)
    }
  }

  const moveFavoriteUp = (label: string) => moveFavorite(label, "up")
  const moveFavoriteDown = (label: string) => moveFavorite(label, "down")

  const favoritesRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative",
        isDragging && "cursor-grabbing [&_*]:cursor-grabbing"
      )}
    >
      <div className="flex w-full flex-col gap-3 bg-transparent px-3">
        {nonSortableItems
          .filter((category) => category.isRoot)
          .map((category, index) => (
            <CategoryItem key={`fixed-${index}`} category={category} />
          ))}
      </div>

      {isFinal && (
        <div className="mt-3 flex w-full flex-col bg-transparent px-3">
          <div className="flex w-full cursor-pointer items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:bg-f1-background-secondary">
            Favorites
            <Icon
              icon={Icons.ChevronDown}
              size="xs"
              className="text-f1-icon-secondary"
            />
          </div>
          <Reorder.Group
            axis="y"
            values={favorites}
            onReorder={setFavorites}
            className="flex list-none flex-col gap-0.5"
            ref={favoritesRef}
          >
            <AnimatePresence>
              {favorites.map((item, index) => (
                <Reorder.Item
                  key={item.label}
                  value={item}
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
                  className={cn(
                    "relative cursor-pointer rounded py-1 pl-1.5 pr-1",
                    "backdrop-blur transition-colors",
                    "hover:bg-f1-background-secondary",
                    "data-[dragging=true]:bg-f1-background-secondary"
                  )}
                  dragConstraints={favoritesRef}
                  dragElastic={0.1}
                >
                  <FavoriteItem
                    {...item}
                    onRemove={removeFavorite}
                    onMoveUp={moveFavoriteUp}
                    onMoveDown={moveFavoriteDown}
                    isFirst={index === 0}
                    isLast={index === favorites.length - 1}
                  />
                </Reorder.Item>
              ))}
            </AnimatePresence>
          </Reorder.Group>
        </div>
      )}

      <div className="mt-3 flex w-full flex-col gap-3 bg-transparent px-3">
        {nonSortableItems
          .filter((category) => !category.isRoot)
          .map((category, index) => (
            <CategoryItem key={`fixed-${index}`} category={category} />
          ))}
      </div>

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
                key={category.id}
                category={category}
                isSortable={true}
                dragConstraints={containerRef}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </div>
  )
}
