"use client"

import { OneEllipsis } from "@/components/OneEllipsis"
import { Spinner } from "@/experimental/Information/Spinner"
import { Search } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Input } from "@/ui/input"
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { FilterTypeComponentProps } from "../types"
import { EqFilterOptionItem, EqFilterOptions } from "./types"
import { useLoadOptions } from "./useLoadOptions"

/**
 * Props for the EqFilter component.
 * @template T - The type of values that can be selected
 */
type EqFilterComponentProps<T = unknown> = FilterTypeComponentProps<
  T | null,
  EqFilterOptions<T>
>

/**
 * A single-select filter component that allows users to select one option from a predefined list.
 * Renders a list of radio-like options that can be selected to filter by a single value.
 *
 * Features:
 * - Visual indication of selected state
 * - Single selection functionality
 * - Supports both static and async options
 * - Shows loading state for async options
 * - Search functionality for large option lists
 *
 * @template T - The type of values that can be selected
 *
 * @example
 * ```tsx
 * // Static options
 * <EqFilter
 *   filter={{
 *     type: "eq",
 *     label: "Status",
 *     options: {
 *       options: [
 *         { value: "active", label: "Active" },
 *         { value: "inactive", label: "Inactive" }
 *       ]
 *     }
 *   }}
 *   value="active"
 *   onChange={setSelectedStatus}
 * />
 *
 * // Async options
 * <EqFilter
 *   filter={{
 *     type: "eq",
 *     label: "User",
 *     options: {
 *       options: async () => {
 *         const users = await fetchUsers();
 *         return users.map(user => ({ value: user.id, label: user.name }));
 *       }
 *     }
 *   }}
 *   value={null}
 *   onChange={setSelectedUser}
 * />
 * ```
 */
export function EqFilter<T extends string>({
  schema,
  value,
  onChange,
}: EqFilterComponentProps<T>) {
  const i18n = useI18n()

  const [searchTerm, setSearchTerm] = useState("")

  const { options, isLoading, error, loadOptions } = useLoadOptions(schema)

  useEffect(() => {
    setSearchTerm("")
  }, [schema])

  const filteredOptions = useMemo(() => {
    return options.filter((option: EqFilterOptionItem<T>) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [options, searchTerm])

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
            loadOptions(true)
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

  // Determine if we should show the search input
  // Show search when we have loaded options (regardless of whether they came from static or async source)
  const showSearch = options.length > 0 && !isLoading

  const handleClear = () => {
    onChange(null)
  }

  return (
    <div
      className="flex min-h-full w-full flex-col"
      role="group"
      aria-label={schema.label}
    >
      {showSearch && (
        <div className="sticky left-0 right-0 top-0 rounded-tr-xl p-2 backdrop-blur-[8px]">
          <Input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            icon={Search}
            clearable
          />
        </div>
      )}
      <div className="flex-1 overflow-y-auto px-2">
        {filteredOptions.map((option: EqFilterOptionItem<T>) => {
          const isSelected = value === option.value
          const _optionId = `option-${String(option.value)}`

          return (
            <div
              key={String(option.value)}
              className={cn(
                "flex w-full flex-1 cursor-pointer appearance-none items-center justify-between gap-1 rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
                isSelected && "bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => {
                onChange(isSelected ? null : option.value)
              }}
            >
              <span className="max-w-[250px] flex-1 whitespace-nowrap">
                <OneEllipsis>{option.label}</OneEllipsis>
              </span>
              <div
                className={cn(
                  "h-4 w-4 rounded-full border-2 transition-colors",
                  isSelected
                    ? "border-f1-foreground-primary bg-f1-foreground-primary"
                    : "border-f1-border-primary"
                )}
              >
                {isSelected && (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="bg-f1-background-primary h-1.5 w-1.5 rounded-full" />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="sticky bottom-0 left-0 right-0 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
        <button
          className={cn(
            "hover:text-f1-foreground-primary text-xs text-f1-foreground-secondary underline transition-colors",
            focusRing(),
            !value && "pointer-events-none opacity-50"
          )}
          onClick={handleClear}
          disabled={!value}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
