import { Button } from "@/components/Actions/Button"
import { ChevronDown } from "@/icons"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Input } from "@/ui/input"
import { Table } from "@tanstack/react-table"

interface TableFilteringProps<TData> {
  table: Table<TData>
  filterColumn: keyof TData
}

export function TableFiltering<TData>({
  table,
  filterColumn,
}: TableFilteringProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={`Filter ${filterColumn as string}...`}
        value={
          (table
            .getColumn(filterColumn as string)
            ?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table
            .getColumn(filterColumn as string)
            ?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button label="Columns" icon={ChevronDown} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
