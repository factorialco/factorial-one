import { FilterTypeDefinition } from "../types"
import { DateFilter, DateFilterOptions } from "./DateFilter"

export const dateFilter: FilterTypeDefinition<string, DateFilterOptions> = {
  emptyValue: "",
  render: (props) => <DateFilter {...props} />,
  isEmpty: (value) => value === "",
  chipLabel: (value) => value,
  options: {},
}

export default dateFilter
