"use client"

import { Input } from "@/ui/input"
import { FilterTypeComponentProps } from "../types"

export type SearchFilterComponentProps = FilterTypeComponentProps<string, never>

/**
 * A search filter component that provides free-text search functionality.
 * Renders an input field with appropriate placeholder text based on the filter label.
 *
 */
export function SearchFilter({
  schema,
  value,
  onChange,
}: SearchFilterComponentProps) {
  return (
    <div className="space-y-4">
      <Input
        placeholder={`Search ${schema.label.toLowerCase()}...`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
