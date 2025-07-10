import type { BaseFilterDefinition } from ".."
import { FilterTypeDefinition } from "../types"
import { InFilter } from "./InFilter"
import { InFilterOptions } from "./types"
import { getCacheKey, loadOptions } from "./useLoadOptions"

export const inFilter: FilterTypeDefinition<
  string[],
  InFilterOptions<string>
> = {
  emptyValue: [],
  isEmpty: (value) => (value || []).length === 0,
  render: (props) => <InFilter {...props} />,
  chipLabel: async (value, { schema }) => {
    const cacheKey = getCacheKey(schema)
    const options = await loadOptions(
      cacheKey,
      schema.options.options,
      schema.options.cache
    )

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

export type InFilterDefinition<T = unknown> = BaseFilterDefinition<"in"> & {
  options: InFilterOptions<T>
}
