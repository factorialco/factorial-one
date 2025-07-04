import { createContext, useContext, useEffect, useState } from "react"
import { PresetsDefinition } from "../types"
import { FiltersChipsList as FiltersChipsListComponent } from "./Components/FiltersChipsList"
import { FiltersControls as FiltersControlsComponent } from "./Components/FiltersControls"
import { FiltersPresets as FiltersPresetsComponent } from "./Components/FiltersPresets"

import type { FiltersDefinition, FiltersState } from "./types"

/**
 * Props for the Filters component.
 * @template Definition - The type defining the structure of available filters
 */
export interface FiltersRootProps<Definition extends FiltersDefinition> {
  /** The definition of available filters and their configurations */
  schema?: Definition
  /** Current state of applied filters */
  filters: FiltersState<Definition>
  /** Optional preset configurations that users can select */
  presets?: PresetsDefinition<Definition>
  /** Callback fired when filters are changed */
  onChange: (value: FiltersState<Definition>) => void
  /** The children of the component */
  children: React.ReactNode
}

type FiltersContextType<Definition extends FiltersDefinition> = {
  schema: Definition | undefined
  filters: FiltersState<Definition>
  presets?: PresetsDefinition<Definition>
  removeFilterValue: (key: keyof Definition) => void
  setFiltersValue: (filters: FiltersState<Definition>) => void
  isFiltersOpen: boolean
  setIsFiltersOpen: (isOpen: boolean) => void
}

const FiltersContext = createContext<FiltersContextType<FiltersDefinition>>({
  schema: {},
  filters: {},
  presets: [],
  removeFilterValue: () => {},
  setFiltersValue: () => {},
  isFiltersOpen: false,
  setIsFiltersOpen: () => {},
})

/**
 * A comprehensive filtering interface that manages multiple filter types.
 * Provides a popover interface for filter configuration and displays active filters as chips.
 *
 * The component supports multiple filter types through a unified interface:
 * - "in" type filters: Multi-select filters with predefined options
 * - "search" type filters: Free-text search filters
 *
 * Features:
 * - Search and multi-select filters with type safety
 * - Temporary filter state that's only applied when explicitly confirmed
 * - Animated filter chips for active filters
 * - Support for filter presets for quick selection of common filter combinations
 * - Responsive design for different viewport sizes
 *
 * The component maintains a temporary state of filters that are only applied
 * when the user explicitly clicks the "Apply Filters" button, allowing for
 * a more controlled filtering experience.
 *
 * @template Definition - The type defining the structure of available filters
 *
 * @example
 * ```tsx
 * // Example with multiple filter types and presets
 * <Filters
 *   schema={{
 *     department: {
 *       type: "in",
 *       label: "Department",
 *       options: [
 *         { value: "engineering", label: "Engineering" },
 *         { value: "marketing", label: "Marketing" },
 *         { value: "sales", label: "Sales" }
 *       ]
 *     },
 *     search: {
 *       type: "search",
 *       label: "Search"
 *     }
 *   }}
 *   filters={{
 *     department: ["engineering"]
 *   }}
 *   presets={[
 *     {
 *       label: "Engineering Only",
 *       filter: { department: ["engineering"] }
 *     },
 *     {
 *       label: "Sales & Marketing",
 *       filter: { department: ["sales", "marketing"] }
 *     }
 *   ]}
 *   onChange={setFilters}
 * />
 * ```
 *
 * @see {@link FiltersDefinition} for detailed schema structure
 * @see {@link FiltersState} for the structure of filter state
 */
const FiltersRoot = <Definition extends FiltersDefinition>({
  filters,
  schema,
  children,
  ...props
}: FiltersRootProps<Definition>) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const [localFiltersValue, setLocalFiltersValue] = useState(filters)

  useEffect(() => {
    setLocalFiltersValue(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- We deep compare the filters object
  }, [JSON.stringify(filters)])

  const removeFilterValue = (key: keyof Definition) => {
    const newFilters = { ...localFiltersValue }
    delete newFilters[key]
    setLocalFiltersValue(newFilters as FiltersState<Definition>)
    props.onChange(newFilters as FiltersState<Definition>)
  }

  const setFiltersValue = (filters: FiltersState<Definition>) => {
    setLocalFiltersValue(filters)
    props.onChange(filters)
  }

  return (
    <FiltersContext.Provider
      value={{
        ...props,
        presets: props.presets as PresetsDefinition<FiltersDefinition>,
        filters: localFiltersValue,
        schema: schema,
        removeFilterValue,
        setFiltersValue: (filters: FiltersState<FiltersDefinition>) =>
          setFiltersValue(filters as FiltersState<Definition>),
        isFiltersOpen,
        setIsFiltersOpen,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
FiltersRoot.displayName = "Filters.Root"

/**
 * Filter controls
 */
const FiltersControls = () => {
  const {
    schema,
    filters,
    isFiltersOpen,
    setIsFiltersOpen,
    setFiltersValue,
    presets,
  } = useContext(FiltersContext)

  return (
    schema && (
      <FiltersControlsComponent
        schema={schema}
        filters={filters}
        onChange={setFiltersValue}
        onOpenChange={setIsFiltersOpen}
        isOpen={isFiltersOpen}
        hideLabel={!!presets}
      />
    )
  )
}
FiltersControls.displayName = "Filters.Controls"

/**
 * Filter presets
 */
const FiltersPresets = () => {
  const { presets, filters, setFiltersValue } = useContext(FiltersContext)

  return (
    presets && (
      <FiltersPresetsComponent
        presets={presets}
        filters={filters}
        onPresetsChange={setFiltersValue}
      />
    )
  )
}
FiltersPresets.displayName = "Filters.Presets"

/**
 * Filter chips list
 */
const FiltersChipsList = () => {
  const {
    schema,
    filters,
    setIsFiltersOpen,
    removeFilterValue,
    setFiltersValue,
  } = useContext(FiltersContext)

  return (
    schema && (
      <FiltersChipsListComponent
        schema={schema}
        filters={filters}
        onFilterSelect={() => setIsFiltersOpen(true)}
        onFilterRemove={removeFilterValue}
        onClearAll={() => setFiltersValue({})}
      />
    )
  )
}
FiltersChipsList.displayName = "Filters.ChipsList"

export {
  FiltersChipsList as ChipsList,
  FiltersControls as Controls,
  FiltersPresets as Presets,
  FiltersRoot as Root,
}

export type { FiltersRootProps as RootProps }
