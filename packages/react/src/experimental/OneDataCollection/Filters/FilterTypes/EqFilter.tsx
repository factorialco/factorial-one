"use client"

import { useEffect, useMemo, useState } from "react"
import { useI18n } from "../../../../lib/providers/i18n"
import { cn, focusRing } from "../../../../lib/utils"
import { Checkbox } from "../../../Forms/Fields/Checkbox"
import { Spinner } from "../../../Information/Spinner"
import type { EqFilterDefinition, FilterOption } from "../types"

/**
 * Props for the EqFilter component.
 * @template T - The type of values that can be selected
 */
interface EqFilterProps<T> {
  /** The filter definition containing options and configuration */
  filter: EqFilterDefinition<T>
  /** Currently selected value (single value, not an array) */
  value: T | null
  /** Callback fired when selected value changes */
  onChange: (value: T | null) => void
}

/**
 * A single-select filter component that allows users to select only one option from a predefined list.
 * Renders a list of checkbox-like options where only one can be selected at a time.
 *
 * Features:
 * - Visual indication of selected state
 * - Single selection (selecting one option deselects any previously selected option)
 * - Supports both static and async options
 * - Shows loading state for async options
 *
 * @template T - The type of values that can be selected
 *
 * @example
 * ```tsx
 * // Static options
 * <EqFilter
 *   filter={{
 *     type: "in",
 *     label: "Status",
 *     options: [
 *       { value: "active", label: "Active" },
 *       { value: "inactive", label: "Inactive" }
 *     ]
 *   }}
 *   value={"active"}
 *   onChange={setSelectedStatus}
 * />
 *
 * // Async options
 * <EqFilter
 *   filter={{
 *     type: "in",
 *     label: "Category",
 *     options: async () => {
 *       const categories = await fetchCategories();
 *       return categories.map(cat => ({ value: cat.id, label: cat.name }));
 *     }
 *   }}
 *   value={null}
 *   onChange={setSelectedCategory}
 * />
 * ```
 */
export function EqFilter<T>({ filter, value, onChange }: EqFilterProps<T>) {
  // Determine if options are synchronous or asynchronous
  const isAsyncOptions = typeof filter.options === "function"

  // For synchronous options, use useMemo to avoid unnecessary rerenders
  const syncOptions = useMemo(() => {
    return Array.isArray(filter.options) ? filter.options : []
  }, [filter.options])

  // Only use state for async options
  const [asyncOptions, setAsyncOptions] = useState<FilterOption<T>[]>([])
  const [isLoading, setIsLoading] = useState(isAsyncOptions)
  const [error, setError] = useState<Error | null>(null)

  const i18n = useI18n()

  // Determine which options to use for rendering
  const options = isAsyncOptions ? asyncOptions : syncOptions

  useEffect(() => {
    // Skip effect for synchronous options
    if (!isAsyncOptions) return

    // Load options from function
    const loadOptions = async () => {
      try {
        if (typeof filter.options === "function") {
          setIsLoading(true)
          setError(null)
          const result = await filter.options()
          setAsyncOptions(result)
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to load options")
        )
        console.error("Error loading filter options:", err)
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [filter, filter.options, isAsyncOptions])

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-4">
        <Spinner size="small" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4">
        <p className="text-sm">
          {i18n.collections.filters.failedToLoadOptions}
        </p>
        <button
          className={cn(
            "text-f1-foreground-primary text-xs underline",
            focusRing()
          )}
          onClick={() => {
            // Re-trigger the effect to retry loading
            setAsyncOptions([])
            setError(null)
            setIsLoading(true)
          }}
        >
          {i18n.collections.filters.retry}
        </button>
      </div>
    )
  }

  if (options.length === 0) {
    return (
      <div className="flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary">
        No options available
      </div>
    )
  }

  return (
    <div
      className="flex w-full flex-col gap-1"
      role="radiogroup"
      aria-label={filter.label}
    >
      {options.map((option) => {
        const isSelected = value === option.value
        const optionId = `option-${String(option.value)}`

        return (
          <div
            key={String(option.value)}
            className={cn(
              "flex w-full cursor-pointer appearance-none items-center justify-between rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
              focusRing()
            )}
            onClick={() => {
              // If the option is already selected, deselect it
              // If not, select this option (deselecting any previous selection)
              onChange(isSelected ? null : option.value)
            }}
          >
            <span className="line-clamp-1 w-fit text-left">{option.label}</span>
            <Checkbox
              id={optionId}
              title={option.label}
              checked={isSelected}
              presentational
              hideLabel
            />
          </div>
        )
      })}
    </div>
  )
}
