import { Icon } from "@/components/Utilities/Icon"
import { ChevronDown, ChevronRight } from "@/icons/app"
import { Button } from "@/ui/button"
import { AnimatePresence, motion } from "motion/react"
import { ReactNode } from "react"
import { Item } from "../Item"
import { TOCItem } from "../types"

interface TOCItemSectionHeaderProps {
  item: TOCItem
  children?: ReactNode
  isActive?: boolean
  collapsible?: boolean
  isExpanded?: boolean
  onToggleExpanded?: (id: string) => void
}

export function ItemSectionHeader({
  item,
  children,
  isActive,
  collapsible,
  isExpanded,
  onToggleExpanded,
}: TOCItemSectionHeaderProps) {
  return (
    <div className="min-w-0">
      <div className="flex min-w-0 items-start">
        {collapsible && (
          <div className="flex h-[36px] flex-shrink-0 items-center">
            <Button
              round
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation()
                onToggleExpanded?.(item.id)
              }}
              aria-label={isExpanded ? "Collapse section" : "Expand section"}
            >
              <Icon
                icon={isExpanded ? ChevronDown : ChevronRight}
                size="sm"
                className="text-f1-foreground-tertiary"
              />
            </Button>
          </div>
        )}
        <div className="min-w-0 flex-grow">
          <Item
            item={{
              ...item,
              onClick: item.onClick
                ? () => {
                    item.onClick?.(item.id)
                    if (collapsible && !isExpanded) {
                      onToggleExpanded?.(item.id)
                    }
                  }
                : undefined,
            }}
            counter={item.children?.length ?? 0}
            isActive={isActive}
          />

          <AnimatePresence>
            {children && (!collapsible || isExpanded) && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                  opacity: {
                    duration: 0.15,
                    ease: "easeInOut",
                  },
                }}
                className="overflow-hidden"
              >
                <div className="ml-4 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-1.5">
                  {children}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
