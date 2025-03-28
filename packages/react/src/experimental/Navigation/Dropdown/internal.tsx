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

export type DropdownItem = DropdownItemObject | { type: "separator" }

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
}

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const { label: _label, ...props } = item

  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    item.critical && "text-f1-foreground-critical"
  )

  return (
    <DropdownMenuItem
      asChild
      onClick={(e) => {
        e.stopPropagation()
        item.onClick?.()
      }}
      className={itemClass}
    >
      {item.href ? (
        <Link
          href={item.href}
          className={cn(
            itemClass,
            "text-f1-foreground no-underline hover:cursor-pointer"
          )}
          {...props}
        >
          <DropdownItemContent item={item} />
        </Link>
      ) : (
        <div className={itemClass}>
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
}: DropdownInternalProps) {
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        {children || (
          <Button
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
        {items.map((item, index) =>
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
