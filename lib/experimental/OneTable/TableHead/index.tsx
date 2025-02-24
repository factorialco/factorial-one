import { Icon } from "@/components/Utilities/Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { ArrowDown, InfoCircleLine } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { TableHead as TableHeadRoot } from "@/ui/table"
import { AnimatePresence, motion } from "framer-motion"
import { useTable } from "../utils/TableContext"

interface TableHeadProps {
  children: React.ReactNode
  sticky?: boolean
  sortState?: "none" | "asc" | "desc"
  onSortClick?: () => void
  info?: string
}

export function TableHead({
  children,
  sortState = "none",
  onSortClick,
  info,
  sticky = false,
}: TableHeadProps) {
  const { isScrolled } = useTable()

  return (
    <TableHeadRoot
      className={cn("group", {
        "sticky left-0 z-10 bg-f1-background": sticky && isScrolled,
      })}
      tabIndex={sticky ? 0 : undefined}
    >
      <AnimatePresence>
        {isScrolled && sticky && (
          <motion.div
            className="absolute inset-y-0 -right-4 h-full w-4 bg-gradient-to-r from-f1-foreground-secondary to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="flex items-center gap-1">
        {children}
        {onSortClick && (
          <motion.button
            onClick={onSortClick}
            className={cn(
              "relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all hover:bg-f1-background-hover group-hover:opacity-100",
              focusRing()
            )}
            aria-label="Sort"
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatePresence>
              <motion.div
                className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center"
                animate={{
                  rotate: sortState === "desc" ? 0 : 180,
                  x: sortState === "none" ? -3 : 0,
                  y: sortState === "none" ? -1 : 0,
                  scale: sortState === "none" ? 0.9 : 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
              >
                <Icon icon={ArrowDown} size="xs" />
              </motion.div>
              {sortState === "none" && (
                <motion.div
                  className="absolute left-1 top-1 flex h-3 w-3 items-center justify-center"
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
                  animate={{ opacity: 1, x: 3, y: 1, scale: 0.9 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.2,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                >
                  <Icon icon={ArrowDown} size="xs" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
        {info && (
          <Tooltip label={info}>
            <div className="flex h-5 w-5 items-center justify-center">
              <Icon icon={InfoCircleLine} size="xs" />
            </div>
          </Tooltip>
        )}
      </div>
    </TableHeadRoot>
  )
}
