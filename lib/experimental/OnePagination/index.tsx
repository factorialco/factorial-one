import { cn } from "@/lib/utils"
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationRoot,
} from "@/ui/pagination"
import { useCallback, useMemo } from "react"

interface OnePaginationProps {
  /**
   * The total number of pages
   */
  totalPages: number

  /**
   * The current page
   * @default 1
   */
  currentPage?: number

  /**
   * The callback function to handle page change
   */

  onPageChange?: (page: number) => void
  /**
   * Whether to show the controls
   * @default true
   */
  showControls?: boolean
  /**
   * Accessible label for the pagination navigation
   * @default "Page navigation"
   */
  ariaLabel?: string
}

export function OnePagination({
  totalPages,
  currentPage = 1,
  onPageChange,
  showControls = true,
  ariaLabel = "Page navigation",
}: OnePaginationProps) {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages && onPageChange) {
        onPageChange(page)
      }
    },
    [onPageChange, totalPages]
  )

  const getPageNumbers = useMemo(() => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const addPageRange = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }

    pages.push(1) // Always show first page

    if (currentPage <= 3) {
      addPageRange(2, 4)
      pages.push("...", totalPages)
    } else if (currentPage >= totalPages - 2) {
      pages.push("...")
      addPageRange(totalPages - 3, totalPages)
    } else {
      pages.push("...")
      addPageRange(currentPage - 1, currentPage + 1)
      pages.push("...", totalPages)
    }

    return pages
  }, [currentPage, totalPages])

  return (
    <PaginationRoot>
      <PaginationContent role="navigation" aria-label={ariaLabel}>
        {showControls && (
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : 0}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
              onClick={() => handlePageChange(currentPage - 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePageChange(currentPage - 1)
                }
              }}
            />
          </PaginationItem>
        )}

        {getPageNumbers.map((page, index) => (
          <PaginationItem
            key={index}
            className={cn("hidden sm:flex", page === currentPage && "flex")}
          >
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                aria-current={page === currentPage ? "page" : undefined}
                isActive={page === currentPage}
                onClick={() => handlePageChange(page as number)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handlePageChange(page as number)
                  }
                }}
                tabIndex={0}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {showControls && (
          <PaginationItem>
            <PaginationNext
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : 0}
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }
              onClick={() => handlePageChange(currentPage + 1)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePageChange(currentPage + 1)
                }
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationRoot>
  )
}
