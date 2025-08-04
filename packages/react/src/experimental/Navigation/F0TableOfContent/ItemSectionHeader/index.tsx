import { cn } from "@/lib/utils"
import { AnimatePresence, DragControls, motion } from "motion/react"
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
  sortable: boolean
  dragControls?: DragControls
}

export function ItemSectionHeader({
  item,
  children,
  isActive,
  collapsible,
  isExpanded,
  onToggleExpanded,
  sortable,
  dragControls,
}: TOCItemSectionHeaderProps) {
  return (
    <>
      <Item
        item={item}
        counter={item.children?.length ?? 0}
        isActive={isActive}
        collapsible={collapsible}
        isExpanded={isExpanded}
        onToggleExpanded={onToggleExpanded}
        sortable={sortable}
        dragControls={dragControls}
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
            <div
              className={cn(
                "min-w-0 border-0 border-l border-solid border-f1-border-secondary",
                collapsible ? "ml-3 pl-5" : "ml-[18px] pl-4"
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
