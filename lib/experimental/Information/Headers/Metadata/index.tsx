import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/Utilities/Icon"
import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/utils"
import {
  StatusTag,
  StatusVariant,
} from "@/experimental/Information/Tags/StatusTag"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

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
}

interface MetadataProps {
  items?: MetadataItem[]
}

function renderMetadataValue(item: MetadataItem) {
  switch (item.value.type) {
    case "text":
      return <span>{item.value.content}</span>
    case "avatar":
      return (
        <div className="flex items-center gap-1">
          {renderAvatar(item.value.variant, "xsmall")}
          {item.value.text && <span>{item.value.text}</span>}
        </div>
      )
    case "status":
      return <StatusTag text={item.value.label} variant={item.value.variant} />
  }
}

function MetadataItem({ item }: { item: MetadataItem }) {
  const [isHovered, setIsHovered] = useState(false)
  const isAction = item.actions?.length

  return (
    <div className="flex h-8 items-center gap-2 text-sm">
      <div className="w-28 truncate text-sm text-f1-foreground-secondary md:w-fit">
        {item.label}
      </div>
      <div
        onMouseEnter={() => isAction && setIsHovered(true)}
        onMouseLeave={() => isAction && setIsHovered(false)}
        className="relative flex h-5 w-fit items-center"
      >
        <div className="font-medium text-f1-foreground">
          {renderMetadataValue(item)}
        </div>
        <AnimatePresence>
          {isHovered && isAction && (
            <motion.div
              className={cn(
                "absolute -left-1.5 -top-1.5 z-50 flex hidden h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                isAction ? "pr-1" : "pr-1.5"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <div className="flex h-5 items-center text-sm font-medium text-f1-foreground">
                {renderMetadataValue(item)}
              </div>
              {isAction && (
                <div className="flex gap-1">
                  {item.actions?.map((action, index) => (
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
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function Metadata({ items }: MetadataProps) {
  if (!items?.length) return null

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-0">
      {items.map((item, index) => (
        <>
          <MetadataItem key={`item-${index}`} item={item} />
          {index < items.length - 1 && (
            <div
              key={`separator-${index}`}
              className="hidden h-4 w-[1px] bg-f1-border md:block"
            />
          )}
        </>
      ))}
    </div>
  )
}

export type { MetadataItem, MetadataItemValue }
