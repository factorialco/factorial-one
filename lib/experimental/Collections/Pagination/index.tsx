import { Button } from "@/components/Actions/Button"
import { Skeleton } from "@/ui/skeleton"

export interface PaginationInfo {
  currentPage: number
  pagesCount: number
  total: number
}

export interface PaginationProps {
  paginationInfo: PaginationInfo
  isLoading?: boolean
  onPageChange: (page: number) => void
}

export const Pagination = ({
  paginationInfo,
  isLoading,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-muted-foreground text-sm">
        {isLoading ? (
          <Skeleton className="h-4 w-[150px]" />
        ) : (
          `Results ${(paginationInfo.currentPage - 1) * 10 + 1}-${Math.min(
            paginationInfo.currentPage * 10,
            paginationInfo.total
          )} of ${paginationInfo.total}`
        )}
      </div>
      <div className="flex gap-1">
        {Array.from({ length: paginationInfo.pagesCount }).map((_, i) => {
          const pageNumber = i + 1
          return (
            <Button
              key={`page-${pageNumber}`}
              variant={
                pageNumber === paginationInfo.currentPage
                  ? "default"
                  : "outline"
              }
              onClick={() => onPageChange(pageNumber)}
              size="sm"
              label={pageNumber.toString()}
              disabled={isLoading}
            />
          )
        })}
      </div>
    </div>
  )
}
