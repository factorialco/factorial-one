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
}

function BreadcrumbLink({ item, className }: BreadcrumbLinkProps) {
  return (
    <ShadBreadcrumbLink
      className={cn("max-w-40", item.icon && "pl-0.5", className)}
      asChild
    >
      <Link {...item} className={cn("flex items-center gap-1.5", focusRing())}>
        {item.icon && <ModuleAvatar icon={item.icon} size="sm" />}
        <span className="truncate">{item.label}</span>
      </Link>
    </ShadBreadcrumbLink>
  )
}

function BreadcrumbSeparator() {
  return (
    <div className="flex items-center">
      <ChevronRight className="h-4 w-4 text-f1-icon-secondary" />
    </div>
  )
}

interface BreadcrumbItemProps {
  item: BreadcrumbItemType
  isLast: boolean
  showSeparator?: boolean
}

type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">

interface BreadcrumbContentProps {
  item: BreadcrumbItemType
  isLast: boolean
}

function BreadcrumbContent({ item, isLast }: BreadcrumbContentProps) {
  const isLoading = "loading" in item

  if (isLoading) {
    return (
      <div className="max-w-40">
        <BreadcrumbSkeleton />
      </div>
    )
  }

  if (isLast) {
    return <BreadcrumbPage aria-hidden="true">{item.label}</BreadcrumbPage>
  }

  return <BreadcrumbLink item={item} />
}

function BreadcrumbItem({
  item,
  isLast,
  showSeparator = true,
}: BreadcrumbItemProps) {
  return (
    <ShadBreadcrumbItem key={item.id}>
      <div className="flex items-center">
        <BreadcrumbContent item={item} isLast={isLast} />
      </div>
      {showSeparator && <BreadcrumbSeparator />}
    </ShadBreadcrumbItem>
  )
}

interface CollapsedBreadcrumbItemProps {
  items: DropdownItemWithoutIcon[]
  showSeparator?: boolean
}

function CollapsedBreadcrumbItem({
  items,
  showSeparator = true,
}: CollapsedBreadcrumbItemProps) {
  return (
    <ShadBreadcrumbItem>
      <div className="flex items-center">
        <Dropdown items={items}>
          <button className="rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
            ...
          </button>
        </Dropdown>
      </div>
      {showSeparator && <BreadcrumbSeparator />}
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

  return (
    <Breadcrumb ref={containerRef} className="w-full">
      {mounted && (
        <BreadcrumbList>
          <BreadcrumbItem
            key={`first-item-${firstItem.id}`}
            item={firstItem}
            isLast={false}
            showSeparator={!("loading" in firstItem)}
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
              showSeparator={index !== lastItems.length - 1}
            />
          ))}
        </BreadcrumbList>
      )}
    </Breadcrumb>
  )
}
