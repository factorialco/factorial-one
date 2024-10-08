import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbItem as ShadBreadcrumbItem,
} from "@/ui/breadcrumb"

import { Link } from "@/lib/linkHandler"

import { ChevronRight } from "@/icons"

export type BreadcrumbItemType = {
  label: string
  href?: string
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
          <BreadcrumbLink asChild>
            <Link href={item.href}>{item.label}</Link>
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
