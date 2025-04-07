import { FilterTypeDefinition } from "../types"
import { SearchFilter } from "./SearchFilter"

export const searchFilter: FilterTypeDefinition<string> = {
  render: (props) => <SearchFilter {...props} />,
  isEmpty: (value) => (value ?? "").trim() === "",
  chipLabel: (value) => value,
}

export default searchFilter
