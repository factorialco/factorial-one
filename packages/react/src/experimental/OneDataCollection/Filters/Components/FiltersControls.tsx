import { useEffect, useId, useState } from "react"
import { Button } from "../../../../components/Actions/Button"
import { Filter } from "../../../../icons/app"
import { useI18n } from "../../../../lib/providers/i18n"
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
  hideLabel?: boolean
}

export function FiltersControls<Filters extends FiltersDefinition>({
  schema,
  filters,
  onChange,
  isOpen: controlledIsOpen,
  onOpenChange: controlledOnOpenChange,
  hideLabel,
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

  const id = useId()

  return (
    <div className="flex items-center gap-2">
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            label={i18n.filters.label}
            icon={Filter}
            pressed={isOpen}
            onClick={() => onOpenChange(!isOpen)}
            hideLabel={hideLabel}
            round={hideLabel}
            aria-controls={isOpen ? id : undefined}
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-[544px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md"
          align="start"
          side="bottom"
          aria-id={id}
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

            <div className="flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2">
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
