import { TableCell as TableCellRoot } from "@/ui/table"

interface TableCellProps {
  children: React.ReactNode
}

export function TableCell({ children }: TableCellProps) {
  return <TableCellRoot>{children}</TableCellRoot>
}
