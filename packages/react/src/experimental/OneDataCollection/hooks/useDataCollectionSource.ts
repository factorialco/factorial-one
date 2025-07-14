/**
 * This hooks extends the useDataSource hook to provide features only releated to data collection like: Bulk actions, summary, navigation filters, etc.
 * NOTE: If a feature needs to be used outside of the data collection, extract it and move it to the useDataSource hook. DON'T USE THIS HOOK FOR ELEMENTS NOT RELATED TO DATA COLLECTION.
 */

import { useDataSource } from "@/hooks/datasource"

export const useDataCollectionSource = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataSource<
    R,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >
) => {
  const datasource = useDataSource(source)

  return {
    ...datasource,
  }
}
