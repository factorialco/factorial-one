import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { DateFilter, DateFilterOptions } from "./DateFilter"

export const dateFilter: FilterTypeDefinition<string, DateFilterOptions> = {
  emptyValue: "",
  render: (props) => <DateFilter {...props} />,
  isEmpty: (value) => !value || value === "",
  chipLabel: (value) => value,
  options: {},
}

export default dateFilter

export type DateFilterDefinition = BaseFilterDefinition<"date"> & {
  options?: {
    minDate?: Date
    maxDate?: Date
  }
}
