import { InFilterOptions } from "./types"
import { InFilter } from "./InFilter"
import { FilterTypeDefinition } from "../types"

export const inFilter: FilterTypeDefinition<
  string[],
  InFilterOptions<string>
> = {
  isEmpty: (value) => (value || []).length === 0,
  render: (props) => <InFilter {...props} />,
  chipLabel: async (value, { schema }) => {
    const options = await (typeof schema.options === "function"
      ? schema.options()
      : schema.options)

    const selectedLabels = value.map((v) => {
      const option = options.find((opt) => opt.value === v)
      return option?.label ?? String(v)
    })

    const firstSelectedLabel = selectedLabels[0]
    const remainingCount = selectedLabels.length - 1
    const hasMultipleSelections = remainingCount > 0

    return hasMultipleSelections
      ? `${firstSelectedLabel} +${remainingCount}`
      : `${firstSelectedLabel}`
  },
}

export default inFilter
