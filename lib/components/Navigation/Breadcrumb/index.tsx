import { FlexBox } from "@/components/Layout/_FlexBox"
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
      <FlexBox
        ref={ref}
        className="flex items-center gap-1 px-5 py-3 text-[0.81rem]/5"
      >
        <Icon size="md" icon={icon} color={"hsl(var(--primary-foreground))"} />
        <p className="text-foreground">{route}</p>
        <Icon
          size="sm"
          icon={ChevronRight}
          color={"hsl(var(--intermediate))"}
        />
        <p className="text-intermediate">{title}</p>
      </FlexBox>
    )
  }
)
