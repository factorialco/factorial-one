import dateFilter from "./DateFilter"
import inFilter from "./InFilter"
import searchFilter from "./SearchFilter"
import { FilterTypeDefinition } from "./types"

export const filterTypes = {
  in: inFilter,
  search: searchFilter,
  date: dateFilter,
} as const

// This type ensures each filter follows FilterTypeDefinition while preserving its specific type
type ValidateFilterType<T> = T extends {
  [K: string]: FilterTypeDefinition<unknown>
}
  ? T
  : never
export type FilterTypes = ValidateFilterType<typeof filterTypes>
export type FilterTypeKeys = keyof typeof filterTypes

export default filterTypes
