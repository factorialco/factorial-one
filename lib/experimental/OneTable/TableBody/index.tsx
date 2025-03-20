import { TableBody as TableBodyRoot } from "@/ui/table"

interface TableBodyProps {
  children: React.ReactNode
}

export function TableBody({ children }: TableBodyProps) {
  return <TableBodyRoot>{children}</TableBodyRoot>
}
