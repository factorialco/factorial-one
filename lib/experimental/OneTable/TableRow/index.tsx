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
      <div className="pointer-events-none absolute inset-0 [.group:has(a:focus)_&]:rounded-sm [.group:has(a:focus)_&]:ring-1 [.group:has(a:focus)_&]:ring-inset [.group:has(a:focus)_&]:ring-f1-ring" />
    </TableRowRoot>
  )
}
