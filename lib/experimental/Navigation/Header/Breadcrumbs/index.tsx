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

import { ChevronRight } from "@/icons"
import { Link } from "@/lib/linkHandler"
import { cn, focusRing } from "@/lib/utils"
import { NavigationItem } from "../../utils"

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
          <BreadcrumbLink className={item.icon && "pl-0.5"} asChild>
            <Link
              {...props}
              className={cn("flex items-center gap-1.5", focusRing())}
            >
              {item.icon && <ModuleAvatar icon={item.icon} size="sm" />}
              {item.label}
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
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem
            key={index}
            item={item}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
