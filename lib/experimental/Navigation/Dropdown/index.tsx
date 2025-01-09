import { Button } from "@/components/Actions/Button"
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Separator } from "@/ui/separator"
import { useState } from "react"
import {
  DropdownItem,
  DropdownItemContent,
  DropdownItemObject,
} from "./DropdownItem"

export type DropdownItem = DropdownItemObject | "separator"

type DropdownProps = {
  items: DropdownItem[]
  children?: React.ReactNode
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
