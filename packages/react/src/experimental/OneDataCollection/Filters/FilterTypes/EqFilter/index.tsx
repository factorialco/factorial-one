import type { BaseFilterDefinition } from "../"
import { FilterTypeDefinition } from "../types"
import { EqFilter } from "./eqFilter"
import { EqFilterOptions } from "./types"
import { getCacheKey, loadOptions } from "./useLoadOptions"

export const eqFilter: FilterTypeDefinition<
  string | null,
  EqFilterOptions<string>
> = {
  emptyValue: null,
  isEmpty: (value) => value === null || value === undefined,
  render: (props) => <EqFilter {...props} />,
  chipLabel: async (value, { schema }) => {
    if (!value) return ""

    const cacheKey = getCacheKey(schema)
    const options = await loadOptions(
      cacheKey,
      schema.options.options,
      schema.options.cache
    )

    const option = options.find((opt) => opt.value === value)
    return option?.label ?? String(value)
  },
}

export default eqFilter

export type EqFilterDefinition<T = unknown> = BaseFilterDefinition<"eq"> & {
  options: EqFilterOptions<T>
}
