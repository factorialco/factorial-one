import { cn, focusRing } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import type { FiltersDefinition, FiltersState } from "../types"

interface FilterListProps<Definition extends FiltersDefinition> {
  definition: Definition
  tempFilters: FiltersState<Definition>
  selectedFilterKey: keyof Definition | null
  onFilterSelect: (key: keyof Definition) => void
}

export function FilterList<Definition extends FiltersDefinition>({
  definition,
  tempFilters,
  selectedFilterKey,
  onFilterSelect,
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
                "flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors",
                "hover:bg-f1-background-secondary",
                selectedFilterKey === key && "bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => onFilterSelect(key as keyof Definition)}
            >
              <span>{filter.label}</span>
              <AnimatePresence>
                {hasValue && (
                  <motion.div
                    className="mr-0.5 h-2 w-2 rounded-full bg-f1-background-selected-bold"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                  />
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>
    </div>
  )
}
