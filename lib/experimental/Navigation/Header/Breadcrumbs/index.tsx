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
      <Link {...item} className={cn("flex items-center gap-1.5", focusRing())}>
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
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <ChevronRight className="h-4 w-4 text-f1-icon-secondary" />
    </motion.div>
  )
}

interface BreadcrumbItemProps {
  item: BreadcrumbItemType
  isLast: boolean
  isOnly?: boolean
  isFirst?: boolean
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
}: BreadcrumbItemProps) {
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
  breadcrumbs: BreadcrumbItemType[]
}

function calculateVisibleCount(containerWidth: number, totalItems: number) {
  if (totalItems <= 2) return totalItems

  const itemWidth = 150
  const dropdownWidth = 50

  let availableWidth = containerWidth - itemWidth
  let count = 1

  for (let i = totalItems - 1; i > 0; i--) {
    if (availableWidth < itemWidth) {
      break
    }
    availableWidth -= itemWidth
    count++
  }

  if (count < totalItems - 1) {
    availableWidth -= dropdownWidth
    while (availableWidth < 0 && count > 1) {
      availableWidth += itemWidth
      count--
    }
  }

  return Math.max(2, count)
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [visibleCount, setVisibleCount] = useState(
    breadcrumbs.length <= 2 ? breadcrumbs.length : 2
  )

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateVisibleBreadcrumb = () => {
      if (!containerRef.current || breadcrumbs.length <= 2) {
        setVisibleCount(breadcrumbs.length)
        return
      }

      const containerWidth = containerRef.current.getBoundingClientRect().width
      setVisibleCount(calculateVisibleCount(containerWidth, breadcrumbs.length))
    }

    const resizeObserver = new ResizeObserver(() => {
      updateVisibleBreadcrumb()
    })

    resizeObserver.observe(container)
    // Calculate initial width immediately after mount
    updateVisibleBreadcrumb()
    setMounted(true)

    return () => {
      resizeObserver.disconnect()
    }
  }, [breadcrumbs.length])

  if (!breadcrumbs.length) {
    return <Breadcrumb ref={containerRef} className="w-full" />
  }

  const firstItem = breadcrumbs[0]
  const lastItems = breadcrumbs.slice(
    Math.max(1, breadcrumbs.length - (visibleCount - 1))
  )
  const collapsedItems = breadcrumbs.slice(
    1,
    breadcrumbs.length - (visibleCount - 1)
  )

  const isOnly = breadcrumbs.length === 1

  console.log({ lastItems })

  return (
    <Breadcrumb ref={containerRef} className="w-full">
      {mounted && (
        <BreadcrumbList>
          <BreadcrumbItem
            isOnly={isOnly}
            isFirst={true}
            key={`first-item-${firstItem.id}`}
            item={firstItem}
            isLast={false}
          />
          {collapsedItems.length > 0 && (
            <CollapsedBreadcrumbItem
              key="collapsed-items"
              items={collapsedItems as DropdownItemWithoutIcon[]}
            />
          )}
          {lastItems.map((item, index) => (
            <BreadcrumbItem
              key={item.id}
              item={item}
              isLast={index === lastItems.length - 1}
              isFirst={false}
            />
          ))}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  )
}
