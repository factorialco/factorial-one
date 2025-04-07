"use client"

import { Button } from "@/components/Actions/Button"
import { Input } from "@/experimental/Forms/Fields/Input"
import { Search } from "lucide-react"
import {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useI18n } from "../../../../../lib/i18n-provider"
import { cn, focusRing } from "../../../../../lib/utils"
import { Checkbox } from "../../../../Forms/Fields/Checkbox"
import { Spinner } from "../../../../Information/Spinner"
import { FilterOption, InFilterComponentProps } from "./types"

/**
 * A multi-select filter component that allows users to select multiple options from a predefined list.
 * Renders a list of checkboxes that can be toggled on/off to include/exclude values.
 *
 * Features:
 * - Visual indication of selected state
 * - Toggle functionality (select/deselect)
 * - Maintains order of selection
 * - Supports both static and async options
 * - Shows loading state for async options
 */
export function InFilter({
  schema,
  value = [],
  onChange,
}: InFilterComponentProps) {
  // Determine if options are synchronous or asynchronous
  const isAsyncOptions = typeof schema.options === "function"

  type ListItem = FilterOption<string>

  const [searchTerm, setSearchTerm] = useState("")
  const deferredSearchTerm = useDeferredValue(searchTerm)
  const [filteredOptions, setFilteredOptions] = useState<ListItem[]>([])
  const [loadedOptions, setLoadedOptions] = useState<ListItem[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Handle filtering options based on search term
  useEffect(() => {
    // Apply search filter to loaded options
    if (loadedOptions.length > 0) {
      if (deferredSearchTerm) {
        setFilteredOptions(
          loadedOptions.filter((option) =>
            option.label
              .toLowerCase()
              .includes(deferredSearchTerm.toLowerCase())
          )
        )
      } else {
        setFilteredOptions(loadedOptions)
      }
    }
  }, [deferredSearchTerm, loadedOptions])

  // Load options from static array or function
  useEffect(() => {
    const loadOptions = async () => {
      try {
        setIsLoading(true)
        const ops = await (typeof schema.options === "function"
          ? schema.options()
          : schema.options)
        if (ops !== undefined) {
          setLoadedOptions(ops)
          setFilteredOptions(ops)
        } else {
          throw new Error("No options found")
        }
      } catch (error) {
        console.error("Error loading options:", error)
        setLoadedOptions([])
        setFilteredOptions([])
      } finally {
        setIsLoading(false)
      }
    }

    loadOptions()
  }, [schema])

  // For synchronous options, use useMemo to avoid unnecessary rerenders
  const syncOptions = useMemo(() => {
    return Array.isArray(schema.options) ? schema.options : []
  }, [schema.options])

  // Only use state for async options
  const [asyncOptions, setAsyncOptions] = useState<ListItem[]>([])
  const [error, setError] = useState<Error | null>(null)

  const i18n = useI18n()

  // Determine which options to use for rendering
  const options = isAsyncOptions ? asyncOptions : syncOptions

  // Determine if we should show the search input
  // Show search when we have loaded options (regardless of whether they came from static or async source)
  const showSearch = options.length > 0 && !isLoading

  // Select all options
  const handleSelectAll = () => {
    const allValues = filteredOptions.map((option) => option.value)
    const currentValues = value ?? []
    const newValues = [...currentValues]

    allValues.forEach((value) => {
      if (!newValues.includes(value)) {
        newValues.push(value)
      }
    })

    onChange(newValues)
  }

  // Clear the filter
  const handleClear = () => {
    onChange([])
  }

  useEffect(() => {
    // Skip effect for synchronous options
    if (!isAsyncOptions) return

    // Load options from function
    const loadOptions = async () => {
      try {
        if (typeof schema.options === "function") {
          setIsLoading(true)
          setError(null)
          const result = await schema.options()
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
  }, [schema, isAsyncOptions])

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
    <>
      {showSearch && (
        <div className="flex gap-3">
          <Input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
            className="h-8 rounded"
            icon={Search}
            clearable
          />
        </div>
      )}

      <div
        className="flex w-full flex-col gap-1"
        role="group"
        aria-label={schema.label}
      >
        {filteredOptions.map((option) => {
          const isSelected = value.includes(option.value)
          const optionId = `option-${String(option.value)}`

          return (
            <div
              key={String(option.value)}
              className={cn(
                "flex w-full cursor-pointer appearance-none items-center justify-between rounded p-2 font-medium transition-colors hover:bg-f1-background-secondary",
                focusRing()
              )}
              onClick={() => {
                onChange(
                  isSelected
                    ? value.filter((v) => v !== option.value)
                    : [...value, option.value]
                )
              }}
            >
              <span className="line-clamp-1 w-fit text-left">
                {option.label}
              </span>
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

      {filteredOptions.length > 0 && (
        <div className="sticky bottom-0 left-0 right-0 flex items-center justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
          <Button
            variant="outline"
            label="Select all"
            onClick={handleSelectAll}
            disabled={
              filteredOptions.length === 0 ||
              (Array.isArray(value) && value.length === filteredOptions.length)
            }
            size="sm"
          />
          <Button
            variant="ghost"
            label="Clear"
            onClick={handleClear}
            disabled={!Array.isArray(value) || value.length === 0}
            size="sm"
          />
        </div>
      )}
    </>
  )
}
