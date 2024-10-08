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

export type BreadcrumbItemType = {
  label: string
  href?: string
  icon?: IconType
}

interface BreadcrumbItemProps {
  item: BreadcrumbItemType
  isLast: boolean
}

function BreadcrumbItem({ item, isLast }: BreadcrumbItemProps) {
  return (
    <ShadBreadcrumbItem>
      {!isLast ? (
        <>
          <BreadcrumbLink className={item.icon && "pl-0.5"} asChild>
            <Link
              href={item.href}
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
  tree: BreadcrumbItemType[]
}

export default function Breadcrumbs({ tree }: BreadcrumbsProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {tree.map((item, index) => (
          <BreadcrumbItem
            key={index}
            item={item}
            isLast={index === tree.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
