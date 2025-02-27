import { cn, focusRing } from "@/lib/utils"
import { X } from "lucide-react"
import type { FiltersDefinition, FiltersState } from "../types"

interface FilterListProps<Definition extends FiltersDefinition> {
  definition: Definition
  tempFilters: FiltersState<Definition>
  selectedFilterKey: keyof Definition | null
  onFilterSelect: (key: keyof Definition) => void
  onFilterClear: (key: keyof Definition) => void
}

export function FilterList<Definition extends FiltersDefinition>({
  definition,
  tempFilters,
  selectedFilterKey,
  onFilterSelect,
  onFilterClear,
}: FilterListProps<Definition>) {
  return (
    <div className="w-[224px] shrink-0 border border-solid border-transparent border-r-f1-border-secondary">
      <div className="flex w-full flex-col gap-1 overflow-y-auto p-2">
        {Object.entries(definition).map(([key, filter]) => {
          const hasValue =
            tempFilters[key] &&
            (filter.type === "in"
              ? (tempFilters[key] as unknown[]).length > 0
              : tempFilters[key])

          return (
            <button
              key={key}
              className={cn(
                "flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors",
                "hover:bg-f1-background-secondary",
                selectedFilterKey === key && "bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => onFilterSelect(key as keyof Definition)}
            >
              <span>{filter.label}</span>
              {hasValue && (
                <X
                  className="ml-2 h-3 w-3 shrink-0 opacity-60 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    onFilterClear(key as keyof Definition)
                  }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
