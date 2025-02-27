"use client"

import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { cn, focusRing } from "@/lib/utils"
import type { InFilterDefinition } from "../types"

/**
 * Props for the InFilter component.
 * @template T - The type of values that can be selected
 */
interface InFilterProps<T> {
  /** The filter definition containing options and configuration */
  filter: InFilterDefinition<T>
  /** Array of currently selected values */
  value: T[]
  /** Callback fired when selected values change */
  onChange: (value: T[]) => void
}

/**
 * A multi-select filter component that allows users to select multiple options from a predefined list.
 * Renders a list of buttons that can be toggled on/off to include/exclude values.
 *
 * Features:
 * - Visual indication of selected state
 * - Toggle functionality (select/deselect)
 * - Maintains order of selection
 *
 * @template T - The type of values that can be selected
 *
 * @example
 * ```tsx
 * <InFilter
 *   filter={{
 *     type: "in",
 *     label: "Status",
 *     options: [
 *       { value: "active", label: "Active" },
 *       { value: "inactive", label: "Inactive" }
 *     ]
 *   }}
 *   value={["active"]}
 *   onChange={setSelectedStatus}
 * />
 * ```
 */
export function InFilter<T>({ filter, value, onChange }: InFilterProps<T>) {
  return (
    <div className="flex w-full flex-col gap-1">
      {filter.options.map((option) => {
        const isSelected = value.includes(option.value)
        return (
          <button
            key={String(option.value)}
            className={cn(
              "flex w-full appearance-none items-center justify-between rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
              focusRing()
            )}
            onClick={() => {
              onChange(
                isSelected
                  ? value.filter((v) => v !== option.value)
                  : [...value, option.value]
              )
            }}
          >
            {option.label}
            <Checkbox checked={isSelected} presentational />
          </button>
        )
      })}
    </div>
  )
}
