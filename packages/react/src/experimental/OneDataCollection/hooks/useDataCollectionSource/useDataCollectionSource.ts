/**
 * This hooks extends the useDataSource hook to provide features only releated to data collection like: Bulk actions, summary, navigation filters, etc.
 * NOTE: If a feature needs to be used outside of the data collection, extract it and move it to the useDataSource hook. DON'T USE THIS HOOK FOR ELEMENTS NOT RELATED TO DATA COLLECTION.
 */

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  useDataSource,
} from "@/hooks/datasource"
import { useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../item-actions"
import { navigationFilterTypes } from "../../navigationFilters"
import {
  NavigationFiltersDefinition,
  NavigationFiltersState,
} from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { DataCollectionSource, DataCollectionSourceDefinition } from "./types"

export const useDataCollectionSource = <
  R extends RecordType = RecordType,
  FiltersSchema extends FiltersDefinition = FiltersDefinition,
  Sortings extends SortingsDefinition = SortingsDefinition,
  Summaries extends SummariesDefinition = SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R> = ItemActionsDefinition<R>,
  NavigationFilters extends
    NavigationFiltersDefinition = NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R> = GroupingDefinition<R>,
>(
  source: DataCollectionSourceDefinition<
    R,
    FiltersSchema,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  deps: ReadonlyArray<unknown> = []
): DataCollectionSource<
  R,
  FiltersSchema,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
> => {
  const { navigationFilters, summaries } = source

  const datasource = useDataSource(source, deps)

  const [currentNavigationFilters, setCurrentNavigationFilters] = useState<
    NavigationFiltersState<NavigationFilters>
  >(() => {
    if (!navigationFilters) {
      return {} as NavigationFiltersState<NavigationFilters>
    }

    return Object.fromEntries(
      Object.entries(navigationFilters).map(([key, filter]) => {
        const filterType = navigationFilterTypes[filter.type]
        return [
          key,
          filterType.valueConverter
            ? filterType.valueConverter(filter.defaultValue, filter)
            : filter.defaultValue,
        ]
      })
    ) as NavigationFiltersState<NavigationFilters>
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedSummaries = useMemo(() => summaries, deps)

  return {
    ...datasource,
    summaries: memoizedSummaries,
    navigationFilters,
    currentNavigationFilters,
    setCurrentNavigationFilters,
  }
}
