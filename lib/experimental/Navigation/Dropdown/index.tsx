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

type DropdownItem = NavigationItem & {
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
  const { label, href, onClick, icon, description, critical, ...props } = item
  const Icon = icon && Icons[icon]

  const content = (
    <>
      {Icon && (
        <Icon
          className={cn(
            "h-5 w-5 text-f1-icon",
            critical && "text-f1-icon-critical"
          )}
        />
      )}
      <div className="flex flex-col items-start">
        {label}
        {description && (
          <div
            className={cn(
              "font-normal text-f1-foreground-secondary",
              critical && "text-f1-foreground-critical"
            )}
          >
            {description}
          </div>
        )}
      </div>
    </>
  )

  const itemClass = cn(
    "flex items-start gap-1.5 w-full",
    critical && "text-f1-foreground-critical"
  )

  return (
    <DropdownMenuItem asChild onClick={onClick} className={itemClass}>
      {href ? (
        <Link
          href={href}
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
                onClick: item.onClick ? () => item.onClick?.() : undefined,
              }}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
