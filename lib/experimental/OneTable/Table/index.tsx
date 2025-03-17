import { withSkeleton } from "@/lib/skeleton"
import { Skeleton } from "@/ui/skeleton"
import { Table as TableRoot } from "@/ui/table"
import { useState } from "react"
import { useIntersectionObserver } from "usehooks-ts"
import { TableContext } from "../utils/TableContext"

import { TableBody } from "../TableBody"
import { TableCell } from "../TableCell"
import { TableHead } from "../TableHead"
import { TableHeader } from "../TableHeader"
import { TableRow } from "../TableRow"

export interface TableProps {
  children: React.ReactNode
}

function TableBase({ children }: TableProps) {
  const [_, setIsScrolled] = useState(false)
  const [leftRef, isAtLeft] = useIntersectionObserver({
    threshold: 1,
  })

  return (
    <TableContext.Provider value={{ isScrolled: !isAtLeft, setIsScrolled }}>
      <div className="relative w-full overflow-auto">
        <div
          ref={leftRef}
          className="absolute left-0 top-0 h-full w-px bg-transparent"
          aria-hidden="true"
        />
        <TableRoot>{children}</TableRoot>
      </div>
    </TableContext.Provider>
  )
}

interface TableSkeletonProps {
  /**
   * The number of columns to display in the skeleton loading state.
   * Each column will contain a loading placeholder.
   * @default 5
   */
  columns?: number
}

function TableSkeleton({ columns = 5 }: TableSkeletonProps) {
  return (
    <TableContext.Provider
      value={{ isScrolled: false, setIsScrolled: () => {} }}
    >
      <TableRoot
        className="cursor-progress"
        role="presentation"
        aria-hidden="true"
      >
        <TableHeader>
          <TableRow>
            {Array.from({ length: columns }).map((_, i) => (
              <TableHead key={`skeleton-header-${i}`}>
                <Skeleton className="h-4 w-[80px]" />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <TableRow key={`skeleton-row-${rowIndex}`}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                  <Skeleton className="h-4 w-[80px]" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </TableContext.Provider>
  )
}

export const OneTable = withSkeleton(TableBase, TableSkeleton)
