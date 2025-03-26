import { TableHead as TableHeadRoot } from "@/ui/table"
import { AnimatePresence, motion } from "framer-motion"
import { Icon } from "../../../components/Utilities/Icon"
import { ArrowDown, InfoCircleLine } from "../../../icons/app"
import { cn, focusRing } from "../../../lib/utils"
import { Tooltip } from "../../Overlays/Tooltip"
import { useTable } from "../utils/TableContext"
import { ColumnWidth, columnWidths } from "../utils/sizes"

interface TableHeadProps {
  children: React.ReactNode

  /**
   * The width of the header cell. If not provided, the width will be "auto"
   * @default "auto"
   */
  width?: ColumnWidth

  /**
   * When true, the header cell will stick in the specified position when scrolling horizontally
   * @default undefined
   */
  sticky?: { left?: number; right?: never } | { left?: never; right?: number }

  /**
   * The current sort direction of this column. "none" indicates no sorting,
   * "asc" sorts ascending (A-Z, 1-9), and "desc" sorts descending (Z-A, 9-1)
   * @default "none"
   */
  sortState?: "none" | "asc" | "desc"

  /**
   * Callback fired when the sort button is clicked.
   * Use this to handle toggling between sort states.
   */
  onSortClick?: () => void

  /**
   * Optional tooltip text. When provided, displays an info icon next to the header content
   * that shows this text in a tooltip when hovered.
   */
  info?: string

  /**
   * When true, the header cell will not be visible.
   * @default false
   */
  hidden?: boolean
}

export function TableHead({
  children,
  width = "auto",
  sortState = "none",
  onSortClick,
  info,
  sticky,
  hidden = false,
}: TableHeadProps) {
  const { isScrolled, isScrolledRight } = useTable()

  const isStickyLeft = sticky?.left !== undefined
  const isStickyRight = sticky?.right !== undefined
  const isSticky = isStickyLeft || isStickyRight
  const stickyLeft = sticky?.left ?? 0
  const stickyRight = sticky?.right ?? 0

  const content = (
    <>
      <div className="flex items-center gap-1 whitespace-nowrap">
        {children}
        {onSortClick && (
          <motion.button
            onClick={onSortClick}
            className={cn(
              "relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100",
              focusRing()
            )}
            aria-label="Sort"
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
          >
            <AnimatePresence>
              <motion.div
                key="sort-arrow"
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
                  key="sort-arrow-secondary"
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
          <div className="flex h-6 w-6 items-center justify-center text-f1-foreground-secondary">
            <Icon icon={InfoCircleLine} size="sm" />
          </div>
        )}
      </div>
    </>
  )

  const isNumber = (width: ColumnWidth): width is number =>
    typeof width === "number"

  const colWidth = isNumber(width) ? width : columnWidths[width]

  return (
    <TableHeadRoot
      className={cn(
        "group",
        isSticky && (isScrolled || isScrolledRight) && "bg-f1-background",
        isSticky && "sticky z-10",
        hidden && "after:hidden"
      )}
      tabIndex={sticky ? 0 : undefined}
      // Min and max width is needed to prevent the cell from shrinking or expanding when the table is scrolled
      style={{
        width: colWidth,
        maxWidth: colWidth,
        minWidth: colWidth,
        left: stickyLeft,
        right: stickyRight,
      }}
      role={hidden ? "presentation" : undefined}
      aria-sort={
        onSortClick
          ? sortState === "asc"
            ? "ascending"
            : sortState === "desc"
              ? "descending"
              : "none"
          : undefined
      }
    >
      <AnimatePresence>
        {((isStickyLeft && isScrolled) ||
          (isStickyRight && isScrolledRight)) && (
          <motion.div
            key="shadow-gradient"
            className={cn(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              isStickyLeft && "-right-4 bg-gradient-to-r",
              isStickyRight && "-left-4 bg-gradient-to-l"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      {!hidden &&
        (info ? (
          <Tooltip label={info}>
            <div className={cn(width !== "auto" && "overflow-hidden")}>
              {content}
            </div>
          </Tooltip>
        ) : (
          <div className={cn(width !== "auto" && "overflow-hidden")}>
            {content}
          </div>
        ))}
    </TableHeadRoot>
  )
}
