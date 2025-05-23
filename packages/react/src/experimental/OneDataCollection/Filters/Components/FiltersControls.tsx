import { useEffect, useState } from "react"
import { Button } from "../../../../components/Actions/Button"
import { Icon } from "../../../../components/Utilities/Icon"
import { Filter } from "../../../../icons/app"
import { useI18n } from "../../../../lib/providers/i18n"
import { cn, focusRing } from "../../../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "../../../../ui/popover"
import { getFilterType } from "../FilterTypes"
import { FilterTypeContext, FilterTypeSchema } from "../FilterTypes/types"
import type { FiltersDefinition, FiltersState } from "../types"
import { FilterContent } from "./FilterContent"
import { FilterList } from "./FilterList"

interface FiltersControlsProps<Filters extends FiltersDefinition> {
  schema: Filters
  filters: FiltersState<Filters>
  onChange: (value: FiltersState<Filters>) => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function FiltersControls<Filters extends FiltersDefinition>({
  schema,
  filters,
  onChange,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
}: FiltersControlsProps<Filters>) {
  const [selectedFilterKey, setSelectedFilterKey] = useState<
    keyof Filters | null
  >(null)
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const i18n = useI18n()

  const isOpen = controlledIsOpen ?? internalIsOpen
  const onOpenChange = controlledOnOpenChange ?? setInternalIsOpen

  const [localFiltersValue, setLocalFiltersValue] = useState(filters)
  useEffect(() => {
    setLocalFiltersValue(filters)
  }, [filters])

  const updateFilterValue = (key: keyof Filters, newValue: unknown): void => {
    setLocalFiltersValue((prev) => ({
      ...prev,
      [key]: newValue,
    }))
  }

  const handleApplyFilters = () => {
    onChange(localFiltersValue)
    onOpenChange(false)
  }

  useEffect(() => {
    const getFirstFilterNotEmpty = () => {
      return Object.entries(localFiltersValue).find(([key, value]) => {
        // TODO: Make this type better
        const filterType = getFilterType(schema[key].type) as unknown as {
          isEmpty: (value: unknown, context: FilterTypeContext) => boolean
        }

        return !filterType.isEmpty(value, {
          schema: schema[key] as unknown as FilterTypeSchema,
        })
      })
    }

    if (isOpen) {
      setSelectedFilterKey(getFirstFilterNotEmpty()?.[0] as keyof Filters)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We only want to run this when the popover is opened
  }, [isOpen])

  return (
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary text-f1-foreground hover:border-f1-border-hover",
              isOpen && "border-f1-border-hover",
              focusRing()
            )}
            title={i18n.filters.label}
          >
            <Icon icon={Filter} />
            <span className="sr-only">{i18n.filters.label}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[544px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
          align="start"
          side="bottom"
        >
          <div className="flex h-[min(448px,80vh)] flex-col">
            <div className="flex min-h-0 flex-1">
              <FilterList
                definition={schema}
                tempFilters={localFiltersValue}
                selectedFilterKey={selectedFilterKey}
                onFilterSelect={(key: keyof Filters) =>
                  setSelectedFilterKey(key)
                }
              />
              {selectedFilterKey && (
                <FilterContent
                  selectedFilterKey={selectedFilterKey}
                  definition={schema}
                  tempFilters={localFiltersValue}
                  onFilterChange={updateFilterValue}
                />
              )}
            </div>

            <div className="flex items-center justify-end gap-2 border-solid border-transparent border-t-f1-border-secondary px-3 py-2">
              <Button
                onClick={handleApplyFilters}
                label={i18n.filters.applyFilters}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
