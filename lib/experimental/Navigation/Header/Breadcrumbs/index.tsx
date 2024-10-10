import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem as ShadBreadcrumbItem,
} from "@/ui/breadcrumb"

import {
  ModuleAvatar,
  type IconType,
} from "@/experimental/Information/ModuleAvatar"

import { Dropdown } from "@/experimental/Navigation/Dropdown"

import { ChevronRight } from "@/icons"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { NavigationItem } from "../../utils"

import { useEffect, useRef, useState } from "react"

export type BreadcrumbItemType = NavigationItem & {
  icon?: IconType
}

interface BreadcrumbItemProps {
  item: BreadcrumbItemType
  isLast: boolean
}

function BreadcrumbItem({ item, isLast }: BreadcrumbItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, ...props } = item

  return (
    <ShadBreadcrumbItem>
      {!isLast ? (
        <>
          <BreadcrumbLink
            className={cn("max-w-40", item.icon && "pl-0.5")}
            asChild
          >
            <Link
              {...props}
              className={cn("flex items-center gap-1.5", focusRing())}
            >
              {item.icon && <ModuleAvatar icon={item.icon} size="sm" />}
              <span className="truncate">{item.label}</span>
            </Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4 text-f1-icon-secondary" />
          </BreadcrumbSeparator>
        </>
      ) : (
        <BreadcrumbPage>{item.label}</BreadcrumbPage>
      )}
    </ShadBreadcrumbItem>
  )
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemType[]
}

export default function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  const [visibleCount, setVisibleCount] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateVisibleBreadcrumb = () => {
      if (!containerRef.current || breadcrumbs.length <= 2) {
        setVisibleCount(breadcrumbs.length)
        return
      }

      const containerWidth = containerRef.current.offsetWidth
      const itemWidth = 150
      const dropdownWidth = 50

      let availableWidth = containerWidth - itemWidth
      let count = 1

      for (let i = breadcrumbs.length - 1; i > 0; i--) {
        if (availableWidth < itemWidth) {
          break
        }
        availableWidth -= itemWidth
        count++
      }

      if (count < breadcrumbs.length - 1) {
        availableWidth -= dropdownWidth
        while (availableWidth < 0 && count > 1) {
          availableWidth += itemWidth
          count--
        }
      }

      setVisibleCount(count)
    }

    updateVisibleBreadcrumb()
    window.addEventListener("resize", updateVisibleBreadcrumb)

    return () => window.removeEventListener("resize", updateVisibleBreadcrumb)
  }, [breadcrumbs])

  const firstItem = breadcrumbs[0]
  const lastItems = breadcrumbs.slice(-visibleCount + 1)
  const collapsedItems = breadcrumbs.slice(1, -visibleCount + 1)

  return (
    <Breadcrumb ref={containerRef} className="w-full">
      <BreadcrumbList>
        <BreadcrumbItem item={firstItem} isLast={false} />
        {collapsedItems.length > 0 && (
          <>
            <Dropdown items={collapsedItems}>
              <div className="rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary">
                ...
              </div>
            </Dropdown>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-f1-icon-secondary" />
            </BreadcrumbSeparator>
          </>
        )}
        {lastItems.map((item, index) => (
          <BreadcrumbItem
            key={index}
            item={item}
            isLast={index === lastItems.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
