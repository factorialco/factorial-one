import { Icon, IconType } from "@/components/Utilities/Icon"
import { ChevronRight } from "@/icons"
import { forwardRef } from "react"

interface BreadcrumbsType {
  icon: IconType
  route: string
  title: string
}

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbsType>(
  ({ icon, route, title }, ref) => {
    return (
      <div
        ref={ref}
        className="flex items-center gap-1 px-5 py-3 text-[0.81rem]/5"
      >
        <span className="flex items-center text-primary-foreground">
          <Icon size="md" icon={icon} />
        </span>
        <p className="text-foreground">{route}</p>
        <span className="flex items-center text-secondary-foreground">
          <Icon size="sm" icon={ChevronRight} />
        </span>
        <p className="text-intermediate">{title}</p>
      </div>
    )
  }
)
