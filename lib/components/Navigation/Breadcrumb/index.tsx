import { Icon, IconType } from "@/components/Utilities/Icon"
import { forwardRef } from "react"
import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../ui/breadcrumb"

interface BreadcrumbsType {
  icon: IconType
  routes: RouteType[]
  title: string
}

interface RouteType {
  title: string
  url: string
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbsType>(
  function Breadcrumb({ icon, routes, title }, ref) {
    return (
      <BreadcrumbComponent
        className="flex min-h-6 flex-row border-x-0 border-t-0 border-dashed border-b-f1-border px-5 py-3"
        ref={ref}
      >
        <span className="flex items-center pr-1 text-f1-foreground">
          <Icon size="md" icon={icon} />
        </span>
        <BreadcrumbList>
          {routes.map((route, index) => (
            <>
              <BreadcrumbItem key={route.title + index}>
                <BreadcrumbLink href={route.url}>{route.title}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbComponent>
    )
  }
)
