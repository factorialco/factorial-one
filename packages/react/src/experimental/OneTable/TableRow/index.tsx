import { cn } from "../../../lib/utils"

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
        "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-[''] [&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-ring"
      )}
    >
      {children}
    </TableRowRoot>
  )
}
