import { Icon, IconType } from "@/components/Utilities/Icon"
import { AvatarVariant, renderAvatar } from "@/experimental/exports"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { NavigationItem } from "../utils"

export type DropdownItemObject = NavigationItem & {
  onClick?: () => void
  icon?: IconType
  description?: string
  critical?: boolean
  avatar?: AvatarVariant
}

const Content = ({ item }: { item: DropdownItemObject }) => (
  <>
    {item.avatar && renderAvatar(item.avatar, "xsmall")}
    {item.icon && (
      <Icon
        icon={item.icon}
        size="md"
        className={cn("text-f1-icon", item.critical && "text-f1-icon-critical")}
      />
    )}
    <div className="flex flex-col items-start">
      {item.label}
      {item.description && (
        <div
          className={cn(
            "font-normal text-f1-foreground-secondary",
            item.critical && "text-f1-foreground-critical"
          )}
        >
          {item.description}
        </div>
      )}
    </div>
  </>
)

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    item.critical && "text-f1-foreground-critical"
  )

  return (
    <DropdownMenuItem asChild onClick={item.onClick} className={itemClass}>
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            itemClass,
            "text-f1-foreground no-underline hover:cursor-pointer"
          )}
          {...item}
        >
          <Content item={item} />
        </Link>
      ) : (
        <div className={itemClass}>
          <Content item={item} />
        </div>
      )}
    </DropdownMenuItem>
  )
}

export { DropdownItem, Content as DropdownItemContent }
