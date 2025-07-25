"use client"

import { Skeleton } from "@/ui/skeleton"
import { motion } from "motion/react"
import { ReactElement, useEffect, useState } from "react"
import { Chip } from "../../../experimental/OneChip"
import { getFilterType } from "../filterTypes"
import type { FilterValue, FiltersDefinition } from "../types"

/**
 * Animated chip component that displays an active filter with its current value.
 */
export function FilterChipButton<Definition extends FiltersDefinition>({
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
  const [isLoading, setIsLoading] = useState(true)

  const filterType = getFilterType(filter.type)

  const [label, setLabel] = useState<string>("")

  useEffect(() => {
    const updateLabel = async () => {
      if (value === undefined) {
        return
      }
      setIsLoading(true)
      const labelRenderer = filterType.chipLabel as unknown as (
        value: FilterValue<Definition[keyof Definition]>,
        context: { schema: Definition[keyof Definition] }
      ) => Promise<string>
      const label = await labelRenderer(value, { schema: filter })
      setLabel(`${filter.label}: ${label}`)
      setIsLoading(false)
    }

    updateLabel()
  }, [value, filterType, filter])

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
