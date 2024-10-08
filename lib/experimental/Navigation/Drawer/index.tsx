import * as Icons from "@/icons"
import { ChevronDown } from "@/icons"
import { cn, focusRing } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Input } from "@/ui/input"
import { motion } from "framer-motion"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type IconName = keyof typeof Icons

type DrawerItem = {
  label: string
  onClick: () => void
  icon?: IconName
  description?: string
}

type DrawerProps = {
  items: DrawerItem[]
  children?: React.ReactNode
  search?: boolean
  noResultsText?: string
  triggerText?: string
}

function useSearch(items: DrawerItem[]) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [items, searchQuery]
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
    },
    []
  )

  return { searchQuery, setSearchQuery, filteredItems, handleSearchChange }
}

const DrawerMenuItem = ({ item }: { item: DrawerItem }) => {
  const Icon = item.icon && Icons[item.icon]

  return (
    <DropdownMenuItem onClick={item.onClick} className="items-start gap-1.5">
      {Icon && <Icon className="h-5 w-5 text-f1-icon" />}
      <div className="flex flex-col items-start">
        {item.label}
        {item.description && (
          <div className="text-f1-foreground-secondary">{item.description}</div>
        )}
      </div>
    </DropdownMenuItem>
  )
}

export function Drawer({
  items,
  children,
  search = false,
  noResultsText = "No results found",
  triggerText = "Open",
}: DrawerProps) {
  const [open, setOpen] = useState(false)
  const { searchQuery, setSearchQuery, filteredItems, handleSearchChange } =
    useSearch(items)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleItemClick = (onClick: () => void) => {
    onClick()
    setOpen(false)
    setSearchQuery("")
  }

  useEffect(() => {
    if (open && search) {
      inputRef.current?.focus()
    }
  }, [open, search])

  const defaultTrigger = (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between gap-1 rounded-md border border-solid border-f1-border py-2.5 pl-3 pr-2 transition-colors hover:border-f1-border-hover",
        "data-[state=open]:border-f1-border-hover",
        focusRing()
      )}
    >
      {triggerText}
      <div className="flex h-6 w-6 items-center justify-center">
        <div className="h-4 w-4 rounded-2xs bg-f1-background-secondary p-0.5">
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-3 w-3 items-center justify-center"
          >
            <ChevronDown />
          </motion.div>
        </div>
      </div>
    </button>
  )

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        {children || defaultTrigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {search && (
          <div className="px-2 pb-1 pt-2">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              ref={inputRef}
              autoFocus
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
        )}
        <div className="flex flex-col p-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <DrawerMenuItem
                key={index}
                item={{
                  ...item,
                  onClick: () => handleItemClick(item.onClick),
                }}
              />
            ))
          ) : (
            <div className="px-2 py-2 text-base text-f1-foreground-secondary">
              {noResultsText}
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
