import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Button, ButtonProps } from "../../../components/Actions/Button"
import { IconType } from "../../../components/Utilities/Icon"
import { EllipsisHorizontal } from "../../../icons/app"
import { Link } from "../../../lib/linkHandler"
import { cn } from "../../../lib/utils"
import { AvatarVariant } from "../../Information/Avatars/Avatar"
import { NavigationItem } from "../utils"
import { DropdownItemContent } from "./DropdownItem"
import { sortDropdownItems } from "./utils"

export type DropdownItemSeparator = { type: "separator" }
export type DropdownItem = DropdownItemObject | DropdownItemSeparator

export type DropdownItemObject = NavigationItem & {
  type?: "item"
  onClick?: () => void
  icon?: IconType
  description?: string
  critical?: boolean
  avatar?: AvatarVariant
}

export type DropdownInternalProps = {
  items: DropdownItem[]
  icon?: IconType
  size?: ButtonProps["size"]
  children?: React.ReactNode
  align?: "start" | "end"
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & DataAttributes

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const {
    label: _label,
    icon: _icon,
    avatar: _avatar,
    description: _description,
    href,
    critical,
    ...props
  } = item

  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    critical && "text-f1-foreground-critical"
  )

  return (
    <DropdownMenuItem asChild className={itemClass}>
      {href ? (
        <Link
          href={href}
          className={cn(
            itemClass,
            "text-f1-foreground no-underline hover:cursor-pointer"
          )}
          {...props}
        >
          <DropdownItemContent item={item} />
        </Link>
      ) : (
        <div {...props} className={itemClass}>
          <DropdownItemContent item={item} />
        </div>
      )}
    </DropdownMenuItem>
  )
}

export function DropdownInternal({
  items,
  icon = EllipsisHorizontal,
  align = "start",
  size,
  children,
  open,
  onOpenChange,
  ...rest
}: DropdownInternalProps) {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {children || (
          <Button
            {...rest}
            hideLabel
            icon={icon}
            size={size}
            label="..."
            round
            variant="outline"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {sortDropdownItems(items).map((item, index) =>
          item.type === "separator" ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownItem key={index} item={item} />
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
