import {
  DataError,
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
  UseDataOptions,
} from "@/hooks/datasource"
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react"
import { ItemActionsDefinition } from "../../item-actions"
import { NavigationFiltersDefinition } from "../../navigationFilters/types"
import { SummariesDefinition } from "../../summary"
import { DataCollectionSource, Lane } from "../useDataCollectionSource"
import { useDataCollectionData } from "./useDataCollectionData"
import { mergeFiltersWithIntersection } from "./utils"

type LaneProviderProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  children: ReactElement
  source: Omit<
    DataCollectionSource<
      R,
      Filters,
      Sortings,
      Summaries,
      ItemActionsDefinition<R>,
      NavigationFilters,
      Grouping
    >,
    "lanes"
  >
  lane: Lane<Filters>
  onError?: (error: DataError) => void
  onHookUpdate?: (value: ReturnType<typeof useDataCollectionData>) => void
}

const LaneProvider = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  children,
  source,
  lane,
  onError,
  onHookUpdate,
}: LaneProviderProps<
  R,
  Filters,
  Sortings,
  Summaries,
  NavigationFilters,
  Grouping
>) => {
  const mergedFilters = useMemo(
    () => mergeFiltersWithIntersection(source.currentFilters, lane.filters),
    [source.currentFilters, lane.filters]
  )

  const hook = useDataCollectionData(source, {
    filters: mergedFilters,
    onError,
  })

  useEffect(() => {
    onHookUpdate?.(hook)
  }, [hook])

  useEffect(() => {
    console.log("hook", lane.id, hook.data)
  }, [hook.data])

  useEffect(() => {
    console.log("source.currentFilters", source.currentFilters)
  }, [source.currentFilters])

  return children
}

export function useDataCollectionLanesData<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActionsDefinition<R>,
    NavigationFilters,
    Grouping
  >,
  options: UseDataOptions<R, Filters> = {}
) {
  const { lanes } = source

  const hasLanes = useMemo(() => lanes && lanes.length > 0, [lanes])

  if (!hasLanes) {
    throw new Error("Lanes has not been configured on data source")
  }

  type HookUpdate = ReturnType<typeof useDataCollectionData>

  const [lanesHooks, setLanesHooks] = useState<
    Record<string | symbol, HookUpdate>
  >({})

  const handleHookUpdate = useCallback(
    (laneId: string | symbol, value: HookUpdate) => {
      setLanesHooks((prev) => ({ ...prev, [laneId]: value }))
    },
    []
  )

  // Generar componentes provider para cada columna
  const lanesProvider = useMemo(() => {
    return (lanes || []).map((lane) => (
      <LaneProvider
        key={lane.id}
        lane={lane}
        onError={options.onError}
        source={source}
        onHookUpdate={(value) => handleHookUpdate(lane.id, value)}
      ></LaneProvider>
    ))
  }, [
    // TODO check why source ref is updated always
    JSON.stringify(lanes),
    handleHookUpdate,
    JSON.stringify(source.currentFilters),
    JSON.stringify(source.currentNavigationFilters),
    JSON.stringify(source.currentSortings),
    JSON.stringify(source.currentGrouping),
    JSON.stringify(source.currentSearch),
    JSON.stringify(source.grouping),
  ])

  return {
    lanesProvider,
    lanesHooks,
  }
}
