import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import {
  TableBody as TableBodyRoot,
  TableHeader as TableHeaderRoot,
  Table as TableRoot,
  TableRow as TableRowRoot,
} from "@/ui/table"

import { TableCell } from "../TableCell"
import { TableHead } from "../TableHead"
export interface TableProps {
  children: React.ReactNode
}

function TableBase({ children }: TableProps) {
  return <TableRoot className="w-full">{children}</TableRoot>
}

export function TableHeader({ children }: TableProps) {
  return <TableHeaderRoot>{children}</TableHeaderRoot>
}

export function TableBody({ children }: TableProps) {
  return <TableBodyRoot>{children}</TableBodyRoot>
}

export interface TableRowProps {
  children: React.ReactNode
  selected?: boolean
}

export function TableRow({ children, selected }: TableRowProps) {
  return (
    <TableRowRoot
      className={cn(
        selected && "bg-f1-background-selected hover:bg-f1-background-selected"
      )}
    >
      {children}
    </TableRowRoot>
  )
}

interface TableSkeletonProps {
  columns?: number
}

function TableSkeleton({ columns = 5 }: TableSkeletonProps) {
  return (
    <TableRoot
      className="cursor-progress"
      role="presentation"
      aria-hidden="true"
    >
      <TableHeaderRoot>
        <TableRowRoot>
          {Array.from({ length: columns }).map((_, i) => (
            <TableHead key={`skeleton-header-${i}`}>
              <Skeleton className="h-4 w-[80px]" />
            </TableHead>
          ))}
        </TableRowRoot>
      </TableHeaderRoot>
      <TableBodyRoot>
        {Array.from({ length: 5 }).map((_, rowIndex) => (
          <TableRowRoot
            key={`skeleton-row-${rowIndex}`}
            className="hover:bg-transparent"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                <Skeleton className="h-4 w-[80px]" />
              </TableCell>
            ))}
          </TableRowRoot>
        ))}
      </TableBodyRoot>
    </TableRoot>
  )
}

export const Table = withSkeleton(TableBase, TableSkeleton)
