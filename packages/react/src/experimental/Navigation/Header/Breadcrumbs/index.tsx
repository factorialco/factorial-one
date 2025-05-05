import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbItem as ShadBreadcrumbItem,
  BreadcrumbLink as ShadBreadcrumbLink,
} from "@/ui/breadcrumb"
import { Skeleton } from "@/ui/skeleton"

import { ModuleAvatar } from "../../../Information/ModuleAvatar"

import { Dropdown, type DropdownItemObject } from "../../Dropdown"

import { ChevronRight } from "../../../../icons/app"
import { Link } from "../../../../lib/linkHandler"
import { cn } from "../../../../lib/utils"
import { NavigationItem } from "../../utils"

import { motion } from "framer-motion"
import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { IconType } from "../../../../components/Utilities/Icon"
import { SelectItemObject } from "../../../Forms/Fields/Select"
import {
  BreadcrumbSelect,
  BreadcrumbSelectProps,
} from "./internal/BreadcrumbSelect"

export type BreadcrumbBaseItemType = NavigationItem & {
  id: string
  loading?: boolean
  label: string
}
export type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
  loading: true
}
export type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
  icon?: IconType
}

export type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
  type: "select"
  searchbox?: boolean
  externalSearch?: boolean
  options: BreadcrumbSelectProps["options"]
  onChange: BreadcrumbSelectProps["onChange"]
  value?: string
  defaultItem?: SelectItemObject<string>
}

export type BreadcrumbItemType =
  | BreadcrumbLoadingItemType
  | BreadcrumbNavItemType
  | BreadcrumbSelectItemType

interface BreadcrumbState {
  visibleCount: number
  headItem: BreadcrumbItemType | null
  tailItems: BreadcrumbItemType[]
  collapsedItems: BreadcrumbItemType[]
  isOnly: boolean
}

const DROPDOWN_WIDTH = 50
const RIGHT_PADDING = 8

/**
 * Calculates how many breadcrumb items can be displayed based on container width
 *
 * @param containerWidth - Width of the container in pixels
 * @param breadcrumbWidths - Widths of individual breadcrumb items
 * @returns Number of items that can be displayed
 */
function calculateVisibleCount(
  containerWidth: number,
  breadcrumbWidths: number[]
): number {
  const totalItems = breadcrumbWidths.length
  if (totalItems <= 2) return totalItems

  const firstItemWidth = breadcrumbWidths[0]
  let availableWidth = containerWidth - firstItemWidth - RIGHT_PADDING
  let lastItemAddedIndex = 0
  let count = 1 // Start with 1 for the first item

  // Calculate how many items can fit from the end
  for (let i = totalItems - 1; i > 0; i--) {
    const itemWidth = breadcrumbWidths[i]
    if (availableWidth < itemWidth) {
      break
    }
    availableWidth -= itemWidth
    lastItemAddedIndex = i
    count++
  }

  // Adjust for dropdown if we can't show all items
  if (count < totalItems - 1) {
    availableWidth -= DROPDOWN_WIDTH
    while (availableWidth < 0 && count > 1) {
      availableWidth += breadcrumbWidths[lastItemAddedIndex]
      lastItemAddedIndex++
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
  breadcrumbs: BreadcrumbItemType[],
  breadcrumbsElements: HTMLElement[]
): BreadcrumbState {
  const isSimpleLayout = !containerWidth || breadcrumbs.length <= 2
  // todo consider when we have no elements, but only breadcrumbs
  const visibleCount = isSimpleLayout
    ? breadcrumbs.length
    : calculateVisibleCount(
        containerWidth,
        breadcrumbsElements.map((el) => el.offsetWidth)
      )

  return {
    visibleCount,
    headItem: breadcrumbs[0] || null,
    tailItems: isSimpleLayout
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
const BreadcrumbSkeleton = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} className="px-1.5" {...props}>
    <Skeleton className="h-4 w-24" aria-hidden="true" />
  </div>
))
BreadcrumbSkeleton.displayName = "BreadcrumbSkeleton"

const BreadcrumbSeparator = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>((props, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className="h-4 w-4 text-f1-icon-secondary"
    {...props}
  >
    <ChevronRight />
  </span>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">

interface BreadcrumbContentProps {
  item: BreadcrumbItemType
  isLast: boolean
  isOnly?: boolean
  isFirst?: boolean
}

type ContentType = "loading" | "select" | "page" | "link"

const BreadcrumbContent = forwardRef<HTMLDivElement, BreadcrumbContentProps>(
  ({ item, isLast, isOnly = false, isFirst = false }, ref) => {
    const isLoading = "loading" in item && item.loading

    const contentType: ContentType = isLoading
      ? "loading"
      : "type" in item && item.type
        ? item.type
        : isLast || isOnly
          ? "page"
          : "link"

    const content = (
      <motion.div
        layoutId={`breadcrumb-${item.id}`}
        className={cn(
          "flex items-center gap-2 px-1.5",
          isFirst && "pl-0",
          isOnly && "text-2xl font-semibold"
        )}
        transition={{ duration: 0.15 }}
      >
        {!isLoading && "icon" in item && (isOnly || isFirst) && item.icon && (
          <ModuleAvatar icon={item.icon} size={isOnly ? "lg" : "sm"} />
        )}
        <span className="truncate">
          {!isLoading && "label" in item ? item.label : ""}
        </span>
      </motion.div>
    )

    // Different renders depending on the breadcrumbtype
    const contents: Record<ContentType, ReactNode> = {
      loading: <BreadcrumbSkeleton />,
      select: "type" in item && item.type === "select" && (
        <BreadcrumbSelect
          options={item.options}
          defaultItem={item.defaultItem}
          onChange={item.onChange}
          value={item.value}
          showSearchBox={item.searchbox}
        />
      ),
      page: (
        <BreadcrumbPage aria-hidden="true" className="p-0">
          {content}
        </BreadcrumbPage>
      ),
      link: (
        <ShadBreadcrumbLink asChild className="p-0">
          <Link
            {...("href" in item ? (item as BreadcrumbNavItemType) : {})}
            className="block"
          >
            {content}
          </Link>
        </ShadBreadcrumbLink>
      ),
    }

    return (
      <motion.div
        ref={ref}
        layout
        className={cn(isLoading && "max-w-40")}
        transition={{ duration: 0.15 }}
      >
        {contents[contentType]}
      </motion.div>
    )
  }
)
BreadcrumbContent.displayName = "BreadcrumbContent"

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbContentProps>(
  ({ item, isLast, isOnly = false, isFirst = false }, ref) => (
    <ShadBreadcrumbItem key={item.id} ref={ref}>
      {!isFirst && <BreadcrumbSeparator />}
      <BreadcrumbContent
        item={item}
        isLast={isLast}
        isOnly={isOnly}
        isFirst={isFirst}
      />
    </ShadBreadcrumbItem>
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

interface CollapsedBreadcrumbItemProps {
  items: DropdownItemWithoutIcon[]
}

/**
 * Renders the collapsed breadcrumb items as a dropdown
 */
const CollapsedBreadcrumbItem = forwardRef<
  HTMLLIElement,
  CollapsedBreadcrumbItemProps
>(({ items }, ref) => (
  <ShadBreadcrumbItem ref={ref}>
    <div className="flex items-center">
      <BreadcrumbSeparator />
      <Dropdown items={items}>
        <button className="rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
          ...
        </button>
      </Dropdown>
    </div>
  </ShadBreadcrumbItem>
))
CollapsedBreadcrumbItem.displayName = "CollapsedBreadcrumbItem"

interface BreadcrumbsProps {
  /** Array of breadcrumb items to display */
  breadcrumbs: BreadcrumbItemType[]
  children?: ReactNode
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
  const listRef = useRef<HTMLOListElement>(null)
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<BreadcrumbState>(() =>
    //todo
    calculateBreadcrumbState(null, breadcrumbs, [])
  )

  useLayoutEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list) return

    const updateBreadcrumbState = () => {
      const containerWidth = containerRef.current?.clientWidth ?? null
      const breadcrumbsElements = Array.from(list.children) as HTMLElement[]
      setState(
        calculateBreadcrumbState(
          containerWidth,
          breadcrumbs,
          breadcrumbsElements
        )
      )
    }

    const resizeObserver = new ResizeObserver(updateBreadcrumbState)
    resizeObserver.observe(container)

    updateBreadcrumbState()
    setMounted(true)

    return () => resizeObserver.disconnect()
  }, [breadcrumbs])

  if (!breadcrumbs.length || !state.headItem) {
    return <Breadcrumb ref={containerRef} className="w-full" />
  }

  return (
    <Breadcrumb
      ref={containerRef}
      className="w-full overflow-hidden"
      key={breadcrumbs.at(-1)?.id}
    >
      <ol
        className="invisible absolute -left-full"
        aria-hidden="true"
        ref={listRef}
      >
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem
            key={item.id}
            item={item}
            isLast={index === breadcrumbs.length - 1}
            isFirst={index === 0}
          />
        ))}
      </ol>
      {mounted && (
        <BreadcrumbList>
          <BreadcrumbItem
            isOnly={state.isOnly}
            isFirst={true}
            key={`first-item-${state.headItem.id}`}
            item={state.headItem}
            isLast={false}
          />
          {state.collapsedItems.length > 0 && (
            <CollapsedBreadcrumbItem
              key="collapsed-items"
              items={state.collapsedItems as DropdownItemWithoutIcon[]}
            />
          )}
          {state.tailItems.map((item, index) => (
            <BreadcrumbItem
              key={item.id}
              item={item}
              isLast={index === state.tailItems.length - 1}
              isFirst={false}
            />
          ))}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  )
}
