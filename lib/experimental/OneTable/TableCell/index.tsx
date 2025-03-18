import { useI18n } from "@/lib/i18n-provider"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import { TableCell as TableCellRoot } from "@/ui/table"
import { AnimatePresence, motion } from "framer-motion"
import { useTable } from "../utils/TableContext"

interface TableCellProps {
  children: React.ReactNode

  /**
   * The URL to navigate to when the cell is clicked
   */
  href?: string

  /**
   * Defines if the cell is the first cell in the row
   * @default false
   */
  firstCell?: boolean

  /**
   * When true, the cell will stick to the left side of the table when scrolling horizontally
   * @default false
   */
  sticky?: boolean
}

export function TableCell({
  children,
  href,
  firstCell = false,
  sticky = false,
}: TableCellProps) {
  const { isScrolled } = useTable()
  const { actions } = useI18n()

  return (
    <TableCellRoot
      className={cn(
        firstCell && "peer",
        sticky &&
          isScrolled &&
          "sticky left-0 z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] group-hover:before:bg-f1-background-hover"
      )}
    >
      <AnimatePresence>
        {isScrolled && sticky && (
          <motion.div
            key="cell-shadow-gradient"
            className="absolute inset-y-0 -right-4 h-full w-4 bg-gradient-to-r from-f1-foreground-secondary to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div
        className={cn(
          "[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]",
          "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]",
          "[&:has(a)]:relative [&:has(a)]:z-[1]"
        )}
      >
        {children}
      </div>
      {href && (
        <Link
          href={href}
          className="absolute inset-0 block"
          tabIndex={firstCell ? undefined : -1}
        >
          <span className="sr-only">{actions.view}</span>
        </Link>
      )}
    </TableCellRoot>
  )
}
