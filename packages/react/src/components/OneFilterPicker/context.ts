import { createContext } from "react"
import { FiltersDefinition, FiltersState, PresetsDefinition } from "./types"

export type FiltersContextType<Definition extends FiltersDefinition> = {
  filters: Definition | undefined
  value: FiltersState<Definition>
  presets?: PresetsDefinition<Definition>
  removeFilterValue: (key: keyof Definition) => void
  setFiltersValue: (filters: FiltersState<Definition>) => void
  isFiltersOpen: boolean
  setIsFiltersOpen: (isOpen: boolean) => void
}

export const FiltersContext = createContext<
  FiltersContextType<FiltersDefinition>
>({
  filters: {},
  value: {},
  presets: [],
  removeFilterValue: () => {},
  setFiltersValue: () => {},
  isFiltersOpen: false,
  setIsFiltersOpen: () => {},
})
