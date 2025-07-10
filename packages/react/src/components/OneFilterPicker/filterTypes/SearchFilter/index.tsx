import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { SearchFilter } from "./SearchFilter"

export const searchFilter: FilterTypeDefinition<string> = {
  emptyValue: "",
  render: (props) => <SearchFilter {...props} />,
  isEmpty: (value) => (value ?? "").trim() === "",
  chipLabel: (value) => value,
}

export default searchFilter

export type SearchFilterDefinition = BaseFilterDefinition<"search">
