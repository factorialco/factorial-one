"use client"

import { Input } from "@/ui/input"

import { FilterTypeComponentProps } from "../types"
/**
 * Props for the SearchFilter component.
 */
export type SearchFilterComponentProps = FilterTypeComponentProps<string, never>

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
export function SearchFilter({
  schema,
  value,
  onChange,
}: SearchFilterComponentProps) {
  return (
    <div className="space-y-4 p-3">
      <Input
        placeholder={`Search ${schema.label.toLowerCase()}...`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
