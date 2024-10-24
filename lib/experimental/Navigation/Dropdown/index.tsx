import { Button } from "@/components/Actions/Button"
import * as Icons from "@/icons"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { Link } from "@/lib/linkHandler"
import { NavigationItem } from "../utils"

type IconName = keyof typeof Icons

export type DropdownItem = NavigationItem & {
  onClick?: () => void
  icon?: IconName
  description?: string
  critical?: boolean
}

type DropdownProps = {
  items: DropdownItem[]
  children?: React.ReactNode
}

const DropdownItem = ({ item }: { item: DropdownItem }) => {
  const { label, ...props } = item
  const Icon = item.icon && Icons[item.icon]

  const content = (
    <>
      {Icon && (
        <Icon
          className={cn(
            "h-5 w-5 text-f1-icon",
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
          className={cn(itemClass, "text-f1-foreground no-underline")}
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
            icon={Icons.Ellipsis}
            label="..."
            round
            variant="outline"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)]">
        <div className="flex flex-col p-1">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              item={{
                ...item,
                onClick: item.onClick,
              }}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
