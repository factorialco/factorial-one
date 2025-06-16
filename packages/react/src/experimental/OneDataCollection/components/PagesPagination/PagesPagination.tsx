import { OnePagination } from "@/experimental/OnePagination"
import { useI18n } from "@/lib/providers/i18n"
import { PaginationInfo } from "../../types"
import { isPageBasedPagination } from "../../useData"

export const PagesPagination = ({
  paginationInfo,
  setPage,
}: {
  paginationInfo: PaginationInfo | null
  setPage: (page: number) => void
}) => {
  const t = useI18n()
  return (
    isPageBasedPagination(paginationInfo) && (
      <div className="flex w-full items-center justify-between px-6 pt-4">
        <span className="shrink-0 text-f1-foreground-secondary">
          {paginationInfo.total > 0 &&
            `${(paginationInfo.currentPage - 1) * paginationInfo.perPage + 1}-${Math.min(
              paginationInfo.currentPage * paginationInfo.perPage,
              paginationInfo.total
            )} ${t.collections.visualizations.pagination.of} ${paginationInfo.total}`}
        </span>
        <div className="flex items-center">
          <OnePagination
            totalPages={paginationInfo.pagesCount}
            currentPage={paginationInfo.currentPage}
            onPageChange={setPage}
            disabled={paginationInfo.pagesCount <= 1}
          />
        </div>
      </div>
    )
  )
}
