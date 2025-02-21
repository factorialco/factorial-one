import { cn } from "@/lib/utils"

import { TableRow as TableRowRoot } from "@/ui/table"

interface TableRowProps {
  children: React.ReactNode
  selected?: boolean
  className?: string
}

export function TableRow({ children, selected, className }: TableRowProps) {
  return (
    <TableRowRoot
      className={cn(
        selected && "bg-f1-background-selected hover:bg-f1-background-selected",
        className
      )}
    >
      {children}
    </TableRowRoot>
  )
}
