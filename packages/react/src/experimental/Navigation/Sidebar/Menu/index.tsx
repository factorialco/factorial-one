import { Collapsible, CollapsibleContent } from "@/ui/collapsible"
import { motion, Reorder } from "framer-motion"
import React, { useRef } from "react"
import { Icon, IconType } from "../../../../components/Utilities/Icon"
import {
  ChevronDown,
  Delete,
  EllipsisHorizontal,
  MoveDown,
  MoveUp,
} from "../../../../icons/app"
import { useReducedMotion } from "../../../../lib/a11y"
import { Link, useNavigation } from "../../../../lib/linkHandler"
import { cn, focusRing } from "../../../../lib/utils"
import { Avatar, AvatarVariant } from "../../../Information/Avatars/Avatar"
import { Counter } from "../../../Information/Counter"
import { Dropdown } from "../../Dropdown"
import { NavigationItem } from "../../utils"
import { DragProvider, useDragContext } from "./DragContext"

export interface MenuItem extends NavigationItem {
  icon: IconType
  badge?: number
}

type FavoriteMenuItem = (
  | {
      type: "icon"
      icon: IconType
    }
  | {
      type: "avatar"
      avatar?: AvatarVariant
    }
) &
  NavigationItem

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
  isRoot?: boolean
  isOpen?: boolean
  isSortable?: boolean
}

export interface MenuProps {
  tree: MenuCategory[]
  favorites?: FavoriteMenuItem[]
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onSort?: (categories: MenuCategory[]) => void
  onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void
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
  const { label: _label, icon: _icon, ...rest } = item

  const active = isActive(rest.href, { exact: rest.exactMatch })

  return (
    <Link
      {...rest}
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

const FavoriteItem = ({
  item,
  dragConstraints,
  onRemove,
  index,
  total,
  onMove,
}: {
  item: FavoriteMenuItem
  dragConstraints?: React.RefObject<HTMLElement>
  onRemove?: (item: FavoriteMenuItem) => void
  index: number
  total: number
  onMove?: (from: number, to: number) => void
}) => {
  const { isDragging, setIsDragging, draggedItemId, setDraggedItemId } =
    useDragContext()
  const { isActive } = useNavigation()
  const active = isActive(item.href, { exact: item.exactMatch })
  const wasDragging = useRef(false)
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  const isFirst = index === 0
  const isLast = index === total - 1
  const isOnly = total === 1

  const dropdownItems: Array<
    | { label: string; onClick: () => void; icon: IconType; critical?: boolean }
    | { type: "separator" }
  > = []

  if (!isOnly && !isFirst) {
    dropdownItems.push({
      label: "Move up",
      onClick: () => onMove?.(index, index - 1),
      icon: MoveUp,
    })
  }
  if (!isOnly && !isLast) {
    dropdownItems.push({
      label: "Move down",
      onClick: () => onMove?.(index, index + 1),
      icon: MoveDown,
    })
  }
  if (dropdownItems.length > 0) {
    dropdownItems.push({ type: "separator" })
  }
  dropdownItems.push({
    label: "Remove favorite",
    onClick: () => onRemove?.(item),
    icon: Delete,
    critical: true,
  })

  const handleDragStart = () => {
    setIsDragging(true)
    setIsDropdownOpen(false)
    setDraggedItemId(item.href || null)
    wasDragging.current = true
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDraggedItemId(null)
    setTimeout(() => {
      wasDragging.current = false
    }, 0)
  }

  const handleClick = () => {
    if (!wasDragging.current && item.href) {
      window.location.href = item.href
    }
  }

  const isItemDragging = isDragging && draggedItemId === item.href

  return (
    <Reorder.Item
      value={item}
      drag="y"
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={cn(
        "relative cursor-pointer touch-none select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
        active
          ? "bg-f1-background-secondary text-f1-foreground"
          : "hover:bg-f1-background-secondary",
        isDropdownOpen && "bg-f1-background-secondary",
        isItemDragging && "bg-f1-background-secondary"
      )}
      whileDrag={{
        scale: 1.05,
      }}
    >
      <div
        className="isolate flex w-full items-center justify-between px-1.5 py-1.5"
        onClick={handleClick}
      >
        <div className="flex w-full items-center gap-1.5">
          {item.type === "icon" ? (
            <Icon
              icon={item.icon}
              size="md"
              className={cn(
                "transition-colors",
                active ? "text-f1-icon-bold" : "text-f1-icon"
              )}
            />
          ) : item.avatar ? (
            <Avatar size="xsmall" avatar={item.avatar} />
          ) : null}
          <span className="line-clamp-1 font-medium text-f1-foreground">
            {item.label}
          </span>
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm hover:bg-f1-background-secondary",
          isDropdownOpen && "bg-f1-background-secondary"
        )}
      >
        <Dropdown
          open={isDropdownOpen}
          onOpenChange={setIsDropdownOpen}
          items={dropdownItems}
        >
          <Icon icon={EllipsisHorizontal} size="sm" />
        </Dropdown>
      </div>
    </Reorder.Item>
  )
}

interface BaseCategoryProps {
  title: string
  isOpen?: boolean
  isRoot?: boolean
  onCollapse?: (isOpen: boolean) => void
  children?: React.ReactNode
  isDragging?: boolean
  wasDragging?: React.RefObject<boolean>
}

const BaseCategory = ({
  title,
  isOpen: initialIsOpen = true,
  isRoot,
  onCollapse,
  children,
  isDragging,
  wasDragging,
}: BaseCategoryProps) => {
  const [isOpen, setIsOpen] = React.useState(initialIsOpen)
  const shouldReduceMotion = useReducedMotion()

  const handleClick = () => {
    if (isDragging || wasDragging?.current) return

    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onCollapse?.(newIsOpen)
  }

  return (
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
              "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset"),
              isRoot && "hidden"
            )}
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick()
              }
            }}
          >
            {title}
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
        <CollapsibleContent forceMount className="flex flex-col gap-1">
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
            <div className="flex flex-col gap-0.5">{children}</div>
          </motion.div>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  )
}

interface CategoryItemProps {
  category: MenuCategory
  isSortable?: boolean
  dragConstraints?: React.RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onDragEnd?: (categories: MenuCategory[]) => void
  currentOrder?: MenuCategory[]
}

const CategoryItem = ({
  category,
  isSortable = false,
  dragConstraints,
  onCollapse,
  onDragEnd,
  currentOrder,
}: CategoryItemProps) => {
  const { isDragging, setIsDragging } = useDragContext()
  const wasDragging = useRef(false)

  const handleDragStart = () => {
    setIsDragging(true)
    wasDragging.current = true
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setTimeout(() => {
      wasDragging.current = false
      if (currentOrder) {
        onDragEnd?.(currentOrder)
      }
    }, 0)
  }

  const handleCollapse = (isOpen: boolean) => {
    if (!isDragging && !wasDragging.current) {
      onCollapse?.(category, isOpen)
    }
  }

  const content = (
    <BaseCategory
      title={category.title}
      isOpen={category.isOpen}
      isRoot={category.isRoot}
      onCollapse={handleCollapse}
      isDragging={isDragging}
      wasDragging={wasDragging}
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
    </BaseCategory>
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

export function Menu({
  tree,
  onCollapse,
  onSort,
  onFavoritesChange,
  favorites,
}: MenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const nonSortableItems = tree.filter(
    (category) => category.isSortable === false
  )
  const [sortableItems, setSortableItems] = React.useState(
    tree.filter((category) => category.isSortable !== false)
  )

  const handleSort = React.useCallback((newOrder: MenuCategory[]) => {
    setSortableItems(newOrder)
  }, [])

  const handleDragEnd = React.useCallback(
    (newOrder: MenuCategory[]) => {
      onSort?.(newOrder)
    },
    [onSort]
  )

  return (
    <DragProvider>
      <MenuContent
        nonSortableItems={nonSortableItems}
        sortableItems={sortableItems}
        setSortableItems={handleSort}
        containerRef={containerRef}
        onCollapse={onCollapse}
        onDragEnd={handleDragEnd}
        favorites={favorites}
        onFavoritesChange={onFavoritesChange}
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
  onDragEnd,
  favorites,
  onFavoritesChange,
}: {
  nonSortableItems: MenuCategory[]
  sortableItems: MenuCategory[]
  setSortableItems: (items: MenuCategory[]) => void
  containerRef: React.RefObject<HTMLDivElement>
  onCollapse?: (category: MenuCategory, isOpen: boolean) => void
  onDragEnd?: (categories: MenuCategory[]) => void
  favorites?: FavoriteMenuItem[]
  onFavoritesChange?: (favorites: FavoriteMenuItem[]) => void
}) {
  const { isDragging } = useDragContext()
  const hasRoot = nonSortableItems.some((category) => category.isRoot)
  const hasNonSortableItems =
    nonSortableItems.filter((category) => !category.isRoot).length > 0
  const hasSortableItems = sortableItems.length > 0
  const [currentFavorites, setCurrentFavorites] = React.useState<
    FavoriteMenuItem[]
  >(favorites || [])
  const favoritesRef = useRef<HTMLDivElement>(null)
  const hasFavorites = currentFavorites.length > 0

  React.useEffect(() => {
    setCurrentFavorites(favorites || [])
  }, [favorites])

  const handleFavoritesReorder = React.useCallback(
    (newOrder: FavoriteMenuItem[]) => {
      setCurrentFavorites(newOrder)
      onFavoritesChange?.(newOrder)
    },
    [onFavoritesChange]
  )

  const handleRemoveFavorite = React.useCallback(
    (item: FavoriteMenuItem) => {
      const updated = currentFavorites.filter((fav) => fav.href !== item.href)
      setCurrentFavorites(updated)
      onFavoritesChange?.(updated)
    },
    [currentFavorites, onFavoritesChange]
  )

  const handleMoveFavorite = React.useCallback(
    (from: number, to: number) => {
      if (to < 0 || to >= currentFavorites.length) return
      const updated = [...currentFavorites]
      const [moved] = updated.splice(from, 1)
      updated.splice(to, 0, moved)
      setCurrentFavorites(updated)
      onFavoritesChange?.(updated)
    },
    [currentFavorites, onFavoritesChange]
  )

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

      {hasFavorites && (
        <div className="mt-3 flex w-full flex-col gap-3 bg-transparent px-3">
          <BaseCategory title="Favorites">
            <div ref={favoritesRef}>
              <Reorder.Group
                axis="y"
                values={currentFavorites}
                onReorder={handleFavoritesReorder}
                className="flex flex-col gap-0.5"
              >
                {currentFavorites.map((item, idx) => (
                  <FavoriteItem
                    key={item.href}
                    item={item}
                    dragConstraints={favoritesRef}
                    onRemove={handleRemoveFavorite}
                    index={idx}
                    total={currentFavorites.length}
                    onMove={handleMoveFavorite}
                  />
                ))}
              </Reorder.Group>
            </div>
          </BaseCategory>
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
            {sortableItems.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                isSortable={true}
                dragConstraints={containerRef}
                onCollapse={onCollapse}
                onDragEnd={onDragEnd}
                currentOrder={sortableItems}
              />
            ))}
          </Reorder.Group>
        </div>
      )}
    </div>
  )
}
