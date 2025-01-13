import { Button, ButtonProps } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import { AvatarVariant } from "@/experimental/Information/Avatars/utils"
import { Ellipsis, EllipsisHorizontal } from "@/icons/app"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Separator } from "@/ui/separator"
import { useState } from "react"
import { NavigationItem } from "../utils"
import { DropdownItemContent } from "./DropdownItem"

export type DropdownItem = DropdownItemObject | "separator"

export type DropdownItemObject = NavigationItem & {
  onClick?: () => void
  icon?: IconType
  description?: string
  critical?: boolean
  avatar?: AvatarVariant
}

type DropdownProps = {
  items: DropdownItem[]
  icon?: IconType
  size?: ButtonProps["size"]
  children?: React.ReactNode
}

const DropdownItem = ({ item }: { item: DropdownItemObject }) => {
  const { label: _label, ...props } = item

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

export function Dropdown({
  items,
  icon = Ellipsis,
  size,
  children,
}: DropdownProps) {
  return (
    <DropdownMenu>
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

export const MobileDropdown = ({ items, children }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="w-full [&>*]:w-full">
          {children || (
            <Button
              label="Other actions"
              icon={EllipsisHorizontal}
              variant="outline"
              size="lg"
            />
          )}
        </div>
      </DrawerTrigger>
      <DrawerOverlay className="bg-f1-background-overlay" />
      <DrawerContent className="bg-f1-background">
        <div className="flex flex-col gap-2 p-4">
          {items.map((item, index) =>
            item === "separator" ? (
              <Separator key={`separator-${index}`} />
            ) : item.href ? (
              <Link
                {...item}
                href={item.href}
                className={cn(
                  "flex w-full items-start gap-1.5",
                  item.critical && "text-f1-foreground-critical",
                  "text-f1-foreground no-underline hover:cursor-pointer"
                )}
              >
                <DropdownItemContent item={item} />
              </Link>
            ) : (
              <Button
                key={item.label}
                label={item.label}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
                variant={item.critical ? "critical" : "outline"}
                icon={item.icon}
                size="lg"
              />
            )
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
