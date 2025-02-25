"use client"

import { Button } from "@/core/internal/button.tsx"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import type { FiltersDefinition } from "../types.ts"

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
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.2 }}
    >
      <Button variant="outline" className="gap-1" onClick={onSelect}>
        <span>{filter.label}:</span>
        {filter.type === "in" && (
          <span>{((value ?? []) as unknown[]).length} selected</span>
        )}
        {filter.type === "search" && <span>{(value ?? "") as string}</span>}
        <X
          className="ml-1 h-3 w-3 shrink-0 opacity-60 hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label="Remove"
        />
      </Button>
    </motion.div>
  )
}
