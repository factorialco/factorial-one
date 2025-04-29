"use client"

import { Input } from "@/ui/input"
import { FilterTypeComponentProps } from "../types"

export type DateFilterOptions = {
  minDate?: Date
  maxDate?: Date
}

export type DateFilterComponentProps = FilterTypeComponentProps<
  string,
  DateFilterOptions
>

/**
 * A date filter component that provides date picker.
 */
export function DateFilter({ value, onChange }: DateFilterComponentProps) {
  return (
    <div className="space-y-4">
      <Input
        placeholder={`Date`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="date"
      />
    </div>
  )
}
