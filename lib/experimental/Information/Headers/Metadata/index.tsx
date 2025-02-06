import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import {
  Avatar,
  AvatarVariant,
} from "@/experimental/Information/Avatars/Avatar"
import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/StatusTag"
import { MobileDropdown } from "@/experimental/Navigation/Dropdown"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { memo, useState } from "react"

type MetadataItemValue =
  | { type: "text"; content: string }
  | { type: "avatar"; variant: AvatarVariant; text: string }
  | { type: "status"; label: string; variant: StatusVariant }

type MetadataAction = {
  icon: IconType
  label: string
  onClick: () => void
}

interface MetadataItem {
  label: string
  value: MetadataItemValue
  actions?: MetadataAction[]
  hideLabel?: boolean
}

export interface MetadataProps {
  /**
   * Everything is not a MetadataItem is ignored.
   * Undefined and boolean enable conditional items
   **/
  items: (MetadataItem | undefined | boolean)[]
}

function MetadataValue({ item }: { item: MetadataItem }) {
  switch (item.value.type) {
    case "text":
      return <span>{item.value.content}</span>
    case "avatar":
      return (
        <div className="flex items-center gap-1">
          <Avatar avatar={item.value.variant} size="xsmall" />
          {item.value.text && <span>{item.value.text}</span>}
        </div>
      )
    case "status":
      return <StatusTag text={item.value.label} variant={item.value.variant} />
  }
}

function MetadataItem({ item }: { item: MetadataItem }) {
  const [isActive, setIsActive] = useState(false)
  const isAction = item.actions?.length

  return (
    <div className="flex h-8 items-center gap-2">
      <div
        className={cn(
          "w-28 truncate text-f1-foreground-secondary md:w-fit",
          item.hideLabel && "md:hidden"
        )}
      >
        {item.label}
      </div>
      <div
        role="button"
        tabIndex={isAction ? 0 : -1}
        onMouseEnter={() => isAction && setIsActive(true)}
        onMouseLeave={() => isAction && setIsActive(false)}
        onFocus={() => isAction && setIsActive(true)}
        onBlur={() => isAction && setIsActive(false)}
        className="relative flex h-5 w-fit items-center hover:cursor-default"
      >
        <div
          className={cn(
            "hidden font-medium text-f1-foreground md:block",
            !isAction && "block"
          )}
        >
          <MetadataValue item={item} />
        </div>
        {isAction && (
          <div className="w-full md:hidden">
            <MobileDropdown
              items={
                item.actions?.map((action) => ({
                  label: action.label,
                  icon: action.icon,
                  onClick: action.onClick,
                })) ?? []
              }
            >
              <MetadataValue item={item} />
            </MobileDropdown>
          </div>
        )}
        <AnimatePresence>
          {isActive && isAction && (
            <motion.div
              className={cn(
                "absolute -left-1.5 -top-1.5 z-50 hidden h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                isAction ? "pr-1" : "pr-1.5"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex h-5 items-center font-medium text-f1-foreground">
                <MetadataValue item={item} />
              </div>
              {isAction && (
                <motion.div
                  className="flex gap-1"
                  initial={{ x: -16 }}
                  animate={{ x: 0 }}
                  exit={{ x: -16 }}
                  transition={{ duration: 0.1 }}
                >
                  {item.actions?.map((action, index) => (
                    <Tooltip label={action.label} key={`tooltip-${index}`}>
                      <Button
                        key={`action-${index}`}
                        size="sm"
                        variant="neutral"
                        round
                        label={action.label}
                        hideLabel
                        icon={action.icon}
                        onClick={action.onClick}
                      />
                    </Tooltip>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const Metadata = memo(function Metadata({ items }: MetadataProps) {
  const cleanedItems = items.filter((item) => typeof item === "object")
  return (
    <div className="flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center">
      {cleanedItems.map((item, index) => (
        <>
          <MetadataItem key={`item-${index}`} item={item} />
          {index < cleanedItems.length - 1 && (
            <div
              key={`separator-${index}`}
              className="hidden h-4 w-[1px] bg-f1-border md:block"
            />
          )}
        </>
      ))}
    </div>
  )
})

export type { MetadataAction, MetadataItem, MetadataItemValue }
