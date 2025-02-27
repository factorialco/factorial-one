import { Button } from "@/components/Actions/Button"
import { Reset } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
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
      <div className="flex h-full w-full flex-col gap-1 overflow-y-auto p-2">
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
                "group relative flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors",
                "hover:bg-f1-background-secondary",
                selectedFilterKey === key && "bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => onFilterSelect(key as keyof Definition)}
            >
              <div className="flex items-center justify-start gap-2.5 pr-6">
                <span className="line-clamp-1 w-fit text-left">
                  {filter.label}
                </span>
                <AnimatePresence>
                  {hasValue && (
                    <motion.div
                      className="h-2 w-2 shrink-0 rounded-full bg-f1-background-selected-bold"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                    />
                  )}
                </AnimatePresence>
              </div>
              {hasValue && (
                <div className="absolute right-1 top-1 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    label="Reset"
                    variant="ghost"
                    hideLabel
                    size="sm"
                    icon={Reset}
                    onClick={() => onFilterClear(key as keyof Definition)}
                  />
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
