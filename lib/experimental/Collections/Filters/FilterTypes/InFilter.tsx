"use client"

import { Button } from "@/ui/button"
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
    <div className="space-y-2">
      {filter.options.map((option) => {
        const isSelected = value.includes(option.value)
        return (
          <Button
            key={String(option.value)}
            variant={isSelected ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              onChange(
                isSelected
                  ? value.filter((v) => v !== option.value)
                  : [...value, option.value]
              )
            }}
          >
            <div className="mr-2">{isSelected ? "✓" : " "}</div>
            {option.label}
          </Button>
        )
      })}
    </div>
  )
}
