import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbItem as ShadBreadcrumbItem,
  BreadcrumbLink as ShadBreadcrumbLink,
} from "@/ui/breadcrumb"
import { Skeleton } from "@/ui/skeleton"

import { ModuleAvatar } from "@/experimental/Information/ModuleAvatar"

import {
  Dropdown,
  type DropdownItemObject,
} from "@/experimental/Navigation/Dropdown"

import { ChevronRight } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { NavigationItem } from "../../utils"

import { IconType } from "@/components/Utilities/Icon"
import { motion } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"

export type BreadcrumbItemType = { id: string } & (
  | (NavigationItem & {
      icon?: IconType
    })
  | {
      loading: true
    }
)

interface BreadcrumbState {
  visibleCount: number
  firstItem: BreadcrumbItemType | null
  lastItems: BreadcrumbItemType[]
  collapsedItems: BreadcrumbItemType[]
  isOnly: boolean
}

/**
 * Calculates how many breadcrumb items can be displayed based on container width
 * @param containerWidth - Width of the container in pixels
 * @param totalItems - Total number of breadcrumb items
 * @returns Number of items that can be displayed
 */
function calculateVisibleCount(
  containerWidth: number,
  totalItems: number
): number {
  if (totalItems <= 2) return totalItems

  const ITEM_WIDTH = 150
  const DROPDOWN_WIDTH = 50
  const FIRST_ITEM_RESERVED_WIDTH = ITEM_WIDTH

  let availableWidth = containerWidth - FIRST_ITEM_RESERVED_WIDTH
  let count = 1 // Start with 1 for the first item

  // Calculate how many items can fit from the end
  for (let i = totalItems - 1; i > 0; i--) {
    if (availableWidth < ITEM_WIDTH) break
    availableWidth -= ITEM_WIDTH
    count++
  }

  // Adjust for dropdown if we can't show all items
  if (count < totalItems - 1) {
    availableWidth -= DROPDOWN_WIDTH
    while (availableWidth < 0 && count > 1) {
      availableWidth += ITEM_WIDTH
      count--
    }
  }

  return Math.max(2, count) // Ensure we show at least 2 items when possible
}

/**
 * Calculates the breadcrumb state based on container width and items
 */
function calculateBreadcrumbState(
  containerWidth: number | null,
  breadcrumbs: BreadcrumbItemType[]
): BreadcrumbState {
  const isSimpleLayout = !containerWidth || breadcrumbs.length <= 2
  const visibleCount = isSimpleLayout
    ? breadcrumbs.length
    : calculateVisibleCount(containerWidth, breadcrumbs.length)

  return {
    visibleCount,
    firstItem: breadcrumbs[0] || null,
    lastItems: isSimpleLayout
      ? breadcrumbs.slice(1)
      : breadcrumbs.slice(Math.max(1, breadcrumbs.length - (visibleCount - 1))),
    collapsedItems: isSimpleLayout
      ? []
      : breadcrumbs.slice(1, breadcrumbs.length - (visibleCount - 1)),
    isOnly: breadcrumbs.length === 1,
  }
}

/**
 * Loading skeleton for breadcrumb items
 */
function BreadcrumbSkeleton() {
  return (
    <div className="px-1.5">
      <Skeleton className="h-4 w-24" aria-hidden="true" />
    </div>
  )
}

interface BreadcrumbLinkProps {
  item: NavigationItem & { icon?: IconType }
  className?: string
  size?: "md" | "xl"
}

function BreadcrumbLink({ item, className, size = "md" }: BreadcrumbLinkProps) {
  return (
    <ShadBreadcrumbLink
      className={cn(
        size === "md" && "max-w-40",
        item.icon && "pl-0.5",
        className
      )}
      asChild
    >
      <Link {...item} className={cn("flex items-center gap-2", focusRing())}>
        {item.icon && (
          <ModuleAvatar icon={item.icon} size={size === "md" ? "sm" : "lg"} />
        )}
        <span
          className={cn("truncate", size === "xl" && "text-xl font-semibold")}
        >
          {item.label}
        </span>
      </Link>
    </ShadBreadcrumbLink>
  )
}

function BreadcrumbSeparator() {
  return <ChevronRight className="h-4 w-4 text-f1-icon-secondary" />
}

type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">

interface BreadcrumbContentProps {
  item: BreadcrumbItemType
  isLast: boolean
  isOnly?: boolean
  isFirst?: boolean
}

function BreadcrumbContent({
  item,
  isLast,
  isOnly = false,
  isFirst = false,
}: BreadcrumbContentProps) {
  const isLoading = "loading" in item

  return (
    <motion.div
      layout={isFirst}
      className={cn(isLoading && "max-w-40")}
      transition={!isLoading && !isLast ? { duration: 0.15 } : undefined}
    >
      {isLoading ? (
        <BreadcrumbSkeleton />
      ) : isLast ? (
        <BreadcrumbPage aria-hidden="true">{item.label}</BreadcrumbPage>
      ) : (
        <BreadcrumbLink item={item} size={isOnly ? "xl" : "md"} />
      )}
    </motion.div>
  )
}

function BreadcrumbItem({
  item,
  isLast,
  isOnly = false,
  isFirst = false,
}: BreadcrumbContentProps) {
  return (
    <ShadBreadcrumbItem key={item.id}>
      {!isFirst && <BreadcrumbSeparator />}
      <BreadcrumbContent
        item={item}
        isLast={isLast}
        isOnly={isOnly}
        isFirst={isFirst}
      />
    </ShadBreadcrumbItem>
  )
}

interface CollapsedBreadcrumbItemProps {
  items: DropdownItemWithoutIcon[]
}

/**
 * Renders the collapsed breadcrumb items as a dropdown
 */
function CollapsedBreadcrumbItem({ items }: CollapsedBreadcrumbItemProps) {
  return (
    <ShadBreadcrumbItem>
      <div className="flex items-center">
        <BreadcrumbSeparator />
        <Dropdown items={items}>
          <button className="rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
            ...
          </button>
        </Dropdown>
      </div>
    </ShadBreadcrumbItem>
  )
}

interface BreadcrumbsProps {
  /** Array of breadcrumb items to display */
  breadcrumbs: BreadcrumbItemType[]
}

/**
 * Responsive breadcrumb navigation component that automatically collapses items when space is limited.
 *
 * Features:
 * - Responsive layout that adjusts to container width
 * - Maintains first and last items visible
 * - Collapses middle items into a dropdown when needed
 * - Supports loading states
 * - Animated transitions
 *
 * @example
 * ```tsx
 * <Breadcrumbs
 *   breadcrumbs={[
 *     { id: "home", label: "Home", href: "/" },
 *     { id: "section", label: "Section", href: "/section" },
 *     { id: "page", label: "Current Page" }
 *   ]}
 * />
 * ```
 */
export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<BreadcrumbState>(() =>
    calculateBreadcrumbState(null, breadcrumbs)
  )

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateBreadcrumbState = () => {
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width ?? null
      setState(calculateBreadcrumbState(containerWidth, breadcrumbs))
    }

    const resizeObserver = new ResizeObserver(updateBreadcrumbState)
    resizeObserver.observe(container)

    updateBreadcrumbState()
    setMounted(true)

    return () => resizeObserver.disconnect()
  }, [breadcrumbs])

  if (!breadcrumbs.length || !state.firstItem) {
    return <Breadcrumb ref={containerRef} className="w-full" />
  }

  return (
    <Breadcrumb ref={containerRef} className="w-full">
      {mounted && (
        <BreadcrumbList>
          <BreadcrumbItem
            isOnly={state.isOnly}
            isFirst={true}
            key={`first-item-${state.firstItem.id}`}
            item={state.firstItem}
            isLast={false}
          />
          {state.collapsedItems.length > 0 && (
            <CollapsedBreadcrumbItem
              key="collapsed-items"
              items={state.collapsedItems as DropdownItemWithoutIcon[]}
            />
          )}
          {state.lastItems.map((item, index) => (
            <BreadcrumbItem
              key={item.id}
              item={item}
              isLast={index === state.lastItems.length - 1}
              isFirst={false}
            />
          ))}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  )
}
