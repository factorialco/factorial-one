import { Icon } from "@/components/Utilities/Icon"
import { BaseAvatar } from "@/experimental/Information/Avatars/BaseAvatar"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { BaseTag } from "@/experimental/Information/Tags/BaseTag"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import { ChevronDown, Cross, Search } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Checkbox } from "@/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"

export type EmployeeSelectorEntity = {
  id: number
  firstName: string
  lastName?: string
  avatarUrl?: string
}

const EmployeeListTag = ({
  employee,
  onRemove,
}: {
  employee: EmployeeSelectorEntity
  onRemove: (employee: EmployeeSelectorEntity) => void
}) => {
  return (
    <div className="pb-2">
      <BaseTag
        className={cn(
          "w-auto gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full"
        )}
        left={
          <BaseAvatar
            src={employee.avatarUrl}
            name={employee.firstName + " " + employee.lastName}
            size="xsmall"
            type="rounded"
          />
        }
        right={
          <Icon
            icon={Cross}
            size="sm"
            className="ml-auto cursor-pointer text-f1-icon-secondary"
            onClick={() => onRemove(employee)}
          />
        }
        text={`${employee.firstName} ${employee.lastName}`}
      />
    </div>
  )
}

const EmployeeListItem = ({
  employee,
  selected,
  onSelect,
  onRemove,
}: {
  employee: EmployeeSelectorEntity
  selected: boolean
  onSelect: (employee: EmployeeSelectorEntity) => void
  onRemove: (employee: EmployeeSelectorEntity) => void
}) => {
  return (
    <div
      className="flex flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
      style={{ width: "calc(100% - 12px)" }}
    >
      <PersonAvatar
        src={employee.avatarUrl}
        firstName={employee.firstName}
        lastName={employee.lastName ?? ""}
        size="xsmall"
      />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-1">
          <span className="truncate font-medium">{`${employee.firstName} ${employee.lastName}`}</span>
        </div>
      </div>
      <Checkbox
        checked={selected}
        onClick={() => (selected ? onRemove(employee) : onSelect(employee))}
        className="ml-auto data-[state=checked]:bg-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse"
      />
    </div>
  )
}

const EmployeeSelectorContent = ({
  employees,
  search,
  onSelect,
  onRemove,
  onClear,
  onSelectAll,
  onSearch,
  selectedEmployees,
}: {
  employees: EmployeeSelectorEntity[]
  search: string
  onSelect: (employee: EmployeeSelectorEntity) => void
  onRemove: (employee: EmployeeSelectorEntity) => void
  onClear: () => void
  onSelectAll: () => void
  onSearch: (search: string) => void
  selectedEmployees: EmployeeSelectorEntity[]
}) => {
  return (
    <div className="flex">
      <div className="flex w-96 flex-col rounded-l-xl border-0 border-r-[1px] border-solid border-f1-border-secondary">
        <div className="flex justify-between p-2">
          <div
            className={cn(
              "flex items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover"
            )}
          >
            <div className="flex items-center gap-1">
              <Icon icon={Search} size="md" />
              <input
                type="text"
                className="w-full border-none bg-transparent text-f1-foreground-secondary outline-none"
                placeholder="Search..."
                value={search}
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex-grow-1 flex h-96 flex-col justify-start gap-1 pl-3 pr-2">
          <ScrollArea className="-mr-2 h-full">
            {employees.map((employee) => (
              <EmployeeListItem
                key={employee.id}
                employee={employee}
                onSelect={onSelect}
                onRemove={onRemove}
                selected={selectedEmployees.includes(employee)}
              />
            ))}
          </ScrollArea>
        </div>
        <div
          className="rounded-bl-xl border-0 border-t-[1px] border-solid border-f1-border-secondary"
          style={{
            backgroundColor: "hsla(var(--white-70))",
          }}
        >
          <div className="flex flex-1 justify-between p-2">
            <Button variant="outline" size="sm" onClick={onSelectAll}>
              Select all ({employees.length})
            </Button>
            <Button
              variant="ghost"
              size="sm"
              disabled={selectedEmployees.length === 0}
              onClick={onClear}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <div
        className="w-56 rounded-r-xl"
        style={{
          background:
            "linear-gradient(270deg, rgba(250, 251, 252, 0) 50%, #FAFBFC 100%)",
        }}
      >
        <div className="flex h-full flex-col">
          <span className="mt-1 p-3 text-f1-foreground-secondary">
            {selectedEmployees.length} selected
          </span>
          <ScrollArea
            className="mr-1 px-3"
            style={{ height: "calc(24rem + 40px)" }}
          >
            {selectedEmployees.map((employee) => (
              <EmployeeListTag
                key={employee.id}
                employee={employee}
                onRemove={onRemove}
              />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export interface EmployeeSelectorProps {
  employees: EmployeeSelectorEntity[]
  placeholder: string
}

export const EmployeeSelector = ({
  employees,
  placeholder,
}: EmployeeSelectorProps) => {
  const [selectedEmployees, setSelectedEmployees] = useState<
    EmployeeSelectorEntity[]
  >([])
  const [filteredEmployees, setFilteredEmployees] =
    useState<EmployeeSelectorEntity[]>(employees)

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useDebounceValue("", 300)

  const onSelect = (employee: EmployeeSelectorEntity) => {
    setSelectedEmployees([...selectedEmployees, employee])
  }

  const onRemove = (employee: EmployeeSelectorEntity) => {
    setSelectedEmployees(selectedEmployees.filter((e) => e.id !== employee.id))
  }

  const onClear = () => {
    setSelectedEmployees([])
  }

  const onSelectAll = () => {
    const newSelectedEmployees = [
      ...selectedEmployees,
      ...filteredEmployees.filter(
        (employee) =>
          !selectedEmployees.some((selected) => selected.id === employee.id)
      ),
    ]
    setSelectedEmployees(newSelectedEmployees)
  }

  const onSearch = (search: string) => {
    setSearch(search)
    setDebouncedSearch(search)
  }

  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredEmployees(employees)
    } else {
      setFilteredEmployees(
        employees.filter((employee) =>
          employee.firstName
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        )
      )
    }
  }, [debouncedSearch, employees])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex justify-between rounded border border-solid border-f1-border p-2">
          <span className="my-auto pl-2 text-f1-foreground-secondary">
            {placeholder}
          </span>
          <div className="p-0.5">
            <div className="h-[16px] w-[16px]">
              <Icon
                icon={ChevronDown}
                size="sm"
                className="rounded-2xs bg-f1-background-secondary p-0.5"
              />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full rounded-xl border-[1px] border-solid border-f1-border-secondary p-0">
        <EmployeeSelectorContent
          employees={filteredEmployees}
          onSelect={onSelect}
          onRemove={onRemove}
          onClear={onClear}
          onSelectAll={onSelectAll}
          selectedEmployees={selectedEmployees}
          search={search}
          onSearch={onSearch}
        />
      </PopoverContent>
    </Popover>
  )
}
