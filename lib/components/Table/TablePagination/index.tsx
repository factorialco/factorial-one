// ./Table/TablePagination/index.tsx
import { Button } from "@/components/Actions/Button"
import { ArrowLeft, ArrowRight } from "@/icons"
import { useState } from "react"
interface TablePaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const TablePagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: TablePaginationProps) => {
  const [pageNumber, setPageNumber] = useState(currentPage)

  const handlePageChange = (page: number) => {
    setPageNumber(page)
    onPageChange(page)
  }

  return (
    <div className="mt-4 flex justify-center">
      <Button
        label="First"
        hideLabel={true}
        icon={ArrowLeft}
        onClick={() => handlePageChange(1)}
      />

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400 ${
            page === pageNumber ? "bg-gray-400" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <Button
        label="Last"
        hideLabel={true}
        icon={ArrowRight}
        onClick={() => handlePageChange(totalPages)}
      />
    </div>
  )
}

export default TablePagination
