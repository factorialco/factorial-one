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
        className,
        "relative [&:has(a:focus)]:after:rounded-sm [&:has(a:focus)]:after:ring-1 [&:has(a:focus)]:after:ring-inset [&:has(a:focus)]:after:ring-f1-ring"
      )}
    >
      {children}
    </TableRowRoot>
  )
}
