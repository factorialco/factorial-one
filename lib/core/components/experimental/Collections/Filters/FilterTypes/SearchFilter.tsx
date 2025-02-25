"use client"

import { Input } from "@/core/internal/input.tsx"
import type { SearchFilterDefinition } from "../types.ts"

/**
 * Props for the SearchFilter component.
 */
interface SearchFilterProps {
  /** The filter definition containing configuration like label */
  filter: SearchFilterDefinition
  /** Current search value */
  value: string
  /** Callback fired when the search value changes */
  onChange: (value: string) => void
}

/**
 * A search filter component that provides free-text search functionality.
 * Renders an input field with appropriate placeholder text based on the filter label.
 *
 * @example
 * ```tsx
 * <SearchFilter
 *   filter={{ type: "search", label: "Name" }}
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 * />
 * ```
 */
export function SearchFilter({ filter, value, onChange }: SearchFilterProps) {
  return (
    <div className="space-y-4">
      <Input
        placeholder={`Search ${filter.label.toLowerCase()}...`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
