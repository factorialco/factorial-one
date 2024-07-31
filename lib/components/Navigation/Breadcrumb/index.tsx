import { FlexBox } from "@/components/Layout/_FlexBox"
import { Icon, IconType } from "@/components/Utilities/Icon"
import { ChevronRight } from "@/icons"

interface BreadcrumbsType {
  icon: IconType
  route: string
  title: string
}

export const Breadcrumb: React.FC<BreadcrumbsType> = ({
  icon,
  route,
  title,
}) => {
  return (
    <FlexBox className="flex items-center gap-1 px-5 py-3 text-[0.81rem]/5">
      <Icon size="md" icon={icon} color={"hsl(var(--radical-red-1000))"} />
      <p className="text-grey-900">{route}</p>
      <Icon size="sm" icon={ChevronRight} color={"hsl(var(--grey-600))"} />
      <p className="text-grey-500">{title}</p>
    </FlexBox>
  )
}
