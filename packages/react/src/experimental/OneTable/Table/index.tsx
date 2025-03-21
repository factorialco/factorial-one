import { Skeleton } from "@/ui/skeleton"
import { Table as TableRoot } from "@/ui/table"
import { useEffect, useRef, useState } from "react"
import { withSkeleton } from "../../../lib/skeleton"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setIsScrolled(container.scrollLeft > 0)
    }

    handleScroll()
    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <TableContext.Provider value={{ isScrolled, setIsScrolled }}>
      <div ref={containerRef} className="relative w-full overflow-auto">
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
      value={{
        isScrolled: false,
        setIsScrolled: () => {},
      }}
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
