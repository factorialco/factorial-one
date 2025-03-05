import { Icon } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/Information/Counter"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
import { TableCell as TableCellRoot } from "@/ui/table"
import { motion } from "framer-motion"

interface TableCellProps {
  label: string
  number?: number
  open?: boolean
  onClick?: () => void
}

export function TableGroup({
  label,
  number,
  open = false,
  onClick,
}: TableCellProps) {
  return (
    <TableCellRoot
      colSpan={100}
      className={cn(
        "bg-f1-background-tertiary py-2.5 font-semibold",
        onClick && "hover:cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-1.5">
        <motion.div
          className="h-4 w-4"
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <Icon icon={ChevronDown} className="h-4 w-4 text-f1-icon-secondary" />
        </motion.div>
        <span>{label}</span>
        {number && <Counter value={number} />}
      </div>
    </TableCellRoot>
  )
}
