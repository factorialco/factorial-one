import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "@/ui/drawer"
import { useState } from "react"
import { Button } from "../../../components/Actions/Button"
import { Icon } from "../../../components/Utilities/Icon"
import { EllipsisHorizontal } from "../../../icons/app"
import { Link } from "../../../lib/linkHandler"
import { cn } from "../../../lib/utils.ts"
import { DropdownItemContent } from "./DropdownItem"
import {
  DropdownInternal,
  DropdownInternalProps,
  DropdownItem,
  DropdownItemObject,
} from "./internal"

const privateProps = ["align"] as const

type DropdownProps = Omit<DropdownInternalProps, (typeof privateProps)[number]>

export const Dropdown = (props: DropdownProps) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as DropdownInternalProps)

  return <DropdownInternal {...publicProps} />
}

export type { DropdownItem, DropdownItemObject }

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
        <div className="flex flex-col px-2 pb-3 pt-2">
          {items.map((item, index) =>
            item.type === "separator" ? (
              <div
                key={`separator-${index}`}
                className="mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
              />
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
              <button
                key={item.label}
                onClick={() => {
                  item.onClick?.()
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2 p-3"
              >
                {item.icon && (
                  <span
                    className={cn(
                      "h-5 w-5 text-f1-icon",
                      item.critical && "text-f1-icon-critical"
                    )}
                  >
                    <Icon icon={item.icon} size="md" />
                  </span>
                )}
                <span
                  className={cn(
                    "font-medium",
                    item.critical && "text-f1-foreground-critical"
                  )}
                >
                  {item.label}
                </span>
              </button>
            )
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
