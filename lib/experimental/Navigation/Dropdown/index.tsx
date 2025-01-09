import { Button } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/utils"
import { Ellipsis } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { NavigationItem } from "../utils"

export type DropdownItemObject = NavigationItem & {
  onClick?: () => void
  icon?: IconType
  description?: string
  critical?: boolean
  avatar?: AvatarVariant
}

export type DropdownItem = DropdownItemObject | "separator"

type DropdownProps = {
  items: DropdownItem[]
  children?: React.ReactNode
}

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const { label, ...props } = item

  const content = (
    <>
      {item.avatar && renderAvatar(item.avatar, "xsmall")}
      {item.icon && (
        <Icon
          icon={item.icon}
          size="md"
          className={cn(
            "text-f1-icon",
            item.critical && "text-f1-icon-critical"
          )}
        />
      )}
      <div className="flex flex-col items-start">
        {label}
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
          {...props}
        >
          {content}
        </Link>
      ) : (
        <div className={itemClass}>{content}</div>
      )}
    </DropdownMenuItem>
  )
}

export function Dropdown({ items, children }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children || (
          <Button
            hideLabel
            icon={Ellipsis}
            label="..."
            round
            variant="outline"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item, index) =>
          item === "separator" ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownItem key={index} item={item} />
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
