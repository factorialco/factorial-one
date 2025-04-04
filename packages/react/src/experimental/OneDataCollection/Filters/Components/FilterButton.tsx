"use client"

import { Skeleton } from "@/ui/skeleton"
import { motion } from "framer-motion"
import { ReactElement, useEffect, useMemo, useState } from "react"
import { Chip } from "../../../OneChip"
import type {
  FilterValue,
  FiltersDefinition,
  InFilterDefinition,
  SearchFilterDefinition,
} from "../types"

/**
 * Props for rendering InFilterButton component
 */
interface InFilterButtonProps<T = unknown> {
  filter: InFilterDefinition<T>
  value: T[] | undefined
  onSelect: () => void
  onRemove: () => void
}

/**
 * Props for rendering SearchFilterButton component
 */
interface SearchFilterButtonProps {
  filter: SearchFilterDefinition
  value: string | undefined
  onSelect: () => void
  onRemove: () => void
}

/**
 * Renders an "in" type filter button with multiple selection support
 */
function InFilterButton<T>({
  filter,
  value,
  onSelect,
  onRemove,
}: InFilterButtonProps<T>) {
  const selectedValues = useMemo(() => value ?? [], [value])
  const [label, setLabel] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getSelectedOptionLabel = async (
      selectedValue: T
    ): Promise<string> => {
      setIsLoading(true)
      const options = await (typeof filter.options === "function"
        ? filter.options()
        : filter.options)
      setIsLoading(false)
      // Check if options is an array or a function
      if (Array.isArray(options)) {
        const option = options.find((opt) => opt.value === selectedValue)
        return option?.label ?? String(selectedValue)
      } else {
        // For function-based options, we can't access them synchronously
        // Return a fallback string representation
        return String(selectedValue)
      }
    }

    const updateLabel = async () => {
      if (selectedValues.length === 0) {
        return
      }
      const firstSelectedLabel = await getSelectedOptionLabel(selectedValues[0])
      const remainingCount = selectedValues.length - 1
      const hasMultipleSelections = remainingCount > 0

      setLabel(
        hasMultipleSelections
          ? `${filter.label}: ${firstSelectedLabel} +${remainingCount}`
          : `${filter.label}: ${firstSelectedLabel}`
      )
    }

    updateLabel()
  }, [selectedValues, filter.label, filter.options, filter])

  if (selectedValues.length === 0) return null

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      {isLoading ? (
        <Skeleton className="h-5 w-[100px]" />
      ) : (
        <Chip
          variant="selected"
          label={label}
          onClose={onRemove}
          onClick={onSelect}
        />
      )}
    </motion.div>
  )
}

/**
 * Renders a "search" type filter button with text search support
 */
function SearchFilterButton({
  filter,
  value,
  onSelect,
  onRemove,
}: SearchFilterButtonProps) {
  const searchValue = value ?? ""
  const label = `${filter.label}: ${searchValue}`

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      <Chip
        variant="selected"
        label={label}
        onClose={onRemove}
        onClick={onSelect}
      />
    </motion.div>
  )
}

/**
 * Animated chip component that displays an active filter with its current value.
 * Uses discriminated unions to properly type the filter values based on filter type.
 *
 * Note: This component uses minimal type assertions that are necessary due to
 * TypeScript limitations with generics across discriminated unions. These assertions
 * are type-safe because they are guarded by the filter.type check.
 */
export function FilterButton<Definition extends FiltersDefinition>({
  filter,
  value,
  onSelect,
  onRemove,
}: {
  filter: Definition[keyof Definition]
  value: FilterValue<Definition[keyof Definition]> | undefined
  onSelect: () => void
  onRemove: () => void
}): ReactElement {
  // Type-safe rendering based on filter type using discriminated unions
  switch (filter.type) {
    case "in": {
      // When filter.type is "in", we know:
      // 1. filter is InFilterDefinition<T>
      // 2. value must be T[] | undefined (based on FilterValue type)
      // The type assertion is safe because it's guarded by the discriminated union
      if (!Array.isArray(value) && value !== undefined) {
        throw new Error(
          `Expected array value for "in" filter type, got ${typeof value}`
        )
      }
      const inFilterValue = value

      return (
        <InFilterButton
          filter={filter}
          value={inFilterValue}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      )
    }

    case "search": {
      // When filter.type is "search", we know:
      // 1. filter is SearchFilterDefinition
      // 2. value must be string | undefined (based on FilterValue type)
      // The type assertion is safe because it's guarded by the discriminated union
      const searchValue = String(value)

      return (
        <SearchFilterButton
          filter={filter}
          value={searchValue}
          onSelect={onSelect}
          onRemove={onRemove}
        />
      )
    }
  }
}
