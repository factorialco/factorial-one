import { cn } from "@/lib/utils"
import { TableCell as TableCellRoot } from "@/ui/table"
import { AnimatePresence, motion } from "framer-motion"
import { useTable } from "../utils/TableContext"

interface TableCellProps {
  children: React.ReactNode
  sticky?: boolean
}

export function TableCell({ children, sticky = false }: TableCellProps) {
  const { isScrolled } = useTable()

  return (
    <TableCellRoot
      className={cn({
        "sticky left-0 z-10 bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-full before:w-full before:bg-f1-background before:transition-all before:content-[''] group-hover:before:bg-f1-background-hover":
          sticky && isScrolled,
      })}
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
      {children}
    </TableCellRoot>
  )
}
