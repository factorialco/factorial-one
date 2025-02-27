"use client"

import { motion } from "framer-motion"
import { Chip } from "../../../OneChip"
import type { FiltersDefinition } from "../types"

/**
 * Animated chip component that displays an active filter with its current value.
 * Supports both "in" and "search" filter types with appropriate value display.
 */
interface FilterButtonProps<Definition extends FiltersDefinition> {
  filter: Definition[keyof Definition]
  value: unknown
  onSelect: () => void
  onRemove: () => void
}

export function FilterButton<Definition extends FiltersDefinition>({
  filter,
  value,
  onSelect,
  onRemove,
}: FilterButtonProps<Definition>) {
  // Handle "in" type filters (multi-select)
  if (filter.type === "in") {
    const selectedValues = (value ?? []) as unknown[]
    if (selectedValues.length === 0) return null

    const getSelectedOptionLabel = (selectedValue: unknown): string => {
      const option = filter.options.find((opt) => opt.value === selectedValue)
      return option?.label ?? String(selectedValue)
    }

    const firstSelectedLabel = getSelectedOptionLabel(selectedValues[0])
    const remainingCount = selectedValues.length - 1
    const hasMultipleSelections = remainingCount > 0

    const label = hasMultipleSelections
      ? `${filter.label}: ${firstSelectedLabel} +${remainingCount}`
      : `${filter.label}: ${firstSelectedLabel}`

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

  // Handle "search" type filters
  const searchValue = (value ?? "") as string
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
