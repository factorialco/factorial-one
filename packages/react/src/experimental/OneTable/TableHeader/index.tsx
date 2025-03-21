import { TableHeader as TableHeaderRoot } from "@/ui/table"

interface TableHeaderProps {
  children: React.ReactNode
}

export function TableHeader({ children }: TableHeaderProps) {
  return <TableHeaderRoot>{children}</TableHeaderRoot>
}
